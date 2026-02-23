"use client";

import { useState, useRef, useEffect } from "react";
import { chatbotConfig } from "@/data/chatbot-data";
import {
  Bot,
  Sparkles,
  Unplug,
  User,
  X,
  Send,
  ChevronDown,
  MessageSquare,
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
  timestamp: Date;
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      text: text.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setShowSuggestions(false);
    setIsLoading(true);

    try {
      // Build history from previous messages (excluding the current one)
      const history = messages.map((m) => ({
        role: m.role === "user" ? "user" : "model",
        text: m.text,
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text.trim(),
          history,
        }),
      });

      const data = await response.json();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        text: data.reply || data.error || "Sorry, something went wrong.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        text: "Oops! I couldn't connect. Please check your internet and try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleSuggestionClick = (question: string) => {
    sendMessage(question);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        style={{
          background: isOpen
            ? "#283930"
            : "linear-gradient(135deg, #13ec80 0%, #0fa85c 100%)",
          boxShadow: isOpen
            ? "0 4px 20px rgba(40, 57, 48, 0.4)"
            : "0 4px 25px rgba(19, 236, 128, 0.4), 0 0 40px rgba(19, 236, 128, 0.15)",
        }}
        aria-label={isOpen ? "Close chat" : "Open AI assistant"}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Sparkles className="w-7 h-7 text-[#0B0C10]" />
        )}
      </button>

      {/* Tooltip label + pulse ring when closed */}
      {!isOpen && (
        <>
          {/* Tooltip label */}
          <div
            className="fixed bottom-9 right-22 z-50 pointer-events-none animate-fade-in"
            style={{
              animation: "tooltipSlideIn 0.5s ease-out forwards",
            }}
          >
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap"
              style={{
                background: "linear-gradient(135deg, #13ec80 0%, #0fa85c 100%)",
                color: "#0B0C10",
                boxShadow: "0 4px 15px rgba(19, 236, 128, 0.3)",
              }}
            >
              <MessageSquare className="w-4 h-4" />
              Ask me anything!
              {/* Arrow pointing right */}
              <div
                className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rotate-45"
                style={{ background: "#0fa85c" }}
              />
            </div>
          </div>
          {/* Pulse ring */}
          <div className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full pointer-events-none">
            <div
              className="absolute inset-0 rounded-full animate-ping"
              style={{
                background: "rgba(19, 236, 128, 0.2)",
                animationDuration: "2s",
              }}
            />
          </div>
        </>
      )}

      {/* Tooltip animation keyframes */}
      <style jsx global>{`
        @keyframes tooltipSlideIn {
          0% {
            opacity: 0;
            transform: translateX(10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      {/* Chat Panel */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] transition-all duration-300 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
        style={{
          height: "min(520px, calc(100vh - 140px))",
        }}
      >
        <div
          className="flex flex-col h-full rounded-2xl overflow-hidden border border-[#283930] shadow-2xl"
          style={{
            background: "#0d0e13",
            boxShadow:
              "0 25px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(19, 236, 128, 0.08)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-5 py-4 border-b border-[#283930]"
            style={{
              background:
                "linear-gradient(135deg, rgba(19, 236, 128, 0.08) 0%, rgba(11, 12, 16, 0.95) 100%)",
            }}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-[#283930] flex items-center justify-center text-lg text-[#13ec80]">
                <Bot size={24} />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#13ec80] rounded-full border-2 border-[#0d0e13]" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-semibold text-sm truncate">
                {chatbotConfig.name}
              </h3>
              <p className="text-[#13ec80] text-xs flex items-center gap-1">
                <Sparkles size={12} /> Powered by Gemini AI
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-white transition-colors p-1"
              aria-label="Close chat"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 chatbot-scroll">
            {/* Welcome message */}
            {messages.length === 0 && (
              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-[#283930] flex items-center justify-center text-xs shrink-0 mt-1 text-[#13ec80]">
                  <Bot size={16} />
                </div>
                <div
                  className="rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] text-sm leading-relaxed"
                  style={{
                    background: "#15181e",
                    color: "#d1d5db",
                    border: "1px solid #1e2328",
                  }}
                >
                  {chatbotConfig.welcomeMessage}
                </div>
              </div>
            )}

            {/* Chat messages */}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-full bg-[#283930] flex items-center justify-center text-xs shrink-0 mt-1 text-[#13ec80]">
                    <Bot size={16} />
                  </div>
                )}
                <div
                  className={`rounded-2xl px-4 py-3 max-w-[85%] text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "rounded-tr-sm bg-[#13ec80] text-[#0B0C10] font-medium"
                      : "rounded-tl-sm"
                  }`}
                  style={
                    msg.role === "assistant"
                      ? {
                          background: "#15181e",
                          color: "#d1d5db",
                          border: "1px solid #1e2328",
                        }
                      : undefined
                  }
                >
                  {msg.text}
                </div>
                {msg.role === "user" && (
                  <div className="w-7 h-7 rounded-full bg-[#13ec80]/20 flex items-center justify-center text-xs shrink-0 mt-1">
                    <User className="w-4 h-4 text-[#13ec80]" />
                  </div>
                )}
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-[#283930] flex items-center justify-center text-xs shrink-0 mt-1 text-[#13ec80]">
                  <Bot size={16} />
                </div>
                <div
                  className="rounded-2xl rounded-tl-sm px-4 py-3"
                  style={{
                    background: "#15181e",
                    border: "1px solid #1e2328",
                  }}
                >
                  <div className="flex gap-1.5 items-center h-5">
                    <div
                      className="w-2 h-2 rounded-full bg-[#13ec80] animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="w-2 h-2 rounded-full bg-[#13ec80] animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="w-2 h-2 rounded-full bg-[#13ec80] animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {showSuggestions && messages.length === 0 && (
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-2">
                {chatbotConfig.suggestedQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSuggestionClick(q)}
                    className="text-xs px-3 py-1.5 rounded-full border border-[#283930] text-gray-400 hover:text-[#13ec80] hover:border-[#13ec80]/50 hover:bg-[#13ec80]/5 transition-all duration-200 cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <form
            onSubmit={handleSubmit}
            className="px-4 py-3 border-t border-[#283930]"
            style={{ background: "#0d0e13" }}
          >
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Hack4COOU..."
                disabled={isLoading}
                className="flex-1 bg-[#15181e] text-white text-sm rounded-xl px-4 py-2.5 border border-[#283930] focus:border-[#13ec80]/50 focus:outline-none focus:ring-1 focus:ring-[#13ec80]/20 placeholder:text-gray-600 transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 shrink-0 disabled:opacity-30 cursor-pointer"
                style={{
                  background:
                    input.trim() && !isLoading
                      ? "linear-gradient(135deg, #13ec80 0%, #0fa85c 100%)"
                      : "#15181e",
                }}
                aria-label="Send message"
              >
                <Send
                  className={`w-5 h-5 ${
                    input.trim() && !isLoading
                      ? "text-[#0B0C10]"
                      : "text-gray-600"
                  }`}
                />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Custom scrollbar styles for chat */}
      <style jsx global>{`
        .chatbot-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .chatbot-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .chatbot-scroll::-webkit-scrollbar-thumb {
          background: #283930;
          border-radius: 2px;
        }
        .chatbot-scroll::-webkit-scrollbar-thumb:hover {
          background: #13ec80;
        }
      `}</style>
    </>
  );
}
