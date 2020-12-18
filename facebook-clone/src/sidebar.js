import React from 'react'
import './sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';




function Sidebar() {
    return (
        <div className="sidbar">
            <SidebarRow src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKCMkL-GGgAoieaCghq1YxEPPolQ2l0fmZ7A&usqp=CAU" title="Pm Imran Khan" />
            <SidebarRow Icon={LocalHospitalIcon} title="COViD-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />

            <SidebarRow Icon={ChatIcon} title="Messanger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />

        </div>
    )
}

export default Sidebar
