import HeroSection from '@/components/home/hero-section'
import CourseSlider from '@/components/home/course-slider/CourseSlider'
import CourseBenefits from '@/components/home/benefits-section'
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
