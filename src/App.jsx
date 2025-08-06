import { useState } from 'react';
// Main App component that manages the pages
const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  // Function to handle page changes
  const navigate = (page) => {
    setCurrentPage(page);
  };

  // Conditionally render the correct page component
  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage navigate={navigate} />;
      case 'CRISIS':
        return <CRISISPage />;
      case 'Basic Life Support':
        return <BasicLifeSupportPage />;
      case 'Virtual Earth':
        return <VirtualEarthPage />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    // The main container with the green gradient background
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-blue-600 text-white font-sans flex flex-col">
      <Header navigate={navigate} />
      <main className="flex-grow p-4 md:p-12">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

// Header component for navigation
const Header = ({ navigate }) => (
  <header className="sticky top-0 z-50 bg-white/10 backdrop-blur-md shadow-lg rounded-b-3xl">
    <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Leaf className="h-8 w-8 text-white" />
        <a href="#" onClick={() => navigate('Home')} className="text-3xl font-bold text-white">
          Climact
        </a>
      </div>
      <div className="hidden md:flex space-x-8 text-lg font-medium">
        <NavLink text="Home" onClick={() => navigate('Home')} />
        <NavLink text="CRISIS" onClick={() => navigate('CRISIS')} />
        <NavLink text="Basic Life Support" onClick={() => navigate('Basic Life Support')} />
        <NavLink text="Virtual Earth" onClick={() => navigate('Virtual Earth')} />
      </div>
      {/* Mobile Menu Button - a more robust mobile menu could be implemented */}
      <button className="md:hidden text-white focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </nav>
  </header>
);

const NavLink = ({ text, onClick }) => (
  <a
    href="#"
    onClick={onClick}
    className="text-white hover:text-green-200 transition-colors duration-300"
  >
    {text}
  </a>
);

// Footer component
const Footer = () => (
  <footer className="bg-white/10 backdrop-blur-md py-8 rounded-t-3xl mt-auto">
    <div className="container mx-auto px-6 text-center text-gray-200">
      <p>&copy; 2025 Climact. All rights reserved.</p>
    </div>
  </footer>
);

// --- Page Components ---

// Home Page
const HomePage = ({ navigate }) => (
  <div className="flex flex-col items-center justify-center text-center py-24 md:py-32 space-y-8">
    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight">
      Building a Resilient Future, Together
    </h1>
    <p className="text-xl md:text-2xl text-gray-200 max-w-4xl">
      Climact is a platform dedicated to understanding the challenges we face and providing the skills and tools needed to build a more sustainable and resilient future.
    </p>
    <button
      onClick={() => navigate('CRISIS')}
      className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
    >
      Understand the Crisis
    </button>
  </div>
);

// CRISIS Page
const CRISISPage = () => (
  <div className="text-center py-12">
    <h2 className="text-4xl md:text-5xl font-bold mb-12">The Challenges We Face</h2>
    <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
      From environmental shifts to resource scarcity, we explore the pressing issues of our time. Understanding is the first step towards action.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <FeatureCard
        icon={<Tornado size={48} />}
        title="Environmental Shifts"
        description="Examining the impacts of climate change, from extreme weather to shifting ecosystems."
      />
      <FeatureCard
        icon={<Bolt size={48} />}
        title="Resource Scarcity"
        description="Exploring the challenges of limited water, energy, and raw materials in a growing world."
      />
      <FeatureCard
        icon={<Scale size={48} />}
        title="Social Disparity"
        description="Highlighting the human impact of these crises and the importance of global equity."
      />
    </div>
  </div>
);

// Basic Life Support Page
const BasicLifeSupportPage = () => (
  <div className="text-center py-12">
    <h2 className="text-4xl md:text-5xl font-bold mb-12">Essential Life-Saving Knowledge</h2>
    <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
      Empower yourself with the fundamental skills to respond effectively in an emergency and potentially save a life.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <FeatureCard
        icon={<HeartPulse size={48} />}
        title="Cardiopulmonary Resuscitation (CPR)"
        description="A step-by-step guide to performing CPR, a critical skill for cardiac emergencies."
      />
      <FeatureCard
        icon={<LifeBuoy size={48} />}
        title="Basic First Aid"
        description="Learn to treat common injuries like cuts, burns, and fractures, and handle other medical situations."
      />
      <FeatureCard
        icon={<ShieldCheck size={48} />}
        title="Emergency Preparedness"
        description="Understand how to build a first-aid kit and create an emergency plan for your home."
      />
    </div>
  </div>
);

// Virtual Earth Page
const VirtualEarthPage = () => (
  <div className="flex flex-col items-center py-12 text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-8">Virtual Earth</h2>
    <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
      A digital representation of our planet, where we can visualize environmental data, simulate changes, and collaborate on solutions in a shared virtual space.
    </p>
    <div className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center p-8 bg-white/10 rounded-full border-4 border-white/30 shadow-2xl">
      <Globe size={128} className="text-white animate-spin-slow" />
    </div>
    <p className="text-lg text-gray-300 mt-8">
      (Future Feature: Imagine an interactive 3D globe showing real-time climate data, community projects, and simulations.)
    </p>
  </div>
);

// Reusable components
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white/10 p-8 rounded-2xl shadow-xl text-center border-2 border-white/30 hover:border-white transition-colors duration-300">
    <div className="flex items-center justify-center text-white mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-gray-200 leading-relaxed">{description}</p>
  </div>
);

export default App;
