import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, AlertCircle } from 'lucide-react';
export function SmartCanvasCard({
  canvas
}) {
  return <Link to={`/smart-canvas/${canvas.id}`} className="block">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-3">
          <div className="p-2 bg-blue-100 rounded-md">
            <LineChart className="h-5 w-5 text-blue-600" />
          </div>
          {canvas.isNew && <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              New
            </span>}
        </div>
        <h3 className="font-semibold text-lg mb-1">{canvas.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{canvas.description}</p>
        <div className="flex items-center text-xs text-gray-500">
          <AlertCircle className="h-3 w-3 mr-1" />
          <span>Updated {canvas.createdAt}</span>
        </div>
      </div>
    </Link>;
}