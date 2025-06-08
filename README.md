# ABC NFT Collection - Web3 dApp

A modern, responsive NFT collection website with minting functionality built with React, Vite, Tailwind CSS v4, and Web3 integration.

## Features

- **Modern Design**: Clean, dark-themed UI with responsive design and custom color scheme
- **Web3 Integration**: MetaMask wallet connection and NFT minting functionality
- **React Router**: Seamless navigation between landing and minting pages
- **Tailwind CSS v4**: Latest utility-first CSS framework with custom theme variables
- **Responsive Design**: Mobile-first approach with advanced desktop breakpoints (2xl+)

## Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── Header.jsx          # Simplified navigation header
│   │   ├── HeroSection.jsx     # Hero area with mint CTA button
│   │   ├── RoadmapSection.jsx  # Connected vertical timeline roadmap
│   │   ├── FAQSection.jsx      # Frequently asked questions
│   │   ├── Footer.jsx          # Site footer with social links
│   │   ├── Button.jsx          # Reusable button component
│   │   ├── Icon.jsx            # Reusable icon component
│   │   └── index.js            # Component exports
│   ├── Navbar.jsx              # Web3 wallet connection navbar
│   └── ScrollToTop.jsx         # Auto scroll-to-top on route change
├── pages/
│   ├── Landing.jsx             # Main landing page
│   └── Mint.jsx                # NFT minting interface with wallet integration
├── contracts/
│   ├── nftA.json              # Smart contract ABI for NFT Collection A
│   ├── nftB.json              # Smart contract ABI for NFT Collection B
│   └── nftC.json              # Smart contract ABI for NFT Collection C
├── utils/
│   └── web3.js                # Web3 utility functions
└── App.jsx                    # Main app with routing and dark theme
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Routes

- `/` - Landing page (ABC NFT collection showcase with roadmap and FAQ)
- `/mint` - NFT minting interface with wallet connection and collection selection

## Key Features

### 🎨 **Modern Design System**
- Dark theme by default with custom background color (#212f3c)
- Responsive typography scaling from mobile to 2xl screens
- Professional color palette with light accent highlights

### 🔗 **Web3 Integration**
- MetaMask wallet connection
- Multiple NFT collection support (A, B, C)
- Real-time wallet status display
- Smart contract interaction ready (ethers.js)

## Technologies Used

- **React 19.1.0** - Modern React with latest features
- **Vite** - Fast build tool and dev server
- **Tailwind CSS v4** - Latest utility-first CSS framework with new import syntax
- **React Router Dom** - Client-side routing with scroll management
- **Ethers.js v6.14.3** - Ethereum blockchain interaction library
- **PostCSS** - CSS processing for Tailwind compilation

## Development Setup

1. **Clone and install dependencies:**
```bash
git clone <repository-url>
cd one-cubed3-app
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Open in browser:**
   - Navigate to [http://localhost:5173](http://localhost:5173)
   - Ensure MetaMask is installed for Web3 functionality

4. **Build for production:**
```bash
npm run build
```
## Web3 Integration Details

### Wallet Connection
- Automatic MetaMask detection
- Account change event listening
- Connection status display
- Error handling for wallet interactions

### Smart Contract Setup
Ready for integration with:
- Multiple NFT collection contracts
- Minting functionality with quantity selection
- Price calculation and payment processing
- Transaction status tracking


## License

This project is licensed under the MIT License.
