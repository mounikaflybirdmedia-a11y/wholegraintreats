import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero-cookies.jpg";
import ragiAlmond from "@/assets/ragi-almond.jpg";
import jowarChoco from "@/assets/jowar-choco.jpg";
import ragiPeanut from "@/assets/ragi-peanut.jpg";
import oatsCashew from "@/assets/oats-cashew.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wholegrain Treats — Pure Grains. Pure Joy. | Hyderabad" },
      { name: "description", content: "Freshly baked-to-order wholegrain cookies in Hyderabad. Ragi, jowar & oats cookies made with wholesome ingredients. Order on WhatsApp." },
      { property: "og:title", content: "Wholegrain Treats — Pure Grains. Pure Joy." },
      { property: "og:description", content: "Wholesome wholegrain cookies, freshly baked to order in Hyderabad." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Dancing+Script:wght@600;700&display=swap" },
    ],
  }),
  component: Index,
});

const PHONE = "918074210513";
const PHONE_DISPLAY = "+91 8074 210 513";

const products = [
  {
    name: "Ragi Almond Cookies",
    tag: "Nutty & Wholesome",
    desc: "Earthy ragi flour blended with rich almonds for a nutty, wholesome bite that's deeply satisfying.",
    img: ragiAlmond,
  },
  {
    name: "Jowar Choco Chunk Cookies",
    tag: "Crunchy & Indulgent",
    desc: "Crunchy jowar cookies loaded with generous chunks of real dark chocolate in every bite.",
    img: jowarChoco,
  },
  {
    name: "Ragi Peanut Cookies",
    tag: "Roasted & Rich",
    desc: "A perfect blend of slow-roasted peanuts and nourishing ragi — comfort in a cookie.",
    img: ragiPeanut,
  },
  {
    name: "Oats Cashew Crunch Cookies",
    tag: "Hearty & Buttery",
    desc: "Hearty oats, crunchy cashews and a touch of dark chocolate bliss in every golden cookie.",
    img: oatsCashew,
  },
];

