import React from 'react';

export default function Header() {
	return (
		<header style={{ backgroundColor: '#634483' }}>
			<img
				style={{
					width: 150,
					height: 150
				}}
				src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
				alt="Problem?"
			/>
			<h1 style={{ color: 'white', display: 'inline', fontSize: 100 }}>Meme Generator</h1>
		</header>
	);
}
