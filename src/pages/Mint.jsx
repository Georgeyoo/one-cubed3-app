import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ethers } from 'ethers';
import Navbar from '../components/Navbar';

export default function Mint() {
  const [selectedContract, setSelectedContract] = useState('A');
  const [quantity, setQuantity] = useState(1);
  const [isMinting, setIsMinting] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    // Check if wallet is connected
    const checkWallet = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
          }
        } catch (err) {
          console.error('Error checking wallet:', err);
        }
      }
    };

    checkWallet();

    // Listen for account changes
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        } else {
          setWalletAddress(null);
        }
      });
    }

    return () => {
      if (window.ethereum && window.ethereum.removeListener) {
        window.ethereum.removeListener('accountsChanged', () => { });
      }
    };
  }, []);

  const handleMint = async () => {
    if (!walletAddress) {
      alert('Please connect your wallet first!');
      return;
    }

    setIsMinting(true);
    try {
      // TODO: Replace with actual smart contract interaction
      console.log(`Minting ${quantity} of NFT ${selectedContract} from wallet ${walletAddress}`);

      // Example of how you would interact with the contract:
      // const provider = new ethers.BrowserProvider(window.ethereum);
      // const signer = await provider.getSigner();
      // const contract = new ethers.Contract(contractAddress, contractABI, signer);
      // const tx = await contract.mint(quantity, { value: ethers.parseEther("0.1") });
      // await tx.wait();

      // Simulate minting delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert(`Successfully minted ${quantity} NFT${quantity > 1 ? 's' : ''}!`);
    } catch (err) {
      console.error('Minting failed:', err);
      alert('Minting failed. Please try again.');
    } finally {
      setIsMinting(false);
    }
  };
  return (
    <div className="bg-dark-bg min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto px-5 py-8 lg:py-16 xl:py-20 max-w-7xl">
        {/* Back Navigation */}
        <div className="mb-8 lg:mb-12">
          <Link
            to="/"
            className="inline-flex items-center text-light-accent hover:text-white transition-colors font-medium text-base lg:text-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" className="mr-2 lg:w-6 lg:h-6">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Mint Interface */}
        <div className="max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">          <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 lg:mb-16 xl:mb-20">
          Mint Your NFT
        </h1>

          <div className="bg-dark-card rounded-2xl lg:rounded-3xl p-6 lg:p-12 xl:p-16 space-y-8 lg:space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column - Collection and Quantity */}
              <div className="space-y-6 lg:space-y-8">
                {/* Collection Selection */}
                <div>
                  <label className="block text-lg lg:text-xl xl:text-2xl font-semibold mb-4 lg:mb-6">
                    Choose Collection:
                  </label>
                  <select
                    value={selectedContract}
                    onChange={(e) => setSelectedContract(e.target.value)}
                    className="w-full bg-dark-bg border border-gray-600 rounded-lg lg:rounded-xl px-4 lg:px-6 py-3 lg:py-4 xl:py-5 text-white text-base lg:text-lg focus:outline-none focus:border-light-accent transition-colors"
                  >
                    <option value="A">NFT Collection A</option>
                    <option value="B">NFT Collection B</option>
                    <option value="C">NFT Collection C</option>
                  </select>
                </div>

                {/* Quantity Selection */}
                <div>
                  <label className="block text-lg lg:text-xl xl:text-2xl font-semibold mb-4 lg:mb-6">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full bg-dark-bg border border-gray-600 rounded-lg lg:rounded-xl px-4 lg:px-6 py-3 lg:py-4 xl:py-5 text-white text-base lg:text-lg focus:outline-none focus:border-light-accent transition-colors"
                  />
                </div>
              </div>

              {/* Right Column - NFT Preview */}
              <div className="lg:flex lg:items-center lg:justify-center">
                <div className="bg-dark-bg rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-10 text-center">
                  <div className="w-48 h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 mx-auto bg-gradient-to-br from-light-accent/20 to-purple-500/20 rounded-xl lg:rounded-2xl mb-4 lg:mb-6 flex items-center justify-center">
                    <div className="text-4xl lg:text-6xl xl:text-8xl opacity-50">🎨</div>
                  </div>
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-2 lg:mb-4">NFT Collection {selectedContract}</h3>
                  <p className="text-text-secondary text-sm lg:text-base xl:text-lg">Preview of your NFT</p>
                  <div className="mt-4 lg:mt-6">
                    <span className="text-lg lg:text-xl xl:text-2xl font-bold text-light-accent">
                      {quantity} NFT{quantity > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
              </div>
            </div>            {/* Wallet Status */}
            {walletAddress && (
              <div className="bg-dark-bg border border-green-500/30 rounded-lg lg:rounded-xl p-4 lg:p-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 lg:w-4 lg:h-4 bg-green-500 rounded-full mr-3 lg:mr-4"></div>
                  <div>
                    <p className="text-sm lg:text-base xl:text-lg text-green-400 font-medium">Wallet Connected</p>
                    <p className="text-xs lg:text-sm xl:text-base text-text-secondary">
                      {`${walletAddress.slice(0, 8)}...${walletAddress.slice(-6)}`}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Mint Button */}
            <div className="pt-4 lg:pt-8">
              <button
                onClick={handleMint}
                disabled={isMinting || !walletAddress}
                className="w-full bg-light-accent hover:bg-light-accent/90 disabled:opacity-50 disabled:cursor-not-allowed text-dark-bg font-bold py-4 lg:py-6 xl:py-8 px-6 lg:px-8 xl:px-10 rounded-full text-lg lg:text-xl xl:text-2xl transition-colors"
              >
                {!walletAddress ? 'Connect Wallet to Mint' :
                  isMinting ? 'Minting...' : 'Mint NFT'}
              </button>

              {!walletAddress && (
                <p className="text-center text-sm lg:text-base xl:text-lg text-text-secondary mt-3 lg:mt-6">
                  Please connect your wallet using the button in the top right corner
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
