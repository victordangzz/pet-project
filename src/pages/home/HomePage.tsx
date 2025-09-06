import HeroSection from '@/components/hero-section'
import Header from '@/components/header/Header'
import CourseSlider from '@/components/course-slider'
import CourseBenefits from '@/components/benefits-section'
const HomePage = () => {
  return (
    <div className='w-full min-h-screen '>
      <Header />
      <HeroSection />
      <CourseSlider />
      <CourseBenefits />
    </div>
  )
}

export default HomePage
