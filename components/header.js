export default function Header() {
  return (
    <header className="flex p-2 justify-between">
      <div className="flex">
        <a className="hover:text-blue-600 p-2" href="/">Lucas Minter</a>
      </div>
      <div>
        <a className="hover:text-blue-600 p-2" href="/about">About</a>
        <a className="hover:text-blue-600 p-2" href="/posts">Posts</a>
        <a className="hover:text-blue-600 p-2" href="/">Home</a>
      </div>
    </header>
  )
}