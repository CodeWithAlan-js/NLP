import React from "react";
import Navbar from "../components/navbar";
import ChatInput from "../components/chatInput";

const ChatView = () => {
  return (
    <>
      <Navbar />
      <div className="h-full w-full">
        <div className="flex h-full w-full items-end justify-center">
          <ChatInput />
        </div>
      </div>
    </>
  );
};

export default ChatView;
