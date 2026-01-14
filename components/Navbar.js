import React from 'react'
import Link from 'next/link'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Switch from './Switch'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
            <ul className='flex gap-4'>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <li>
                        <Link href={"/sign-in"}>Sign In</Link>
                    </li>
                </SignedOut>

                <li className='hidden sm:block'>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/favorites"}>Favorites</Link>
                </li>
                <li className='hidden sm:block'>
                    <Link href={"/about"}>About</Link>
                </li>
            </ul>
            <div className='flex items-center gap-4'>
                <Switch />
                <Link href={"/"} className='flex gap-1 items-center'>
                    <span className='text-2xl font-bold bg-amber-500 py-1 px=2 rounded-lg'>
                        ImDb
                    </span>
                    <span className='text-xl hidden sm:inline'></span>
                    <span className='text-xl hidden sm:inline'>Clone</span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
