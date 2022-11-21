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
import {Typograhpy2} from "./Components/Typography";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path={APP_ROUTES.LOGIN} element={<Login/>}/>
                        <Route path={APP_ROUTES.REGISTER} element={<Register/>}/>
                        <Route path={APP_ROUTES.INTRODUCTION}
                               element={<ProtectedRoute element={<div>INTRODUCTION</div>}/>}/>
                        <Route path={APP_ROUTES.DASHBOARD}
                               element={<ProtectedRoute element={<div>DASHBOARD</div>}/>}/>
                        {/*<Route path="/test" element={>}/>*/}
                    </Routes>
                </BrowserRouter>
            </ThemeProvider></Provider>
    );
}

export default App;
