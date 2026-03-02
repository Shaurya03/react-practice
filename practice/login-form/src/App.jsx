import { useState } from 'react';
import './App.css';

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="title">
        Hello, Welcome to my website
      </div>
      <div>
      <input 
        type="text" 
        placeholder="Email"
        className="login-input"  
      />
      </div>
      <div>
      <input 
        type={showPassword ? "text" : "password"} 
        placeholder="Password" 
        className="login-input" 
      />
      <button 
        className="login-button" 
        onClick={() => setShowPassword(prev => !prev)}>
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
      </div>
      <button 
        className="login-button">
        Login
      </button>
      <button 
        className="login-button">
        Sign Up
      </button>
    </div>
  );
}

export default App
