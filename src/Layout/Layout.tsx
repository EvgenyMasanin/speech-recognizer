import Header from 'components/Header'
import Main from 'components/ui/Main'
import React from 'react'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  )
}

export default Layout
