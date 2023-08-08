import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import Navbar from "./components/navbar.js"
import Footer from "./components/footer.js"
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Home',
  description: 'Welcome to Plantify',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Navbar></Navbar>
        {children}
        <br/>
        <Footer></Footer>
      </body>
    </html>
  )
}
