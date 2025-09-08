import { BsArrowUpRightCircleFill } from 'react-icons/bs'

interface ProductCardProps {
  title: string
  price: string
  image: string
}

export default function ProductCard({ title, price, image }: ProductCardProps) {
  return (
    <div className='flex flex-col items-center gap-3 text-center '>
      <img src={image} alt={title} className='rounded-xl w-[310px]' />
      <h3 className='font-semibold text-white montserrat text-[24px]'>{title}</h3>
      <p className='font-bold text-yellow-300 montserrat text-[24px]'>{price}</p>

      <button className='flex items-center font-bold text-white border border-white rounded-full px-2 montserrat h-11'>
        <span className='mr-4'>Mua Ngay</span>
        <BsArrowUpRightCircleFill className='text-[30px]' />
      </button>
    </div>
  )
}
