import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:3001");

function App() {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const sendMessage = () => {
    socket.emit("send_message", { message });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        placeholder="message..."
      />
      <button onClick={sendMessage}>Send a message</button>
      <h3>Message:</h3>
      <p>{messageReceived}</p>
    </div>
  );
}

export default App;
