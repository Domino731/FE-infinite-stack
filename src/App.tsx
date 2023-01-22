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
import Introduction from "./Containers/Introduction";
import Dashboard from "./Containers/Dashboard";
import CreateNewProject from "./Containers/CreateNewProject";
import {TEST} from "./TEST";

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
                        <Route path={`${APP_ROUTES.DASHBOARD}/*`}
                               element={<Dashboard>DASHBOARD</Dashboard>}/>
                        <Route path={APP_ROUTES.CREATE_NEW_PROJECT} element={<CreateNewProject/>}/>
                        {/*TODO before release: remove this route*/}
                        <Route path={'/TEST'} element={<TEST/>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider></Provider>
    );
}

export default App;
