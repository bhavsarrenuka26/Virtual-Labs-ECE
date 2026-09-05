import React, { useState, useRef, useEffect } from 'react';

const AILabAssistant = ({ labId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]); // Replaced 'response' with an array of messages
  const [loading, setLoading] = useState(false);
  
  // Ref for auto-scrolling to the bottom of the chat
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const askQuestion = async (e) => {
    e.preventDefault();

    if (!question.trim()) return;

    // Save the question and clear the input 
    const currentQuestion = question;
    setMessages((prev) => [...prev, { sender: 'user', text: currentQuestion }]);
    setQuestion("");
    setLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;

      const res = await fetch(`${apiUrl}/api/ai/ask`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ question: currentQuestion, labId }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessages((prev) => [...prev, { sender: 'viro', text: data.answer }]);
      } else {
        setMessages((prev) => [...prev, { sender: 'viro', text: data.error || "Something went wrong." }]);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { sender: 'viro', text: "Unable to connect to AI Assistant." }]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="btn shadow-lg border-0 d-flex align-items-center justify-content-center"
        style={{
          width: "65px",
          height: "65px",
          borderRadius: "50%",
          position: "fixed",
          bottom: "25px",
          right: "25px",
          zIndex: 999,
          background: "linear-gradient(135deg, #16213e, #1a4ed8)",
          padding: 0,
        }}
      >
        <lord-icon
          src="https://cdn.lordicon.com/bpptgtfr.json"
          trigger="morph"
          state="morph-neutral"
          colors="primary:#ffffff,secondary:#ffffff"
          style={{ width: "42px", height: "42px" }}
        ></lord-icon>
      </button>
    );
  }

  return (
    <div
      className="shadow-lg"
      style={{
        width: "calc(100vw - 40px)", 
        maxWidth: "360px",
        height: "500px",
        maxHeight: "calc(100vh - 40px)", 
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 999,
        borderRadius: "20px",
        overflow: "hidden",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        border: "1px solid rgba(255,255,255,0.2)",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a, #1d4ed8)",
          color: "white",
          padding: "16px",
          fontWeight: "600",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "18px",
        }}
      >
        <span>Viro - AI Assistant</span>
        <button
          onClick={() => setIsOpen(false)}
          style={{
            border: "none",
            background: "white",
            color: "#111",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          ✕
        </button>
      </div>

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "16px",
          background: "#f8fafc",
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }}
      >
        {messages.length === 0 ? (
          <div style={{ color: "#64748b", textAlign: "center", marginTop: "120px" }}>
            <p>Ask anything about the experiment.</p>
          </div>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              style={{
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                background: msg.sender === 'user' ? '#1d4ed8' : '#e0f2fe',
                color: msg.sender === 'user' ? '#ffffff' : '#0f172a',
                padding: "10px 14px",
                borderRadius: msg.sender === 'user' ? "14px 14px 2px 14px" : "14px 14px 14px 2px",
                maxWidth: "85%",
                lineHeight: "1.5",
                fontSize: "14px",
                whiteSpace: "pre-wrap",
              }}
            >
              {msg.text}
            </div>
          ))
        )}

        {loading && (
          <div style={{ alignSelf: 'flex-start', color: "#1d4ed8", fontWeight: "500", fontSize: "14px" }}>
            Thinking...
          </div>
        )}
        {/* Invisible div to scroll to */}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={askQuestion}
        style={{
          padding: "14px",
          borderTop: "1px solid #e2e8f0",
          display: "flex",
          gap: "10px",
          background: "white",
        }}
      >
        <input
          type="text"
          placeholder="Ask your question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          disabled={loading}
          style={{
            flex: 1,
            border: "1px solid #cbd5e1",
            borderRadius: "12px",
            padding: "12px",
            outline: "none",
            fontSize: "14px",
            minWidth: "0", 
          }}
        />
        <button
          type="submit"
          disabled={loading || !question.trim()}
          style={{
            border: "none",
            background: "linear-gradient(135deg, #0f172a, #1d4ed8)",
            color: "white",
            padding: "0 18px",
            borderRadius: "12px",
            fontWeight: "600",
            flexShrink: 0, 
            cursor: (loading || !question.trim()) ? "not-allowed" : "pointer"
          }}
        >
          Ask
        </button>
      </form>
    </div>
  );
};

export default AILabAssistant;