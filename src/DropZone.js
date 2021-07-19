import React, { useState } from 'react';
import { parse } from 'papaparse';

const DropZone = () => {
	const [highlighted, setHightlighted] = useState(false);
	const [contacts, setContacts] = useState([
		{ email: 'test@testemail.com', name: 'Tester' },
	]);

	return (
		<>
			<div
				className={`dropfile ${highlighted ? 'green' : ''}`}
				onDragEnter={() => {
					setHightlighted(true);
				}}
				onDragOver={(e) => {
					e.preventDefault();
				}}
				onDrop={(e) => {
					e.preventDefault();
					setHightlighted(false);
					console.log(e.dataTransfer.files);
					Array.from(e.dataTransfer.files)
						.filter((file) => file.type === 'application/vnd.ms-excel')
						.forEach(async (file) => {
							const text = await file.text();
							console.log('text', text);
							const result = parse(text, { header: true });
							setContacts((existing) => [...existing, ...result.data]);
							console.log('result', result);
						});
				}}
				onDragLeave={() => {
					setHightlighted(false);
				}}>
				Drop File
			</div>
			<ul>
				{contacts.map((contact) => (
					<li key={contact.email}>
						<strong>
							{contact.name}:{contact.email}
						</strong>
					</li>
				))}
			</ul>
			<div
				className={`dropfile ${highlighted ? 'green' : ''}`}
				onDragEnter={() => {
					setHightlighted(true);
				}}
				onDragOver={(e) => {
					e.preventDefault();
				}}
				onDrop={(e) => {
					e.preventDefault();
					setHightlighted(false);
					const data = e.dataTransfer.getData('Text');
					console.log('data', data);
				}}
				onDragLeave={() => {
					setHightlighted(false);
				}}>
				Drop Text
			</div>
		</>
	);
};

export default DropZone;
