import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { scrollTop } from 'utils/helpers'

import Header from 'components/Header'

export const Layout = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    scrollTop(100)
  }, [pathname])

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
