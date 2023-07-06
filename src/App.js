import './App.css';
// import Services from './components/Services.tsx';
import Header from './components/Header.tsx';
import Slogan from './components/Slogan.tsx';
import Performance from './components/Performance.tsx';
import Action from './components/Action.tsx';
import Instagram from './components/Instagram.tsx';
import Reliability from './components/Reliability.tsx';
import Pricing from './components/Pricing.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import Statement from './components/Statement.tsx';

function App() {
  return (
    <>
      <Header/>
      <Slogan/>
      <Performance/>
      <Statement/>
      <Action/>
      {/* <Instagram/>
      <Reliability/>
      <Pricing/>
      <Contact/> */}
      <Footer/>
    </>
  );
}

export default App;
