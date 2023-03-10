import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Banner from './components/Banner/Banner';
import Category from './components/Category/Category';
import CustomerReview from './components/CustomerReviews/CustomerReview';
import Footer from './components/Footer/Footer';
import NewsTeller from './components/NewsTeller/NewsTeller';
import Offer from './components/Offer/Offer';
import PopularFood from './components/PopularFood/PopularFood';
import PopularDrinks from './components/PopulerDrinks/PopularDrinks';
import Reservation from './components/Reservation/Reservation';
import ShowCase from './components/Showcase/ShowCase';
import HeaderTop from './components/Header/HeaderTop/HeaderTop'
import Navbar from './components/Header/Navbar/Navbar';

function App() {
  return (
    <div className='Container'>
      <HeaderTop></HeaderTop>
      <Navbar></Navbar>
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
      <Footer></Footer>
    </div>
  );
}

export default App;
