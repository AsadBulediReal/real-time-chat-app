import React from "react";

import { ChatEngine } from "react-chat-engine";

const ChatsPage = (props) => {
  return (
    <ChatEngine
      publicKey={"9ecb2b99-da42-4af8-b0e6-83a4e5f2acc8"}
      userName={props.user.username}
      userSecret={props.user.password}
      style={{height: "100vh"}}
    />
  );
};
export default ChatsPage;
