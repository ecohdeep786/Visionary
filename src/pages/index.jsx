import Layout from "./Layout.jsx";

import Home from "./Home";
import Landing from "./Landing";

import Students from "./Students";

import Educators from "./Educators";

import Professionals from "./Professionals";

import Parents from "./Parents";

import Download from "./Download";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    Students: Students,
    
    Educators: Educators,
    
    Professionals: Professionals,
    
    Parents: Parents,
    
    Download: Download,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Landing />} />
                <Route path="/students" element={<Landing />} />
                <Route path="/educators" element={<Landing />} />
                <Route path="/professionals" element={<Landing />} />
                <Route path="/parents" element={<Landing />} />
                <Route path="/download" element={<Landing />} />
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}