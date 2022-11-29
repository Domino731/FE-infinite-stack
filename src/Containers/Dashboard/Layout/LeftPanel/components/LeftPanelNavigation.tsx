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

const ListItem = ({title, icon}: ListItemProps) => {
    return <li><>{icon} {title}</>
    </li>
}


export const LeftPanelNavigation = () => {
    return <>
        <ul>
            <ListItem title={"Roadmap"} icon={<FaThList/>}/>
            <ListItem title={"Backlog"} icon={<BiMapPin/>}/>
            <ListItem title={"Sprints"} icon={<FaClipboardList/>}/>
            <ListItem title={"Reports"} icon={<AiOutlineAreaChart/>}/>
        </ul>
        <ul>
            <ListItem title={"Issues"} icon={<FaBug/>}/>
            <ListItem title={"Components"} icon={<AiOutlinePartition/>}/>
            <ListItem title={"Releases"} icon={<FaShip/>}/>
            <ListItem title={"Documents"} icon={<FaRegFolderOpen/>}/>
            <ListItem title={"Settings"} icon={<FiSettings/>}/>
        </ul>
    </>
}