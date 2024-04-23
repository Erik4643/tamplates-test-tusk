import { BrowserRouter } from 'react-router-dom'

import { AppRouter } from './AppRouter'

export const Router = () => (
  <BrowserRouter>
    <AppRouter />
    {/* Admin Example */}
    {/* <AdminRouter /> */}
  </BrowserRouter>
)
