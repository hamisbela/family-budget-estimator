import React from 'react';
import { DollarSign, PieChart, TrendingUp, TrendingDown } from 'lucide-react';

interface BudgetSummaryProps {
  totalIncome: number;
  totalExpenses: number;
}

const BudgetSummary: React.FC<BudgetSummaryProps> = ({ totalIncome, totalExpenses }) => {
  const surplus = totalIncome - totalExpenses;
  const savingsRate = totalIncome > 0 ? (surplus / totalIncome) * 100 : 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-2 text-green-600 mb-2">
            <TrendingUp className="h-5 w-5" />
            <h3 className="font-semibold">Total Income</h3>
          </div>
          <p className="text-2xl font-bold">${totalIncome.toLocaleString()}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-2 text-red-600 mb-2">
            <TrendingDown className="h-5 w-5" />
            <h3 className="font-semibold">Total Expenses</h3>
          </div>
          <p className="text-2xl font-bold">${totalExpenses.toLocaleString()}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-2 text-blue-600 mb-2">
            <PieChart className="h-5 w-5" />
            <h3 className="font-semibold">Monthly Savings</h3>
          </div>
          <p className="text-2xl font-bold">${surplus.toLocaleString()}</p>
          <p className="text-sm text-gray-600">({savingsRate.toFixed(1)}% of income)</p>
        </div>
      </div>

      <div className={`p-4 rounded-lg ${surplus >= 0 ? 'bg-green-50' : 'bg-red-50'}`}>
        <div className="flex items-center justify-between">
          <span className="font-medium">Monthly Balance:</span>
          <span className={`text-2xl font-bold flex items-center ${surplus >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            <DollarSign className="h-6 w-6 mr-1" />
            {surplus.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BudgetSummary;