import { Outlet } from 'react-router-dom'

export const AdminLayout = () => (
  <>
    <div>header</div>
    <Outlet />
    <div>footer</div>
  </>
)
