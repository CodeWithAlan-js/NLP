import React, { useRef, useEffect } from "react";

// eslint-disable-next-line react/display-name
const MessageDisplay = React.memo(({ messages }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="w-full max-h-screen pt-16 pb-16 overflow-y-auto">
      <ul>
        {messages.map((message) => (
          <li key={message._id} className="m-2">
            <span className="text-lg">- {message.message}</span>{" "}
            <span className="text-sm">/ Mood detected: {message.mood}</span>
          </li>
        ))}
        <div ref={messagesEndRef} />
      </ul>
    </div>
  );
});

export default MessageDisplay;
