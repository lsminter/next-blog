import Image from 'next/image'

export default function Footer() {
  return(
    <footer className="w-full border-t border-grey p-4 flex items-center justify-between">
      <div className="text-sm items-center">
        Lucas Minter ©{new Date().getFullYear()}
      </div>
      <div className="flex">
        <div>
          <a className="hover:text-gray-600" href="https://twitter.com/LucasMinter2">
          <Image src="/twitter.svg" alt="Twitter Logo" width={72} height={16} />
          </a>
        </div>
        <div>
          <a className="hover:text-gray-600" href="https://github.com/lsminter">
            <Image src="/github.png" alt="Github Logo" width={72} height={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}