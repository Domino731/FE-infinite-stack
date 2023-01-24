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
import {
    LeftPanelAccordionIcon,
    LeftPanelAccordionItem,
    LeftPanelAccordionList,
    LeftPanelList,
    LeftPanelListItem
} from "./styles";
import {Typograhpy2} from "../../../../../Components/Typography";
import {APP_ROUTES, PROJECT_ROUTES} from "../../../../../Routes/const";
import {useMatch} from "react-router";
import {Link} from "react-router-dom";
import Box from "../../../../../Components/Box";
import {useToggle} from "../../../../../hooks/useToggle";

const ListItem = ({title, icon, route, items}: ListItemProps) => {
    const {flag, handleToggleFlag} = useToggle();

    const match = useMatch(`${APP_ROUTES.DASHBOARD}${route}`);


    if (items) {
        return <Box>
            <LeftPanelListItem isActive={Boolean(match)} onClick={handleToggleFlag}>
                <div>
                    {icon}
                </div>
                <Typograhpy2 type="HEADLINE_H6">{title}</Typograhpy2>
            </LeftPanelListItem>
            {flag && <LeftPanelAccordionList>
                {items.map(({name, color}, index) => <LeftPanelAccordionItem
                    key={`left-panel-accordion-list-item-${index}`}>
                    <LeftPanelAccordionIcon color={color}>{index}</LeftPanelAccordionIcon>
                    {name}
                </LeftPanelAccordionItem>)}
            </LeftPanelAccordionList>}
        </Box>
    }
    return <LeftPanelListItem isActive={Boolean(match)}>
        <Link to={`${APP_ROUTES.DASHBOARD + route}`}>
            <div>
                {icon}
            </div>
            <Typograhpy2 type="HEADLINE_H6">{title}</Typograhpy2>
        </Link>
    </LeftPanelListItem>
}


export const LeftPanelNavigation = () => {
    return <>
        <LeftPanelList>
            <ListItem route={PROJECT_ROUTES.ROADMAP} title={"Roadmap"} icon={<FaThList/>}
                      items={[
                          {name: '2023 roadmap', color: '#3a0ca3'},
                          {name: 'Refactor roadmap', color: '#f72585'},
                          {name: 'Bugs', color: '#06d6a0'}
                      ]}
            />
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