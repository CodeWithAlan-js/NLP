import React from "react";
import { Input, Button } from "@material-tailwind/react";

const ChatInput = () => {
  return (
    <div className="relative flex w-full max-w-96 justify-center mb-4">
      <Input type="text" label="Enter your message" />
      <Button size="sm" className="!absolute right-1 top-1 rounded">
        Send
      </Button>
    </div>
  );
};

export default ChatInput;
