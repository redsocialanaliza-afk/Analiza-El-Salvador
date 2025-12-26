
import React from 'react';
import Hero from './components/Hero';
import Steps from './components/Steps';
import Benefits from './components/Benefits';
import Deadline from './components/Deadline';
import Important from './components/Important';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-purple-500 selection:text-white">
      <Hero />
      <Steps />
      <Benefits />
      <Deadline />
      <Important />
      <Footer />
      <AiAssistant />
    </div>
  );
};

export default App;
