import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import ColorPalette from './Component/ColorPalette/ColorPalette';
import CreateNewPalette from './Pages/CreateNewPalette/CreateNewPalette';
import SeedColors from './SeedColors';
import ColorShadGenerator from './HelperColors/HelperColors';
import { findPalette } from './HelperColors/FindPaletteHelper';
import SinglePalette from './Component/SingleColorPalette/SinglePalette';

class App extends Component {
	constructor(props) {
		super(props);
		const plaette = JSON.parse(localStorage.getItem('palette'))
		this.state = {
			colorPalette: plaette || SeedColors
		};
	}
	handleCreatePalette = (newPalette) => {
		this.setState({ colorPalette: [ ...this.state.colorPalette, newPalette ] },this.saveDataLs);
	};
	deletePalette = (id) => {
		this.setState(st => ({
			colorPalette: st.colorPalette.filter(palette => palette.id !== id )
		}), this.saveDataLs)
	}
	saveDataLs = () => {
		localStorage.setItem('palette',JSON.stringify(this.state.colorPalette));
	}
	render() {
		const {colorPalette} = this.state;
		return (
			<div className="App">
				<Switch>
					<Route
						exact
						path="/createpalette"
						render={() => <CreateNewPalette handleSave={this.handleCreatePalette} 
						paletteList={colorPalette}
						/>}
					/>
					<Route
						exact
						path="/"
						render={(routingOpt) => <Home palette={colorPalette} handleDeletePalette={this.deletePalette} {...routingOpt} />}
					/>
					<Route
						exact
						path="/palette/:id"
						render={({ match }) => (
							<ColorPalette
								palette={ColorShadGenerator(findPalette(colorPalette, match.params.id))}
							/>
						)}
					/>
					<Route
						exact
						path="/palette/:paletteId/:id"
						render={({ match }) => (
							<SinglePalette
								palette={ColorShadGenerator(
									findPalette(colorPalette, match.params.paletteId)
								)}
								id={match.params.id}
							/>
						)}
					/>
					<Route render={() => <h1>404 not found</h1>} />
				</Switch>
			</div>
		);
	}
}
export default App;
