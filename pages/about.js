export default function About() {
  return (
    <div className="h-screen">
      <div className="grid place-items-center">
        <div className='flex w-3/4 p-2'>
          <div className='flex flex-col m-4 place-items-center'>
            <text className="m-4 p-6 no-underline text-2xl align-top">About me</text>
            <text className='m-4 p-6 no-underline text-l align-top'>This blog is a place to dump my thoughts on different things.</text>
          </div>
        </div>
      </div>
    </div>
  );
}