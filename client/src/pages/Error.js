import { Link } from "react-router-dom";
import { SlCard } from "@shoelace-style/shoelace/dist/react";

import classes from "./Error.module.css";

const ErrorPage = () => {
  return (
    <>
      <SlCard className={classes.error_page_form}>
        <form>
          <div className="container_column">
            <span>404 Page not found</span>
            <Link to="/">Go to Home Page</Link>
          </div>
        </form>
      </SlCard>
    </>
  );
};

export default ErrorPage;
