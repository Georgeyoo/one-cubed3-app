import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ethers } from 'ethers';
import Navbar from '../components/ui/Navbar';

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
    <div className="min-h-screen relative overflow-hidden">      {/* Blurred NFT Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 blur-sm transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(/NFT-${selectedContract}.jpeg)`
        }}
      />      {/* Faded overlay with original gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/65 to-slate-900/60 md:from-slate-900/80 md:via-slate-800/85 md:to-slate-900/80" />
      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Link
              to="/"
              className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <span className="material-icons mr-1">arrow_back</span>
              Back to Home
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-center mb-10 text-slate-100">Mint Your NFT</h1>          <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 space-y-6 p-6 bg-slate-800/50 backdrop-blur-md rounded-lg shadow-xl border border-slate-600/70 md:bg-slate-800/70 md:border-slate-600/50">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1" htmlFor="nft-choice">
                  Choose NFT:
                </label>
                <div className="relative">
                  <select
                    className="w-full bg-slate-700 border border-slate-600 text-slate-100 p-3 rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    id="nft-choice"
                    name="nft-choice"
                    value={selectedContract}
                    onChange={(e) => setSelectedContract(e.target.value)}
                  >
                    <option value="A">NFT A</option>
                    <option value="B">NFT B</option>
                    <option value="C">NFT C</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1" htmlFor="quantity">
                  Quantity:
                </label>
                <input
                  className="w-full bg-slate-700 border border-slate-600 text-slate-100 p-3 rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  id="quantity"
                  name="quantity"
                  type="number"
                  min="1"
                  max="10"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </div>

              {/* Wallet Status */}
              {walletAddress && (
                <div className="bg-slate-700/50 border border-green-500/30 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <div>
                      <p className="text-sm text-green-400 font-medium">Wallet Connected</p>
                      <p className="text-xs text-slate-400">
                        {`${walletAddress.slice(0, 8)}...${walletAddress.slice(-6)}`}
                      </p>
                    </div>
                  </div>
                </div>)}
            </div>          <div className="md:col-span-8 bg-slate-800/50 backdrop-blur-md rounded-lg shadow-xl overflow-hidden border border-slate-600/70 md:bg-slate-800/70 md:border-slate-600/50">
              <img
                alt={`NFT ${selectedContract} preview`}
                className="w-full h-96 md:h-[32rem] lg:h-[36rem] object-cover"
                src={`/NFT-${selectedContract}.jpeg`}
              />
              <div className="p-6 text-center bg-slate-900/40 md:bg-slate-900/60">
                <h2 className="text-2xl font-semibold text-slate-100 mb-2">{quantity} NFT{quantity > 1 ? 's' : ''} {selectedContract}</h2>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={handleMint}
              disabled={isMinting || !walletAddress}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-md text-lg w-full max-w-md mx-auto transition-colors"
            >
              {!walletAddress ? 'Connect Wallet to Mint' :
                isMinting ? 'Minting...' : 'Mint NFT'}
            </button>          {!walletAddress && (
              <p className="mt-4 text-sm text-slate-400">
                Please connect your wallet using the button in the top right corner
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
