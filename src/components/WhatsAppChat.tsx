
import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const whatsappNumber = "+971568723633";
  
  const handleSendMessage = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}?text=${encodedMessage}`, "_blank");
      setMessage("");
      setIsOpen(false);
    }
  };

  const quickMessages = [
    "I'm interested in Dubai tours",
    "Need help with visa application",
    "Looking for group packages",
    "Want to book desert safari"
  ];

  return (
    <>
      {/* WhatsApp Button - Fixed at top right */}
      <div className="fixed top-20 right-4 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </Button>
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed top-36 right-4 w-80 bg-white rounded-lg shadow-2xl z-40 border border-gray-200">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 rounded-t-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold">Emirates Dubai Travel</h3>
                <p className="text-sm text-green-100">Usually replies instantly</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 max-h-64 overflow-y-auto">
            <div className="bg-gray-100 p-3 rounded-lg mb-3">
              <p className="text-sm text-gray-800">
                Hello! 👋 Welcome to Emirates Dubai Travel. How can we help you plan your perfect Dubai experience?
              </p>
            </div>
            
            {/* Quick Messages */}
            <div className="space-y-2">
              <p className="text-xs text-gray-500 font-semibold">Quick Messages:</p>
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => setMessage(msg)}
                  className="block w-full text-left p-2 text-sm bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200 text-gray-700"
                >
                  {msg}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-green-500 hover:bg-green-600 text-white px-3"
              >
                <Send size={16} />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Powered by WhatsApp • +971 56 872 3633
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;
