export default function Home() {
  return (
    <div className="h-screen">
    
      <div className="grid place-content-center">
        <text className="text-4xl">My Blog</text>
        <a className="hover:bg-green-200" href="/posts">Checkout my posts</a>
      </div>
    </div>
  );
}