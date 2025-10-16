import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, BarChart2, RefreshCw, MessageSquare } from 'lucide-react';
import { InsightCard } from '../components/InsightCard';
import { SurveyRecommendation } from '../components/SurveyRecommendation';
import { AIAssistant } from '../components/AIAssistant';
export function SmartCanvas() {
  const [showAssistant, setShowAssistant] = useState(true);
  return <div className="flex h-screen relative">
      <div className={`flex-1 overflow-y-auto ${!showAssistant ? 'w-full' : ''}`}>
        <div className="p-6 max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="mb-6">
            <Link to="/" className="flex items-center text-gray-600 hover:text-gray-800 mb-4">
              <ChevronLeft size={20} className="mr-1" />
              Back to Dashboard
            </Link>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-medium">
                  Enterprise CSAT Insights
                </h1>
                <p className="text-gray-600 mt-1">
                  Critical signals detected across enterprise customer feedback
                  channels
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-4">
                  Last updated: 2 hours ago
                </span>
                <button className="flex items-center px-3 py-1.5 border border-gray-300 rounded hover:bg-gray-50">
                  <RefreshCw size={16} className="mr-2" />
                  Refresh Insights
                </button>
              </div>
            </div>
          </div>

          {/* Top CX Signals Section */}
          <div className="mb-8">
            <h2 className="text-xl font-medium mb-4">Top CX Signals</h2>
            <div className="space-y-4">
              <InsightCard title="CSAT dropped significantly for Enterprise accounts" description="Overall CSAT score decreased from 8.6 to 6.9 in the last 30 days" trend="down" percentage={-19.8} sources={['survey', 'salesforce']} quotes={[{
              text: "The upgrade process is convoluted and required me to contact support three times. We're considering other options when our contract is up.",
              source: 'Enterprise Customer Survey',
              date: '3 days ago',
              sentiment: 'negative'
            }, {
              text: 'Our team was charged twice during checkout for our latest upgrade. While support resolved it, the experience was frustrating.',
              source: 'Salesforce Case #78392',
              date: '5 days ago',
              sentiment: 'negative'
            }, {
              text: 'The platform itself works well, but the checkout and payment process needs serious improvement.',
              source: 'Enterprise Quarterly Review',
              date: '7 days ago',
              sentiment: 'neutral'
            }]} />
              <InsightCard title="Checkout-related support cases have high reopen rate" description="22% of checkout-related support cases were reopened in the last 14 days" trend="up" percentage={22} sources={['salesforce', 'trustpilot']} quotes={[{
              text: 'Issue was marked as resolved but the payment still shows as pending in our account. Had to reopen the case.',
              source: 'Salesforce Case #78456',
              date: '2 days ago',
              sentiment: 'negative'
            }, {
              text: "Support team was helpful but couldn't fully resolve our checkout issue. Had to follow up multiple times.",
              source: 'Trustpilot Review',
              date: '4 days ago',
              sentiment: 'negative'
            }, {
              text: 'Three separate support agents gave different answers about how to complete our enterprise checkout. Very inconsistent experience.',
              source: 'Salesforce Case #78512',
              date: '6 days ago',
              sentiment: 'negative'
            }]} />
              <InsightCard title="Mixed reception to new 'Buy Now, Pay Later' flow" description="Discussions trending on Reddit with concerns about enterprise implementation" trend="warning" percentage={15} sources={['reddit', 'survey']} quotes={[{
              text: 'The new BNPL option is confusing for enterprise procurement. Not clear how it works with our purchasing system.',
              source: 'Reddit r/EnterpriseTools',
              date: '1 day ago',
              sentiment: 'negative'
            }, {
              text: "Love the flexibility of the new payment options, but our finance team had questions that weren't addressed in the docs.",
              source: 'Customer Survey',
              date: '3 days ago',
              sentiment: 'neutral'
            }, {
              text: 'BNPL is great for our cash flow, but integration with our existing procurement system was challenging.',
              source: 'Reddit r/SaasProcurement',
              date: '5 days ago',
              sentiment: 'neutral'
            }]} />
            </div>
          </div>

          {/* Recommended Surveys Section */}
          <div className="mb-8">
            <h2 className="text-xl font-medium mb-4">
              Recommended Follow-Up Surveys
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <SurveyRecommendation title="Upgrade & Checkout Root Cause Analysis" description="Identify specific pain points in the upgrade and checkout flows to address declining CSAT scores" audience="Enterprise customers who upgraded in last 60 days" audienceCount={85} estimatedTime="3-5 min survey" insightSource="CSAT dropped significantly for Enterprise accounts" previewData={{}} />
              <SurveyRecommendation title="Post-Resolution Checkout Micro-Survey" description="Trigger quick follow-up after checkout-related support cases close to identify persistent issues" audience="Customers with closed checkout support cases" audienceCount={120} estimatedTime="1-2 min survey" insightSource="Checkout-related support cases have high reopen rate" previewData={{}} />
              <SurveyRecommendation title="'Buy Now, Pay Later' Perception Check" description="Gather detailed feedback on the new BNPL flow to improve enterprise implementation" audience="Enterprise customers who used BNPL option" audienceCount={50} estimatedTime="2-3 min survey" insightSource="Mixed reception to new 'Buy Now, Pay Later' flow" previewData={{}} />
              <SurveyRecommendation title="Enterprise CSAT Recovery Plan" description="Comprehensive assessment to identify all factors impacting enterprise satisfaction scores" audience="All enterprise accounts" audienceCount={210} estimatedTime="4-5 min survey" insightSource="Multiple signals across channels" previewData={{}} />
            </div>
          </div>

          {/* Data Sources Section */}
          <div>
            <h2 className="text-xl font-medium mb-4">Connected Data Sources</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="border border-gray-200 rounded-lg p-4 bg-white">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.377 7.925H5.623a2.252 2.252 0 00-2.248 2.252v3.646a2.252 2.252 0 002.248 2.252h12.754a2.252 2.252 0 002.248-2.252V10.177a2.252 2.252 0 00-2.248-2.252zm-6.377 6.377a2.252 2.252 0 110-4.504 2.252 2.252 0 010 4.504z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">SurveyMonkey</h3>
                    <p className="text-xs text-gray-500">8 surveys analyzed</p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 bg-white">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.5 2h-13C4.12 2 3 3.12 3 4.5v15C3 20.88 4.12 22 5.5 22h13c1.38 0 2.5-1.12 2.5-2.5v-15C21 3.12 19.88 2 18.5 2zM12 17.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Salesforce</h3>
                    <p className="text-xs text-gray-500">
                      935 tickets analyzed
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 bg-white">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <svg className="h-6 w-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                      <path d="M12 6.5c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5 5.5-2.47 5.5-5.5-2.47-5.5-5.5-5.5zm0 9c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Reddit</h3>
                    <p className="text-xs text-gray-500">
                      5 subreddits monitored
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 bg-white">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg className="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Trustpilot</h3>
                    <p className="text-xs text-gray-500">64 reviews analyzed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Assistant Panel */}
      {showAssistant ? <div className="w-[350px] border-l border-gray-200 h-screen flex flex-col">
          <AIAssistant onClose={() => setShowAssistant(false)} />
        </div> : <button onClick={() => setShowAssistant(true)} className="absolute right-4 bottom-4 bg-white p-3 rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <MessageSquare size={24} className="text-[#00bf6f]" />
        </button>}
    </div>;
}