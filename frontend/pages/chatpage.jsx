import React, { useState } from "react";
// import axios from "axios";
import { useEffect } from "react";

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const fetchChats = async () => {
    await fetch("http://localhost:4000/api/user")
      .then((data) => data.json())
      .then((mvs) => setChats(mvs));
  };
  useEffect(() => {
    fetchChats();
  });
  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
