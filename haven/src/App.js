import Navbar from './Components/Navbar.jsx' ;
import Hero from './Components/Hero.jsx' ;
import Image from './Components/Image.jsx' ;  
import Division from './Components/Division.jsx' ;
import Content from './Components/Content.jsx' ;
import Card1 from './Components/Card1.jsx' ;  
import Content2 from './Components/Content2.jsx' ;
import Content3 from './Components/Content3.jsx' ;  
import Cards3 from './Components/Cards3.jsx' ;
import Slast from './Components/Slast.jsx' ;
import Footer from './Components/Footer.jsx' ;
function App() {
  return (
    <div>
      <div style={{
        backgroundImage: `url("https://havenservicing.com/static/4d9df0801f6e52bb8a2410f7128ce171/c8733/haven-landscape-hero.webp")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',}}>
        <Navbar/><br/><br/><br/>
        <Hero/>
      </div> 
      <Image/><br/><br/>
      <Division/><br/><br/>
      <Content/><br/><br/>
      <Card1/><br/><br/> 
      <Content2/><br/><br/>
      <Content3/><br/><br/>
      <Cards3/><br/><br/>
      <Slast/><br/><br/><br/><br/>
      <Footer/>
    </div>

    
  );

}

export default App;
