import { Title } from './components/Title';
import { EmailInput } from './components/EmailInput';
import { PasswordInput } from './components/PasswordInput';
import { AuthButtons } from './components/AuthButtons';
import './App.css';

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
