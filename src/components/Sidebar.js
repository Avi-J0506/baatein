import React, { useState } from 'react';
import "./myStyles.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import ConversationsItem from './ConversationsItem'

function Sidebar() {
  const[conversations, setConversations] = useState([
    {
      name: "Abhinandan #1",
      lastMessage: "Last Message #1",
      timeStamp: "today",
    },
    {
      name: "Gaurav #2",
      lastMessage: "Last Message #2",
      timeStamp: "today",
    },
    {
      name: "Vanshika #3",
      lastMessage: "Last Message #3",
      timeStamp: "today",
    },
  ])
  return (
    <div className='sidebar-container'>
      <div className='sb-header'>
        <div>
          <IconButton>
            <AccountCircleIcon/>
          </IconButton>
        </div>

        <div>
          <IconButton>
            <PersonAddAltIcon/>
          </IconButton>
          <IconButton>
            <GroupAddIcon/>
          </IconButton>
          <IconButton>
            <AddCircleOutlineIcon/>
          </IconButton>
          <IconButton>
            <DarkModeIcon/>
          </IconButton>
        </div>
      </div>
      <div className='sb-search'>
        <IconButton>
          <SearchIcon/>
        </IconButton>
        <input placeholder='Search' className='search-box'/>
      </div>
      <div className='sb-conversations'>
        {conversations.map((conversation) => {
          return <ConversationsItem props={conversation} key={conversation.name}/>
        })}
      </div>
    </div>
  )
}

export default Sidebar
