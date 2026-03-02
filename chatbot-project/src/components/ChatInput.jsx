import { useState } from "react";
import { Chatbot } from "supersimpledev";
import LoadingSpinnerGif from '../assets/loading-spinner.gif';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (isLoading || inputText === '') {
      return;
    }

    setIsLoading(true);

    setInputText('');
    
    const newChatMessages = [            // always create a copy of the data and then modify the copy
        ...chatMessages,         // spread operator = takes the value in an array and copies them into a new array
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ]; 

    setChatMessages([
      ...newChatMessages,
      {
        message: <img className="loading-image" src={LoadingSpinnerGif} />,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);

    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([            
        ...newChatMessages,         
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);
    
    setIsLoading(false);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      sendMessage();
    } else if (event.key === 'Escape') {
      setInputText('');
    }
  }

  return (
    <div className="chat-input-container">                                 {/* fragment, group elements together without creating an extra div */}
      {/* <input></input>               every element needs closing tag in jsx */} 
      <input
        placeholder="Send a message to Chatbot" 
        size="30" 
        onChange={saveInputText}
        value={inputText}
        onKeyDown={handleKeyDown}
        className="chat-input"
      />                                {/* self-closing tag */}
      <button
          onClick={sendMessage}
          className="send-button">
        Send
      </button>      
    </div>
  );
}
