import { useState } from 'react';
import useConversation from '../src/zustand/useConversation';
import toast from 'react-hot-toast';

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    if (!selectedConversation?._id) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      // ✅ Prevent duplicate messages
      if (!messages.find((msg) => msg._id === data._id)) {
        const updatedMessages = [...messages, data];
        setMessages(updatedMessages);

        // ✅ Save updated messages in localStorage
        localStorage.setItem(`messages_${selectedConversation._id}`, JSON.stringify(updatedMessages));
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
