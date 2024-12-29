import React from 'react' ;
import Navbar from './Components/Navbar' ;  
import Footer from './Components/Footer' ;

function Demo() {
    return (
        <div>
        <Navbar/> <br/><br/> 
        
        <div > 
            <div className="text-center" style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}} >
            <pre className="text-5xl font-semibold opacity-80 font-serif p-5">Experience the Haven
  platform first-hand</pre>
            <pre className="font-serif text-2xl">The easiest way for lenders and servicers to build
  loyalty and retain customers starts with a demo.</pre><br/><br/>
          <ul>
          <li><img src="https://havenservicing.com/static/9b2bdc6715200ef5163ce0b82f85a7e9/b2228/meaningful.webp" className="w-25 h-35 m-auto" ></img> Engage meaningfully</li>
          <li><img src="https://havenservicing.com/static/8b798206f68f6cf6b61aa95b00a8a006/28441/understand.webp" className="w-25 h-35 m-auto" ></img>Understand your customers</li>
          <li><img src="https://havenservicing.com/static/fe07b6d9da313e47cb0c6077f484c2e3/1c32c/customize.webp" className="w-25 h-35 m-auto" ></img>Customize offers, increase retention</li>
         </ul>
         </div>
         
         <div className="text-center" style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}} >
             <form>
                <h1 className="text-5xl font-semibold opacity-80 font-serif p-5">Get in touch</h1>
                <label>Name :</label><input type="text"></input>
                <label>Email :</label><input type="text"></input>
                <label>Phone :</label><input type="text"></input>
                <label>Company :</label><input type="text"></input>
                <label>How did you hear about us :</label><input type="text"></input>
                <label>How can we help you :</label><input type="text"></input>
                <div className="flex items-center">
                  <input id="terms" type="checkbox" className="rounded-full h-4 w-4 border-gray-300" />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  I accept Haven’s Privacy Policy and agree to receive promotional messages from Haven about its products and services. You can unsubscribe at any time by clicking on the link at the bottom of our emails.
            
                  </label>
                </div><br/><br/>
                <button className="bg-green-700 align-center hover:bg-teal-900  text-white font-bold py-3 px-14  border rounded-md "> Get a Demo</button>

                


             </form>
       

         </div>  
      
         <Footer/>   

</div>
        </div>
         
    );  
}

export default Demo ;