import React from 'react'

import {getPhotos} from '@/lib/photos';
import PhotoCard from '../components/photo-card';
import Carousel from './carousel';

export default function PhotoStrip(){
    const photos = getPhotos();

    return (
        <Carousel>
        {photos.map(photo => (
            <li key={photo.id} className='embla__slide'>
                <PhotoCard {...photo}></PhotoCard>
            </li>
        ))}
        </Carousel>
    )
}