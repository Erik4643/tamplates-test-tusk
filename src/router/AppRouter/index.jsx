import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from 'layouts/app-layout'
import Home from 'pages/Home'
import PageLayout from 'pages/PageLayout'
import SignatureTemplate from 'pages/SignatureTemplate'
import { v4 as uuid } from 'uuid'

import { appRoutes } from './routes'

export const AppRouter = () => {
  const appPages = [
    { path: appRoutes.home, component: <Home /> },
    { path: appRoutes.pageLayout, component: <PageLayout /> },
    { path: appRoutes.signatureTemplate, component: <SignatureTemplate /> }
  ]

  return (
    <Routes>
      <Route element={<Layout />}>
        {appPages.map(({ path, component }) => (
          <Route path={path} element={component} key={uuid()} />
        ))}
      </Route>
    </Routes>
  )
}
