import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, HelpCircle, User } from 'lucide-react';
export function Header() {
  return <header className="w-full bg-[#404040] text-white">
      <div className="flex items-center h-[50px] px-4">
        <Link to="/" className="mr-8">
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="white">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-gray-200">
            Home
          </Link>
          <div className="relative group">
            <button className="flex items-center font-medium hover:text-gray-200">
              My Team
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <Link to="/" className="font-medium hover:text-gray-200">
            Plans & Pricing
          </Link>
          <Link to="/" className="font-medium hover:text-gray-200">
            Multi-survey Analysis
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <button className="bg-white text-[#00bf6f] px-4 py-1.5 rounded font-medium hover:bg-gray-100">
            Create survey
          </button>
          <button className="text-white hover:text-gray-200">
            <Bell size={20} />
          </button>
          <button className="text-white hover:text-gray-200">
            <HelpCircle size={20} />
          </button>
          <div className="h-8 w-8 rounded-sm bg-[#f8a156] flex items-center justify-center text-white font-medium">
            RP
          </div>
        </div>
      </div>
    </header>;
}