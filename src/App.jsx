import { useState } from 'react';
import './App.css';

const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  return (
    <div className='container'>
      <h1>My App</h1>
      <button
        className={`button ${!isConnected ? 'connect' : 'disconnect'}`}
        onClick={() => setIsConnected(prevState => !prevState)}
      >
        {!isConnected ? "Connect" : "Disconnect"}
      </button>
    </div>
  );
}

export default App;
