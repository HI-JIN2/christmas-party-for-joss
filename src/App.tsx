import React from 'react';
import { Header } from './components/Header';
import { EventDetails } from './components/EventDetails';
import { GiftExchange } from './components/GiftExchange';
import { Footer } from './components/Footer';
import { SnowAnimation } from './components/SnowAnimation';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-12 px-4 relative overflow-hidden">
      <SnowAnimation />
      <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg">
        <Header />
        <EventDetails />
        <GiftExchange />
        <Footer />
      </div>
    </div>
  );
}

export default App;