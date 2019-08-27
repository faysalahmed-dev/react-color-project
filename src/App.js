import React from 'react';
import {Switch,Route} from 'react-router-dom' ;

import Home from './Pages/Home/Home'
import ColorPalette from './Component/ColorPalette/ColorPalette';
import SeedColors from './SeedColors';
import ColorShadGenerator from './HelperColors/HelperColors'
import {findPalette} from './HelperColors/FindPaletteHelper'


const App = () => {
	return (
		<div className="App">
			<Switch>
				<Route exact path='/' render={() => <Home palette={SeedColors}/>}/>
				<Route exact 
					path='/palette/:id' 
					render={({match}) => 
						<ColorPalette 
							palette={ColorShadGenerator(findPalette(SeedColors,match.params.id))} 
							/>
						}/>
				<Route render={() => <h1>404 not found</h1>} />
			</Switch>
		</div>
	);
};
export default App;
