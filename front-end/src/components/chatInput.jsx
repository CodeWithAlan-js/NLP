import React from "react";
import { Input, Button } from "@material-tailwind/react";
import axios from "axios";

const ChatInput = () => {
  const [message, setMessage] = React.useState("");
  const [error, setError] = React.useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3000/api/messages", { message: message });
      setError("");
      setMessage("");
    } catch (error) {
      setError(error.response.data)
    }
  }


  return (
    <div className="relative flex w-full max-w-96 justify-center mb-4">
      <p className="text-red-500 absolute -top-10">{error}</p>
      <Input type="text" label="Enter your message" onChange={handleChange} />
      <Button size="sm" className="!absolute right-1 top-1 rounded" onClick={handleSubmit}>
        Send
      </Button>
    </div>
  );
};

export default ChatInput;
