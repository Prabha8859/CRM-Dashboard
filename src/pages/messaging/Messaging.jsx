import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Search, Send, Paperclip, MoreVertical, Phone, Video, User } from 'lucide-react';

const Messaging = () => {
  const { isDarkMode } = useOutletContext();
  const [selectedChat, setSelectedChat] = useState(0);
  const [messageInput, setMessageInput] = useState('');

  const contacts = [
    { id: 0, name: 'Alice Freeman', role: 'Team Leader', avatar: 'https://i.pravatar.cc/150?u=alice', lastMsg: 'Sure, I will check the report.', time: '10:30 AM', unread: 2, online: true },
    { id: 1, name: 'Bob Smith', role: 'Sales Agent', avatar: 'https://i.pravatar.cc/150?u=bob', lastMsg: 'Can we reschedule the meeting?', time: 'Yesterday', unread: 0, online: false },
    { id: 2, name: 'Charlie Davis', role: 'Claims Specialist', avatar: 'https://i.pravatar.cc/150?u=charlie', lastMsg: 'The claim #45892 is approved.', time: 'Yesterday', unread: 0, online: true },
    { id: 3, name: 'Diana Prince', role: 'Support', avatar: 'https://i.pravatar.cc/150?u=diana', lastMsg: 'Customer is asking for an update.', time: 'Mon', unread: 0, online: false },
  ];

  const messages = [
    { id: 1, senderId: 1, text: 'Hi, do you have a minute?', time: '10:00 AM' },
    { id: 2, senderId: 'me', text: 'Yes, sure. What is it about?', time: '10:05 AM' },
    { id: 3, senderId: 1, text: 'I need help with the new policy guidelines.', time: '10:06 AM' },
    { id: 4, senderId: 'me', text: 'No problem. Let me send you the document.', time: '10:08 AM' },
    { id: 5, senderId: 1, text: 'Thanks! That would be great.', time: '10:10 AM' },
    { id: 6, senderId: 0, text: 'Sure, I will check the report.', time: '10:30 AM' }, // Last message from Alice
  ];

  const theme = {
    text: isDarkMode ? "text-white" : "text-slate-900",
    subText: isDarkMode ? "text-slate-400" : "text-slate-500",
    bg: isDarkMode ? "bg-slate-900/50" : "bg-white",
    border: isDarkMode ? "border-slate-700" : "border-slate-200",
    hover: isDarkMode ? "hover:bg-slate-800" : "hover:bg-slate-50",
    active: isDarkMode ? "bg-slate-800" : "bg-blue-50",
    input: isDarkMode ? "bg-slate-800 border-slate-700 text-white" : "bg-slate-100 border-slate-200 text-slate-900",
    bubbleSent: "bg-blue-600 text-white",
    bubbleReceived: isDarkMode ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-900",
  };

  return (
    <div className={`h-[calc(100vh-8rem)] flex rounded-2xl border overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500 ${theme.bg} ${theme.border}`}>
      {/* Sidebar - Contacts */}
      <div className={`w-80 flex flex-col border-r ${theme.border}`}>
        <div className="p-4 border-b border-slate-200 dark:border-slate-700">
          <div className="relative">
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.subText}`} size={18} />
            <input 
              type="text" 
              placeholder="Search messages..." 
              className={`w-full pl-10 pr-4 py-2 rounded-lg border outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${theme.input}`}
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {contacts.map((contact) => (
            <div 
              key={contact.id}
              onClick={() => setSelectedChat(contact.id)}
              className={`p-4 flex gap-3 cursor-pointer transition-colors ${selectedChat === contact.id ? theme.active : theme.hover}`}
            >
              <div className="relative">
                <img src={contact.avatar} alt={contact.name} className="w-12 h-12 rounded-full object-cover" />
                {contact.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-900"></div>}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className={`font-semibold truncate ${theme.text}`}>{contact.name}</h4>
                  <span className={`text-xs ${theme.subText}`}>{contact.time}</span>
                </div>
                <p className={`text-sm truncate ${theme.subText}`}>{contact.lastMsg}</p>
              </div>
              {contact.unread > 0 && (
                <div className="flex flex-col justify-center">
                  <span className="w-5 h-5 bg-blue-600 text-white text-xs font-bold flex items-center justify-center rounded-full">
                    {contact.unread}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className={`p-4 border-b flex justify-between items-center ${theme.border}`}>
          <div className="flex items-center gap-3">
            <img src={contacts[selectedChat].avatar} alt={contacts[selectedChat].name} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <h3 className={`font-bold ${theme.text}`}>{contacts[selectedChat].name}</h3>
              <p className={`text-xs ${theme.subText}`}>{contacts[selectedChat].role} • {contacts[selectedChat].online ? 'Online' : 'Offline'}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className={`p-2 rounded-lg transition-colors ${theme.hover} ${theme.subText}`}>
              <Phone size={20} />
            </button>
            <button className={`p-2 rounded-lg transition-colors ${theme.hover} ${theme.subText}`}>
              <Video size={20} />
            </button>
            <button className={`p-2 rounded-lg transition-colors ${theme.hover} ${theme.subText}`}>
              <MoreVertical size={20} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 dark:bg-slate-900/50">
          {messages.map((msg) => {
             const isMe = msg.senderId === 'me';
             return (
               <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                 <div className={`max-w-[70%] rounded-2xl px-4 py-3 ${isMe ? theme.bubbleSent : theme.bubbleReceived} ${isMe ? 'rounded-tr-none' : 'rounded-tl-none'} shadow-sm`}>
                   <p className="text-sm">{msg.text}</p>
                   <p className={`text-[10px] mt-1 text-right ${isMe ? 'text-blue-100' : 'text-slate-400'}`}>{msg.time}</p>
                 </div>
               </div>
             );
          })}
        </div>

        {/* Input Area */}
        <div className={`p-4 border-t ${theme.border} ${theme.bg}`}>
          <div className="flex items-center gap-2">
            <button className={`p-2 rounded-lg transition-colors ${theme.hover} ${theme.subText}`}>
              <Paperclip size={20} />
            </button>
            <input 
              type="text" 
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Type a message..." 
              className={`flex-1 px-4 py-2.5 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${theme.input}`}
              onKeyDown={(e) => e.key === 'Enter' && setMessageInput('')}
            />
            <button className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors shadow-lg shadow-blue-500/20">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messaging;