import React from 'react';
import ColorPalette from './Component/ColorPalette/ColorPalette';
import SeedColors from './SeedColors';
import ColorShadGenerator from './HelperColors/HelperColors'

const App = () => {
	console.log(ColorShadGenerator(SeedColors[3]))
	return (
		<div className="App">
			<ColorPalette {...SeedColors[6]} />
		</div>
	);
};
export default App;
