import React, { Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useParams } from "react-router-dom";
import Header from '../components/Header/Header';
import ErrorBoundary from './ErrorBoundary';
import { QueryClient, QueryClientProvider } from "react-query";
import {ReactQueryDevtools} from  "react-query/devtools"
import { ToastContainer } from 'react-toastify';
import routes from '../routes'
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const Core = () => {
  console.log(window.location.pathname);
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <ErrorBoundary>
    <RecoilRoot>
        <Header />
        <Suspense>
        <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/about" element={<About />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/lostpassword" element={<LostPassword />} />
            <Route path="/contact" element={<Contact />} /> */}
            {
              routes.map((route,index)=> {
                return(
                  route.element && (
                    <Route key={index} name = {route.name} path={route.path} element={ <route.element />} />
                  )
                )
              })
            }
        </Routes>
        </Suspense>
        </RecoilRoot>
        </ErrorBoundary>
    </BrowserRouter>
    {/* <ReactQueryDevtools/> */}
    <ToastContainer />
    </QueryClientProvider>
  )
}


export default React.memo(Core)
