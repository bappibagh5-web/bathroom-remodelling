import { useEffect, useState } from 'react'
import './App.css'

const phone = '(904) 664-5357'

const services = [
  {
    title: 'Signature Spa Remodels',
    body: 'Full-space redesign with mood lighting, bespoke stone, and integrated smart controls.'
  },
  {
    title: 'Wet Room Conversions',
    body: 'Curbless layouts, linear drains, and floor-to-ceiling tile engineered for effortless maintenance.'
  },
  {
    title: 'Precision Upgrades',
    body: 'Vanities, fixtures, mirrors, and storage curated to refresh your space without full demo.'
  }
]

const beforeAfter = [
  {
    title: 'Skyline Ensuite',
    detail: 'Floating tub | bronze fixtures',
    before: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=1800&q=80',
    after: 'https://images.unsplash.com/photo-1505576391880-b3f9d713dcf2?auto=format&fit=crop&w=1800&q=80'
  },
  {
    title: 'Garden-Level Retreat',
    detail: 'Microcement shell | biophilic lighting',
    before: 'https://images.unsplash.com/photo-1508979827776-e53a0d614fb0?auto=format&fit=crop&w=1800&q=80',
    after: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1800&q=80'
  }
]

const pillars = [
  'Dedicated project concierge',
  'Transparent scope + milestones',
  'Licensed, insured, vetted crews',
  'Post-project detailing & care kit'
]

const faq = [
  {
    q: 'How long does a remodel take?',
    a: 'Most projects wrap in 3–5 weeks depending on material lead times and structural changes.'
  },
  {
    q: 'Do you help with design concepts?',
    a: 'Yes. Every project includes mood boards, finish samples, and 3D visuals before we build.'
  },
  {
    q: 'What warranties do you offer?',
    a: 'We stand behind every install with a 5-year workmanship warranty plus manufacturer guarantees.'
  }
]

function BeforeAfterCard({ project }) {
  const [slider, setSlider] = useState(50)

  return (
    <article className="rounded-[32px] overflow-hidden shadow-2xl border border-white/10 bg-slate-900/70 backdrop-blur">
      <div className="relative h-[420px]">
        <img src={project.after} alt={`${project.title} after remodel`} className="absolute inset-0 h-full w-full object-cover" />
        <img
          src={project.before}
          alt={`${project.title} before remodel`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 ${100 - slider}% 0 0)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[3px] bg-white/70" style={{ left: `${slider}%` }}>
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 text-[10px] font-semibold tracking-[0.3em] text-white/80">
            <span className="px-2 py-1 rounded-full bg-white/20">BEFORE</span>
            <span className="px-2 py-1 rounded-full bg-white/20">AFTER</span>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4">
          <span className="text-xs uppercase tracking-[0.3em] text-white/70">Slide</span>
          <input
            type="range"
            min="0"
            max="100"
            value={slider}
            onChange={(event) => setSlider(parseInt(event.target.value, 10))}
            className="w-full accent-white/80"
            aria-label={`Reveal before and after for ${project.title}`}
          />
        </div>
      </div>
      <div className="p-8 text-white">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">Before / After</p>
        <h3 className="text-2xl font-display mt-2">{project.title}</h3>
        <p className="text-white/70 mt-2">{project.detail}</p>
      </div>
    </article>
  )
}

