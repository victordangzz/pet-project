import { BsArrowUpRightCircleFill } from 'react-icons/bs'

type InfoBoxProps = {
  title: string
  description: string
  backgroundColor: string
  className?: string
}

const InfoBox = ({ title, description, backgroundColor, className }: InfoBoxProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-white p-6 min-h-[120px] ${className}`}
      style={{ backgroundColor }}
    >
      <div className='flex flex-col items-center'>
        <div className='flex w-full justify-start items-center gap-2 mb-2 px-1'>
          <BsArrowUpRightCircleFill size={24} />
          <h3 className='text-xl font-bold mx-auto'>{title}</h3>
        </div>
        <p className='text-center text-[16px] '>{description}</p>
      </div>
    </div>
  )
}

export default InfoBox
