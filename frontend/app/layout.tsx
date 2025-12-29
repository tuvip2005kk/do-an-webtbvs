import './globals.css'

export const metadata = {
    title: 'Sanitary Store',
    description: 'Website bán thiết bị vệ sinh cao cấp',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="vi">
            <body>{children}</body>
        </html>
    )
}
