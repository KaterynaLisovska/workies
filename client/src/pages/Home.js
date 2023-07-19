import { SlCard } from "@shoelace-style/shoelace/dist/react";

import MainNavigation from "./MainNavigation";

const HomePage = () => {
  return (
    <>
      <SlCard className="form">
        <form className="centered">
          <MainNavigation />
          <h1>Home Page</h1>
        </form>
      </SlCard>
    </>
  );
};

export default HomePage;
