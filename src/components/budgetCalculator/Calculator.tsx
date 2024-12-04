import React, { useState } from 'react';
import { Home, ShoppingCart, Car, Heart, Wifi, GraduationCap, Plane, Coffee, DollarSign } from 'lucide-react';
import ExpenseCategory from './ExpenseCategory';
import BudgetSummary from './BudgetSummary';

const Calculator = () => {
  const [income, setIncome] = useState(5000);
  const [expenses, setExpenses] = useState({
    housing: 1500,
    groceries: 600,
    transportation: 400,
    healthcare: 300,
    utilities: 200,
    education: 200,
    travel: 200,
    entertainment: 200,
  });

  const totalExpenses = Object.values(expenses).reduce((a, b) => a + b, 0);

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Family Budget Estimator</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <ExpenseCategory
            label="Monthly Income"
            value={income}
            onChange={setIncome}
            icon={<DollarSign className="h-5 w-5 text-green-600" />}
          />

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Monthly Expenses</h3>
            <div className="space-y-4">
              <ExpenseCategory
                label="Housing"
                value={expenses.housing}
                onChange={(value) => setExpenses({ ...expenses, housing: value })}
                icon={<Home className="h-5 w-5 text-blue-600" />}
              />
              <ExpenseCategory
                label="Groceries"
                value={expenses.groceries}
                onChange={(value) => setExpenses({ ...expenses, groceries: value })}
                icon={<ShoppingCart className="h-5 w-5 text-blue-600" />}
              />
              <ExpenseCategory
                label="Transportation"
                value={expenses.transportation}
                onChange={(value) => setExpenses({ ...expenses, transportation: value })}
                icon={<Car className="h-5 w-5 text-blue-600" />}
              />
              <ExpenseCategory
                label="Healthcare"
                value={expenses.healthcare}
                onChange={(value) => setExpenses({ ...expenses, healthcare: value })}
                icon={<Heart className="h-5 w-5 text-blue-600" />}
              />
              <ExpenseCategory
                label="Utilities"
                value={expenses.utilities}
                onChange={(value) => setExpenses({ ...expenses, utilities: value })}
                icon={<Wifi className="h-5 w-5 text-blue-600" />}
              />
              <ExpenseCategory
                label="Education"
                value={expenses.education}
                onChange={(value) => setExpenses({ ...expenses, education: value })}
                icon={<GraduationCap className="h-5 w-5 text-blue-600" />}
              />
              <ExpenseCategory
                label="Travel"
                value={expenses.travel}
                onChange={(value) => setExpenses({ ...expenses, travel: value })}
                icon={<Plane className="h-5 w-5 text-blue-600" />}
              />
              <ExpenseCategory
                label="Entertainment"
                value={expenses.entertainment}
                onChange={(value) => setExpenses({ ...expenses, entertainment: value })}
                icon={<Coffee className="h-5 w-5 text-blue-600" />}
              />
            </div>
          </div>
        </div>

        <div>
          <BudgetSummary totalIncome={income} totalExpenses={totalExpenses} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;