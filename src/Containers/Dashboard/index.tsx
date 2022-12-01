import LeftPanel from "./Layout/LeftPanel";
import TopPanel from "./Layout/TopPanel";
import {DashboardContent, DashboardLayout} from "./Layout/components/styles";
import {DashboardProps} from "./types";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {APP_ROUTES, PROJECT_ROUTES} from "../../Routes/const";
import {Login} from "../Auth";
import React from "react";

/** Component which holding top panel, left panel and content */
const Dashboard = ({children}: DashboardProps) => {
    // grid layout
    return <DashboardLayout>
        {/*<TopPanel/>*/}
        <LeftPanel/>
        <DashboardContent>
            <Routes>
                <Route path={PROJECT_ROUTES.ROADMAP} element={<div>ROADMAP</div>}/>
                <Route path={PROJECT_ROUTES.BACKLOG} element={<div>BACKLOG</div>}/>
                <Route path={PROJECT_ROUTES.SPRINTS} element={<div>SPRINTS</div>}/>
                <Route path={PROJECT_ROUTES.REPORTS} element={<div>REPORTS</div>}/>
                <Route path={PROJECT_ROUTES.ISSUES} element={<div>ISSUES</div>}/>
                <Route path={PROJECT_ROUTES.DOCUMENTS} element={<div>DOCUMENTS</div>}/>
                <Route path={PROJECT_ROUTES.SETTINGS} element={<div>SETTINGS</div>}/>
            </Routes>
        </DashboardContent>
    </DashboardLayout>
}

export default Dashboard;