import { useRoutes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import type { JSX } from 'react'
const MainLayout = lazy(() => import('./layouts/main'))
const HomePage = lazy(() => import('./pages/home'))
const CoursePage = lazy(() => import('./pages/course'))
const StorePage = lazy(() => import('./pages/store'))

const Loadable = (Component: React.LazyExoticComponent<() => JSX.Element>) => (
  <Suspense fallback={<div>Đang tải...</div>}>
    <Component />
  </Suspense>
)

const Router = () => {
  return useRoutes([
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          index: true,
          element: Loadable(HomePage)
        },
        {
          path: '/courses',
          element: Loadable(CoursePage)
        },
        {
          path: '/store',
          element: Loadable(StorePage)
        }
      ]
    }
  ])
}

export default Router
