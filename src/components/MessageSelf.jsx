import React from "react";

function MessageSelf() {
  var props2 = { name: "You", message: "This is another sample message" };
  return (
    <div className="message-self-container">
      <div className="messageBox">
        <p>{props2.message}</p>
        <p className="self-timeStamp">12:00 am</p>
      </div>
    </div>
  );
}

export default MessageSelf;
