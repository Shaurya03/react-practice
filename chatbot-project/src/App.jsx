import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import { useAutoScroll } from './hooks/useAutoScroll';
import RobotProfileImage from './assets/robot.png';
import UserProfileImage from './assets/user.png';
import LoadingSpinnerGif from './assets/loading-spinner.gif';
import './App.css'

 function ChatInput({ chatMessages, setChatMessages }) {
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

      function ChatMessage({ message, sender }) {
        // const message = props.message;
        // const sender = props.sender;
        // const { message, sender } = props;

        /*
        if (sender === 'robot') {
          return (
            <div>
              <img src="robot.png" width="50" />
              {message}  
            </div>
          );
        }
        */

        return (
          <div className={
            sender === 'user' 
            ? 'chat-message-user' 
            : 'chat-message-robot'
          }>
            {sender === 'robot' && (
              <img src={RobotProfileImage} 
                className="chat-message-profile"
              />
            )}
            <div className="chat-message-text">
              {message}
            </div>
            {sender === 'user' && (
              <img src={UserProfileImage} 
                className="chat-message-profile"
              />
            )}
          </div>
        );
      }

      function ChatMessages({ chatMessages }) {
        const chatMessagesRef =  useAutoScroll(chatMessages);
        return (
          <div className="chat-message-container" 
            ref={chatMessagesRef}>
            {chatMessages.map((chatMessage) => {
              return (
                <ChatMessage
                  message= {chatMessage.message}
                  sender= {chatMessage.sender}
                  key= {chatMessage.id}
                />
              );
            })}
          </div>
        );
      }

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
