import React from 'react';
import { NativeRouter, Routes, Route } from "react-router-native";
import { useFonts } from 'expo-font';

import { Home } from './src/pages/Home/Home';

const App = () => {
	// const [fontsLoaded] = useFonts({

	// });
	// if (!fontsLoaded) {
	// 	return null;
	// }

	return (
		<NativeRouter>
			<Routes>
				<Route path='/' Component={Home}/>
				<Route path='/create' Component={Home}/>
			</Routes>
		</NativeRouter>
	);
};

export default App;