import { useState } from 'react';

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
        className="login-button" 
        onClick={() => setShowPassword(prev => !prev)}>
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
}