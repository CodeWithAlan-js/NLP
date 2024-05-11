import React from "react";


const MessageDisplay = () => {
    const [messages, setMessages] = React.useState([]);

    React.useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/messages");
                const data = await response.json();
                setMessages(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchMessages();
    }, []);

    return (
        <div className=" w-full border-t-2 border-[#BDE0FE] ">
            <ul>
                {messages.map((message) => (
                    <li key={message.id} className="text-lg">{message.message}</li>
                ))}
            </ul>
        </div>
    );
    }


export default MessageDisplay;