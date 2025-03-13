import React, { useState } from "react";
import "./national.css";

const national = [
  {
    name: "Taj Mahal, Agra",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Taj_Mahal%2C_Agra%2C_India_edit3.jpg",
    description: "A symbol of love, the Taj Mahal is one of the most famous monuments in the world.",
    price: "$500",
  },
  {
    name: "ISKCON Temple, Bangalore",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/ISKCON_Bangalore.jpg",
    description: "A grand temple dedicated to Lord Krishna, offering peace and spirituality.",
    price: "$200",
  },
  {
    name: "Golden Temple, Amritsar",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Golden_Temple_Amritsar%2C_Punjab%2C_India.jpg",
    description: "The holiest shrine in Sikhism, known for its stunning golden architecture.",
    price: "$400",
  },
  {
    name: "Mysore Palace, Mysore",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Mysore_Palace_Morning.jpg",
    description: "A royal palace known for its Indo-Saracenic architecture and grand celebrations.",
    price: "$350",
  },
];

const NationalDestinations = () => {
  const [search, setSearch] = useState("");

  const filteredDestinations = nationalDestinations.filter((destination) =>
    destination.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="national-container">
      <header className="header">Explore India's Best Destinations</header>
      
      <input
        type="text"
        className="search-bar"
        placeholder="Search destinations..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="destination-list">
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((destination, index) => (
            <div key={index} className="destination-card">
              <h2>{destination.name}</h2>
              <img src={destination.image} alt={destination.name} className="destination-image" />
              <p>{destination.description}</p>
              <p className="price">{destination.price}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No destinations found.</p>
        )}
      </div>

      <div className="links">
        <button className="register-btn">
          <a href="register.html">Register</a>
        </button>
        <a href="index.html" className="back-link">Back to Main Page</a>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Travel Explorer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default national;
