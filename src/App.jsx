import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Mint from './pages/Mint';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/mint" element={<Mint />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
