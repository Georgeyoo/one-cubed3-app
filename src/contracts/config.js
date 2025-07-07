// src/config.js
export const NETWORK = {
  chainId: 56, // BSC Mainnet
  rpcUrl:  'https://bsc-dataseed.binance.org/',
};

export const CONTRACTS = {
  A: {
    address: '0x112098041d181f2a562e508c1c2aca977db4396d',
    abi:     require('./contracts/nftA.json'),
  },
  B: {
    address: '0xc2314a3cf13478e4142058ffb98e2b6a9d4f44b6',
    abi:     require('./contracts/nftB.json'),
  },
  C: {
    address: '0xfbbcd87beaa02e2b4b5d8f995e50ecdf646ec90f',
    abi:     require('./contracts/nftC.json'),
  },
};
