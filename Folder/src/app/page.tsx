// src/app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <section>
      <div className="mb-10 rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="mb-3 font-serif text-4xl">
          Stories that linger long after the last page.
        </h1>
        <p className="mb-6 max-w-2xl text-stone-700">
          Discover the novels of Lorna Jennings — intimate, honest, and quietly devastating.
        </p>
        <div className="space-x-3">
          <Link href="/books" className="inline-block bg-black text-white px-4 py-2">
            Shop the Books
          </Link>
          <Link href="/journal" className="inline-block border border-stone-300 px-4 py-2">
            Read the Journal
          </Link>
        </div>
      </div>
    </section>
  )
}
