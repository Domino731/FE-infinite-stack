import React from 'react';
import './App.css';
import {ThemeProvider} from "styled-components";
import theme from "./Theme";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {APP_ROUTES} from "./Routes/const";
import {Login, Register} from "./Containers/Auth";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path={APP_ROUTES.HOME} element={<Login/>}/>
                    <Route path={APP_ROUTES.REGISTER} element={<Register/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
