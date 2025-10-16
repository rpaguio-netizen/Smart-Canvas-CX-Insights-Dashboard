import React, { useState } from 'react';
import { BarChart2, Users, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { PreviewModal } from './PreviewModal';
interface SurveyRecommendationProps {
  title: string;
  description: string;
  audience: string;
  audienceCount: number;
  estimatedTime: string;
  insightSource: string;
  previewData: any;
}
export function SurveyRecommendation({
  title,
  description,
  audience,
  audienceCount,
  estimatedTime,
  insightSource,
  previewData
}: SurveyRecommendationProps) {
  const [showPreview, setShowPreview] = useState(false);
  return <>
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="text-gray-600 mt-1 text-sm">{description}</p>
        <div className="flex items-center mt-4 text-sm text-gray-600">
          <div className="flex items-center mr-4">
            <Users size={16} className="mr-1" />
            <span>
              {audience} ({audienceCount})
            </span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{estimatedTime}</span>
          </div>
        </div>
        <div className="mt-3 p-2 bg-blue-50 rounded-md border border-blue-100 text-sm">
          <div className="flex items-start">
            <ExternalLink size={14} className="mr-2 mt-0.5 text-blue-500" />
            <div>
              <span className="text-blue-700">Based on: </span>
              <span className="text-gray-700">{insightSource}</span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex space-x-2">
          <button className="flex-1 px-4 py-2 border border-gray-300 rounded text-center text-sm hover:bg-gray-50" onClick={() => setShowPreview(true)}>
            Preview survey results
          </button>
          <button className="flex-1 px-4 py-2 bg-[#00bf6f] text-white rounded text-center text-sm hover:bg-[#00a862]">
            Send survey
          </button>
        </div>
        <button className="mt-3 w-full px-4 py-2 border border-gray-300 rounded text-center text-sm hover:bg-gray-50">
          Customize before sending
        </button>
      </div>
      {showPreview && <PreviewModal title={title} data={previewData} onClose={() => setShowPreview(false)} />}
    </>;
}