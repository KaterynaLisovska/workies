import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <main className={`container container_center`}>
      <Outlet />
    </main>
  );
}

export default RootLayout;