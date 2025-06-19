import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, Heart, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Header: React.FC = () => {
  const { state, logout } = useApp();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    navigate('/');
  };

  const cartItemsCount = state.cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-gray-900 text-white">
      {/* Top banner */}
      <div className="bg-gray-800 text-center py-2 text-sm">
        <p>Free shipping on orders over $35 • Holiday deals available now</p>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-orange-500 p-2 rounded">
              <Menu className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold">amazon</span>
          </Link>

          {/* Delivery location */}
          <div className="hidden md:flex items-center space-x-1 text-sm">
            <MapPin className="w-4 h-4" />
            <div>
              <p className="text-gray-300">Deliver to</p>
              <p className="font-semibold">New York 10001</p>
            </div>
          </div>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Amazon"
                className="w-full px-4 py-2 pl-4 pr-12 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 bottom-0 px-4 bg-orange-500 hover:bg-orange-600 rounded-r-md transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Right section */}
          <div className="flex items-center space-x-6">
            {/* Language selector */}
            <div className="hidden md:flex items-center space-x-1 text-sm">
              <span>🇺🇸</span>
              <span>EN</span>
            </div>

            {/* User account */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-1 hover:bg-gray-800 px-2 py-1 rounded transition-colors"
              >
                <User className="w-5 h-5" />
                <div className="text-left text-sm hidden md:block">
                  <p className="text-gray-300">Hello, {state.auth.user?.name || 'Sign in'}</p>
                  <p className="font-semibold">Account & Lists</p>
                </div>
              </button>

              {/* User dropdown */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50">
                  {state.auth.isAuthenticated ? (
                    <>
                      <Link
                        to="/account"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        Your Account
                      </Link>
                      <Link
                        to="/orders"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        Your Orders
                      </Link>
                      <Link
                        to="/wishlist"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        Your Wishlist
                      </Link>
                      {state.auth.user?.role === 'admin' && (
                        <Link
                          to="/admin"
                          className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Admin Panel
                        </Link>
                      )}
                      <hr className="my-1" />
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/register"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        Create Account
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="flex items-center space-x-1 hover:bg-gray-800 px-2 py-1 rounded transition-colors"
            >
              <Heart className="w-5 h-5" />
              <div className="text-left text-sm hidden md:block">
                <p className="text-gray-300">Returns</p>
                <p className="font-semibold">& Orders</p>
              </div>
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="flex items-center space-x-1 hover:bg-gray-800 px-2 py-1 rounded transition-colors relative"
            >
              <div className="relative">
                <ShoppingCart className="w-6 h-6" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                    {cartItemsCount > 99 ? '99+' : cartItemsCount}
                  </span>
                )}
              </div>
              <span className="font-semibold hidden md:block">Cart</span>
            </Link>
          </div>
        </div>

        {/* Navigation categories */}
        <nav className="border-t border-gray-700 py-2">
          <div className="flex items-center space-x-6 text-sm">
            <Link to="/category/electronics" className="hover:underline">Electronics</Link>
            <Link to="/category/fashion" className="hover:underline">Fashion</Link>
            <Link to="/category/home-kitchen" className="hover:underline">Home & Kitchen</Link>
            <Link to="/category/sports-outdoors" className="hover:underline">Sports & Outdoors</Link>
            <Link to="/category/books" className="hover:underline">Books</Link>
            <Link to="/deals" className="hover:underline text-orange-400">Today's Deals</Link>
            <Link to="/prime" className="hover:underline text-blue-400">Prime</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;