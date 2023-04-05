import React, { useState } from "react";
import { ChatState } from "../src/context/chatProvider";
import SideDrawer from "../src/components/miscellaneous/SideDrawer";
import MyChats from "../src/components/miscellaneous/MyChat";
import Chatbox from "../src/components/miscellaneous/Chatbox";
import { Box } from '@chakra-ui/react'

const ChatPage = () => {
  const { user } = ChatState()
  return (
    <div style={{ width: "100%" }}>
      <SideDrawer />
      <Box className="chatBox" d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats />}
        {user && <Chatbox />}
      </Box>

    </div>
  );
};

export default ChatPage;
