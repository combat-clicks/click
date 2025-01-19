import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'

export default function Products() {
  return (
    <div className="relative">
      <Container className="relative">
        <Navbar />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Our Products
          </h1>
          {/* Add your products content here */}
        </div>
      </Container>
    </div>
  )
} 