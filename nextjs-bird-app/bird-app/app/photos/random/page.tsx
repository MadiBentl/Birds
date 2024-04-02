import {getRandomBird} from '@/lib/photos';
import BirdPhotoPage from '@/app/components/bird-photo-page';

export default function BirdPhoto() {
    const photo = getRandomBird();
    return <BirdPhotoPage {...photo}/>
}