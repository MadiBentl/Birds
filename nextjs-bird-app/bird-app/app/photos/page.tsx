import {getPhotos} from '@/lib/photos';
import PhotoCard from '../components/photo-card';

export default function PhotoGrid() {
    const photos = getPhotos();
    return <ul className="px-4 sm:px-6 md:px-8 min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {photos.map((photo:Photo) => (
            <li key={photo.id}>
                <PhotoCard {...photo}></PhotoCard>
            </li>
        ))}
    </ul>
}