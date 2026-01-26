import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { searchService } from '../../services/searchService';
import FeedbackForm from '../../components/feedbackForm';

import Header from '../../components/header';
import Footer from '../../components/Footer';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const searchPayload = location.state;
  const searchQuery = searchPayload?.query || new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!searchPayload && !searchQuery) return;
      
      setLoading(true);
      try {
        const response = await searchService(searchPayload || { query: searchQuery });
        const result = response.data;
        
        if (result && result.product) {
          setSearchResults([{
            id: result.product.product_id,
            name: result.product.name,
            brand: result.product.brand,
            price: `₹${result.product.price.toLocaleString()}`,
            explanation: result.explanation,
            rating: 4.5,
            image: result.product.image || '📱', 
            amazonLink: result.product.amazon_link,
            flipkartLink: result.product.flipkart_link
          }]);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
        setSearchResults([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchSearchResults();
  }, [searchPayload, searchQuery]);

  return (
    <div className="min-h-screen bg-secondary font-sans selection:bg-purple-200">
      <Header />
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none -z-10">
         <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-4 md:py-8">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-4 md:mb-6 text-sm md:text-base"
        >
          <div className="p-2 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all">
            <ArrowLeftIcon className="w-5 h-5" />
          </div>
          <span className="font-medium">Back to Search</span>
        </button>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 animate-pulse">
            <div className="w-24 h-24 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-6 relative">
              <div className="absolute inset-0 border-4 border-indigo-100 rounded-full border-t-primary animate-spin"></div>
              <span className="text-3xl">🤖</span>
            </div>
            <h2 className="text-2xl font-bold text-dark text-center">Analysing 1000+ options...</h2>
            <p className="text-gray-500 mt-2">Finding the perfect match for your budget</p>
          </div>
        ) : searchResults.length > 0 ? (
          <div className="space-y-10 animate-fade-in-up">
            <div className="text-center">
              <h1 className="text-2xl md:text-4xl font-extrabold text-dark mb-1 md:mb-2">
                We found the <span className="text-primary">Perfect Match</span>
              </h1>
              <p className="text-gray-500">Based on your preference for <span className="font-semibold text-dark">{searchPayload?.priority || searchQuery}</span></p>
            </div>

            {searchResults.map((product) => (
              <div key={product.id} className="relative">
                 {/* Hero Card */}
                 <div className="bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-5 md:p-10 border border-indigo-50 shadow-xl md:shadow-2xl shadow-indigo-200/40 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-500">
                    
                    {/* Glowing Effect */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl group-hover:opacity-75 transition-opacity"></div>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center relative z-10">
                      {/* Product Image / Placeholder */}
                      <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl aspect-[4/3] flex items-center justify-center p-8 border border-gray-100 shadow-inner relative group-hover:shadow-md transition-shadow">
                        {product.image ? (
                           <img src={product.image} alt={product.name} className="w-full h-full object-contain drop-shadow-xl mix-blend-multiply" />
                        ) : (
                           <div className="flex flex-col items-center justify-center text-gray-300">
                              <span className="text-5xl md:text-6xl font-bold opacity-20 uppercase tracking-widest">{product.brand?.[0] || 'A'}</span>
                              <span className="text-xs mt-2 font-medium tracking-wider uppercase opacity-40">{product.brand || 'AskSrava'}</span>
                           </div>
                        )}
                      </div>

                      {/* Product Details */}
                      <div className="space-y-6">
                         <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                Best Choice
                              </span>
                              <div className="flex items-center text-amber-400 text-sm font-bold gap-1">
                                <span>★</span><span>{product.rating}</span>
                              </div>
                            </div>
                            <h2 className="text-xl md:text-3xl font-bold text-dark leading-tight">{product.name}</h2>
                            <p className="text-xl md:text-2xl font-bold text-primary mt-1 md:mt-2">{product.price}</p>
                         </div>

                         <div className="bg-indigo-50/50 rounded-xl p-5 border border-indigo-100 relative">
                            {/* Quote Icon */}
                            <div className="absolute -top-3 -left-2 bg-indigo-100 text-indigo-600 rounded-full p-1.5 shadow-sm">
                               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 16.6569 20.6739 18 19.017 18H16.017C15.4647 18 15.017 18.4477 15.017 19V21L14.017 21ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166C6.46432 18 6.0166 18.4477 6.0166 19V21L5.0166 21Z"></path></svg>
                            </div>
                            <h3 className="font-semibold text-indigo-900 mb-2 ml-4">Why we picked this?</h3>
                            <p className="text-gray-700 text-sm leading-relaxed italic">"{product.explanation}"</p>
                         </div>

                         <div className="flex flex-wrap gap-3">
                            {product.amazonLink && (
                              <a href={product.amazonLink} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px] flex items-center justify-center gap-2 bg-[#FF9900] hover:bg-[#ffad33] text-white py-3.5 px-4 rounded-xl font-bold shadow-lg shadow-orange-200 transition-all hover:-translate-y-1 group">
                                <span>Amazon</span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                              </a>
                            )}

                            {product.flipkartLink && (
                              <a href={product.flipkartLink} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px] flex items-center justify-center gap-2 bg-[#2874F0] hover:bg-[#4085f3] text-white py-3.5 px-4 rounded-xl font-bold shadow-lg shadow-blue-200 transition-all hover:-translate-y-1 group">
                                <span>Flipkart</span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                              </a>
                            )}
                         </div>
                      </div>
                    </div>
                 </div>
              </div>
            ))}

          
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl shadow-xl border border-gray-100">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
               <span className="text-3xl grayscale">🔍</span>
            </div>
            <h2 className="text-xl font-bold text-dark mb-2">No results found</h2>
            <p className="text-gray-500 mb-6">We couldn't find a perfect match for "{searchQuery}"</p>
            <button 
              onClick={() => navigate('/')}
              className="bg-primary text-white px-8 py-3 rounded-xl hover:bg-indigo-700 transition-all font-semibold shadow-lg shadow-primary/30"
            >
              Try Different Search
            </button>
          </div>
        )}
      </main>
      
      {!loading && <Footer />}
    </div>
  );
};

export default SearchResults;
