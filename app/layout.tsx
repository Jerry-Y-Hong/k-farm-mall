import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '케이팜그룹 | 프리미엄 철원 특산물 공식 쇼룸',
    description: '철원 농업법인이 직접 재배하고 기술로 빚은 오대쌀, 고추냉이, 파프리카 및 프리미엄 가공식품 공식 판매처입니다.',
    openGraph: {
        title: '케이팜그룹 공식 브랜드 사이트',
        description: '철원의 청정 자연에 스마트팜 기술을 더한 프리미엄 특산물 쇼룸',
        url: 'https://k-wasabi.net',
        siteName: 'K-Farm Group',
        images: [
            {
                url: '/images/wasabi.png', // 공유 시 보일 대표 이미지
                width: 1200,
                height: 630,
                alt: 'K-Farm Group Premium Products',
            },
        ],
        locale: 'ko_KR',
        type: 'website',
    },
    viewport: 'width=device-width, initial-scale=1',
    themeColor: '#1B3022',
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
