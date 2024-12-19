import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { RouterProvider } from "react-router-dom";
import { routing } from "./routes/Routing";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <div class="ellipse"></div>
      <RouterProvider router={routing}>
        <LandingPage />
      </RouterProvider>
    </div>
  );
}

export default App;
