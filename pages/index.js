import Image from 'next/image'
import cookingImage from '../images/cookingImage.png'
import profilePicture from '../images/profilePicture.png'

export default function Home() {
  return (
    <div className='min-h-screen mt-4'>
      <div className='grid grid-cols-1 sm:grid-cols-3 sm:items-center'>
        <div className='max-w-sm m-auto opacity-90 sm:hidden sm:bg-cover bg-gradient-to-r from-background to-opacity-0'> 
          <Image src={cookingImage} alt="cooking image" className='rounded-md'/>
        </div>
        <div className='hidden sm:block col-start-3 min-w-sm max-w-sm opacity-90 bg-cover bg-gradient-to-r from-background to-opacity-0'> 
          <Image src={cookingImage} alt="cooking image" className='object-cover mix-blend-overlay rounded-md'/>
        </div>
        <h1 className='max-w-lg m-auto sm:absolute sm:max-w-md sm:col-span-2 first-line:sm:max-w-lg text-smHeader sm:text-xl text-transparent bg-clip-text bg-gradient-to-br from-title-start to-title-end'>
          A blog for me to put my thoughts
        </h1>
      </div>
      <div className='grid sm:grid-cols-4 sm:items-center sm:mt-10 bg-gray-200 p-4 rounded-lg'>
          <div className='max-w-sm m-auto sm:hidden'> 
            <Image src={profilePicture} alt="cooking image" className='rounded-md'/>
          </div>
          <div className='text-center items-center sm:text-left sm:col-span-3'>
            <h1 className='my-4 no-underline text-l align-top'>
              Bio
            </h1>
            <div className='text-m'>
              I'm 28 years old and a web developer living in Washington State. I mainly use JavaScript, Next.js and TailwindCSS. I worked for egghead.io for 5 1/2 years. I specialize in professional content creation in the tech world. I also helped manage egghead's social media accounts and creating image assets for upcoming courses. A couple of my main projects are this blog and creating discord bots.
            </div>
          </div>
          <div className='max-w-md hidden sm:block col-start-4'>
            <Image src={profilePicture} alt="cooking image" className='rounded-lg' />
          </div>
        </div>
    </div>
  );
}