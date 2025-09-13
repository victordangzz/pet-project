import type { BenefitItemProps } from './types'
function BenefitItem({ icon, text, active, onClick }: BenefitItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center h-15  w-full lg:w-[28vw] gap-3 p-4 rounded-2xl shadow-md text-left transition border-2 border-white
        ${active ? 'bg-white text-secondary font-semibold' : 'bg-secondary hover:bg-secondary/90 text-white'}`}
    >
      <img src={icon} alt='' className='w-8 h-8 object-cover rounded' />
      <span>{text}</span>
    </button>
  )
}
export default BenefitItem
