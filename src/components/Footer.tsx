import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Back to top */}
      <div 
        className="bg-gray-800 py-4 text-center cursor-pointer hover:bg-gray-700 transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="text-sm">Back to top</span>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Get to Know Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get to Know Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/about" className="hover:underline">About Amazon</Link></li>
              <li><Link to="/careers" className="hover:underline">Careers</Link></li>
              <li><Link to="/press" className="hover:underline">Press Releases</Link></li>
              <li><Link to="/accessibility" className="hover:underline">Accessibility</Link></li>
              <li><Link to="/sustainability" className="hover:underline">Sustainability</Link></li>
            </ul>
          </div>

          {/* Make Money with Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Make Money with Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/sell" className="hover:underline">Sell products on Amazon</Link></li>
              <li><Link to="/amazon-business" className="hover:underline">Amazon Business</Link></li>
              <li><Link to="/affiliate" className="hover:underline">Become an Affiliate</Link></li>
              <li><Link to="/advertise" className="hover:underline">Advertise Your Products</Link></li>
              <li><Link to="/self-publish" className="hover:underline">Self-Publish with Us</Link></li>
            </ul>
          </div>

          {/* Amazon Payment Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Amazon Payment Products</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/amazon-rewards" className="hover:underline">Amazon Rewards Visa</Link></li>
              <li><Link to="/amazon-store-card" className="hover:underline">Amazon Store Card</Link></li>
              <li><Link to="/amazon-secured-card" className="hover:underline">Amazon Secured Card</Link></li>
              <li><Link to="/business-card" className="hover:underline">Amazon Business Card</Link></li>
              <li><Link to="/currency-converter" className="hover:underline">Currency Converter</Link></li>
            </ul>
          </div>

          {/* Let Us Help You */}
          <div>
            <h3 className="font-bold text-lg mb-4">Let Us Help You</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/covid-19" className="hover:underline">Amazon and COVID-19</Link></li>
              <li><Link to="/account" className="hover:underline">Your Account</Link></li>
              <li><Link to="/orders" className="hover:underline">Your Orders</Link></li>
              <li><Link to="/shipping" className="hover:underline">Shipping Rates & Policies</Link></li>
              <li><Link to="/returns" className="hover:underline">Returns & Replacements</Link></li>
              <li><Link to="/help" className="hover:underline">Help</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">amazon</span>
          </Link>

          {/* Language and country selector */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 border border-gray-600 px-3 py-1 rounded hover:bg-gray-800 transition-colors">
              <span>🌐</span>
              <span className="text-sm">English</span>
            </button>
            <button className="flex items-center space-x-2 border border-gray-600 px-3 py-1 rounded hover:bg-gray-800 transition-colors">
              <span>💵</span>
              <span className="text-sm">USD - U.S. Dollar</span>
            </button>
            <button className="flex items-center space-x-2 border border-gray-600 px-3 py-1 rounded hover:bg-gray-800 transition-colors">
              <span>🇺🇸</span>
              <span className="text-sm">United States</span>
            </button>
          </div>
        </div>

        {/* Copyright and links */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-wrap justify-center space-x-6 text-xs text-gray-400 mb-4">
            <Link to="/conditions" className="hover:underline">Conditions of Use</Link>
            <Link to="/privacy" className="hover:underline">Privacy Notice</Link>
            <Link to="/consumer-health" className="hover:underline">Consumer Health Data</Link>
            <Link to="/interest-ads" className="hover:underline">Your Ads Privacy Choices</Link>
          </div>
          <p className="text-center text-xs text-gray-400">
            © 1996-2025, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;