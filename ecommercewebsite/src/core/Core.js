import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../components/Home/Home'
import Men from '../components/Men/Men';
import Women from '../components/Women/Women';
import About from '../components/About/About';
import Header from '../components/Header/Header';
import MyAccount from '../components/MyAccount/MyAccount';
import LostPassword from '../components/LostPassword/LostPassword';
import Contact from '../components/Contact/Contact';
import ErrorBoundary from './ErrorBoundary';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const core = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <ErrorBoundary>
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/about" element={<About />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/lostpassword" element={<LostPassword />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
    </ErrorBoundary>
    </QueryClientProvider>
  )
}

export default core
