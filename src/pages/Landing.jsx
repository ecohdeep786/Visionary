import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Home from "./Home";
import Students from "./Students";
import Educators from "./Educators";
import Professionals from "./Professionals";
import Parents from "./Parents";
import Download from "./Download";

// Helper to map path -> section id
const PATH_TO_ID = {
  '/students': 'students',
  '/educators': 'educators',
  '/professionals': 'professionals',
  '/parents': 'parents',
  '/download': 'download',
  '/home': 'home',
  '/': 'home'
};

export default function Landing() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    const id = PATH_TO_ID[path] || 'home';

    // Give React time to render lazy sections before scrolling
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // if no element, scroll to top for home
        if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 120);

    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <div>
      <div id="home">
        <Home />
      </div>

      <div id="students">
        <Students />
      </div>

      <div id="educators">
        <Educators />
      </div>

      <div id="professionals">
        <Professionals />
      </div>

      <div id="parents">
        <Parents />
      </div>

      <div id="download">
        <Download />
      </div>
    </div>
  );
}
