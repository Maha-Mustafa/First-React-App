import React from 'react';
import './App.css';
import CardItem from './components/cards/CardItem';
import cardData from './components/cards/cardData';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Showcase from './components/showcase/Showcase';

function App() {
  const cardItems = cardData.map((item)=>(
    <CardItem key={item.id} item={item}/>
  ));
  return (
    <>
      <Navbar />
      <Showcase/>
      <div className="App">
        {/* <CardItem/> */}
        <div className="info-card">{cardItems}</div>
      </div>
      <Footer />
    </>
  );
}
export default App;