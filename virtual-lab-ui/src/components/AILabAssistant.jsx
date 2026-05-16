import React, { useState } from 'react';

const AILabAssistant = ({ labId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const askQuestion = async (e) => {
    e.preventDefault();

    if (!question.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const apiUrl =
        import.meta.env.VITE_API_URL;

      const res = await fetch(`${apiUrl}/api/ai/ask`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ question, labId }),
      });

      const data = await res.json();

      if (res.ok) {
        setResponse(data.answer);
      } else {
        setResponse(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setResponse("Unable to connect to AI Assistant.");
    } finally {
      setLoading(false);
      setQuestion("");
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
    style={{
      width: "42px",
      height: "42px",
    }}
  ></lord-icon>
</button>
    );
  }

  return (
    <div
      className="shadow-lg"
      style={{
        width: "360px",
        height: "500px",
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
        }}
      >
        {!response ? (
          <div
            style={{
              color: "#64748b",
              textAlign: "center",
              marginTop: "120px",
            }}
          >
            <div style={{ fontSize: "50px" }}></div>
            <p>Ask anything about the experiment.</p>
          </div>
        ) : (
          <div
            style={{
              background: "#e0f2fe",
              padding: "14px",
              borderRadius: "14px",
              lineHeight: "1.7",
              color: "#0f172a",
              fontSize: "15px",
              whiteSpace: "pre-wrap",
            }}
          >
            <strong>Viro:</strong>

            <div style={{ marginTop: "8px" }}>
              {response}
            </div>
          </div>
        )}

        {loading && (
          <div
            style={{
              marginTop: "15px",
              color: "#1d4ed8",
              fontWeight: "500",
            }}
          >
            Thinking...
          </div>
        )}
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
          }}
        >
          Ask
        </button>
      </form>
    </div>
  );
};

export default AILabAssistant;