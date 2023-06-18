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

const Core = (props) => {
  console.log(window.location.pathname);
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <ErrorBoundary>
    <RecoilRoot>
          {props.children}
        </RecoilRoot>
        </ErrorBoundary>
    </BrowserRouter>
    <ReactQueryDevtools/>
    <ToastContainer />
    </QueryClientProvider>
  )
}


export default React.memo(Core)
