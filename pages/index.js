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
        <div className='max-w-md hidden sm:ml-4 sm:block col-start-4'>
          <Image src={profilePicture} alt="cooking image" className='rounded-lg' />
        </div>
      </div>
      <div style={{ position: "relative", paddingBottom: "50px" }}>
        <a href="https://www.lucasminter.dev/posts/create-a-book-club-bot-using-discord-js-v14">
          <div className="grid sm:grid-cols-4 mt-10 sm:items-center sm:mt-10 bg-gray-200 p-4 rounded-lg">
            <div className="max-w-sm m-auto sm:hidden">
              <Image
                src="https://res.cloudinary.com/dgjsveger/image/upload/v1679528270/My%20Blog/image_mtaaid.png"
                alt="cooking image"
                width="200"
                height="200"
                className="rounded-lg"
              />
            </div>
            <div className="text-center items-center sm:text-left sm:col-span-3">
              <h1 className="my-4 no-underline text-l align-top">
                Create a Book Club Bot using Discord.js v14
              </h1>
              <div className="text-m">
                In this tutorial, I will guide you through creating your first Discord bot. We will begin by setting up our bot in the Discord developer portal, followed by setting up the bot locally. I will teach you how to develop a basic chatbot, and then we will dive into creating slash commands with more detail. Finally, we will deploy the bot to ensure it runs continuously.
              </div>
            </div>
            <div className="max-w-md hidden sm:block sm:col-start-1 sm:row-start-1 sm:mr-4">
              <Image
                src="https://res.cloudinary.com/dgjsveger/image/upload/v1679528270/My%20Blog/image_mtaaid.png"
                alt="cooking image"
                width="200"
                height="200"
                className="rounded-lg"
              />
            </div>
          </div>
        </a>
        <button
          className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => window.open("https://www.lucasminter.dev/posts/create-a-book-club-bot-using-discord-js-v14")}
        >
          Read More
        </button>
      </div>
      <div className="py-5">
        <a 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          target="_blank"
          href='/files/LinkedIn-Resume-Lucas-Minter.pdf' 
          rel="noopener noreferrer"
        >
        Download Resume
        </a>
      </div>
    </div>
  );
}