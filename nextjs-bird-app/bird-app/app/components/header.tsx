import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return <div className="bg-violet-100 px-4 sm:px-6 md:px-8">
    <div className="mx-auto max-w-7xl flex justify-between items-center">
        <div><Link href="/" className="flex items-center heading-font"><div className="relative h-20 w-20 "><Image className="logo" src='/logo.svg' alt="Bird App" fill /></div>Bird App</Link></div>
        <ul className="flex items-center">
            <li className="m-2.5"><Link className="hover:underline heading-font" href="/photos">Bird Photos</Link></li>
            <li className="m-2.5"><Link className="hover:underline heading-font" href="/photo/random">Random Bird Photo</Link></li>
        </ul><div className="relative">…</div>
        </div>
    </div>
}