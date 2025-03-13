import React, { useState } from "react";
import "./international.css";

const international = () => {
  const [search, setSearch] = useState("");

  const destinations = [
    {
      name: "Paris, France",
      img: "https://149990825.v2.pressablecdn.com/wp-content/uploads/2023/09/Paris1.jpg",
      description: "Experience the romance of the city of lights with its iconic landmarks and exquisite cuisine.",
      price: "$6000"
    },
    {
      name: "Maldives",
      img: "https://lh5.googleusercontent.com/p/AF1QipML1hCHt74ry3frkJ7nZP4YVbH9FGgrmAfHERde=w675-h390-n-k-no",
      description: "Relax on white sandy beaches and swim in crystal-clear waters in this tropical paradise.",
      price: "$7000"
    },
    {
      name: "Kyoto, Japan",
      img: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRsadBXHw3gVrkHuLf96cAzIxdTFIHYVM77Ohy-W1RaKkrCtoix4KGoHlctTZMB-ap52B1fwRqqAXEkOTw_UPSDDUzTCWblVJfECpwi6g",
      description: "Discover the ancient temples, traditional tea houses, and stunning cherry blossoms in Kyoto.",
      price: "$8000"
    },
    {
      name: "New York, USA",
      img: "https://lh3.googleusercontent.com/proxy/g-ljxmC9hqYpgbNRM2dhT4x30UsLIeylGkNR8j7xU75F3uXUHTB-hNcdjNy_H5_ZxgnbUxNUvne8TOZBcYT-BwoIQZgXwXlkyciXBHBPkNH2SavG7WhWDqT383O5PPPhie3Pw0fSRriv3TF8TEb8cu7JuH5-_Q=w540-h312-n-k-no",
      description: "Explore the bustling streets, skyscrapers, and cultural landmarks of the Big Apple.",
      price: "$6541"
    }
  ];

  const filteredDestinations = destinations.filter((dest) =>
    dest.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="header">Explore the World's Best Destinations</h1>
      <input
        type="text"
        placeholder="Search destinations..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className="destination-list">
        {filteredDestinations.map((dest, index) => (
          <div className="destination" key={index}>
            <h2>{dest.name}</h2>
            <img src={dest.img} alt={dest.name} />
            <p>{dest.description}</p>
            <p className="price">{dest.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default international;
