import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Footer from '../components/footer'
import Header from '../components/header'

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-blue-100 [@media(max-width:767px)]:scrollbar-hide'>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
