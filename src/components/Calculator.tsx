import React, { useState } from 'react';
import { Calculator as CalculatorIcon, Car, Ruler, DollarSign } from 'lucide-react';

const Calculator = () => {
  const [dentSize, setDentSize] = useState('small');
  const [vehicleType, setVehicleType] = useState('sedan');
  const [paintRequired, setPaintRequired] = useState(false);
  const [location, setLocation] = useState('door');
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  const calculateCost = () => {
    const baseCost = {
      small: 150,
      medium: 350,
      large: 750,
      'extra-large': 1200,
    }[dentSize];

    const vehicleMultiplier = {
      sedan: 1,
      suv: 1.2,
      luxury: 1.5,
      exotic: 2,
    }[vehicleType];

    const locationMultiplier = {
      door: 1,
      hood: 1.2,
      roof: 1.3,
      quarter: 1.4,
    }[location];

    const paintCost = paintRequired ? 300 : 0;
    
    const total = (baseCost * vehicleMultiplier * locationMultiplier) + paintCost;
    setEstimatedCost(Math.round(total));
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl mx-auto">
      <div className="flex items-center space-x-2 mb-6">
        <CalculatorIcon className="h-8 w-8 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Dent Repair Cost Estimator</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            <Ruler className="inline h-5 w-5 mr-2" />
            Dent Size
          </label>
          <select
            value={dentSize}
            onChange={(e) => setDentSize(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="small">Small (1-2 inches)</option>
            <option value="medium">Medium (2-4 inches)</option>
            <option value="large">Large (4-8 inches)</option>
            <option value="extra-large">Extra Large (8+ inches)</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            <Car className="inline h-5 w-5 mr-2" />
            Vehicle Type
          </label>
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="sedan">Sedan/Compact</option>
            <option value="suv">SUV/Truck</option>
            <option value="luxury">Luxury Vehicle</option>
            <option value="exotic">Exotic/Sports Car</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Dent Location
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="door">Door Panel</option>
            <option value="hood">Hood</option>
            <option value="roof">Roof</option>
            <option value="quarter">Quarter Panel</option>
          </select>
        </div>

        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={paintRequired}
              onChange={(e) => setPaintRequired(e.target.checked)}
              className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
            />
            <span className="text-gray-700">Requires paint work</span>
          </label>
        </div>

        <button
          onClick={calculateCost}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Calculate Cost
        </button>

        {estimatedCost !== null && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">Estimated Cost:</span>
              <span className="text-2xl font-bold text-blue-600 flex items-center">
                <DollarSign className="h-6 w-6 mr-1" />
                {estimatedCost.toLocaleString()}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;