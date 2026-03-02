import { useState } from 'react';
import './App.css';

function Title() {
  return (
    <div className="title">
        Hello, Welcome to my website
    </div>
  );
}

function EmailInput() {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Email"
        className="login-input"  
      />
    </div>
  );
}

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
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
  );
}

function AuthButtons() {
  return (
    <div>
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

function App() {
  return (
    <div>
      <Title />
      <EmailInput />
      <PasswordInput />
      <AuthButtons />
    </div>
  );
}

export default App
