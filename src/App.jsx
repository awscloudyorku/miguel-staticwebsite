import { useEffect, useRef } from 'react'
import './App.css'

/* ──────────────────────────────────────────────
   AWS Cloud Club @ York University — Landing Page
   ────────────────────────────────────────────── */

const VALUES = [
  {
    title: 'Learn',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-aws-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: 'Network',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-aws-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    title: 'Projects',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-aws-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
  },
  {
    title: 'Certification',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-aws-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
]

/* Hook: observe elements and add "visible" class on scroll */
function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const elements = container.querySelectorAll('.scroll-fade-in, .scroll-card')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}

function App() {
  const scrollRef = useScrollReveal()

  return (
    <div className="font-work-sans" ref={scrollRef}>
      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-aws-darker to-aws-dark overflow-hidden">
        {/* Decorative shapes */}
        <div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-aws-orange opacity-10 blur-3xl"
          style={{ animation: 'float 6s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-aws-teal opacity-10 blur-3xl"
          style={{ animation: 'float-slow 8s ease-in-out infinite' }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-aws-orange opacity-5 blur-2xl"
          style={{ animation: 'float 10s ease-in-out infinite' }}
        />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          {/* Centered Logo — fade up first, with glow pulse */}
          <div className="animate-fade-up flex items-center justify-center gap-3 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-aws-orange animate-glow-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
            </svg>
            <span className="text-2xl font-bold text-white">
              AWS Cloud Club <span className="font-light text-gray-400">@ YorkU</span>
            </span>
          </div>

          <p className="animate-fade-up delay-100 text-sm font-light tracking-widest uppercase text-gray-400 mb-4">
            Learn, build, and deploy in the cloud.
          </p>
          <h1 className="animate-fade-up delay-200 text-5xl md:text-7xl font-bold leading-tight text-white mb-6">
            Your Cloud Journey{' '}
            <span className="text-aws-orange">Starts Here</span>
          </h1>
          <p className="animate-fade-up delay-300 text-lg md:text-xl font-light text-gray-300 mb-10 max-w-xl mx-auto">
            Join York University&apos;s AWS Cloud Club and turn your curiosity into cloud expertise — one project at a time.
          </p>
          <a
            href="#join"
            id="join"
            className="animate-fade-up delay-400 inline-flex items-center gap-2 btn-shimmer text-white font-semibold text-lg px-10 py-4 rounded-full shadow-lg shadow-aws-orange/20 hover:shadow-aws-orange/30 transition-all no-underline"
          >
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Down arrow — scrolls to footer */}
        <a
          href="#contact"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-up delay-500"
          aria-label="Scroll to bottom"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-aws-orange animate-bounce-arrow"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </section>

      {/* ── Key Values Section ── */}
      <section id="values" className="py-24 px-6 bg-aws-darker">
        <div className="max-w-3xl mx-auto">
          <div className="scroll-fade-in text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-aws-orange mb-3">What we offer</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Why Join Us?</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {VALUES.map((item, i) => (
              <div
                key={item.title}
                className="scroll-card group flex flex-col items-center text-center bg-aws-card border border-white/10 rounded-2xl p-6 hover:border-aws-orange/30 hover:shadow-[0_0_25px_rgba(255,153,0,0.12)] hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-aws-orange/10 group-hover:bg-aws-orange/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 px-6 bg-gradient-to-r from-aws-dark to-aws-card">
        <div className="scroll-fade-in max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build in the Cloud?
          </h2>
          <p className="text-gray-300 font-light text-lg mb-8 max-w-xl mx-auto">
            Whether you&apos;re a beginner or experienced, there&apos;s a place for you in our community.
          </p>
          <a
            href="mailto:awscloudclub@yorku.ca"
            className="inline-flex btn-shimmer text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-aws-orange/20 hover:shadow-aws-orange/30 transition-all no-underline"
          >
            Join the Club
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer id="contact" className="py-12 px-6 bg-[#131A22] text-white">
        <div className="scroll-fade-in max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-aws-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
            </svg>
            <span className="font-semibold">AWS Cloud Club</span>
            <span className="font-light text-gray-400">@ York University</span>
          </div>

          <div className="flex items-center gap-5">
            {/* GitHub */}
            <a href="#" className="text-gray-400 hover:text-aws-orange transition-colors" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12Z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="text-gray-400 hover:text-aws-orange transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="text-gray-400 hover:text-aws-orange transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
              </svg>
            </a>
            {/* Discord */}
            <a href="#" className="text-gray-400 hover:text-aws-orange transition-colors" aria-label="Discord">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03ZM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} AWS Cloud Club @ York University. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
