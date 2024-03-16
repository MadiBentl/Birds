import Image from 'next/image';
import {getPhoto} from '@/lib/photos';
import classes from './page.module.css';

export default function BirdPhoto({params}) {
    const photo = getPhoto(params.slug);

    return <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex flex-col md:flex-row">
      <div className={classes.image}>      <Image src={photo.image} className="max-w-sm" alt={photo.summary} fill />
</div>
      <div>
        <h1 className="text-5xl font-bold">{photo.title}</h1>
        <p>{photo.creator}</p>
        <p className="py-6">{photo.summary}</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
}