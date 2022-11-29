import LeftPanel from "./Layout/LeftPanel";
import TopPanel from "./Layout/TopPanel";
import {DashboardContent, DashboardLayout} from "./Layout/components/styles";
import {DashboardProps} from "./types";

/** Component which holding top panel, left panel and content */
const Dashboard = ({children}: DashboardProps) => {
    // grid layout
    return <DashboardLayout>
        {/*<TopPanel/>*/}
        <LeftPanel/>
        <DashboardContent>
            {children}
        </DashboardContent>
    </DashboardLayout>
}

export default Dashboard;