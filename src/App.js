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
		this.state = {
			colorPalette: SeedColors
		};
	}
	handleCreatePalette = (newPalette) => {
		this.setState({ colorPalette: [ ...this.state.colorPalette, newPalette ] });
	};
	render() {
		return (
			<div className="App">
				<Switch>
					<Route
						exact
						path="/createpalette"
						render={() => <CreateNewPalette handleSave={this.handleCreatePalette} />}
					/>
					<Route
						exact
						path="/"
						render={(routingOpt) => <Home palette={this.state.colorPalette} {...routingOpt} />}
					/>
					<Route
						exact
						path="/palette/:id"
						render={({ match }) => (
							<ColorPalette
								palette={ColorShadGenerator(findPalette(this.state.colorPalette, match.params.id))}
							/>
						)}
					/>
					<Route
						exact
						path="/palette/:paletteId/:id"
						render={({ match }) => (
							<SinglePalette
								palette={ColorShadGenerator(
									findPalette(this.state.colorPalette, match.params.paletteId)
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
