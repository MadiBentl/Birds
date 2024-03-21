import Link from 'next/link';
import Image from 'next/image';

export default function PhotoCard({...params}){
    return (
        <div className="max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="">
                <Link href={`/photo/${params.slug}`}>
                    <Image className="" src={params.image} alt={params.summary} height="400" width="400" />
                </Link>
            </div>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{params.title}</h5>
                </a>
                <a href={`/photo/${params.slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-900 hover:text-slate-900 hover:bg-violet-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View photo
                </a>
            </div>
        </div>
    )
}