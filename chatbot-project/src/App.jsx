import { useState } from 'react';
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';
import './App.css';

function App() {
  const [chatMessages, setChatMessages] = useState([]);
  /*
  const [chatMessages, setChatMessages] = React.useState([{        // useState = this is a hook, hooks are functions that let us use react features in functional components
    message: 'hello chatbot',                                      // array destructuring // State = data that is connected to the HTML. React.useState returns an array           
    sender: 'user',                                                // when we update the data, it will update the HTML
    id: 'id1'
  }, {
    message: 'Hello! How can I help you?',
    sender: 'robot',
    id: 'id2'
  }, {
    message: `what is today's date?`,
    sender: 'user',
    id: 'id3'
  }, {
    message: 'Today is February 23',
    sender: 'robot',
    id: 'id4'
  }]);
  */
  //const chatMessages = array[0];         // this will give the current data
  //const setChatMessages = array[1];      // updater function = this is a function that updates the data, if not used react will not update the HTML
  //const [chatMessages, setChatMessages] = array;     // array destructuring

  return (
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox below.
        </p>
      )}
      {/* ChatInput() */} 
      <ChatMessages 
        chatMessages = {chatMessages}
      />                                    {/* component syntax, let's us create html elements */}
      <ChatInput 
        chatMessages = {chatMessages}
        setChatMessages = {setChatMessages}
      /> 
    </div>
  );
}

export default App
