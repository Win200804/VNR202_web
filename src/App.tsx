import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AIChatbox from './components/ai/AIChatbox';

// Pages
import HomePage from './pages/HomePage';
import TimelinePage from './pages/TimelinePage';
import NorthVietnamPage from './pages/NorthVietnamPage';
import SouthVietnamPage from './pages/SouthVietnamPage';
import QuizPage from './pages/QuizPage';
import GamesPage from './pages/GamesPage';

// ========================================
// APP COMPONENT - Main Layout
// ========================================

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-paper-cream">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/mien-bac" element={<NorthVietnamPage />} />
          <Route path="/mien-nam" element={<SouthVietnamPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/games" element={<GamesPage />} />
        </Routes>
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* AI Chatbox - Fixed position */}
      <AIChatbox />
    </div>
  );
}

export default App;

