import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'

function ChatArea({ props }) {
  return (
    <div className='chatarea-container'>
      <div className='chatarea-header'>
        <p className="con-icon">{props.name[0]}</p>
        <div className="header-text">
            <p className='con-title'>{props.name}</p>
            <p className='con-timeStamp'> {props.timeStamp} </p>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </div>
      </div>
      <div className='messages-container'>Message Area</div>
      <div className='text-input-area'> Text Input area</div>
    </div>
  )
}

export default ChatArea
