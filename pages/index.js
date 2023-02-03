import Image from 'next/image'
import cookingImage from '../images/cookingImage.png'
import profilePicture from '../images/profilePicture.png'

export default function Home() {
  return (
    <div className="h-screen">
      <div className='grid grid-cols-11 mt-10'>
        <div className='col-start-8 col-end-12 bg-cover bg-gradient-to-r from-background to-image-gradient'>
          <Image src={cookingImage} alt="cooking image" className='object-cover mix-blend-overlay'/>
        </div>
        <div className='absolute w-1/2 text-xl text-transparent bg-clip-text bg-gradient-to-br from-title-start to-title-end'>
          A blog for me to put my thoughts
        </div>
      </div>
      <div className='mt-10 px-4 pb-4 bg-gray-200 rounded-lg'>
        <div className='text-l'>
          Bio
        </div>
        <div>
          <div className='m'>
            I'm 28 years old and a web developer living in Washington State. I mainly use JavaScript, Next.js and TailwindCSS. I worked for egghead.io for 5 1/2 years. I specialize in professional content creation in the tech world. I also helped manage egghead's social media accounts and creating image assets for upcoming courses. A couple of my main projects are this blog and creating discord bots.
          </div>
          <Image src={profilePicture} alt="cooking image" />
        </div>
      </div>
    </div>
  );
}