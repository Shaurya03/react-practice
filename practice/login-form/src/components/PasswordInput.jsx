import { useState } from 'react';
import './PasswordInput.css';
import '../Shared.css';

export function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <input 
        type={showPassword ? "text" : "password"} 
        placeholder="Password" 
        className="login-input" 
      />
      <button 
        className="show-password-button" 
        onClick={() => setShowPassword(prev => !prev)}>
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
}