export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html title='Boilerplate'>
        <head><title>Boilerplate</title></head>
        <body>{children}</body>
        </html>
    )
}
