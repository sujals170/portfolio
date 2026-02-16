import './App.css'

const services = [
  {
    title: 'Heirloom Monograms',
    description: 'Custom initials with satin stitch, pearl purl, and delicate shading.',
    detail: 'From $120',
  },
  {
    title: 'Bridal & Occasion',
    description: 'Veils, sashes, and keepsakes designed to match your ceremony palette.',
    detail: 'From $240',
  },
  {
    title: 'Textile Art Panels',
    description: 'Gallery-grade embroidered panels for interior styling and gifting.',
    detail: 'From $380',
  },
  {
    title: 'Corporate Crests',
    description: 'Elegant crests, emblems, and premium gifts for brand moments.',
    detail: 'From $210',
  },
]

const gallery = [
  {
    title: 'Indigo Bloom',
    technique: 'Couching + French knots',
    year: '2025',
  },
  {
    title: 'Golden Hour Crest',
    technique: 'Bullion + goldwork',
    year: '2024',
  },
  {
    title: 'Saffron Garden',
    technique: 'Long and short shading',
    year: '2025',
  },
  {
    title: 'Coastal Monogram',
    technique: 'Chain stitch + seed beads',
    year: '2024',
  },
  {
    title: 'Loomlight Panels',
    technique: 'Applique + couching',
    year: '2023',
  },
  {
    title: 'Midnight Botanica',
    technique: 'Silk shading',
    year: '2025',
  },
]

const steps = [
  {
    title: 'Consult',
    description: 'Share inspiration, colors, and dimensions. We map the story first.',
  },
  {
    title: 'Sketch',
    description: 'A stitched proof and thread palette are delivered for approval.',
  },
  {
    title: 'Stitch',
    description: 'Hand embroidery begins with weekly photo updates if requested.',
  },
  {
    title: 'Finish',
    description: 'Pressed, lined, and packaged with archival care for delivery.',
  },
]

