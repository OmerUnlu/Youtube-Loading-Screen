import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import OUFoto from '../Avatars/foto.jpg'

const TopBar = () => {
  return (
    <>
        <div className='TopBar'>
            <div className="topBarLeft">
                <YouTubeIcon className='youtubeIcon' sx={{color: "red", fontSize: 40}}/>
                <span>YouTube</span>
            </div>
            <div className="topBarMiddle">
              <input type="text"  className='middleInput' placeholder='Search'/>
              <button><SearchIcon /></button>
              <MicIcon sx={{color:"white", backgroundColor:"#212121", height:"6vh", marginLeft:"5px", fontSize: 30}}/>
            </div>
            <div className="topBarRight">
              <VideoCallIcon/>
              <AppsIcon/>
              <NotificationsIcon/>
              <img className='top-img' src={OUFoto} alt="top-img" />
            </div>
        </div>
    </>
  )
}

export default TopBar