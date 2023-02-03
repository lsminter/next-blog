import { motion } from 'framer-motion'

export default function Components() {
  return (
    <div className="grid h-screen">
      <div>
        <div>
          <div className="flex justify-center flex-wrap">
            A list of components that I've made or like to use. 
          </div>
        </div>
      </div>
      <a href='https://www.youtube.com/channel/UCTLP-YEDZf0Lt8wTILs3ToQ' className='w-fit h-fit'>
        <div className="flex justify-center">
          <motion.div className="grid place-items-center grid-cols-4 gap-4 text-center border-solid border-2 border-black p-4 min-w-min" whileHover={{
            scale: .9,
            background: 'white',
            transition: {
              duration: .2
            }
          }}>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"/></svg>
            <div className="col-span-3">
              minterhero
            </div>
          </motion.div>
        </div>
      </a>
      <div>
        another component
      </div>
    </div>
  )
}
