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
      className={`flex flex-col justify-center text-white p-6 ${className}`}
      style={{ backgroundColor }}
    >
      <div className='flex flex-col h-full justify-center'>
        <div className='flex w-full justify-start items-center gap-2 mb-3 px-1'>
          <BsArrowUpRightCircleFill size={24} />
          <h3 className='text-xl font-bold mx-auto'>{title}</h3>
        </div>
        <p className='text-center text-[14px] montserrat line-clamp-3 max-w-full overflow-hidden text-ellipsis flex-1'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default InfoBox
