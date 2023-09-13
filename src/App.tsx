import "./App.css";
import ListingPoki from "./ListingPoki";
import { useState, useEffect } from "react";
import axios from "axios";
// import React, { lazy, Suspense } from 'react';

const App = () => {
  const [coinsData, setCoinsData] = useState([]);
  useEffect(() => {
    apiCall();
    console.log(coinsData, "hello");
  }, []);

  const apiCall = async () => {
    const response = await axios.get("https://api.pokemontcg.io/v2/cards/");
    setCoinsData(response.data.data);
  };

  return (
    <>
      <div className="Heading">
        <h1> Hello & Welcome to Pagination </h1>
      </div>
      <ListingPoki coinsData={coinsData} />
    </>
  );
};

export default App;
