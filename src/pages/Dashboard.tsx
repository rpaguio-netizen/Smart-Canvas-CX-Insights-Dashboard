import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, MoreHorizontal, BarChart2, User } from 'lucide-react';
export function Dashboard() {
  return <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-[224px] border-r border-gray-200 bg-white">
        <div className="p-4 border-l-4 border-[#00bf6f] bg-white">
          <div className="flex items-center text-[#00bf6f]">
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path>
            </svg>
            All surveys
          </div>
        </div>
        <div className="p-4 flex justify-between items-center">
          <h2 className="font-medium">Folders</h2>
          <button className="text-gray-500 hover:bg-gray-100 p-1 rounded">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
        <div className="p-4 text-gray-500 text-sm">
          Create a folder to organize your surveys
        </div>
        <div className="mt-20 mx-4 p-5 bg-gray-100 rounded-lg">
          <div className="flex items-center justify-center mb-4">
            <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
              <User size={24} className="text-yellow-600" />
            </div>
          </div>
          <p className="text-center font-medium mb-2">
            Use 10+ market research solutions with guided setup and analysis
          </p>
          <button className="mt-4 w-full py-2 border border-gray-300 rounded text-center text-sm hover:bg-gray-200">
            View solutions
          </button>
        </div>
      </div>
      {/* Main content */}
      <div className="flex-1 p-4">
        {/* Surveys Section */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 border border-gray-300 rounded w-[240px]" />
            </div>
            <button className="flex items-center px-3 py-2 border border-gray-300 rounded">
              <span className="mr-2">Status: All</span>
              <ChevronDown size={16} />
            </button>
            <button className="flex items-center px-3 py-2 border border-gray-300 rounded">
              <span className="mr-2">Owner: All</span>
              <ChevronDown size={16} />
            </button>
            <button className="flex items-center px-3 py-2 border border-gray-300 rounded">
              <span className="mr-2">Sort by: Last updated</span>
              <ChevronDown size={16} />
            </button>
          </div>
          <button className="bg-[#00bf6f] text-white px-4 py-2 rounded font-medium hover:bg-[#00a862]">
            Create survey
          </button>
        </div>
        {/* Survey list */}
        <div className="space-y-4">
          {/* Combined CSAT on sign-out (September) with Smart Canvas */}
          <div className="space-y-0">
            {/* Regular survey item */}
            <div className="flex items-center p-4 bg-white border border-gray-200 rounded-t-lg">
              <input type="checkbox" className="mr-4" />
              <div className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-sm mr-4">
                Open
              </div>
              <div className="flex-1">
                <h3 className="font-medium">CSAT on sign-out (September)</h3>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <span>Updated: 09/15/2023</span>
                  <div className="flex items-center ml-4">
                    <User size={14} className="mr-1" />
                    <span>Shared with you</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center mr-4">
                <BarChart2 size={16} className="mr-1 text-gray-500" />
                <span className="text-sm">287 responses</span>
              </div>
              <button className="px-4 py-1.5 border border-gray-300 rounded mr-2 hover:bg-gray-50">
                Analyze results
              </button>
              <button className="text-gray-500 hover:bg-gray-100 p-1 rounded">
                <MoreHorizontal size={20} />
              </button>
            </div>
            {/* Smart Canvas card - with gradient border */}
            <div className="p-[3px] rounded-b-lg bg-gradient-to-r from-[#00bf6f] via-blue-500 to-purple-600 -mt-[1px]">
              <Link to="/smart-canvas/1" className="block p-4 bg-white rounded-b-lg hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-medium">
                        Customer Experience Insights
                      </h3>
                      <span className="ml-2 px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded-full">
                        Smart Canvas
                      </span>
                      <span className="ml-2 px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">
                        New
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Emerging signals spotted across your CX channels
                    </p>
                  </div>
                  <span className="text-xs text-gray-500">
                    Updated: 1 hour ago
                  </span>
                </div>
                <div className="mt-3 flex items-center text-sm text-[#00bf6f]">
                  <BarChart2 size={16} className="mr-1" />
                  <span>3 insights detected</span>
                </div>
              </Link>
            </div>
          </div>
          {/* Customer Experience Survey */}
          <div className="flex items-center p-4 bg-white border border-gray-200 rounded">
            <input type="checkbox" className="mr-4" />
            <div className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-sm mr-4">
              Open
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Customer Experience Survey</h3>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <span>Updated: 09/28/2023</span>
                <div className="flex items-center ml-4">
                  <User size={14} className="mr-1" />
                  <span>Shared with you</span>
                </div>
              </div>
            </div>
            <div className="flex items-center mr-4">
              <BarChart2 size={16} className="mr-1 text-gray-500" />
              <span className="text-sm">425 responses</span>
            </div>
            <button className="px-4 py-1.5 border border-gray-300 rounded mr-2 hover:bg-gray-50">
              Analyze results
            </button>
            <button className="text-gray-500 hover:bg-gray-100 p-1 rounded">
              <MoreHorizontal size={20} />
            </button>
          </div>
          {/* Food Delivery Technology */}
          <div className="flex items-center p-4 bg-white border border-gray-200 rounded">
            <input type="checkbox" className="mr-4" />
            <div className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-sm mr-4">
              Open
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Food Delivery Technology</h3>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <span>Updated: 09/22/2023</span>
                <div className="flex items-center ml-4">
                  <User size={14} className="mr-1" />
                  <span>Shared with you</span>
                </div>
              </div>
            </div>
            <div className="flex items-center mr-4">
              <BarChart2 size={16} className="mr-1 text-gray-500" />
              <span className="text-sm">339 responses</span>
            </div>
            <button className="px-4 py-1.5 border border-gray-300 rounded mr-2 hover:bg-gray-50">
              Analyze results
            </button>
            <button className="text-gray-500 hover:bg-gray-100 p-1 rounded">
              <MoreHorizontal size={20} />
            </button>
          </div>
          {/* CSAT on sign-out (August) */}
          <div className="flex items-center p-4 bg-white border border-gray-200 rounded">
            <input type="checkbox" className="mr-4" />
            <div className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-sm mr-4">
              Open
            </div>
            <div className="flex-1">
              <h3 className="font-medium">CSAT on sign-out (August)</h3>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <span>Updated: 09/15/2023</span>
                <div className="flex items-center ml-4">
                  <User size={14} className="mr-1" />
                  <span>Shared with you</span>
                </div>
              </div>
            </div>
            <div className="flex items-center mr-4">
              <BarChart2 size={16} className="mr-1 text-gray-500" />
              <span className="text-sm">287 responses</span>
            </div>
            <button className="px-4 py-1.5 border border-gray-300 rounded mr-2 hover:bg-gray-50">
              Analyze results
            </button>
            <button className="text-gray-500 hover:bg-gray-100 p-1 rounded">
              <MoreHorizontal size={20} />
            </button>
          </div>
          {/* Additional survey entries would go here */}
        </div>
      </div>
    </div>;
}