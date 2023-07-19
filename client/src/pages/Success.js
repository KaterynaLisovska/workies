import { Link } from "react-router-dom";

import { SlCard } from "@shoelace-style/shoelace/dist/react";
import "./Success.module.css";

const SuccessPage = () => {
  return (
    <>
      <SlCard className="form">
        <form className="centered">
          <h1>Successfully!</h1>
          <Link to="/">Home Page</Link>
        </form>
      </SlCard>
    </>
  );
};

export default SuccessPage;
