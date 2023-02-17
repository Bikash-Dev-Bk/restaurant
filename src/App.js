import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Offer from './components/Offer/Offer';
import PopularDrinks from './components/PopulerDrinks/PopularDrinks';

function App() {
  return (
    <div className='Container'>
      <Header></Header>
      <Banner></Banner>
      <Offer></Offer>
      <AboutUs></AboutUs>
      <PopularDrinks></PopularDrinks>
    </div>
  );
}

export default App;
