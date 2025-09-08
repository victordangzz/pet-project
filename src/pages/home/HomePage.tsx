import HeroSection from '@/components/hero-section'
import CourseSlider from '@/components/course-slider'
import CourseBenefits from '@/components/benefits-section'
import HotDeals from '@/components/hot-deals/HotDeals'

const HomePage = () => {
  return (
    <div className='w-full min-h-screen '>
      <HeroSection />
      <CourseSlider />
      <CourseBenefits />
      <HotDeals />
    </div>
  )
}

export default HomePage
