import React from 'react';
import { X, BarChart2, PieChart } from 'lucide-react';
interface PreviewModalProps {
  title: string;
  data: any;
  onClose: () => void;
}
export function PreviewModal({
  title,
  data,
  onClose
}: PreviewModalProps) {
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-medium text-lg">Preview: {title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-4">Expected Response Rate</h4>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700">
                  Based on enterprise surveys
                </span>
                <span className="font-medium text-blue-800">
                  58-72% response rate
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{
                width: '65%'
              }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Estimated 45-62 responses from 85 recipients
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium mb-3 flex items-center">
                <BarChart2 size={18} className="mr-2 text-blue-500" />
                CSAT by Feature Area
              </h4>
              <div className="h-40 flex items-end justify-around">
                <div className="flex flex-col items-center">
                  <div className="w-12 bg-blue-500 rounded-t" style={{
                  height: '30%'
                }}></div>
                  <span className="text-xs mt-1">Checkout</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 bg-blue-500 rounded-t" style={{
                  height: '40%'
                }}></div>
                  <span className="text-xs mt-1">Upgrade</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 bg-blue-500 rounded-t" style={{
                  height: '75%'
                }}></div>
                  <span className="text-xs mt-1">Core Product</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 bg-blue-500 rounded-t" style={{
                  height: '50%'
                }}></div>
                  <span className="text-xs mt-1">Support</span>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium mb-3 flex items-center">
                <PieChart size={18} className="mr-2 text-green-500" />
                Checkout Issue Breakdown
              </h4>
              <div className="flex justify-center">
                <div className="relative h-40 w-40">
                  <div className="absolute inset-0 rounded-full border-8 border-red-500"></div>
                  <div className="absolute inset-0 rounded-full border-8 border-yellow-500" style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 35%, 0 35%)'
                }}></div>
                  <div className="absolute inset-0 rounded-full border-8 border-blue-500" style={{
                  clipPath: 'polygon(0 0, 25% 0, 25% 25%, 0 25%)'
                }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-medium">65%</div>
                      <div className="text-xs text-gray-500">
                        Payment Issues
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-around mt-4 text-xs">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                  <span>Payment (65%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>
                  <span>UI Flow (25%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                  <span>Other (10%)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 mb-6">
            <h4 className="font-medium mb-3">Top Comments (Predicted)</h4>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded border-l-4 border-red-500">
                "The upgrade options were confusing and we ended up selecting
                the wrong tier. The process to correct it was even more
                frustrating."
              </div>
              <div className="p-3 bg-gray-50 rounded border-l-4 border-red-500">
                "Our finance department couldn't process the payment through our
                normal procurement system. Had to use a workaround that took
                days to approve."
              </div>
              <div className="p-3 bg-gray-50 rounded border-l-4 border-yellow-500">
                "The Buy Now, Pay Later option looks promising, but we need
                better documentation on how it integrates with our existing
                systems."
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <h4 className="font-medium text-yellow-800 mb-2">Note</h4>
            <p className="text-yellow-800 text-sm">
              This preview is generated from enterprise feedback patterns and AI
              predictions. Actual results will vary based on your specific
              audience and timing.
            </p>
          </div>
        </div>
        <div className="p-4 border-t border-gray-200 flex justify-end">
          <button onClick={onClose} className="px-4 py-2 border border-gray-300 rounded mr-2 hover:bg-gray-50">
            Close
          </button>
          <button className="px-4 py-2 bg-[#00bf6f] text-white rounded hover:bg-[#00a862]">
            Send Survey Now
          </button>
        </div>
      </div>
    </div>;
}