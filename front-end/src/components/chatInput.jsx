import { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import axios from "axios";

const ChatInput = ({ fetchMessages }) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3000/api/messages", { message });
      setError("");
      setMessage("");
      fetchMessages();
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className="flex w-full h-16 items-center justify-center border-t-2 border-[#BDE0FE] bg-white fixed bottom-0 ">
      <p className="text-red-500 absolute -top-10">{error}</p>
      <div className="flex gap-4">
        <Input
          className="w-auto"
          type="text"
          label="Enter your message"
          value={message}
          onChange={handleChange}
        />
        <Button
          size="sm"
          className="flex justify-center items-center rounded"
          onClick={handleSubmit}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
