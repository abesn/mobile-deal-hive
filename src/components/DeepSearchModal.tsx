
import { useState } from "react";
import { X, Send, Zap, MessageSquare } from "lucide-react";

interface DeepSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeepSearchModal = ({ isOpen, onClose }: DeepSearchModalProps) => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Array<{id: number, text: string, isUser: boolean}>>([
    {
      id: 1,
      text: "Hi! I'm your AI assistant powered by DeepSeek. I can help you find devices, answer pricing questions, explain app features, or assist with anything else related to mobile device trading. What would you like to know?",
      isUser: false
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMessage = { id: Date.now(), text: query, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setQuery("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        text: `Based on your query "${query}", I can help you with that. Here are some insights: This appears to be related to mobile device trading. Would you like me to search for specific listings or provide more detailed information about pricing trends?`,
        isUser: false
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const suggestedQuestions = [
    "What's the current market price for iPhone 15 Pro?",
    "How do I verify a seller's reputation?",
    "What should I check when buying a used phone?",
    "How does the app's rating system work?"
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full h-[80vh] flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Zap className="text-purple-500" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">AI Deep Search</h2>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X size={24} />
            </button>
          </div>
          <p className="text-gray-600 mt-2">Powered by DeepSeek AI</p>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-4 mb-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.isUser
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  {!message.isUser && (
                    <div className="flex items-center space-x-2 mb-1">
                      <Zap size={16} className="text-purple-500" />
                      <span className="text-sm font-medium text-purple-600">AI Assistant</span>
                    </div>
                  )}
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-purple-500 border-t-transparent"></div>
                    <span className="text-sm text-gray-600">AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {messages.length === 1 && (
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Try asking:</h4>
              <div className="grid grid-cols-1 gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(question)}
                    className="text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-700 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="p-6 border-t border-gray-200">
          <div className="flex space-x-3">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything about mobile trading, pricing, or app features..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              disabled={!query.trim() || isLoading}
              className="bg-purple-500 hover:bg-purple-600 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
