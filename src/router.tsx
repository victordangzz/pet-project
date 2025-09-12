import { useRoutes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import type { JSX } from 'react'
const SubLayout = lazy(() => import('./layouts/sub'))
const MainLayout = lazy(() => import('./layouts/main'))
const HomePage = lazy(() => import('./pages/home'))
const CoursePage = lazy(() => import('./pages/course'))
const StorePage = lazy(() => import('./pages/store'))
const LoginPage = lazy(() => import('./pages/auth').then((module) => ({ default: module.LoginPage })))
const RegisterPage = lazy(() => import('./pages/auth').then((module) => ({ default: module.RegisterPage })))
const CheckYourMail = lazy(() => import('./pages/check-your-mail'))
const ForgotPassword = lazy(() => import('./pages/forgot-password'))
const VerifyForgotPassword = lazy(() => import('./pages/verify-forgot-password'))
const ResetPassword = lazy(() => import('./pages/reset-password'))
const VerifyEmailPage = lazy(() => import('./pages/verify_email/VerifyEmailPage'))
const ProfilePage = lazy(() => import('./pages/profile'))
const BlogPage = lazy(() => import('./pages/blog'))
const MaintenancePage = lazy(() =>
  import('./pages/maintenance').then((module) => ({ default: module.MaintenancePage }))
)
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
        },
        {
          path: '/login',
          element: Loadable(LoginPage)
        },
        {
          path: '/register',
          element: Loadable(RegisterPage)
        },
        {
          path: '/check-your-mail',
          element: Loadable(CheckYourMail)
        },
        {
          path: '/verify-email',
          element: Loadable(VerifyEmailPage)
        },
        {
          path: '/forgot-password',
          element: Loadable(ForgotPassword)
        },
        {
          path: '/verify-forgot-password',
          element: Loadable(VerifyForgotPassword)
        },
        {
          path: '/reset-password',
          element: Loadable(ResetPassword)
        },
        {
          path: '/profile',
          element: Loadable(ProfilePage)
        },

        {
          path: '/maintenance',
          element: Loadable(MaintenancePage)
        }
      ]
    },
    {
      path: '/blog',
      element: <SubLayout />,
      children: [
        {
          path: '',
          element: Loadable(BlogPage)
        }
      ]
    }
  ])
}

export default Router
