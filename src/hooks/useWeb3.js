// src/hooks/useWeb3.js
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { NETWORK, CONTRACTS } from '../config';

export function useWeb3() {
  const [provider, setProvider]   = useState(null);
  const [signer, setSigner]       = useState(null);
  const [contracts, setContracts] = useState({});

  useEffect(() => {
    // If the user has a wallet (eg MetaMask) injected…
    if (window.ethereum) {
      const ethProvider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(ethProvider);

      // Prompt user to connect
      ethProvider.send('eth_requestAccounts', []).then(() => {
        const signer = ethProvider.getSigner();
        setSigner(signer);

        // Instantiate each contract with the signer
        const instantiated = Object.fromEntries(
          Object.entries(CONTRACTS).map(([key, { address, abi }]) => [
            key,
            new ethers.Contract(address, abi, signer),
          ])
        );
        setContracts(instantiated);
      });
    } else {
      // Fallback to read-only RPC (no minting)
      const rpcProvider = new ethers.providers.JsonRpcProvider(NETWORK.rpcUrl);
      setProvider(rpcProvider);
    }
  }, []);

  return { provider, signer, contracts };
}
