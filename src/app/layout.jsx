// app/layout.js
import '@/app/globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Gabriel | Portfólio',
  description: 'Portfólio do Gabriel, desenvolvedor fullstack.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900">
        {/* <Navbar /> */}
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  )
}
