
import Link from "next/link"

export default function HomePage() {
  return (
    <div>
      <h2>Welcome to Home Page</h2>
      <Link className="border-2 border-black" href='/blog'>Blog</Link>
      <Link className="border-2 border-black" href='/products'>products</Link>
    </div>
  )
}
