import Image from 'next/image'

import profilePicture from '../images/profilePicture.png'

export default function Home() {
  return (
    <div className="h-screen">
      <div className="grid place-items-center">
        <div className='flex w-3/4 p-2 justify-between'>
          <div className='flex flex-col m-4 w-1/2 place-items-center'>
            <h1 className="m-4 p-4 no-underline text-2xl align-top">Lucas Minter</h1>
            <text className='m-4 p-6 no-underline text-l align-top'>
              I'm 28 years old and a web developer living in Washington State. I mainly use JavaScript, Next.js and TailwindCSS. I worked for egghead.io for 5 1/2 years. I specialize in professional content creation in the tech world. I also helped manage egghead's social media accounts and creating image assets for upcoming courses. A couple of my main projects are this blog and creating discord bots. 
            </text>
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