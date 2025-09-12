import Footer from '@/components/footer'
import Header from '@/components/header'
import { Outlet } from 'react-router-dom'

const SubLayout = () => {
  return (
    <>
      <Header variant='sub' />
      <Outlet />
      <Footer />
    </>
  )
}

export default SubLayout
