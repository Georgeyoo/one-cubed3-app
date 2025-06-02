import { ethers } from 'ethers';

export const getProvider = () => {
  if (!window.ethereum) throw new Error('MetaMask not found');
  return new ethers.providers.Web3Provider(window.ethereum);
};

export const getSigner = () => getProvider().getSigner();
