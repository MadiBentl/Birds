import {getPhoto} from '@/lib/photos';
import BirdPhotoPage from '@/app/components/bird-photo-page';

export default function BirdPhoto({params}: PageProps) {
    const photo = getPhoto(params.slug);
    return <BirdPhotoPage {...photo}/>
}