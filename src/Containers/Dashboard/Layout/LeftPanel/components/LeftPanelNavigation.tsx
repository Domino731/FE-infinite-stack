import {ListItemProps} from "../types";
import {FaThList} from 'react-icons/fa'
import {BiMapPin} from 'react-icons/bi'
import {FaClipboardList} from 'react-icons/fa'
import {AiOutlineAreaChart} from 'react-icons/ai'
import {FaBug} from 'react-icons/fa'
import {AiOutlinePartition} from 'react-icons/ai'
import {FaShip} from 'react-icons/fa'
import {FaRegFolderOpen} from 'react-icons/fa'
import {FiSettings} from 'react-icons/fi'
import {LeftPanelList, LeftPanelListItem} from "./styles";
import {Typograhpy2} from "../../../../../Components/Typography";
import {APP_ROUTES, PROJECT_ROUTES} from "../../../../../Routes/const";
import {useMatch} from "react-router";
import {Link} from "react-router-dom";

const ListItem = ({title, icon, route}: ListItemProps) => {
    const match = useMatch(`${APP_ROUTES.DASHBOARD}${route}`);

    return <LeftPanelListItem isActive={Boolean(match)}>
        <Link to={`${APP_ROUTES.DASHBOARD + route}`}>
            {icon}
            <Typograhpy2 type="HEADLINE_H6">{title}</Typograhpy2>
        </Link>
    </LeftPanelListItem>
}


export const LeftPanelNavigation = () => {
    return <>
        <LeftPanelList>
            <ListItem route={PROJECT_ROUTES.ROADMAP} title={"Roadmap"} icon={<FaThList/>}/>
            <ListItem route={PROJECT_ROUTES.BACKLOG} title={"Backlog"} icon={<BiMapPin/>}/>
            <ListItem route={PROJECT_ROUTES.SPRINTS} title={"Sprints"} icon={<FaClipboardList/>}/>
            <ListItem route={PROJECT_ROUTES.REPORTS} title={"Reports"} icon={<AiOutlineAreaChart/>}/>
        </LeftPanelList>
        <LeftPanelList>
            <ListItem route={PROJECT_ROUTES.ISSUES} title={"Issues"} icon={<FaBug/>}/>
            <ListItem route={PROJECT_ROUTES.COMPONENTS} title={"Components"} icon={<AiOutlinePartition/>}/>
            <ListItem route={PROJECT_ROUTES.RELEASES} title={"Releases"} icon={<FaShip/>}/>
            <ListItem route={PROJECT_ROUTES.DOCUMENTS} title={"Documents"} icon={<FaRegFolderOpen/>}/>
            <ListItem route={PROJECT_ROUTES.SETTINGS} title={"Settings"} icon={<FiSettings/>}/>
        </LeftPanelList>
    </>
}