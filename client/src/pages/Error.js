import { Link } from "react-router-dom";
import { SlCard } from "@shoelace-style/shoelace/dist/react";

import "../App.css";

const ErrorPage = () => {
  return (
    <>
      <SlCard className="form">
        <form>
          <div className="column">
            <span>404 Page not found</span>
            <Link to="/">Go to Home Page</Link>
          </div>
        </form>
      </SlCard>
    </>
  );
};

export default ErrorPage;
