import React, { useState } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
const CONVERSATION_STARTERS = ['Why did Enterprise CSAT drop so significantly?', 'What issues are causing checkout support cases to reopen?', 'How are customers responding to the new BNPL option?', 'What survey questions should we ask about the upgrade flow?'];
interface AIAssistantProps {
  onClose?: () => void;
}
export function AIAssistant({
  onClose
}: AIAssistantProps) {
  const [messages, setMessages] = useState<Array<{
    type: 'user' | 'ai';
    content: string;
  }>>([{
    type: 'ai',
    content: "Hi there! I'm your AI assistant. I can help you understand the enterprise CSAT drop and recommend survey strategies to address the issues. What would you like to know?"
  }]);
  const [input, setInput] = useState('');
  const handleSendMessage = () => {
    if (!input.trim()) return;
    // Add user message
    setMessages([...messages, {
      type: 'user',
      content: input
    }]);
    // Simulate AI response
    setTimeout(() => {
      let response = '';
      if (input.toLowerCase().includes('csat')) {
        response = 'Enterprise CSAT dropped from 8.6 to 6.9 (19.8% decrease) primarily due to issues with the upgrade and checkout flows. Analysis shows that 72% of negative comments specifically mention payment processing errors, confusing upgrade options, and poor support resolution. The decline is most pronounced among accounts with 100+ seats.';
      } else if (input.toLowerCase().includes('checkout') || input.toLowerCase().includes('reopen')) {
        response = 'Checkout-related support cases have a 22% reopen rate, significantly higher than our 8% baseline. The primary reasons for reopens are: 1) Inconsistent information from support agents (42%), 2) Unresolved payment processing issues (38%), and 3) Integration problems with enterprise procurement systems (20%).';
      } else if (input.toLowerCase().includes('bnpl') || input.toLowerCase().includes('buy now')) {
        response = 'The new Buy Now, Pay Later option is receiving mixed feedback from enterprise customers. While 65% appreciate the flexibility for cash flow management, many report implementation challenges. Key issues include: procurement system integration (52%), unclear documentation (38%), and concerns about how it affects existing contract terms (27%).';
      } else if (input.toLowerCase().includes('survey') || input.toLowerCase().includes('questions')) {
        response = 'For the Upgrade & Checkout Root Cause survey, I recommend asking: 1) Which specific steps in the upgrade process caused friction? 2) How many attempts were needed to complete checkout? 3) Were payment options clearly presented? 4) How would you rate support resolution for checkout issues? 5) What documentation was missing that would have helped?';
      } else {
        response = "Based on my analysis of the data, there's a clear correlation between the CSAT drop and the recent changes to both the upgrade flow and checkout process. Would you like me to suggest specific survey questions to identify the highest impact improvements we could make?";
      }
      setMessages(prevMessages => [...prevMessages, {
        type: 'ai',
        content: response
      }]);
    }, 1000);
    setInput('');
  };
  return <div className="flex flex-col h-full">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white">
        <div className="flex items-center">
          <MessageSquare size={18} className="mr-2 text-[#00bf6f]" />
          <h3 className="font-medium">AI Assistant</h3>
        </div>
        <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
          <X size={18} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
        {messages.map((message, index) => <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-lg ${message.type === 'user' ? 'bg-[#00bf6f] text-white' : 'bg-gray-100 text-gray-800'}`}>
              {message.content}
            </div>
          </div>)}
      </div>
      {messages.length === 1 && <div className="p-4 border-t border-gray-200 bg-white">
          <p className="text-sm text-gray-600 mb-3">Suggested questions:</p>
          <div className="grid grid-cols-2 gap-2">
            {CONVERSATION_STARTERS.map((starter, index) => <button key={index} className="p-2 bg-white border border-gray-200 rounded text-left text-sm hover:bg-gray-50" onClick={() => setInput(starter)}>
                {starter}
              </button>)}
          </div>
        </div>}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center">
          <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSendMessage()} placeholder="Ask me anything about the CSAT insights..." className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-[#00bf6f] focus:border-transparent" />
          <button onClick={handleSendMessage} className="px-4 py-2 bg-[#00bf6f] text-white rounded-r hover:bg-[#00a862]">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>;
}