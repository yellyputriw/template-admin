import { Routes as BaseRoutes, Route } from 'react-router-dom'

import NotFound from '@components/NotFound'
import Home from '@pages/home'

export const Routes = () => {
  return (
    <BaseRoutes>
      <Route element={<Home />} path="/" />
      <Route element={<NotFound />} path="*" />
    </BaseRoutes>
  )
}
