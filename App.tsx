import React from 'react';
import { NativeRouter, Routes, Route } from "react-router-native";
import { useFonts, BowlbyOneSC_400Regular } from '@expo-google-fonts/bowlby-one-sc';
import AppLoading from 'expo-app-loading';

import { HomeScreen } from './src/pages/Home/Home';
import { SessionScreen } from './src/pages/Session/Session'

const App = () => {
    let [fontsLoaded] = useFonts({
        BowlbyOneSC_400Regular,
    });

    if (!fontsLoaded) {
        <AppLoading />
    } else {
        return (
            <NativeRouter>
                <Routes>
                    <Route path="/" Component={HomeScreen} />
                    <Route path="/create" Component={SessionScreen} />
                </Routes>
            </NativeRouter>
        )
    }
}

export default App;