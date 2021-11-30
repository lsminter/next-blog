import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Footer from '../components/footer'
import Header from '../components/header'

function MyApp({ Component, pageProps }) {
  return (
    <div>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </div>
  )
}

export default MyApp
