import React, { useState } from "react";
import { FiMessageSquare } from "react-icons/fi"; 
import { IoCloseCircle } from "react-icons/io5";  

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (input.trim() === "") return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages([...newMessages, { sender: "bot", text: botResponse }]);
      setLoading(false);
    }, 1000);
  };

  const getBotResponse = (message) => {
    const msg = message.toLowerCase();
    if (msg.includes("hello")) {
      return "Hi there! How can I assist you today?";
    } else if (msg.includes("how are you")) {
      return "I'm doing great, thank you for asking!";
    } else {
      return "I'm sorry, I don't understand that. Can you ask something else?";
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-all duration-300"
        >
          <FiMessageSquare size={24} />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 w-96 h-96 bg-white rounded-lg shadow-lg flex flex-col">
          <div className="flex justify-between items-center p-3 bg-blue-500 text-white rounded-t-lg">
            <span>AI Chat Assistant</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl"
            >
              <IoCloseCircle />
            </button>
          </div>

          <div className="flex-1 overflow-auto p-3 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white text-right"
                    : "bg-gray-200 text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <form className="flex p-2" onSubmit={handleSendMessage}>
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 rounded-lg border-2 border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="p-2 ml-2 bg-blue-500 rounded-full text-white hover:bg-blue-600"
              disabled={loading}
            >
              <FiMessageSquare size={20} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
