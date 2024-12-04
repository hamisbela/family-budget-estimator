import React from 'react';
import Calculator from '../components/budgetCalculator/Calculator';
import { DollarSign, PiggyBank, Shield, BarChart } from 'lucide-react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Family Budget Estimator</h1>
      <Calculator />
      
      <div className="mt-16 max-w-4xl mx-auto">
        {/* Trust Indicators */}
        <div className="bg-green-50 p-6 rounded-lg mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6 text-green-600" />
              <p className="text-sm text-gray-700">Trusted by thousands of families for accurate budget planning</p>
            </div>
            <div className="flex items-center space-x-3">
              <PiggyBank className="h-6 w-6 text-green-600" />
              <p className="text-sm text-gray-700">Make informed financial decisions with our comprehensive budget tool</p>
            </div>
          </div>
        </div>

        {/* SEO Content */}
        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6">Family Budget Estimator - Your Complete Guide to Family Financial Planning</h2>
            <div className="prose max-w-none text-gray-700">
              <p>Welcome to FamilyBudgetEstimator.com, your trusted family budget estimator for accurate household expense calculations. Our family budget calculator helps you plan your monthly budget with confidence, ensuring your family's financial stability and future security.</p>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4">Average Family Budget Breakdown {new Date().getFullYear()}</h3>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold mb-2">Essential Expenses</h4>
                  <p className="text-2xl font-bold text-green-600">50-60%</p>
                  <p className="text-sm text-gray-600">Housing, utilities, groceries, transportation</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold mb-2">Savings & Investments</h4>
                  <p className="text-2xl font-bold text-green-600">20-30%</p>
                  <p className="text-sm text-gray-600">Emergency fund, retirement, investments</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Key Budget Categories</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Housing:</strong> Rent/mortgage, property taxes, insurance, maintenance</li>
                <li><strong>Transportation:</strong> Car payments, fuel, maintenance, public transit</li>
                <li><strong>Healthcare:</strong> Insurance premiums, medications, routine care</li>
                <li><strong>Education:</strong> School supplies, tuition, extracurricular activities</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Smart Budgeting Tips</h3>
              <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                <div className="flex items-start space-x-3">
                  <BarChart className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-bold">Track Your Spending</h4>
                    <p>Monitor your expenses regularly to identify areas for improvement.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <PiggyBank className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-bold">Build Emergency Savings</h4>
                    <p>Aim to save 3-6 months of living expenses for unexpected costs.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Why Use Our Family Budget Estimator?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Comprehensive expense tracking</li>
                <li>Real-time budget calculations</li>
                <li>Customizable expense categories</li>
                <li>Visual budget breakdowns</li>
                <li>Expert financial planning tips</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;