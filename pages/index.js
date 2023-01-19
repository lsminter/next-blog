import Image from 'next/image'

import profilePicture from '../images/profilePicture.png'

export default function Home() {
  return (
    <div className="h-screen">
      <div className="grid">
        <div className='flex w-full p-2 justify-between'>
          <div className='flex flex-col m-4 place-items-center'>
            <text className="m-4 p-6 no-underline text-2xl align-top">My Blog</text>
            <text className='m-4 p-6 no-underline text-l align-top'>This blog is a place to dump my thoughts on different things.</text>
          </div>
          <div className='m-10'>
            <Image className='rounded-md' width={300} height={400} src={profilePicture}/>
          </div>
        </div>
      </div>
      <div className='grid place-content-center'>
        <a className="grid border-solid border border-cyan-400 m-4 p-6 text-left no-underline hover:border-cyan-800 hover:text-cyan-800 rounded-xl" href="/posts">Checkout my posts</a>
      </div>
    </div>
  );
}