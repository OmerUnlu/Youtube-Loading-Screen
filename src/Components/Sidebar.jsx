import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebarButtons'>
          <div id='menuIcon'> <button><MenuOutlinedIcon  sx={{ fontSize: 30 }}/></button></div>
          <div><button ><HomeIcon/></button><span  id='homeIcon'>Home</span></div>
          <div><button><ExploreOutlinedIcon/></button><span   id='exploreIcon'>Explore</span></div>
          <div><button><SubscriptionsOutlinedIcon/></button><span id='subIcon'>Subscript</span></div> 
        </div>
    </div>
  )
}

export default Sidebar