import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'
import routes from '../../routes'

const DefaultComponent = () => {
  return (
    <>
        <Header />
        <Suspense>
        <Routes>
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
    </>
  )
}

export default DefaultComponent
