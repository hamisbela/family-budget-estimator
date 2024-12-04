import React from 'react';
import { Users, Target, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">About FamilyBudgetEstimator.com</h1>
      
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <Users className="h-12 w-12 mx-auto text-green-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Expert Team</h3>
          <p className="text-gray-600">Our team of financial experts brings years of experience to help families manage their budgets effectively.</p>
        </div>
        
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <Target className="h-12 w-12 mx-auto text-green-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Accurate Planning</h3>
          <p className="text-gray-600">We use real-world data to provide the most accurate budget estimates for families.</p>
        </div>
        
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <Shield className="h-12 w-12 mx-auto text-green-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Trusted Service</h3>
          <p className="text-gray-600">Thousands of families trust our platform for their financial planning needs every month.</p>
        </div>
      </div>
      
      <div className="prose max-w-none">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="mb-4">FamilyBudgetEstimator.com was founded with a clear mission: to make family financial planning accessible and manageable for everyone. We understand that managing family finances can be overwhelming, which is why we've developed comprehensive tools to help you plan your budget effectively.</p>
        
        <h2 className="text-3xl font-bold mb-6 mt-12">Our Commitment</h2>
        <p className="mb-4">We are dedicated to helping families achieve financial stability through better budgeting and planning. Our calculator considers various aspects of family life to ensure you get the most accurate and practical budget estimates possible.</p>
        
        <h2 className="text-3xl font-bold mb-6 mt-12">Why Choose Us</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Free, comprehensive budget planning tools</li>
          <li>Expert financial advice and resources</li>
          <li>User-friendly interface</li>
          <li>Regular updates based on economic changes</li>
          <li>Dedicated customer support</li>
        </ul>
      </div>
    </div>
  );
};

export default About;