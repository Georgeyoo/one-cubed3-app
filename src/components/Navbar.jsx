import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

export default function Navbar() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      setIsConnecting(true);
      try {
        const [address] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(address);
      } catch (err) {
        console.error('Wallet connection failed:', err);
        if (err.code === 4001) {
          alert('Please connect to MetaMask.');
        } else {
          alert('An error occurred connecting to your wallet.');
        }
      } finally {
        setIsConnecting(false);
      }
    } else {
      alert('MetaMask not detected. Please install MetaMask to continue.');
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
  };

  useEffect(() => {
    // Check if wallet is already connected
    const checkConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
          }
        } catch (err) {
          console.error('Error checking wallet connection:', err);
        }
      }
    };

    checkConnection();

    // Listen for account changes
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        } else {
          setWalletAddress(null);
        }
      });

      // Cleanup listener on component unmount
      return () => {
        if (window.ethereum && window.ethereum.removeListener) {
          window.ethereum.removeListener('accountsChanged', () => { });
        }
      };
    }
  }, []);

  return (
    <nav className="flex justify-between items-center px-5 py-4 lg:px-8 lg:py-6 bg-dark-bg border-b border-dark-card">
      <div className="flex items-center space-x-6">
        <Link
          to="/"
          className="text-xl lg:text-2xl xl:text-3xl font-bold text-white hover:text-light-accent transition-colors"
        >
          ABC
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white hover:text-light-accent transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            to="/mint"
            className="text-white hover:text-light-accent transition-colors font-medium"
          >
            Mint
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {walletAddress ? (
          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center bg-dark-card rounded-full px-4 py-2">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-white">
                {`${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`}
              </span>
            </div>
            <button
              onClick={disconnectWallet}
              className="text-sm text-text-secondary hover:text-white transition-colors"
            >
              Disconnect
            </button>
          </div>
        ) : (
          <button
            onClick={connectWallet}
            disabled={isConnecting}
            className="bg-light-accent hover:bg-light-accent/90 disabled:opacity-50 disabled:cursor-not-allowed text-dark-bg font-bold py-2 px-4 lg:py-3 lg:px-6 rounded-full text-sm lg:text-base transition-colors"
          >
            {isConnecting ? 'Connecting...' : 'Connect Wallet'}
          </button>
        )}
      </div>
    </nav>
  );
}
