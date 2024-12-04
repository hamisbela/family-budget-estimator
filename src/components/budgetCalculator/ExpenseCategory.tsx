import React from 'react';
import { DollarSign } from 'lucide-react';

interface ExpenseCategoryProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  icon: React.ReactNode;
}

const ExpenseCategory: React.FC<ExpenseCategoryProps> = ({ label, value, onChange, icon }) => {
  return (
    <div className="space-y-2">
      <label className="block text-gray-700 font-medium">
        <div className="flex items-center space-x-2">
          {icon}
          <span>{label}</span>
        </div>
      </label>
      <div className="relative">
        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          min="0"
          step="100"
        />
      </div>
    </div>
  );
};

export default ExpenseCategory;