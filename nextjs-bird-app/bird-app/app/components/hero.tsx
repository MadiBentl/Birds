import Image from "next/image";
import Link from "next/link";

import heroImage from '@/app/assets/hero-image.jpg'
export default function Hero(){
    return <div className="relative flex flex-col items-center mx-auto mb-48 lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <Image className="h-full w-full object-cover" src={heroImage} alt="Birds flying against a grey sky"/>
        </div>

        <div
            className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
            <div className="flex flex-col p-12 md:px-16">
                <h2 className="text-2xl font-medium uppercase lg:text-4xl">Bird App</h2>
                <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                </p>
                <div className="mt-8">
                    <Link href="/photos"
                        className="inline-block w-full text-center text-lg font-medium text-white bg-slate-800 py-4 px-10 hover:bg-violet-100 hover:text-slate-800 hover:shadow-md md:w-48">View Photos</Link>
                </div>
            </div>
        </div>

</div>
}