import React from 'react';
import "./myStyles.css"
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';

const MainContainer = () => {
  return (
    <div className='main-container'>
      <Sidebar/>
      {/* <Welcome/> */}
      <CreateGroups/>
      {/* <ChatArea/> */}
    </div>
  )
}

export default MainContainer
