import React, { useEffect, useState } from "react";
import { ChatState } from "../src/context/chatProvider";
import SideDrawer from "../src/components/miscellaneous/SideDrawer";
import MyChats from "../src/components/miscellaneous/MyChat";
import Chatbox from "../src/components/miscellaneous/Chatbox";
import { Box } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

const ChatPage = () => {
  const { user } = ChatState()
  const navigate = useNavigate();
  const { setUser } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!user) navigate("/");
  }, [navigate]);
  return (
    <div style={{ width: "100%" }}>
      <SideDrawer />
      <Box className="chatBox" display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
      </Box>

    </div>
  );
};

export default ChatPage;