const testimonials = [
  {
    quote:
      'The monogram captured our family crest with unbelievable detail. It is now the centerpiece of our entryway.',
    name: 'Rhea Patel',
    role: 'Interior Stylist',
  },
  {
    quote:
      'Every stitch looks intentional. The bridal veil felt like a modern heirloom.',
    name: 'Camila Torres',
    role: 'Bride',
  },
  {
    quote:
      'Our corporate gifts felt personal and high-end. The team response was instant.',
    name: 'Jordan Lee',
    role: 'Brand Lead',
  },
]

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="logo">Sak Embroidery</div>
        <nav className="site-nav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="btn primary">Request a Quote</button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow reveal" style={{ '--d': '0.05s' }}>
              Handcrafted textile embroidery studio
            </p>
            <h1 className="reveal" style={{ '--d': '0.12s' }}>
              Threaded stories for modern heirlooms.
            </h1>
            <p className="lead reveal" style={{ '--d': '0.18s' }}>
              Sak Embroidery creates bespoke monograms, ceremonial pieces, and
              gallery-ready textile art. Each piece is stitched by hand with
              heritage techniques and a contemporary palette.
            </p>
            <div className="hero-actions reveal" style={{ '--d': '0.26s' }}>
              <button className="btn primary">Start a Commission</button>
              <button className="btn ghost">View Portfolio</button>
            </div>
            <div className="stats">
              <div className="stat-card reveal" style={{ '--d': '0.35s' }}>
                <h3>120+</h3>
                <p>Custom commissions delivered</p>
              </div>
              <div className="stat-card reveal" style={{ '--d': '0.42s' }}>
                <h3>18</h3>
                <p>Heritage stitches mastered</p>
              </div>
              <div className="stat-card reveal" style={{ '--d': '0.49s' }}>
                <h3>6 weeks</h3>
                <p>Average delivery timeline</p>
              </div>
            </div>
          </div>
          <div className="hero-media">
            <div className="loom reveal" style={{ '--d': '0.25s' }}>
              <div className="loom-thread" />
              <div className="loom-thread" />
              <div className="loom-thread" />
              <div className="loom-thread" />
            </div>
            <div className="showcase reveal" style={{ '--d': '0.32s' }}>
              <div className="showcase-top">
                <span>Featured Piece</span>
                <span>2025</span>
              </div>
              <h3>Midnight Botanica</h3>
              <p>Silk shading with moody indigo gradients and metallic detail.</p>
              <div className="chip-row">
                <span className="chip">Silk threads</span>
                <span className="chip">Goldwork</span>
                <span className="chip">Hand dyed</span>
              </div>
            </div>
          </div>
        </section>

        <section className="ribbon">
          <div className="ribbon-track">
            <span>Textile art</span>
            <span>Monograms</span>
            <span>Bridal heirlooms</span>
            <span>Custom crests</span>
            <span>Wall panels</span>
            <span>Textile art</span>
            <span>Monograms</span>
            <span>Bridal heirlooms</span>
            <span>Custom crests</span>
            <span>Wall panels</span>
          </div>
        </section>

        <section className="about" id="about">
          <div className="section-intro">
            <p className="eyebrow">Our atelier</p>
            <h2>Rooted in craft, styled for now.</h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p>
                We are a textile embroidery studio blending traditional hand
                techniques with modern design language. Every commission begins
                with your story and ends with a stitched piece meant to live for
                generations.
              </p>
              <p>
                Our work favors expressive textures, layered color, and the
                tactile richness of artisanal threads. The result is embroidery
                that feels both refined and alive.
              </p>
              <button className="btn ghost">Meet the Studio</button>
            </div>
            <div className="about-panel">
              <h3>Signature materials</h3>
              <ul className="pill-list">
                <li>Silk floss</li>
                <li>Metallic purl</li>
                <li>Japanese cotton</li>
                <li>Vintage linen</li>
                <li>Hand-dyed ribbons</li>
                <li>Glass seed beads</li>
              </ul>
              <div className="panel-note">
                Each material is tested for longevity and archival care.
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="section-intro">
            <p className="eyebrow">Services</p>
            <h2>Commissioned embroidery for every milestone.</h2>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="service-card reveal"
                style={{ '--d': `${0.1 + index * 0.08}s` }}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span>{service.detail}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="portfolio" id="portfolio">
          <div className="section-intro">
            <p className="eyebrow">Portfolio</p>
            <h2>Recent textile embroidery commissions.</h2>
          </div>
          <div className="portfolio-grid">
            {gallery.map((piece, index) => (
              <figure
                key={piece.title}
                className="portfolio-card reveal"
                style={{ '--d': `${0.1 + index * 0.07}s` }}
              >
                <div className="stitch-sample" />
                <figcaption>
                  <div>
                    <h3>{piece.title}</h3>
                    <p>{piece.technique}</p>
                  </div>
                  <span>{piece.year}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="process" id="process">
          <div className="section-intro">
            <p className="eyebrow">Process</p>
            <h2>A clear, collaborative timeline.</h2>
          </div>
          <div className="process-grid">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="process-card reveal"
                style={{ '--d': `${0.1 + index * 0.08}s` }}
              >
                <span className="step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="testimonials">
          <div className="section-intro">
            <p className="eyebrow">Testimonials</p>
            <h2>Client stories stitched in.</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item, index) => (
              <article
                key={item.name}
                className="testimonial-card reveal"
                style={{ '--d': `${0.1 + index * 0.08}s` }}
              >
                <p>"{item.quote}"</p>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="section-intro">
            <p className="eyebrow">Contact</p>
            <h2>Begin your embroidered story.</h2>
          </div>
          <div className="contact-grid">
            <form className="contact-form">
              <label>
                Full name
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" placeholder="you@email.com" />
              </label>
              <label>
                Project type
                <select defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Heirloom monogram</option>
                  <option>Bridal embroidery</option>
                  <option>Textile art panel</option>
                  <option>Corporate crest</option>
                </select>
              </label>
              <label>
                Project notes
                <textarea
                  rows="4"
                  placeholder="Tell us about your colors, dimensions, and timeline."
                />
              </label>
              <button type="button" className="btn primary">
                Send Inquiry
              </button>
            </form>
            <div className="contact-panel">
              <h3>Studio details</h3>
              <p>
                Based in New York, serving clients worldwide with insured
                shipping and archival packaging.
              </p>
              <div className="contact-details">
                <span>hello@sakembroidery.com</span>
                <span>+1 (212) 555-0148</span>
                <span>Commission timeline: 4-8 weeks</span>
              </div>
              <div className="contact-highlight">
                Accepting new projects for Spring 2026.
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>Sak Embroidery</strong>
          <p>Textile embroidery studio crafting modern heirlooms.</p>
        </div>
        <div className="footer-links">
          <span>Instagram</span>
          <span>Pinterest</span>
          <span>Behance</span>
        </div>
      </footer>
    </div>
  )
}

export default App
