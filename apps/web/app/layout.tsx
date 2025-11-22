import './globals.css'

export const metadata = {
  title: 'Visionary',
  description: 'Visionary - EdTech product',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
