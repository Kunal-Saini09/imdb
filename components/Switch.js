"use client"
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const Switch = () => {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const currentTheme = theme === "system" ? systemTheme : theme;
    useEffect(() => {
        setMounted(true)
    }, []);

    useEffect(() => {
        console.log('Current theme:', theme, 'System:', systemTheme, 'Resolved:', currentTheme);
    }, [theme, systemTheme, currentTheme]);
    return (
        <div>
            {mounted &&
                (currentTheme === "dark" ? (
                    <MdLightMode
                        onClick={() => setTheme("light")}
                        className='cursor-pointer text-xl hover:text-amber-500'
                    />
                ) : (
                    < MdDarkMode
                        onClick={() => setTheme("dark")}
                        className='cursor-pointer text-xl hover:text-amber-500'
                    />
                )
                )
            }
        </div>
    )
}

export default Switch
