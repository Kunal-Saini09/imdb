"use client"
import React from 'react'
import { ThemeProvider } from 'next-themes'

const Theme = ({ children }) => {
    return (
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem={true}>
            {children}
        </ThemeProvider>
    )
}

export default Theme
