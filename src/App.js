
import './App.css';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import MainComponent from './components/LandingPage/MainComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from '@mui/icons-material';
import HomePage from './pages/Home';
import DashboardPage from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
