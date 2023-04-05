import { useState } from "react";
import "./App.css";
import { Button } from "@chakra-ui/react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../pages/homepage";
import ChatPage from "../pages/chatpage";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>

    </div>
  );
}

export default App;
