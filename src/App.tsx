import React from 'react';
import './App.css';
import {ThemeProvider} from "styled-components";
import theme from "./Theme";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {HOME_PATH} from "./Routes/const";
import {Login} from "./Containers/Auth";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path={HOME_PATH} element={<Login/>}/>
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
