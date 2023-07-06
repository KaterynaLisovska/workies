import { SlCard } from "@shoelace-style/shoelace/dist/react";

import MainNavigation from "./MainNavigation";

import "../App.css";

const HomePage = () => {
  return (
    <>
      <SlCard className="form">
        <form className="text_position">
          <MainNavigation />
          <h1>Home Page</h1>
        </form>
      </SlCard>
    </>
  );
};

export default HomePage;
