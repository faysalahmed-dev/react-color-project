import React from 'react';
import ColorPalette from './Component/ColorPalette/ColorPalette';
import SeedColors from './SeedColors';
import ColorShadGenerator from './HelperColors/HelperColors'



const App = () => {
	return (
		<div className="App">
			<ColorPalette palette={ColorShadGenerator(SeedColors[3])} />
		</div>
	);
};
export default App;
