import React from "react";
import Navbar from "./components/utility-components/Navbar"
import MainPage from "./components/pages/MainPage";
import HeadlineCard from "./components/pages/HeadlineCard";
import Food from "./components/pages/Food";
import Category from "./components/pages/Category";

function App() {
  return (

    <div>
      <Navbar />
      <MainPage />
      <HeadlineCard />
      <Food />
      <Category />
    </div>
  );
}

export default App;
