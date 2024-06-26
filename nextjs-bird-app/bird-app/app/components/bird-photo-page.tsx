import Image from 'next/image';

export default function BirdPhotoPage({...photo}) {
    return <div className="hero min-h-screen px-4 sm:px-6 md:px-8">
    <div className="hero-content min-h-[400px] grid md:grid-cols-2 m-5 gap-4">
        <div className="min-h-[400px] relative">
            <Image src={photo.image} className="max-w-lg object-contain" alt={photo.summary} fill />
    </div>
      <div className="block max-w-sm p-6 border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-5xl font-bold">{photo.title}</h1>
        <p>Creator: <em>{photo.creator}</em></p>
        <p className="py-6">{photo.summary}</p>
        <ul>
            <li><span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Climate: {photo.climate}</span></li>
            <li><span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Country: {photo.country}</span></li>
        </ul>
      </div>
    </div>
  </div>
}