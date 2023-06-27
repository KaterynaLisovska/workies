import { Outlet } from "react-router-dom";

import "../layout.css";

function RootLayout() {
  return (
    <div className="backcolor">
      <main className={`container container_center`}>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;