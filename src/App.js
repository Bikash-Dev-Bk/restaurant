import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Banner from './components/Banner/Banner';
import Category from './components/Category/Category';
import Header from './components/Header/Header';
import Offer from './components/Offer/Offer';
import PopularFood from './components/PopularFood/PopularFood';
import PopularDrinks from './components/PopulerDrinks/PopularDrinks';
import ShowCase from './components/Showcase/ShowCase';

function App() {
  return (
    <div className='Container'>
      <Header></Header>
      <Banner></Banner>
      <Offer></Offer>
      <AboutUs></AboutUs>
      <PopularDrinks></PopularDrinks>
      <PopularFood></PopularFood>
      <Category></Category>
      <ShowCase></ShowCase>
    </div>
  );
}

export default App;
