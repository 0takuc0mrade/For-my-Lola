'use client'

import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'

const images = [
  "/images/gallery/IMG-20251101-WA0043.jpg",
  "/images/gallery/IMG-20251101-WA0035.jpg",
  "/images/gallery/IMG-20251101-WA0012.jpg",
  "/images/gallery/IMG-20251101-WA0010.jpg",
  "/images/gallery/IMG-20251031-WA0785.jpg",
  "/images/gallery/IMG-20250513-WA0125.jpg",
  "/images/gallery/IMG-20250513-WA0047.jpg",
  "/images/gallery/IMG-20250513-WA0044.jpg",
  "/images/gallery/IMG-20251106-WA0027.jpg",
  "/images/gallery/IMG-20251107-WA0003.jpg",
  "/images/gallery/IMG-20251107-WA0004.jpg",
  "/images/gallery/IMG-20251107-WA0006.jpg",
  "/images/gallery/IMG-20251107-WA0007.jpg",
  "/images/gallery/IMG-20251107-WA0008.jpg",
  "/images/gallery/IMG-20251107-WA0010.jpg",
  "/images/gallery/IMG-20251107-WA0011.jpg",
  "/images/gallery/IMG-20251107-WA0020.jpg",
  "/images/gallery/IMG-20251107-WA0022.jpg",
  "/images/gallery/IMG-20251107-WA0027.jpg",
  "/images/gallery/IMG-20251107-WA0028.jpg",
  "/images/gallery/IMG-20251107-WA0033.jpg",
  "/images/gallery/IMG-20251107-WA0068.jpg",
  "/images/gallery/IMG-20251107-WA0072.jpg",
  "/images/gallery/IMG-20251107-WA0078.jpg",
  "/images/gallery/IMG-20251107-WA0080.jpg",
  "/images/gallery/IMG-20251107-WA0091.jpg",
  "/images/gallery/IMG-20251107-WA0092.jpg",
  "/images/gallery/IMG-20251107-WA0097.jpg",
  "/images/gallery/IMG-20251107-WA0098.jpg",
  "/images/gallery/IMG-20251108-WA0037.jpg",
  "/images/gallery/IMG-20251108-WA0039.jpg",
  "/images/gallery/IMG-20251108-WA0040.jpg",
  "/images/gallery/IMG-20251108-WA0041.jpg",
  "/images/gallery/IMG-20251108-WA0047.jpg",
  "/images/gallery/IMG-20251108-WA0063.jpg",
  "/images/gallery/IMG-20251108-WA0065.jpg",
  "/images/gallery/IMG-20251108-WA0066.jpg",
  "/images/gallery/IMG-20251108-WA0069.jpg",
  "/images/gallery/IMG-20251108-WA0070.jpg",
  "/images/gallery/IMG-20251108-WA0071.jpg",
  "/images/gallery/IMG-20251108-WA0072.jpg",
  "/images/gallery/IMG-20251108-WA0073.jpg",
  "/images/gallery/IMG-20251108-WA0074.jpg",
  "/images/gallery/IMG-20251108-WA0075.jpg",
  "/images/gallery/IMG-20251108-WA0076.jpg",
  "/images/gallery/IMG-20251108-WA0077.jpg",
  "/images/gallery/IMG-20251108-WA0078.jpg",
  "/images/gallery/IMG-20251108-WA0079.jpg",
  "/images/gallery/IMG-20251108-WA0080.jpg",
]

export function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext()
      }, 3000) // Change slide every 3 seconds

      return () => clearInterval(interval)
    }
  }, [emblaApi])

  return (
    <section className="py-20 bg-stone-50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-stone-800 mb-12">
          Our Memories
        </h2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((src, index) => (
              <div className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4" key={index}>
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] duration-300">
                  <Image
                    src={src}
                    alt={`Memory ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-stone-500 mt-8 italic">
          Swipe to see more moments
        </p>
      </div>
    </section>
  )
}
