'use client'

import useEmblaCarousel from 'embla-carousel-react'
import PhotoCard from './photo-card';

export default function Carousel({children}) {
    const [emblaRef] = useEmblaCarousel();
    return (
        <div className="embla" ref={emblaRef}>
      <ul className="embla__container">{children}</ul>
      </div>
    )

}