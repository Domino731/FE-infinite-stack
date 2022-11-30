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

const ListItem = ({title, icon}: ListItemProps) => {
    return <LeftPanelListItem>
        <>
            {icon}
            <Typograhpy2 type="HEADLINE_H6" color="grey-700">{title}</Typograhpy2>
        </>
    </LeftPanelListItem>
}


export const LeftPanelNavigation = () => {
    return <>
        <LeftPanelList>
            <ListItem title={"Roadmap"} icon={<FaThList/>}/>
            <ListItem title={"Backlog"} icon={<BiMapPin/>}/>
            <ListItem title={"Sprints"} icon={<FaClipboardList/>}/>
            <ListItem title={"Reports"} icon={<AiOutlineAreaChart/>}/>
        </LeftPanelList>
        <LeftPanelList>
            <ListItem title={"Issues"} icon={<FaBug/>}/>
            <ListItem title={"Components"} icon={<AiOutlinePartition/>}/>
            <ListItem title={"Releases"} icon={<FaShip/>}/>
            <ListItem title={"Documents"} icon={<FaRegFolderOpen/>}/>
            <ListItem title={"Settings"} icon={<FiSettings/>}/>
        </LeftPanelList>
    </>
}