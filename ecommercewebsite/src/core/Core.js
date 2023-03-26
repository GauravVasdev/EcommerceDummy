import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../components/Home/Home'
import Men from '../components/Men/Men';
import Women from '../components/Women/Women';
import About from '../components/About/About';
import Header from '../components/Header/Header';

const core = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
  )
}

export default core