function App() {
  useEffect(() => {
    document.title = 'Appliance Doctor Pro — Ultra-Modern Bathroom Remodeling'
    const metaDescription = document.querySelector('meta[name="description"]') ?? document.createElement('meta')
    metaDescription.name = 'description'
    metaDescription.content = 'Appliance Doctor Pro crafts ultra-modern bathroom remodels with spa-grade materials, curated lighting, and concierge-level service.'
    if (!metaDescription.parentNode) {
      document.head.appendChild(metaDescription)
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white font-body">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1800&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <header className="relative max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4">
          <div className="text-2xl font-semibold tracking-wide">Appliance Doctor Pro</div>
          <nav className="hidden md:flex items-center gap-6 text-sm uppercase tracking-[0.2em] text-white/70">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#before-after" className="hover:text-white">Work</a>
            <a href="#why" className="hover:text-white">Why Us</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <a href="tel:9046645357" className="rounded-full bg-amber-400 text-slate-900 font-semibold px-6 py-2 shadow-lg shadow-amber-400/30">
            Call {phone}
          </a>
        </header>

        <section className="relative max-w-6xl mx-auto px-6 py-16 grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-6">
            <p className="uppercase tracking-[0.4em] text-xs text-white/70">Bathroom Remodeling • Dhaka</p>
            <h1 className="text-5xl sm:text-6xl font-display leading-tight">
              Ultra-modern bathrooms<br />crafted like boutique spas.
            </h1>
            <p className="text-lg text-white/80">
              We reimagine bathrooms with sculpted stone, vapor-lined wet zones, ambient lighting, and concierge-level build management. Every surface is engineered for calm, durability, and daily rituals.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-2xl bg-cyan-400/90 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-cyan-400/40 hover:-translate-y-0.5 transition">Book a design consult</button>
              <button className="rounded-2xl border border-white/30 px-6 py-3 font-semibold hover:bg-white/10 transition">See live portfolio</button>
            </div>
            <div className="flex flex-wrap gap-6 border border-white/10 rounded-3xl p-6 backdrop-blur">
              <div>
                <p className="text-3xl font-display">220+</p>
                <span className="text-white/70 text-sm">spaces delivered</span>
              </div>
              <div>
                <p className="text-3xl font-display">5 yr</p>
                <span className="text-white/70 text-sm">workmanship warranty</span>
              </div>
              <div>
                <p className="text-3xl font-display">4.9 ★</p>
                <span className="text-white/70 text-sm">verified reviews</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-[28px] p-8 backdrop-blur-xl shadow-2xl border border-white/10" aria-label="Quick inquiry form">
            <h2 className="text-2xl font-semibold mb-6">Plan your remodel</h2>
            <form className="space-y-4">
              <input placeholder="Full name" className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3" />
              <input placeholder="Phone" className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3" />
              <textarea rows={4} placeholder="Project vision" className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3" />
              <label className="flex items-start gap-2 text-sm text-white/70">
                <input type="checkbox" className="mt-1" /> I agree to receive scheduling updates from Appliance Doctor Pro.
              </label>
              <button className="w-full rounded-2xl bg-amber-400 text-slate-900 font-semibold py-3 shadow-lg shadow-amber-400/30 hover:-translate-y-0.5 transition">
                Secure my estimate
              </button>
            </form>
          </div>
        </section>
      </div>

      <main className="bg-white text-slate-900 mt-16 rounded-t-[40px] shadow-2xl relative z-10">
        <section id="services" className="max-w-6xl mx-auto px-6 py-16 space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase text-xs tracking-[0.3em] text-slate-500">Services</p>
            <h2 className="text-4xl font-display">Architecture-grade craft for every scope.</h2>
            <p className="text-slate-500">Flexible build models from turnkey spa suites to targeted upgrades.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-3xl border border-slate-100 p-6 shadow-lg hover:-translate-y-1 transition">
                <div className="text-3xl mb-4">✨</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-slate-500">{service.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="before-after" className="bg-slate-100 py-16">
          <div className="max-w-6xl mx-auto px-6 space-y-10">
            <div className="flex flex-col gap-4">
              <p className="uppercase text-xs tracking-[0.3em] text-slate-500">Before / After</p>
              <h2 className="text-4xl font-display">Transformation stories.</h2>
              <p className="text-slate-500 max-w-3xl">
                Slide across the timeline to see how our team reimagines light, texture, and flow. Each story captures the exact moment a tired bath becomes a private sanctuary.
              </p>
            </div>
            <div className="space-y-8">
              {beforeAfter.map((project) => (
                <BeforeAfterCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="max-w-6xl mx-auto px-6 py-16 grid gap-8 lg:grid-cols-[1fr,1fr]">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 flex flex-col gap-4">
            <p className="uppercase text-xs tracking-[0.3em] text-white/60">Why choose us</p>
            <h2 className="text-4xl font-display">Concierge attention. End-to-end clarity.</h2>
            <p className="text-white/80">We built Appliance Doctor Pro to feel more like hiring architects than contractors. You get one point of contact, transparent budget milestones, and a detailed turnover kit.</p>
            <ul className="space-y-3 text-white">
              {pillars.map((pillar) => (
                <li key={pillar} className="flex items-start gap-3">
                  <span className="text-emerald-300">●</span>
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-100 p-8 flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="flex-1 rounded-2xl bg-slate-200/70 p-6">
                <p className="text-3xl font-display text-slate-900">72 hrs</p>
                <p className="text-slate-500 text-sm">Average time to present concepts</p>
              </div>
              <div className="flex-1 rounded-2xl bg-slate-200/70 p-6">
                <p className="text-3xl font-display text-slate-900">14 trades</p>
                <p className="text-slate-500 text-sm">Certified specialists in-house</p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <p className="text-lg font-semibold">“This didn’t feel like construction—it felt like art direction. HydroCraft translated our mood board into reality.”</p>
              <p className="text-slate-500 mt-3">— Zara Rahman, Gulshan</p>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-slate-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <p className="text-2xl">⭐⭐⭐⭐⭐</p>
            <h2 className="text-4xl font-display">Clients say the calm lasts long after we leave.</h2>
            <p className="text-white/70 text-lg">
              “From demolition to daily updates, HydroCraft made a major remodel feel effortless. The heated terrazzo floor and aromatherapy steam shower changed our mornings.”
            </p>
            <div className="text-white/60">— Hasan & Misha, Banani Penthouse</div>
          </div>
        </section>

        <section id="faq" className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-8">
            <p className="uppercase text-xs tracking-[0.3em] text-slate-500">FAQ</p>
            <h2 className="text-4xl font-display">Answers before you ask.</h2>
          </div>
          <div className="space-y-4">
            {faq.map((item) => (
              <details key={item.q} className="rounded-2xl border border-slate-200 p-4">
                <summary className="text-lg font-semibold cursor-pointer">{item.q}</summary>
                <p className="mt-2 text-slate-500">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-16">
          <div className="rounded-[32px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white p-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="uppercase text-xs tracking-[0.3em] text-white/70">Book now</p>
              <h2 className="text-4xl font-display">Ready for your own sanctuary?</h2>
              <p className="text-2xl font-semibold text-amber-200">{phone}</p>
            </div>
            <button className="rounded-2xl bg-white/90 text-slate-900 font-semibold px-6 py-3 shadow-lg hover:bg-white">
              Start your project
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-white/70 text-sm text-center py-6">
        © {new Date().getFullYear()} Appliance Doctor Pro — Crafted in Dhaka.
      </footer>
    </div>
  )
}

export default App
