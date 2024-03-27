'use client';

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import {getPhotos} from '@/lib/photos';
import PhotoCard from '../components/photo-card';

export default function PhotoStrip(){
    const [emblaRef] = useEmblaCarousel()
    const photos = getPhotos();

    return (
        <div className="embla" ref={emblaRef}>
      <ul className="embla__container">
        {photos.map(photo => (
            <li key={photo.id} className='embla__slide'>
                <PhotoCard {...photo}></PhotoCard>
            </li>
        ))}
      </ul>
    </div>
    )
}