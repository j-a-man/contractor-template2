"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Minus, Sparkles, User, Bot } from "lucide-react";

type Message = {
    id: number;
    text: string;
    sender: "user" | "bot";
};

const KNOWLEDGE_BASE = [
    {
        keywords: ["service", "what do you do", "offer", "work"],
        answer: "We specialize in Custom Cabinetry & Built-ins, Deck Design & Construction, Finish Carpentry (Crown Molding, Wainscoting), and Flooring Installation (Hardwood, LVP). We bring veteran discipline to every project."
    },
    {
        keywords: ["cabinet", "kitchen", "closet", "built-in", "entertainment"],
        answer: "Our Custom Cabinetry service includes bespoke kitchen cabinets, entertainment centers, mudroom lockers, and walk-in closet systems tailored to your space."
    },
    {
        keywords: ["deck", "patio", "outdoor", "porch", "pergola"],
        answer: "We build high-quality pressure-treated and composite decks. We can also design multi-level decks, pergolas, and covered porches to expand your outdoor living."
    },
    {
        keywords: ["floor", "hardwood", "lvp", "laminate", "vinyl"],
        answer: "We provide expert installation for Hardwood, Luxury Vinyl Plank (LVP), and Laminate flooring, ensuring your subfloor is solid and level first."
    },
    {
        keywords: ["trim", "molding", "wainscoting", "crown"],
        answer: "Our Finish Carpentry services add sophistication with Crown Molding, Wainscoting, Beadboard, and custom Window & Door Casings."
    },
    {
        keywords: ["contact", "phone", "email", "reach", "call"],
        answer: "You can reach us at (770) 714-0275. We are located in Marietta, GA."
    },
    {
        keywords: ["hour", "open", "time", "when"],
        answer: "We are open Monday through Friday, from 8:00 AM to 6:00 PM."
    },
    {
        keywords: ["location", "area", "where"],
        answer: "We are based in Marietta, GA and serve the surrounding areas with our carpentry services."
    },
    {
        keywords: ["quote", "price", "cost", "estimate"],
        answer: "We'd love to provide a quote! You can click the 'Get a Quote' button in the header or call us at (770) 714-0275 to discuss your project details."
    }
];

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Hi! I'm the Crossworks Assistant. How can I help you regarding our carpentry services today?", sender: "bot" }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const toggleChat = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isTyping]);

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg = inputValue.trim();
        setInputValue("");

        // Add User Message
        setMessages(prev => [...prev, { id: Date.now(), text: userMsg, sender: "user" }]);
        setIsTyping(true);

        // Simulate thinking/network delay
        setTimeout(() => {
            const lowerInput = userMsg.toLowerCase();
            let botResponse = "I appreciate your question. For detailed project specifics, it's best to call us at (770) 714-0275. Is there anything else I can help with?";

            // Simple keyword matching
            for (const entry of KNOWLEDGE_BASE) {
                if (entry.keywords.some(k => lowerInput.includes(k))) {
                    botResponse = entry.answer;
                    break;
                }
            }

            setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: "bot" }]);
            setIsTyping(false);
        }, 1200);
    };

    const handleQuickAction = (actionText: string) => {
        // Add User Message
        setMessages(prev => [...prev, { id: Date.now(), text: actionText, sender: "user" }]);
        setIsTyping(true);

        // Simulate thinking/network delay
        setTimeout(() => {
            const lowerInput = actionText.toLowerCase();
            let botResponse = "I appreciate your question. For detailed project specifics, it's best to call us at (770) 714-0275. Is there anything else I can help with?";

            // Simple keyword matching
            for (const entry of KNOWLEDGE_BASE) {
                if (entry.keywords.some(k => lowerInput.includes(k))) {
                    botResponse = entry.answer;
                    break;
                }
            }

            setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: "bot" }]);
            setIsTyping(false);
        }, 800);
    };

    const QUICK_ACTIONS = [
        { label: "Our Services", text: "What services do you offer?" },
        { label: "Contact Info", text: "What is your contact info?" },
        { label: "Get a Quote", text: "I'd like to get a quote." }
    ];

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4 pointer-events-none">
            {/* ... (Chat Window container code is same until input) */}
            <div
                className={`pointer-events-auto w-[350px] md:w-[400px] bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl border border-white/10 transition-all duration-500 origin-bottom-right transform ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-12 pointer-events-none"}`}
                style={{ maxHeight: "600px" }}
            >
                {/* Header */}
                <div className="bg-[#ff4d1c] p-4 flex justify-between items-center text-white">
                    <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-white/20 rounded-full">
                            <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <h3 className="font-medium text-sm tracking-wide">Crossworks Assistant</h3>
                            <div className="flex items-center gap-1.5 opacity-80">
                                <span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse"></span>
                                <span className="text-[10px] uppercase tracking-wider">Online</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <button onClick={toggleChat} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                            <Minus className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Messages */}
                <div className="h-[320px] overflow-y-auto p-6 space-y-6 bg-[#0f0f0f] scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                            {msg.sender === "bot" && (
                                <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 flex-shrink-0 flex items-center justify-center">
                                    <Bot className="w-4 h-4 text-[#ff4d1c]" />
                                </div>
                            )}
                            <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === "user" ? "bg-[#ff4d1c] text-white rounded-br-sm" : "bg-[#1a1a1a] text-neutral-300 border border-white/5 rounded-bl-sm"}`}>
                                {msg.text}
                            </div>
                            {msg.sender === "user" && (
                                <div className="w-8 h-8 rounded-full bg-[#ff4d1c]/10 flex-shrink-0 flex items-center justify-center">
                                    <User className="w-4 h-4 text-[#ff4d1c]" />
                                </div>
                            )}
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex gap-3 justify-start items-center">
                            <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 flex-shrink-0 flex items-center justify-center">
                                <Bot className="w-4 h-4 text-[#ff4d1c]" />
                            </div>
                            <div className="bg-[#1a1a1a] border border-white/5 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                                <span className="w-1.5 h-1.5 bg-[#ff4d1c]/50 rounded-full animate-bounce"></span>
                                <span className="w-1.5 h-1.5 bg-[#ff4d1c]/50 rounded-full animate-bounce delay-75"></span>
                                <span className="w-1.5 h-1.5 bg-[#ff4d1c]/50 rounded-full animate-bounce delay-150"></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Quick Actions */}
                <div className="px-4 py-3 bg-[#1a1a1a] border-t border-white/5 flex gap-2 overflow-x-auto scrollbar-none">
                    {QUICK_ACTIONS.map((action, i) => (
                        <button
                            key={i}
                            onClick={() => handleQuickAction(action.text)}
                            className="text-xs font-medium bg-[#2a2a2a] hover:bg-[#ff4d1c] text-neutral-300 hover:text-white px-3 py-2 rounded-full transition-colors whitespace-nowrap border border-white/5"
                        >
                            {action.label}
                        </button>
                    ))}
                </div>

                {/* Input */}
                <form onSubmit={handleSend} className="p-4 bg-[#1a1a1a] flex gap-2 relative">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Ask about our services..."
                        className="flex-1 bg-[#0f0f0f] border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-[#ff4d1c] transition-colors placeholder:text-neutral-600"
                    />
                    <button
                        type="submit"
                        disabled={!inputValue.trim()}
                        className="p-2.5 bg-[#ff4d1c] text-white rounded-full hover:bg-[#c2410c] disabled:opacity-50 disabled:hover:bg-[#ff4d1c] transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-[#ff4d1c]/20"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </form>
            </div>

            {/* Toggle Button */}
            <button
                onClick={toggleChat}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`pointer-events-auto p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group z-[100] ${isOpen ? "bg-[#1a1a1a] hover:bg-[#252525] text-white rotate-90" : "bg-[#ff4d1c] hover:bg-[#c2410c] text-white hover:scale-110"}`}
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}

                {/* Tooltip on hover when closed */}
                {!isOpen && (
                    <span className={`absolute right-full mr-4 bg-white text-black text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg transition-all duration-300 origin-right ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90 translate-x-2"}`}>
                        Chat with us
                    </span>
                )}
            </button>
        </div>
    );
}
