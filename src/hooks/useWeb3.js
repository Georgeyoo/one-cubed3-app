// src/hooks/useWeb3.js
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { NETWORK, CONTRACTS } from '../config.js';

export function useWeb3() {
  const [provider, setProvider]   = useState(null);
  const [signer, setSigner]       = useState(null);
  const [contracts, setContracts] = useState({});

  useEffect(() => {
    // If the user has a wallet (e.g. MetaMask) injected…
    if (window.ethereum) {
      // ethers v6: use BrowserProvider instead of Web3Provider
      const ethProvider = new ethers.BrowserProvider(window.ethereum);
      setProvider(ethProvider);

      // Prompt user to connect
      ethProvider
        .send('eth_requestAccounts', [])
        .then(async () => {
          const signer = await ethProvider.getSigner();
          setSigner(signer);

          // Instantiate each contract with the signer
          const instantiated = Object.fromEntries(
            Object.entries(CONTRACTS).map(([key, { address, abi }]) => {
              return [key, new ethers.Contract(address, abi, signer)];
            })
          );
          setContracts(instantiated);
        })
        .catch(console.error);
    } else {
      // Fallback to read-only RPC (no minting)
      const rpcProvider = new ethers.JsonRpcProvider(NETWORK.rpcUrl);
      setProvider(rpcProvider);
    }
  }, []);

  return { provider, signer, contracts };
}
