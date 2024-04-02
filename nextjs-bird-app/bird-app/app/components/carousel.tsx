'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { ReactNode } from "react";

export default function Carousel(props: {children: ReactNode}) {
    const [emblaRef] = useEmblaCarousel();
    return (
        <div className="embla" ref={emblaRef}>
      <ul className="embla__container">{props.children}</ul>
      </div>
    )

}