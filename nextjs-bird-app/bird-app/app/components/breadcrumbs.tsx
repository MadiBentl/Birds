'use client';

import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function Breadcrumbs(){
    const slug = usePathname();
    const pathComponents = slug.split("/");
    if (slug == '/') return;
    return <>
    <ul>
        <li><Link href="/">Home</Link></li>
        {pathComponents.map(component => 
            <li key={`/${component}`}><Link href={component}>{component}</Link></li>
        )}
    </ul></>
}