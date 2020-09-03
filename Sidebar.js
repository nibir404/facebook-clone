import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fbd.linkedin.com%2Fpub%2Fdir%2FNibir%2F%2B%2Fbd-0-Bangladesh&psig=AOvVaw2JSudCkCUL4jXOORWhbuFn&ust=1598989587669000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMio0O6axusCFQAAAAAdAAAAABAD' title='Nibir Imtiaz'/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 info centre"/>
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
            <SidebarRow Icon={PeopleIcon} title='Friends'/>
            <SidebarRow Icon={ChatIcon} title='Messenger'/>
            <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
            <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
            <SidebarRow Icon={ExpandMoreIcon} title='See more'/>
        </div>
    )
}

export default Sidebar
