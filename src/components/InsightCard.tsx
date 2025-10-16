import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, MessageSquare, AlertTriangle, TrendingUp, TrendingDown } from 'lucide-react';
type InsightSource = 'survey' | 'salesforce' | 'reddit' | 'trustpilot';
interface Quote {
  text: string;
  source: string;
  date: string;
  sentiment: 'positive' | 'negative' | 'neutral';
}
interface InsightCardProps {
  title: string;
  description: string;
  trend: 'up' | 'down' | 'warning';
  percentage?: number;
  sources: InsightSource[];
  quotes: Quote[];
}
export function InsightCard({
  title,
  description,
  trend,
  percentage,
  sources,
  quotes
}: InsightCardProps) {
  const [expanded, setExpanded] = useState(false);
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <TrendingUp size={20} className="text-green-500" />;
      case 'down':
        return <TrendingDown size={20} className="text-red-500" />;
      case 'warning':
        return <AlertTriangle size={20} className="text-amber-500" />;
    }
  };
  const getSourceBadge = (source: InsightSource) => {
    switch (source) {
      case 'survey':
        return <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
            Survey Data
          </span>;
      case 'salesforce':
        return <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs">
            Salesforce
          </span>;
      case 'reddit':
        return <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
            Reddit
          </span>;
      case 'trustpilot':
        return <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
            Trustpilot
          </span>;
    }
  };
  const getSentimentColor = (sentiment: 'positive' | 'negative' | 'neutral') => {
    switch (sentiment) {
      case 'positive':
        return 'border-l-green-500';
      case 'negative':
        return 'border-l-red-500';
      case 'neutral':
        return 'border-l-gray-500';
    }
  };
  return <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 cursor-pointer hover:bg-gray-50" onClick={() => setExpanded(!expanded)}>
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            {getTrendIcon()}
            <div>
              <h3 className="font-medium text-lg">{title}</h3>
              <p className="text-gray-600 mt-1">{description}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {percentage && <span className={`font-medium ${trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-amber-600'}`}>
                {percentage > 0 ? '+' : ''}
                {percentage}%
              </span>}
            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {sources.map((source, index) => <div key={index}>{getSourceBadge(source)}</div>)}
        </div>
      </div>
      {expanded && <div className="p-4 border-t border-gray-200 bg-gray-50">
          <h4 className="font-medium mb-3">Supporting Evidence</h4>
          <div className="space-y-3">
            {quotes.map((quote, index) => <div key={index} className={`p-3 bg-white border-l-4 ${getSentimentColor(quote.sentiment)} rounded`}>
                <p className="text-gray-800">"{quote.text}"</p>
                <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                  <span>{quote.source}</span>
                  <span>{quote.date}</span>
                </div>
              </div>)}
          </div>
          <div className="mt-4 flex justify-end">
            <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
              <ExternalLink size={14} className="mr-1" />
              View all data sources
            </button>
          </div>
        </div>}
    </div>;
}