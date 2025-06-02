import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

export default function Navbar() {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const [address] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(address);
      } catch (err) {
        console.error('Wallet connection failed:', err);
      }
    } else {
      alert('MetaMask not detected');
    }
  };

  useEffect(() => {
    if (window.ethereum && window.ethereum.selectedAddress) {
      setWalletAddress(window.ethereum.selectedAddress);
    }
  }, []);

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
      <div>
        <Link to="/">Home</Link> | <Link to="/mint">Mint</Link>
      </div>
      <button onClick={connectWallet}>
        {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}
      </button>
    </nav>
  );
}
