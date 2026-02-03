import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '철원 프리미엄 특산물 쇼핑몰',
    description: '철원 농업법인이 엄선한 오대쌀, 고추냉이, 파프리카 및 프리미엄 가공식품',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ko">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Outfit:wght@500;700&display=swap" rel="stylesheet" />
            </head>
            <body>{children}</body>
        </html>
    )
}
