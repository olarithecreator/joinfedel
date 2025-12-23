import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Podcast from './components/Podcast';
import Footer from './components/Footer';

// Component to handle document title updates
function DocumentTitle() {
  const location = useLocation();
  
  useEffect(() => {
    const titles: { [key: string]: string } = {
      '/': 'FEDEL - Inspire Change | Leadership Development & Capacity Building',
      '/podcast': 'FEDEL Podcast - Leadership Conversations | Inspire Change'
    };
    
    const currentTitle = titles[location.pathname] || titles['/'];
    document.title = currentTitle;
    
    // Update meta description based on page
    const descriptions: { [key: string]: string } = {
      '/': 'Empowering the next generation of leaders through innovative capacity building, transformative development programs, and inspiring podcast conversations. Join FEDEL to create meaningful impact.',
      '/podcast': 'Listen to inspiring conversations with leaders who are shaping the future. Discover insights, strategies, and stories that will transform your leadership journey.'
    };
    
    const metaDescription = document.querySelector('meta[name=\"description\"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[location.pathname] || descriptions['/']);
    }
  }, [location.pathname]);
  
  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <DocumentTitle />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/podcast" element={<Podcast />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

