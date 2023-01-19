import Image from 'next/image'
import twitterLogo from '../images/twitterLogo.png'
import githubLogo from '../images/githubLogo.png'

export default function Footer() {
  return(
    <footer className="w-full p-4 flex items-center justify-between bg-gradient-to-b bg-blue-100 to-blue-400">
      <div className="text-sm items-center">
        Lucas Minter ©{new Date().getFullYear()}
      </div>
      <div className="flex">
        <div>
          <a className="hover:text-gray-600" href="https://twitter.com/LucasMinter2">
            <Image src={twitterLogo} alt="Twitter Logo" width={30} height={30} />
          </a>
        </div>
        <div>
          <a className="hover:text-gray-600" href="https://github.com/lsminter">
            <Image src={githubLogo} alt="Github Logo" width={25} height={25} />
          </a>
        </div>
      </div>
    </footer>
  )
}