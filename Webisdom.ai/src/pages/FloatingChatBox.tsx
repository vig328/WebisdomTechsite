import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Bot } from "lucide-react";
import { useNavigate } from "react-router-dom";

const faqs = [
  {
    question: "What services does Webisdom offer?",
    answer:
      "We offer digital marketing, AI solutions, and web development services to help businesses grow online.",
  },
  {
    question: "How can I request a demo?",
    answer:
      "You can click the 'Request a Demo' button below or visit our contact page to schedule a demo.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "Pricing depends on the service you choose. We provide tailored quotes after understanding your requirements.",
  },
  {
    question: "Do you provide support after project delivery?",
    answer:
      "Yes! We provide 24/7 support and maintenance for all our delivered projects.",
  },
  {
    question: "Can I integrate your solutions with my existing software?",
    answer:
      "Absolutely! We can integrate with most popular platforms and custom software systems.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work with startups, SMEs, and enterprise clients across e-commerce, healthcare, finance, and more.",
  },
];

const FloatingChatBox = () => {
  const [open, setOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      type: "bot",
      text: "Hi 👋 I am Webisdom Assistant. Please choose a question below to know more.",
    },
  ]);
  const chatEndRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const handleFaqClick = (faq) => {
    setChatHistory((prev) => [
      ...prev,
      { type: "user", text: faq.question },
      { type: "bot", text: faq.answer },
    ]);

    if (faq.question.toLowerCase().includes("demo")) {
      setTimeout(() => {
        setChatHistory((prev) => [
          ...prev,
          { type: "cta", text: "Request a Demo ->" },
        ]);
      }, 500);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-4 rounded-full shadow-xl animate-bounce hover:scale-110 active:scale-95 transition-all duration-600 z-50"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chatbot Popup */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 bg-white/95 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl flex flex-col h-[500px] animate-[popup_0.25s_ease-out] z-50">
          {/* Header */}
          <div className="flex items-center justify-between border-b pb-3 px-4 pt-3">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-2 rounded-full">
                <Bot size={20} />
              </div>
              <h2 className="font-semibold text-lg">Webisdom Assistant</h2>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-gray-700 transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 px-4 py-3 overflow-y-auto space-y-3">
            {chatHistory.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.type === "cta" ? (
                  <button
                    onClick={() => navigate("/contact")}
                    className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl shadow hover:opacity-90 transition"
                  >
                    {msg.text}
                  </button>
                ) : (
                  <div
                    className={`${
                      msg.type === "user"
                        ? "bg-indigo-500 text-white rounded-xl rounded-br-none"
                        : "bg-gray-100 text-gray-700 rounded-xl rounded-bl-none"
                    } p-3 max-w-[75%] break-words shadow-sm`}
                  >
                    {msg.text}
                  </div>
                )}
              </div>
            ))}

            {/* FAQ Buttons */}
            <div className="flex flex-wrap gap-2 mt-2">
              {faqs.map((faq, index) => (
                <button
                  key={index}
                  onClick={() => handleFaqClick(faq)}
                  className="bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-700 transition"
                >
                  {faq.question}
                </button>
              ))}
            </div>

            <div ref={chatEndRef} />
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes popup {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </>
  );
};

export default FloatingChatBox;
