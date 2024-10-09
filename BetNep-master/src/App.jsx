import React from 'react';
import './App.css';
import logo from './betbot.png';
import videoFile from './phonevideo.mp4'; 
import phoneImage from './phonee.png';

function App() {

  const Card = ({ title, description }) => {
    return (
      <div className="card">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        
      </div>
    );
  };
  
  // Handler for Connect to Wallet button
  const connectToWallet = () => {
    alert('Connecting to Wallet...');
  };

  // Handler for Start a Bet button
  const startBet = () => {
    alert('Starting a new bet...');
  };

  return (
    <div className="landing-page">
      <header>

        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <div className="top-right-button">
          <button className="btn" onClick={connectToWallet}><span>Connect to Wallet</span></button>
        </div>
      </header>
      
      <main className="content-container">
        <div className="text-container">
          <h5 className="top-text" >Hi, Team Bet Bots</h5>
          <h1 className="center-text">Betting Chat Bot</h1>
          <p className="sub-text">
            "Welcome to <b>BetNep</b>, the ultimate betting companion on Telegram!
            Fast, secure, and intuitive. Place bets, track outcomes, and 
            enjoy the thrill of winning with ease. Start betting with <b>BetNep</b> today!"
          </p>
          <button className="bottom-btn" onClick={startBet}>START A BET</button>
        </div>

        <div className="video-container">
          <video className="video" autoPlay muted loop>
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </main>


      <section className="card-image-container">
        <div className="image-container">
          <img src={phoneImage} alt="Phone" className="phone-image" /> {/* Update the image source */}
        </div>
        <div className="card-container">
          <Card title="Feature 1" description="Description of feature 1" />
          <Card title="Feature 2" description="Description of feature 2" />
          <Card title="Feature 3" description="Description of feature 3" />
        </div>
      </section>
    </div>
  );
}

export default App;
