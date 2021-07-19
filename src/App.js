import React, { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { open, Command } from '@tauri-apps/api/shell';
import Titlebar from './components/Titlebar';
import DropZone from './DropZone';
import './App.css';
import { readTextFile } from '@tauri-apps/api/fs';

function App() {
	const [text, setText] = useState('');
	const handleSubmit = async () => {
		invoke('get_args').then((message) => console.log(message));
		//await open('test.txt', 'notepad');
		//const output = await open('chdir');
		//const output = await new Command('pwd').execute();
		// const output = await readTextFile('./notes.txt');
		// setText(output);
		// console.log('output', output);
	};
	return (
		<div className='App'>
			<Titlebar />
			<div className='frame'>
				<h2>Hello World</h2>
				<button onClick={handleSubmit}>Click</button>
				{/* <h3>{text}</h3> */}
			</div>
			<DropZone />
		</div>
	);
}
export default App;
