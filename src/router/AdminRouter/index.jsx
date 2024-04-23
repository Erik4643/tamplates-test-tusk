import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AdminLayout } from 'layouts/admin-layout'
import { appRoutes } from 'router/AppRouter/routes'
import { getStorage } from 'utils/helpers'
import { v4 as uuid } from 'uuid'

import { adminRoutes } from './routes'

export const AdminRouter = () => {
  const [isAuth, setIsAuth] = useState(true)

  const adminPages = []

  useEffect(() => {
    const credentials = getStorage('credentials')

    if (credentials) {
      setIsAuth(true)
    } else {
      setIsAuth(false)
    }
    // Example
  }, ['signInStatus', 'logOutStatus'])

  return (
    <Routes>
      {isAuth ? (
        <Route path={appRoutes.admin} element={<AdminLayout />}>
          {adminPages.map(({ path, component }) => (
            <Route key={uuid()} path={path} element={component} />
          ))}
          <Route path="*" element={<Navigate to="" />} />
        </Route>
      ) : (
        <>
          <Route
            path={appRoutes.admin + adminRoutes.login}
            element={<div>Sign in component</div>}
          />
          <Route path="admin/*" element={<Navigate to="" />} />
        </>
      )}
    </Routes>
  )
}
