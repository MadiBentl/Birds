import React from 'react'

import {getPhotos} from '@/lib/photos';
import PhotoCard from '../components/photo-card';
import Carousel from './carousel';

export default function PhotoStrip(){
    const photos = getPhotos();

    return (
        <section>
            <h2 className="text-xl text-center font-medium uppercase lg:text-3xl mx-auto mb-5">View a bird photo</h2>
            <Carousel>
            {photos.map((photo:Photo) => (
                <li key={photo.id} className='embla__slide'>
                    <PhotoCard {...photo}></PhotoCard>
                </li>
            ))}
            </Carousel>
        </section>
    )
}