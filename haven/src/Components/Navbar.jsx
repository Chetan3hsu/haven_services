import React from 'react';

const Navbar = () => { 

    return (
       


         <header>
              <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  <div className="flex items-center">
                    <img src={"https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/xhhlre9vnzxvmqnijk8s"} alt="Haven Servicing Logo" className="h-10 w-auto" />
                    <h1 className="text-xl text-green-800 font-semibold ml-4">Haven </h1>
                  </div>
                  <div className="hidden md:flex space-x-8">
                    <a href="#about" className="text-gray-700 hover:text-gray-900 font-semibold">How it works</a>
                    <a href="#services" className="text-gray-700 hover:text-gray-900 font-semibold">Use cases</a>
                    <a href="#contact" className="text-gray-700 hover:text-gray-900 font-semibold">Company</a>
                  </div>
                  <div className="hidden md:flex items-center space-x-4">
                    <a href="#signup" className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800">Get a Demo</a>
                  </div>
                
                </div>
              </nav>
            </header>
          );
        };
        
        export default Navbar;


    








    

        
