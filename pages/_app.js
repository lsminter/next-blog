import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Footer from '../components/footer'
import Header from '../components/header'

function MyApp({ Component, pageProps }) {
  return (
    <div className='h-max px-4 sm:px-12 bg-background'>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
