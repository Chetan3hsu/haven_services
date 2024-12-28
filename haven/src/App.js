import Navbar from './Components/Navbar.jsx' ;
import Hero from './Components/Hero.jsx' ;
function App() {
  return (
    <div   style={{
      backgroundImage: `url("https://havenservicing.com/static/4d9df0801f6e52bb8a2410f7128ce171/c8733/haven-landscape-hero.webp")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',}}>
      <Navbar/><br/><br/><br/>
      <Hero/>
    </div>

    
  );

}

export default App;
