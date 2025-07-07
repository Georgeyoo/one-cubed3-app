import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import Button from '../components/ui/Button';
import { ethers } from 'ethers';
import { useWeb3 } from '../hooks/useWeb3';
import { NETWORK, CONTRACTS } from '../config.js';

export default function Mint() {
  const { provider, contracts } = useWeb3();
  const [selectedContract, setSelectedContract] = useState('A');
  const [quantity, setQuantity] = useState(1);
  const [isMinting, setIsMinting] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [txHash, setTxHash] = useState('');

const handleMint = async () => {
  // 1) Make sure wallet & signer are ready
  const contract = contracts[selectedContract];
  if (!contract) {
    return alert('🔌 Please connect your wallet first!');
  }

  // 2) Read price from RPC
  const { address, abi } = CONTRACTS[selectedContract];
  const rpcProvider      = new ethers.JsonRpcProvider(NETWORK.rpcUrl);
  const readOnly         = new ethers.Contract(address, abi, rpcProvider);
  const costPerToken     = await readOnly.cost();

  // 3) Send mint in one go
  try {
    setIsMinting(true);
    const totalCost = costPerToken * BigInt(quantity);
    const tx        = await contract.mint(quantity, { value: totalCost });
    setTxHash(tx.hash);
    await tx.wait();
    alert('🎉 Mint successful!');
  } catch (err) {
    console.error('Mint failed:', err);
    alert('❌ Mint failed: ' + (err.reason || err.message || err));
  } finally {
    setIsMinting(false);
  }
};


//   const handleMint = async () => {
//   // 0) Signer contract (from useWeb3)
//   const contract = contracts[selectedContract];
//   if (!contract) {
//     return alert('🔌 Please connect your wallet first!');
//   }

//   // 1) Read-only RPC contract for views
//   const { address, abi } = CONTRACTS[selectedContract];
//   const rpcProvider      = new ethers.JsonRpcProvider(NETWORK.rpcUrl);
//   const readOnly         = new ethers.Contract(address, abi, rpcProvider);

//   // 2) Check state & cost
//   const [paused, presale, costPerToken] = await Promise.all([
//     readOnly.paused(),
//     readOnly.presale(),
//     readOnly.cost(),
//   ]);
//   console.log({ paused, presale, costPerToken: costPerToken.toString() });

//   if (paused) {
//     return alert('🚫 Contract is paused');
//   }

//   // 3) Ensure wallet on BSC
//   const netInfo = await provider.getNetwork();
//   if (netInfo.chainId !== NETWORK.chainId) {
//     return alert('⚠️ Please switch your wallet to Binance Smart Chain');
//   }

//   // 4) Simulate the mint on the signer contract
//   try {
//     await contract.callStatic.mint(quantity, {
//       value: costPerToken * BigInt(quantity),
//     });
//   } catch (simError) {
//     console.error('Mint simulation failed:', simError.reason || simError);
//     return alert('Mint would revert: ' + (simError.reason || simError.message));
//   }

//   // 5) Actually send
//   try {
//     setIsMinting(true);
//     const totalCost = costPerToken * BigInt(quantity);
//     const tx        = await contract.mint(quantity, { value: totalCost });
//     setTxHash(tx.hash);
//     await tx.wait();
//     alert('🎉 Mint successful!');
//   } catch (sendError) {
//     console.error('Mint failed:', sendError);
//     alert('❌ Mint failed: ' + (sendError.reason || sendError.message));
//   } finally {
//     setIsMinting(false);
//   }
// };

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
            <Button
              size="large"
              variant="primary"
              onClick={handleMint}
              disabled={isMinting || !walletAddress}
              className="w-full max-w-md"
            >
              {!walletAddress
                ? 'Connect Wallet to Mint'
                : isMinting
                  ? 'Minting…'
                  : 'Mint Your NFT'}
            </Button>
            {txHash && (
              <p className="mt-4 text-center">
                🎉 Transaction submitted!{' '}
                <a
                  href={`https://bscscan.com/tx/${txHash}`}
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-glaucous"
                >
                  View on BscScan
                </a>
              </p>
            )}
            {!walletAddress && (
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
