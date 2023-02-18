import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Banner from './components/Banner/Banner';
import Category from './components/Category/Category';
import CustomerReview from './components/CustomerReviews/CustomerReview';
import Header from './components/Header/Header';
import NewsTeller from './components/NewsTeller/NewsTeller';
import Offer from './components/Offer/Offer';
import PopularFood from './components/PopularFood/PopularFood';
import PopularDrinks from './components/PopulerDrinks/PopularDrinks';
import Reservation from './components/Reservation/Reservation';
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
      <Reservation></Reservation>
      <CustomerReview></CustomerReview>
      <NewsTeller></NewsTeller>
    </div>
  );
}

export default App;
