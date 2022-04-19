import { useState } from 'react';
import './App.css';
import { useEthers } from '@usedapp/core';

const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  const { activateBrowserWallet, deactivate, account } = useEthers();
  return (
    <div className='container'>
      <h2>
        {!account ? "Please connect your wallet." : `Connected Wallet: ${account}`}
      </h2>
      {!account ? (
        <button className="button connect" onClick={() => activateBrowserWallet()}>
          Connect
        </button>
      ) : (
        <button className="button disconnect" onClick={() => deactivate()}>
          Disconnect
        </button>
      )}
    </div>
  );
}

export default App;
