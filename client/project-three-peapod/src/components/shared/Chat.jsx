import React from 'react'
import chatbox from "./chatbox.png";
import './Chat.css'


function Chat() {
return (
    <div className="chatbox">
        <img src={chatbox} alt="chatbox" className="box" />
      </div>
    )
}

export default Chat
