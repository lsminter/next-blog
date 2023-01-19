export default function Home() {
  return (
    <div className="h-screen">
    
      <div className="grid place-content-center">
        <text className="m-4 p-6 no-underline text-2xl">My Blog</text>
        <a className="border-solid border m-4 p-6 text-left no-underline hover:border-cyan-800 hover:text-cyan-800 rounded-xl" href="/posts">Checkout my posts</a>
      </div>
    </div>
  );
}