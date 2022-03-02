import Link from "next"

export default function Header() {
  return (
    <header className="flex border-b border-grey p-4 justify-between">
      <p>I am a Dev Rel at egghead.io</p>
      <div>
        <a href="/posts">Posts</a>
        <a className="hover:text-gray-600 p-2" href="/">Home</a>
      </div>
    </header>
  )
}