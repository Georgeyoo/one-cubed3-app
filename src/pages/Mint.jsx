import { useState } from 'react';

export default function Mint() {
  const [selectedContract, setSelectedContract] = useState('A');
  const [quantity, setQuantity] = useState(1);
  const [isMinting, setIsMinting] = useState(false);

  const handleMint = async () => {
    setIsMinting(true);
    try {
      // TODO: Replace with actual logic
      console.log(`Minting ${quantity} of NFT ${selectedContract}`);
      // Example: await mintNFT(selectedContract, quantity);
    } catch (err) {
      console.error('Minting failed:', err);
    } finally {
      setIsMinting(false);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Mint Your NFT</h2>

      <label>
        Choose Collection:
        <select
          value={selectedContract}
          onChange={(e) => setSelectedContract(e.target.value)}
          style={{ marginLeft: '1rem' }}
        >
          <option value="A">NFT A</option>
          <option value="B">NFT B</option>
          <option value="C">NFT C</option>
        </select>
      </label>

      <br /><br />

      <label>
        Quantity:
        <input
          type="number"
          min="1"
          max="10"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          style={{ marginLeft: '1rem', width: '60px' }}
        />
      </label>

      <br /><br />

      <button onClick={handleMint} disabled={isMinting}>
        {isMinting ? 'Minting...' : 'Mint NFT'}
      </button>
    </div>
  );
}
