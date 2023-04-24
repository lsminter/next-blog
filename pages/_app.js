import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Footer from '../components/footer'
import Header from '../components/header'
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <div className='h-full px-4 sm:px-12 bg-background'>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </div>
  )
}

export default MyApp
