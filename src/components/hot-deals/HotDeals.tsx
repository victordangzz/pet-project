import Sidebar from './Sidebar'
import ProductCard from './ProductCard'
import { productsData } from '../../data/products'

export default function HotDeals() {
  const products = productsData
  return (
    <section className='bg-[#FF80A9] p-10 hidden lg:grid grid-cols-[25%_75%] gap-10 md:px-20 lg:px-30 relative group overflow-hidden'>
      {/* Overlay khi hover */}
      <div className='absolute inset-0 bg-black/30 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10'>
        <h2 className='text-white text-6xl font-bold uppercase tracking-wider'>Coming Soon</h2>
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Products */}
      <div className='grid grid-cols-3 gap-6'>
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  )
}
