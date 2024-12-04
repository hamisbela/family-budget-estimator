import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">FamilyBudgetEstimator.com</h3>
            <p className="text-gray-300">Your trusted partner in family financial planning across the United States.</p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="text-gray-300">Email: info@familybudgetestimator.com</p>
            <p className="text-gray-300">Phone: (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} FamilyBudgetEstimator.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;