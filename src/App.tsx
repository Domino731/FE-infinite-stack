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
import {Provider} from 'react-redux'
import {store} from "./Redux";
import {ProtectedRoute} from "./Components/Routes";
import Introduction from "./Containers/Introduction";
import Dashboard from "./Containers/Dashboard";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path={APP_ROUTES.LOGIN} element={<Login/>}/>
                        <Route path={APP_ROUTES.REGISTER} element={<Register/>}/>
                        <Route path={APP_ROUTES.INTRODUCTION}
                               element={<Introduction/>}/>
                        <Route path={APP_ROUTES.DASHBOARD}
                               element={<ProtectedRoute element={<Dashboard/>}/>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider></Provider>
    );
}

export default App;
