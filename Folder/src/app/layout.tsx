lorna-jennings-site/
├── .env.example
├── next.config.mjs
├── package.json
├── tsconfig.json
├── README.md
├── public/
│   └── covers/
│       └── .gitkeep
├── src/
│   ├── app/
│   │   ├── about/page.tsx
│   │   ├── books/
│   │   │   ├── [slug]/page.tsx
│   │   │   └── page.tsx
│   │   ├── cancel/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── journal/page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx        # homepage
│   │   ├── success/page.tsx
│   │   └── api/
│   │       ├── checkout/route.ts
│   │       └── stripe/webhook/route.ts   # (optional)
│   ├── components/
│   │   └── checkout-button.tsx
│   └── content/
│       └── books.json
└── styles/
    └── globals.css
// src/app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lorna Jennings — Author',
  description: 'Official site of author Lorna Jennings. Read excerpts and buy books directly.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-stone-50 text-stone-900">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <header className="mb-8 flex items-center justify-between">
            <a href="/" className="text-2xl font-serif">Lorna Jennings</a>
            <nav className="space-x-6">
              <a href="/books">Books</a>
              <a href="/about">About</a>
              <a href="/journal">Journal</a>
              <a href="/contact">Contact</a>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="mt-16 border-t pt-8 text-sm text-stone-600">
            <p>© {new Date().getFullYear()} Lorna Jennings. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
