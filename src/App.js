import React from 'react';
import ColorPalette from './Component/ColorPalette/ColorPalette';
import SeedColors from './SeedColors';

const App = () => {
	return (
		<div className="App">
			<ColorPalette {...SeedColors[6]} />
		</div>
	);
};
export default App;
