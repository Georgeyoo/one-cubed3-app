import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Mint() {
    const [selectedContract, setSelectedContract] = useState('A');
    const [quantity, setQuantity] = useState(1);
    const [isMinting, setIsMinting] = useState(false);

    const collections = [
        { id: 'A', name: 'OneCubed³ Alpha', price: '0.01 ETH', supply: '3,333' },
        { id: 'B', name: 'OneCubed³ Beta', price: '0.015 ETH', supply: '3,333' },
        { id: 'C', name: 'OneCubed³ Gamma', price: '0.02 ETH', supply: '3,334' }
    ];

    const selectedCollection = collections.find(c => c.id === selectedContract);

    const handleMint = async () => {
        setIsMinting(true);
        try {
            // TODO: Replace with actual logic
            console.log(`Minting ${quantity} of NFT ${selectedContract}`);
            // Example: await mintNFT(selectedContract, quantity);
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate transaction
            alert(`Successfully minted ${quantity} NFT(s) from ${selectedCollection.name}!`);
        } catch (err) {
            console.error('Minting failed:', err);
            alert('Minting failed. Please try again.');
        } finally {
            setIsMinting(false);
        }
    };

    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-[#171512] dark justify-between group/design-root overflow-x-hidden"
            style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}
        >
            <div>
                <Header />

                <div className="max-w-2xl mx-auto px-4 py-8">
                    <div className="text-center mb-8">
                        <Link
                            to="/"
                            className="inline-flex items-center text-[#b5afa1] hover:text-white transition-colors mb-4"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256" className="mr-2">
                                <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
                            </svg>
                            Back to Home
                        </Link>
                        <h1 className="text-white text-[32px] font-bold leading-tight mb-4">
                            Mint Your OneCubed³ NFT
                        </h1>
                        <p className="text-[#b5afa1] text-base">
                            Choose your collection and mint unique digital collectibles
                        </p>
                    </div>

                    <div className="bg-[#36332b] rounded-xl p-6 mb-6">
                        <h3 className="text-white text-lg font-semibold mb-4">Select Collection</h3>

                        <div className="grid gap-4 mb-6">
                            {collections.map((collection) => (
                                <label key={collection.id} className="cursor-pointer">
                                    <input
                                        type="radio"
                                        name="collection"
                                        value={collection.id}
                                        checked={selectedContract === collection.id}
                                        onChange={(e) => setSelectedContract(e.target.value)}
                                        className="sr-only"
                                    />
                                    <div className={`p-4 border-2 rounded-lg transition-all ${selectedContract === collection.id
                                            ? 'border-[#f3e8cc] bg-[#f3e8cc]/10'
                                            : 'border-[#504b3f] hover:border-[#b5afa1]'
                                        }`}>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h4 className="text-white font-medium">{collection.name}</h4>
                                                <p className="text-[#b5afa1] text-sm">Supply: {collection.supply}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-white font-semibold">{collection.price}</p>
                                                <p className="text-[#b5afa1] text-sm">per NFT</p>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                            ))}
                        </div>

                        <div className="mb-6">
                            <label className="block text-white text-sm font-medium mb-2">
                                Quantity
                            </label>
                            <input
                                type="number"
                                min="1"
                                max="10"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                className="w-full px-3 py-2 bg-[#171512] border border-[#504b3f] rounded-lg text-white focus:border-[#f3e8cc] focus:outline-none"
                            />
                            <p className="text-[#b5afa1] text-xs mt-1">Maximum 10 NFTs per transaction</p>
                        </div>

                        {selectedCollection && (
                            <div className="bg-[#171512] rounded-lg p-4 mb-6">
                                <h4 className="text-white font-medium mb-2">Order Summary</h4>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-[#b5afa1]">Collection:</span>
                                    <span className="text-white">{selectedCollection.name}</span>
                                </div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-[#b5afa1]">Quantity:</span>
                                    <span className="text-white">{quantity}</span>
                                </div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-[#b5afa1]">Price per NFT:</span>
                                    <span className="text-white">{selectedCollection.price}</span>
                                </div>
                                <hr className="border-[#504b3f] my-2" />
                                <div className="flex justify-between font-semibold">
                                    <span className="text-white">Total:</span>
                                    <span className="text-[#f3e8cc]">
                                        {(parseFloat(selectedCollection.price) * quantity).toFixed(3)} ETH
                                    </span>
                                </div>
                            </div>
                        )}

                        <button
                            onClick={handleMint}
                            disabled={isMinting}
                            className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${isMinting
                                    ? 'bg-[#504b3f] text-[#b5afa1] cursor-not-allowed'
                                    : 'bg-[#f3e8cc] text-[#171512] hover:bg-[#e6d9b8] active:scale-95'
                                }`}
                        >
                            {isMinting ? (
                                <div className="flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#b5afa1] mr-2"></div>
                                    Minting...
                                </div>
                            ) : (
                                `Mint ${quantity} NFT${quantity > 1 ? 's' : ''}`
                            )}
                        </button>
                    </div>

                    <div className="text-center">
                        <p className="text-[#b5afa1] text-sm">
                            Make sure you have enough ETH in your wallet for gas fees
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
