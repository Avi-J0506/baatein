import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import React from 'react'
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';

function ChatArea({props}) {
  return (
    <div className='chatarea-container'>
      <div className='chatarea-header'>
        <p className="con-icon">A</p>
        <div className="header-text">
            <p className='con-title'>Abhinandan</p>
            <p className='con-timeStamp'> today </p>
        </div>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
      </div>

      <div className='messages-container'>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
        <MessageOthers/>
        <MessageSelf/>
      </div>

      <div className='text-input-area'> 
        <input placeholder='Type a message' className='search-box' />
        <IconButton>
          <SendIcon/>
        </IconButton>
      </div>
    </div>
  )
}

export default ChatArea