function waLink(text: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-background/85 border-b border-border">
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="Wholegrain Treats logo" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-display text-lg font-bold text-primary leading-none">Wholegrain Treats</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#top" className="hover:text-primary">Home</a>
            <a href="#cookies" className="hover:text-primary">Products</a>
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
          <a href={waLink("Hi! I'd like to order Wholegrain Treats cookies.")} target="_blank" rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] text-white px-4 py-2 text-sm font-medium shadow hover:opacity-90 transition">
            <WhatsAppIcon className="h-4 w-4" /> Order on WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 pt-14 pb-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-script text-2xl text-accent mb-3">Introducing</p>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-primary leading-[1.05]">
              Our Signature <br />
              <span className="italic">Cookies</span>
            </h1>
            <p className="mt-5 text-muted-foreground text-lg max-w-md">
              Wholesome ingredients. Deliciously crafted. Freshly baked to order in Hyderabad by Usha Reddy.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={waLink("Hi Usha! I'd like to place an order for Wholegrain Treats cookies.")}
                target="_blank" rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] text-white px-6 py-3 font-medium shadow-lg hover:scale-[1.02] transition">
                <WhatsAppIcon className="h-5 w-5" /> DM Us to Order
              </a>
              <a href="#cookies"
                className="inline-flex items-center rounded-full border border-primary/30 text-primary px-6 py-3 font-medium hover:bg-primary hover:text-primary-foreground transition">
                Explore Cookies
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <Bullet>Made with quality ingredients</Bullet>
              <Bullet>Wholegrain goodness</Bullet>
              <Bullet>Freshly baked to order</Bullet>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-accent/10 rounded-[2.5rem] blur-2xl" aria-hidden />
            <img src={hero} alt="Assorted wholegrain cookies"
              width={1024} height={1024}
              className="relative rounded-[2rem] shadow-2xl object-cover aspect-square w-full" />
          </div>
        </div>
      </section>

      {/* COOKIES */}
      <section id="cookies" className="bg-[var(--cream)] border-y border-border">
        <div className="max-w-6xl mx-auto px-5 py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="font-script text-2xl text-accent">Our Signature</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-1">The Cookie Collection</h2>
            <div className="mt-3 flex justify-center items-center gap-2 text-accent">
              <span className="h-px w-10 bg-accent/40" /> ♥ <span className="h-px w-10 bg-accent/40" />
            </div>
            <p className="mt-4 text-muted-foreground">Wholesome ingredients. Deliciously crafted.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <article key={p.name} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" width={1024} height={1024}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-accent">{p.tag}</p>
                  <h3 className="font-display text-xl font-bold text-primary mt-1">{p.name}</h3>
                  <div className="my-3 h-px bg-border" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <a href={waLink(`Hi! I'd like to order ${p.name}. Please share details.`)}
                    target="_blank" rel="noopener"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--whatsapp)] hover:underline">
                    <WhatsAppIcon className="h-4 w-4" /> Order this
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-5xl mx-auto px-5 py-20 text-center">
        <p className="font-script text-2xl text-accent">Our Story</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-1">Baked with love, by Usha</h2>
        <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          Wholegrain Treats is a small home-baked cookie business from Hyderabad, founded by
          Usha Reddy. Every cookie is freshly baked to order using millets, oats, real nuts and
          dark chocolate — never anything we wouldn't feed our own family.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mt-10">
          {[
            { t: "Quality Ingredients", d: "Real grains, nuts & chocolate" },
            { t: "Wholegrain Goodness", d: "Ragi, jowar, oats — nothing refined" },
            { t: "Freshly Baked", d: "Every batch made to order" },
          ].map((f) => (
            <div key={f.t} className="rounded-2xl bg-card border border-border p-6 shadow-sm">
              <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-display text-xl">♥</div>
              <h3 className="font-display text-lg font-bold text-primary mt-3">{f.t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-5 py-16 text-center">
          <p className="font-script text-2xl text-accent">Get in touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-1">Order your batch today</h2>
          <p className="mt-4 opacity-80">Based in Hyderabad. DM us on WhatsApp to place an order or ask about bulk & gifting.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={waLink("Hi Usha! I'd like to order Wholegrain Treats cookies.")} target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-6 py-3 font-medium shadow-lg hover:scale-[1.02] transition">
              <WhatsAppIcon className="h-5 w-5" /> Chat on WhatsApp
            </a>
            <a href={`tel:+${PHONE}`} className="inline-flex items-center rounded-full border border-primary-foreground/40 px-6 py-3 font-medium hover:bg-primary-foreground hover:text-primary transition">
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--cream)] border-t border-border">
        <div className="max-w-6xl mx-auto px-5 py-10 grid sm:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="" className="h-9 w-9 rounded-full" />
              <span className="font-display font-bold text-primary">Wholegrain Treats</span>
            </div>
            <p className="mt-3 text-muted-foreground italic">Pure Grains • Pure Joy.</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-primary">Contact</h4>
            <p className="mt-2 text-muted-foreground">Usha Reddy<br />Hyderabad, India</p>
            <a href={`tel:+${PHONE}`} className="block mt-1 text-muted-foreground hover:text-primary">{PHONE_DISPLAY}</a>
          </div>
          <div>
            <h4 className="font-display font-bold text-primary">Order</h4>
            <a href={waLink("Hi! I'd like to order cookies.")} target="_blank" rel="noopener"
              className="mt-2 inline-flex items-center gap-2 text-[var(--whatsapp)] hover:underline">
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>
        <div className="text-center text-xs text-muted-foreground py-4 border-t border-border">
          Thank you for supporting a small business ♥
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={waLink("Hi! I'd like to order Wholegrain Treats cookies.")} target="_blank" rel="noopener"
        aria-label="Order on WhatsApp"
        className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-[var(--whatsapp)] text-white shadow-2xl flex items-center justify-center hover:scale-110 transition">
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" />{children}</span>;
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.157 5.335 5.492 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.599 5.354l-.999 3.648 3.889-.701zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
    </svg>
  );
}
