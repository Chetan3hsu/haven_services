import React from 'react';

const Footer = () => {
    return (
        <div className="bg-emerald-900 p-10"
         style={{height: '600px ', width: '100%'}}>
            <div className="rounded-md border-2 border-white
             text-white text-center">
                <h1 className="text-6xl p-4">Unlock a new chapter-make</h1>
                <h1 className="text-6xl">home ownership make sense</h1>
                <div className="text-center"><br/><br/>
          <a href="https://www.google.com" >
            <button className="bg-green-700 align-center hover:bg-teal-900  text-white font-bold py-3 px-14  border rounded-md p-5"
            style ={ {height:" 70px",width:"200px"}}
            > Get a Demo</button>
          </a></div></div><br/><br/>
     <div className="flex justify-start items-center">
     <div className="text-white pr-20"
     >
    <h2 className="opacity-65 p-2"
     
    >We are Haven</h2>
      <ul>
       <a href="https://www.google.com" className="hover:underline"
        ><li>How it works</li></a>
       <a href="https://www.google.com" className="hover:underline"
        ><li>For Servicers </li></a>
       <a href="https://www.google.com" className="hover:underline" 
        ><li>For Subservicers </li></a>
       <a href="https://www.google.com" className="hover:underline"
        ><li>For Lenders </li></a>

      </ul>
    </div>
    <div className="text-white pr-20"
     >
    <h2 className="opacity-65 p-2">Support</h2>
        <ul>
         <a href="https://www.google.com" className="hover:underline"
         ><li>Security Compliance</li></a>
         <a href="https://www.google.com" className="hover:underline"
          ><li>How is Haven involved</li></a>
</ul>
    </div>
    <div className="text-white pr-20"
      >
    <h2 className="opacity-65 p-2">Company</h2>
        <ul>
         <a href="https://www.google.com" className="hover:underline"
          ><li>About Us</li></a>
         <a href="https://www.google.com"className="hover:underline"
          ><li>Pressroom </li></a>
         <a href="https://www.google.com"className="hover:underline"
          ><li>Careers</li></a>
</ul>
    </div>
<div className="text-white pr-20">
    <h2 className="opacity-65 p-2">Get the latest in customer retention</h2>
    <input
        type="text"
        placeholder="Enter your mail"
        className="p-2 rounded-md border-2 border-white bg-emerald-900 text-white placeholder-white"
        style={{ width: '100%', maxWidth: '300px' }}
    />
        <button className="bg-green-700 align-center hover:bg-teal-900  text-white font-bold py-3 px-14  border rounded-md p-10
         "> Subscribe</button><br/><br/>
    
</div>

 
            <div className="text-white pr-20">
                <h2 className="opacity-65 p-2">Social Media</h2>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:underline">Facebook</a></li>
                    <li><a href="#" className="hover:underline">Twitter</a></li>
                    <li><a href="#" className="hover:underline">LinkedIn</a></li>
                </ul>
            </div>
        </div>
        <div className="text-center text-white mt-8">
            <p>&copy; 2024 Haven. All rights reserved.</p>
        </div>
    </div>



      
       
    );
};
export default Footer;