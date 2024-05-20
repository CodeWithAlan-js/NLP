import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import ChatInput from "../components/chatInput";
import MessageDisplay from "../components/messageDisplay";
import axios from "axios";

const ChatView = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/messages");
      setMessages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-h-full w-full flex flex-col justify-between items-center overflow-scroll">
        {!messages.length && <p className="text-3xl mt-4">No messages yet</p>}
        <MessageDisplay messages={messages} />
      </div>
      <ChatInput fetchMessages={fetchMessages} />
    </>
  );
};

export default ChatView;
