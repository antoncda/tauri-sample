use std::env;
struct MyState(String);

// #![cfg_attr(
//   all(not(debug_assertions), target_os = "windows"),
//   windows_subsystem = "windows"
// )]
fn main() {
  let args: Vec<String> = env::args().collect();
  tauri::Builder::default()
    .manage(MyState(args[1].to_string()))
    .invoke_handler(tauri::generate_handler![get_args])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn get_args(state: tauri::State<MyState>) -> String {
  //println!("Value: {}", state.0);
  state.0.to_string()
  }
