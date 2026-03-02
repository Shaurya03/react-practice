import { Title } from './components/Title';
import { EmailInput } from './components/EmailInput';
import { PasswordInput } from './components/PasswordInput';
import { AuthButtons } from './components/AuthButtons';

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
