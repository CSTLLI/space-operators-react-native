import React, { useEffect } from 'react';
import { NativeRouter, Routes, Route } from "react-router-native";
import { useFonts, BowlbyOneSC_400Regular } from '@expo-google-fonts/bowlby-one-sc';
import AppLoading from 'expo-app-loading';

import { HomeScreen } from './src/pages/Home/Home';
import { SessionScreen } from './src/pages/Session/Session'

import useServer from "./src/stores/Server.store";
import { initWebSocket } from "./src/lib/services/websocket";

const App = () => {
    const { wsUrl, setWs } = useServer();

    useEffect(() => {
        initWebSocket(wsUrl, setWs)
    }, [wsUrl])

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
                    <Route path="/join" Component={SessionScreen} />
                </Routes>
            </NativeRouter>
        )
    }
}

export default App;