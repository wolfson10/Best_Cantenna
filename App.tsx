import React, { useState } from 'react';
import { AppTab } from './types';
import { Calculator } from './components/Calculator';
import { PhysicsTheory } from './components/PhysicsTheory';
import { ConstructionGuide } from './components/ConstructionGuide';

export default function App() {
  const [currentTab, setCurrentTab] = useState<AppTab>(AppTab.CALCULATOR);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-copper-500 rounded flex items-center justify-center text-slate-950 font-bold">
              Cc
            </div>
            <h1 className="text-xl font-bold text-slate-100 tracking-tight hidden sm:block">
              Cantenna<span className="text-copper-500">Craft</span>
            </h1>
          </div>
          
          <nav className="flex space-x-1">
            <NavButton 
              active={currentTab === AppTab.CALCULATOR} 
              onClick={() => setCurrentTab(AppTab.CALCULATOR)}
            >
              Calculator
            </NavButton>
            <NavButton 
              active={currentTab === AppTab.CONSTRUCTION} 
              onClick={() => setCurrentTab(AppTab.CONSTRUCTION)}
            >
              Build Guide
            </NavButton>
            <NavButton 
              active={currentTab === AppTab.THEORY} 
              onClick={() => setCurrentTab(AppTab.THEORY)}
            >
              Theory
            </NavButton>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
        <div className="animate-fade-in">
          {currentTab === AppTab.CALCULATOR && <Calculator />}
          {currentTab === AppTab.CONSTRUCTION && <ConstructionGuide />}
          {currentTab === AppTab.THEORY && <PhysicsTheory />}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center">
        <p className="text-slate-500 text-sm">
          Designed for 2.4 GHz DIY Engineering. Use responsibly.
        </p>
        <p className="text-slate-600 text-xs mt-2">
          Calculations based on TE11 Circular Waveguide modes.
        </p>
      </footer>
    </div>
  );
}

const NavButton: React.FC<{active: boolean, onClick: () => void, children: React.ReactNode}> = ({active, onClick, children}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
      active 
        ? 'bg-slate-800 text-copper-400 shadow-sm' 
        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
    }`}
  >
    {children}
  </button>
);
