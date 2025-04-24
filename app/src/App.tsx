import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './routes/Home';
import About from './routes/About';
import Anchorage from './routes/Anchorage';
import Feed from './routes/Feed'; 

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow">
        <Navbar />
      </header>

      <main className="flex-grow container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/anchorages/:id" element={<Anchorage />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
} 