import React from 'react';
import "./styles.css";
import SentimentAnalysis from "./components/SentimentAnalysis";
import Menu from "./components/Menu";
import AverageRatings from "./components/AverageRating";
import Reviews from "./components/Reviews";
import WebsiteVisitors from "./components/WebsiteVisitors";

function App() {
  return (
    <div className="App">
      <section className="menu">
        <Menu />
      </section>
      <section className="top">
        <Reviews />
        <SentimentAnalysis />
        <AverageRatings />
        </section>
        <section className="visitors">
        <WebsiteVisitors />
      </section>

    </div>
  );
}

export default App;
