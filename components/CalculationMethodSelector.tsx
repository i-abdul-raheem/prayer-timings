'use client';

import { useState } from 'react';
import { Settings } from 'lucide-react';

const calculationMethods = [
  { id: 1, name: 'Muslim World League', description: 'Standard method used in most Islamic countries' },
  { id: 2, name: 'Islamic Society of North America (ISNA)', description: 'Common in North America' },
  { id: 3, name: 'Egyptian General Authority of Survey', description: 'Used in Egypt and some African countries' },
  { id: 4, name: 'Umm Al-Qura University, Makkah', description: 'Official method of Saudi Arabia' },
  { id: 5, name: 'University Of Islamic Sciences, Karachi', description: 'Used in Pakistan and some Asian countries' },
  { id: 6, name: 'Institute of Geophysics, Tehran', description: 'Used in Iran and some neighboring countries' },
  { id: 7, name: 'Shia Ithna Ashari', description: 'Used by Shia communities worldwide' },
  { id: 8, name: 'Gulf Region', description: 'Used in Gulf countries' },
  { id: 9, name: 'Kuwait', description: 'Official method of Kuwait' },
  { id: 10, name: 'Qatar', description: 'Official method of Qatar' },
  { id: 11, name: 'Majlis Ugama Islam Singapura', description: 'Official method of Singapore' },
  { id: 12, name: 'Union Organization Islamic de France', description: 'Used in France' },
  { id: 13, name: 'Diyanet İşleri Başkanlığı', description: 'Official method of Turkey' },
  { id: 14, name: 'Spiritual Administration of Muslims of Russia', description: 'Used in Russia' },
  { id: 15, name: 'Moonsighting Committee Worldwide', description: 'Based on actual moon sighting' },
];

export function CalculationMethodSelector() {
  const [selectedMethod, setSelectedMethod] = useState(2);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Calculation Method</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      
      <div className="space-y-3">
        {calculationMethods.slice(0, isOpen ? undefined : 3).map((method) => (
          <label key={method.id} className="flex items-start space-x-3 cursor-pointer">
            <input
              type="radio"
              name="calculationMethod"
              value={method.id}
              checked={selectedMethod === method.id}
              onChange={() => setSelectedMethod(method.id)}
              className="mt-1 text-primary-600 focus:ring-primary-500"
            />
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">{method.name}</div>
              {isOpen && (
                <div className="text-xs text-gray-500 mt-1">{method.description}</div>
              )}
            </div>
          </label>
        ))}
      </div>
      
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="text-sm text-primary-600 hover:text-primary-700 mt-3 font-medium"
        >
          Show all methods
        </button>
      )}
      
      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="text-sm text-primary-600 hover:text-primary-700 mt-3 font-medium"
        >
          Show less
        </button>
      )}
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="text-xs text-gray-500">
          Note: Changing the calculation method will affect prayer time calculations. 
          The selected method will be applied to all prayer time requests.
        </div>
      </div>
    </div>
  );
}
