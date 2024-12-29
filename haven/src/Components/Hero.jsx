import React from 'react' ;
import { Link } from 'react-router-dom';
const Hero =() =>  {

    return(
        <>

           <div>
           
           <p className="text-center text-green-800 font-bold ">Meet Haven</p><br/>
           <h1 className="text-center text-6xl font-semibold  text-green-900" >Get the  most out of < br/> MSR</h1><br/>
          <p className="text-center text-green-800   text-2xl"   >Drive meaningful engagement via servicing — helping you understand,<br/> educate, and convert borrowers for mortgage & beyond.</p>
          <br/><br/><br/>
          <div className="text-center">
          
            <button className="bg-green-700 align-center hover:bg-teal-900  text-white font-bold py-3 px-14  border rounded-md "> Get a Demo</button>

          </div>
          </div>
       
        </>

    ) ;




}


export default Hero;