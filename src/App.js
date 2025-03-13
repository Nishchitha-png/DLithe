import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import travelImage from "./travel.jpg";
import nationalImage from "./national.jpg";
import internationalImage from "./international.jpg";
import logo from "./Logo.jpg";
import "./App.css";



const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCookies, setShowCookies] = useState(true);



  return (
    <Router>
      <div className="container full-page">
        <motion.header 
          className="app-header" 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <div className="header-left">
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <img src={logo} alt="Logo" className="header-logo" />
          </div>
          <h1>N3 Travel App</h1>
          <div className="header-right">
            <Link to="/login" className="header-btn">Login</Link>
            <Link to="/register" className="header-btn">Register</Link>
          </div>
        </motion.header>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <button className="menu-close" onClick={() => setMenuOpen(false)}><FaTimes /></button>
          <ul className="nav-list">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/national" onClick={() => setMenuOpen(false)}>National</Link></li>
            <li><Link to="/international" onClick={() => setMenuOpen(false)}>International</Link></li>
            <li><Link to="/payment" onClick={() => setMenuOpen(false)}>Payment</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/account" onClick={() => setMenuOpen(false)}>Account</Link></li>
          </ul>
        </nav>

        <section className="image-section" style={{ marginTop: "50px" }}>
          <img src={travelImage} alt="Travel" className="travel-image large" />
        </section>
        <section className="offer-card">
      <h3>Save on Stays Worldwide</h3>
      <p>
        Start your year with a sense of adventure, saving <strong>15% or more</strong> with Early 2025 Deals.
      </p>
      <button className="offer-btn">Save up to 15% - Offer is Live</button>
    </section>
        <section className="travel-card">
  <p>
    From the moment you start planning your next destination to the time you
    return home, the right travel apps can make your journey smoother and less
    stressful. They help you locate reliable ATMs during a road trip, avoid
    tourist trap restaurants, and keep your itinerary well-organized. Travel
    apps also notify you of great flight deals and assist in finding last-minute
    hotel rooms, ensuring a hassle-free experience from start to finish.
  </p>
</section>
        <div className="scrolling-text-container">
          <div className="scrolling-text">Travel becomes a strategy for accumulating photographs.</div>
        </div>

        <section className="travel-sections">
  <div className="card">
    <img src={nationalImage} alt="National Travel" className="destination-image" />
    <Link to="/national">
      <p>Explore the best places to travel within your country.</p>
    </Link>
  </div>

  <div className="card">
    <img src={internationalImage} alt="International Travel" className="destination-image" />
    <Link to="/international">
      <p>Discover amazing travel experiences across the world.</p>
    </Link>
  </div>
</section>

 {/* About Us Section - Added After International Section */}
 <section className="about-us-card">
      <h2>About Us</h2>
      <p>
        Travel Explorer is your gateway to the most beautiful places on Earth.
        Whether you're looking for adventure, relaxation, or cultural
        experiences, we have something for everyone.
      </p>
      </section>
      <section className="why-choose-us">
  <h3>Why Choose Us?</h3>
  <div className="card-container">
    <div className="card">
      <h4>Curated Travel Guides</h4>
      <p>Hand-picked destinations and well-researched travel itineraries.</p>
    </div>
    <div className="card">
      <h4>Expert Recommendations</h4>
      <p>Get advice from seasoned travelers and local experts.</p>
    </div>
    <div className="card">
      <h4>Exclusive Deals</h4>
      <p>Save money with special offers on flights, hotels, and tours.</p>
    </div>
  </div>
</section>


<section className="why-travel">
  <h3>Why Travel?</h3>
  <ul>
    <li>🌍 Experience new cultures and traditions</li>
    <li>🧘 Escape the daily routine and refresh your mind</li>
    <li>🏞️ Discover breathtaking landscapes and hidden gems</li>
    <li>🤝 Meet new people and broaden your perspectives</li>
  </ul>
</section>

<section class="featured-destination">
  <h3>Featured Destination</h3>
  <p>
    <strong>Paris, France</strong> - Explore the City of Lights with its
    rich history, stunning architecture, and world-famous cuisine.
  </p>
</section>

<section className="book-now-section">
      <h3>Ready to Book Your Next Adventure?</h3>
      <p>Find the best deals on flights, hotels, and tours today!</p>
      <button className="book-now-btn">Book Now</button>
    </section>


        {showCookies && (
          <div className="cookies-banner">
            <p>This website uses cookies to enhance your experience.</p>
            <button className="cookies-accept" onClick={() => setShowCookies(false)}>Accept All Cookies</button>
            <button className="cookies-cancel" onClick={() => setShowCookies(false)}>Cancel</button>
          </div>
        )}

        <footer className="app-footer">
          <p>&copy; 2025 N3 Travel App. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
