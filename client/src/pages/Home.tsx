import { useEffect, useState } from "react";
import {
  ArrowRight,
  Award,
  BarChart3,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Dumbbell,
  Facebook,
  Flame,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Ticket,
  Trophy,
  UserRound,
  Users,
  X,
  Zap,
} from "lucide-react";
import { toast } from "sonner";

const heroImage = "/manus-storage/falcon-hero_35149beb.jpg";
const trainerImage = "/manus-storage/falcon-trainer_d1157412.jpg";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Memberships", href: "#memberships" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const amenities = [
  { icon: Dumbbell, title: "Modern equipment", copy: "Prime strength, cable & cardio zones built for every kind of progress.", tone: "blue" },
  { icon: Sparkles, title: "Recovery café", copy: "Protein coffee, fresh bowls and smart snacks to keep your engine full.", tone: "orange" },
  { icon: ShieldCheck, title: "Luxury locker rooms", copy: "Hot showers, secure lockers and a calm reset before your next set.", tone: "blue" },
  { icon: BarChart3, title: "Digital tracking", copy: "See your lifts, pace and consistency compound inside the Falcon app.", tone: "orange" },
  { icon: CalendarDays, title: "Book in seconds", copy: "Reserve your favorite classes, trainers and recovery slots online.", tone: "blue" },
  { icon: Flame, title: "The energy", copy: "A focused, welcoming community that turns showing up into a ritual.", tone: "orange" },
];

const plans = [
  { name: "Basic", kicker: "Start strong", price: "1,499", description: "Everything you need to make training your non-negotiable.", features: ["Full gym access", "Locker room access", "Starter assessment", "6:00 AM – 10:00 PM"], accent: "blue" },
  { name: "Premium", kicker: "Most popular", price: "2,499", description: "More coaching, more accountability, more momentum.", features: ["Everything in Basic", "4 group classes / month", "Monthly body scan", "1 trainer check-in / month"], accent: "orange", featured: true },
  { name: "Elite", kicker: "Train different", price: "4,999", description: "The most personal path to your biggest transformation.", features: ["Everything in Premium", "Unlimited group classes", "Weekly 1:1 coaching", "Nutrition & recovery plan"], accent: "blue" },
];

const gallery = [
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1100&q=85", alt: "Members training in a dark, modern gym", label: "Train with intent", tall: true },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=85", alt: "Athlete lifting a barbell", label: "Earn your edge" },
  { src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=85", alt: "Athlete in the gym", label: "Built by repetition" },
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85", alt: "Spacious fitness floor", label: "Room to grow" },
];

const testimonials = [
  { quote: "I stopped chasing motivation and started building a routine. Falcon made consistency feel exciting.", name: "Ananya Rao", detail: "Premium member · 11 months", initials: "AR" },
  { quote: "The energy is unmatched. It feels serious about results, but never intimidating for someone starting out.", name: "Rohan Shetty", detail: "Basic member · 7 months", initials: "RS" },
  { quote: "The coaching is the difference. My deadlift, sleep and confidence all changed in the same season.", name: "Meera Nair", detail: "Elite member · 15 months", initials: "MN" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Premium");
  const [testimonial, setTestimonial] = useState(0);
  const [newsletter, setNewsletter] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setModalOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openJoin = (plan = "Premium") => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const moveTestimonial = (direction: number) => {
    setTestimonial((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  const submitNewsletter = (event: React.FormEvent) => {
    event.preventDefault();
    if (!newsletter.trim()) return;
    setNewsletterSent(true);
    setNewsletter("");
    toast.success("You're on the list.", { description: "Fresh training notes are headed your way." });
  };

  const submitInquiry = (event: React.FormEvent) => {
    event.preventDefault();
    setModalOpen(false);
    toast.success("Inquiry received.", { description: "Our team will call you within one business day." });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#101113] text-[#f5f6f8] selection:bg-[#2563eb] selection:text-white">
      <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-[#101113]/90 shadow-2xl shadow-black/20 backdrop-blur-xl" : "bg-transparent"}`}>
        <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <button onClick={() => scrollTo("#top")} className="group flex items-center gap-3" aria-label="Falcon Fitness home">
            <span className="grid h-9 w-9 place-items-center bg-[#f97316] text-[#101113] transition-transform duration-200 group-hover:rotate-12"><Zap size={19} fill="currentColor" strokeWidth={2.5} /></span>
            <span className="text-left leading-none"><span className="block font-display text-[17px] font-extrabold uppercase tracking-[0.12em]">Falcon</span><span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.33em] text-white/50">Fitness · Hoskote</span></span>
          </button>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => <button key={item.href} onClick={() => scrollTo(item.href)} className="nav-link">{item.label}</button>)}
          </nav>
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 text-[11px] font-semibold text-white/50 xl:flex"><span className="h-2 w-2 animate-pulse rounded-full bg-[#f97316]" />Open today · 5 AM – 11 PM</span>
            <button onClick={() => openJoin()} className="hidden bg-[#2563eb] px-5 py-3 text-[11px] font-black uppercase tracking-[0.16em] text-white transition-all duration-200 hover:bg-[#3e79eb] active:scale-[.97] sm:block">Join now</button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-11 w-11 place-items-center border border-white/10 text-white lg:hidden" aria-label="Toggle menu">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
          </div>
        </div>
        {menuOpen && <div className="border-t border-white/10 bg-[#16181c] px-5 py-5 lg:hidden">{navItems.map((item) => <button key={item.href} onClick={() => scrollTo(item.href)} className="block w-full border-b border-white/10 py-3 text-left text-sm font-bold uppercase tracking-[0.14em] text-white/75 last:border-b-0">{item.label}</button>)}<button onClick={() => { setMenuOpen(false); openJoin(); }} className="mt-4 w-full bg-[#f97316] px-4 py-3 text-xs font-black uppercase tracking-widest text-[#101113]">Join now</button></div>}
      </header>

      <main id="top">
        <section className="relative isolate min-h-[700px] overflow-hidden sm:min-h-[780px] lg:min-h-[850px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#101113_0%,rgba(16,17,19,.92)_27%,rgba(16,17,19,.25)_76%,rgba(16,17,19,.58)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,#101113_0%,transparent_24%,transparent_68%,rgba(16,17,19,.42)_100%)]" />
          <div className="absolute -right-28 top-28 h-72 w-72 rounded-full bg-[#2563eb]/20 blur-[110px]" />
          <div className="relative mx-auto flex min-h-[700px] max-w-[1320px] items-end px-5 pb-20 pt-36 sm:min-h-[780px] sm:px-8 sm:pb-28 lg:min-h-[850px] lg:px-12 lg:pb-32">
            <div className="max-w-[710px]">
              <div className="reveal mb-7 inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#f97316]"><span className="h-px w-9 bg-[#f97316]" /> Hoskote's training ground</div>
              <h1 className="reveal delay-1 max-w-[680px] font-display text-[clamp(4.1rem,11vw,9.2rem)] font-black uppercase leading-[.82] tracking-[-0.065em] text-white">Earn<br /><span className="text-[#2563eb]">Your</span> <span className="text-white">Edge.</span></h1>
              <p className="reveal delay-2 mt-8 max-w-[490px] text-[15px] leading-7 text-white/64 sm:text-[17px]">A focused, high-energy gym in Hoskote for people who are ready to train with intent — and leave stronger than they arrived.</p>
              <div className="reveal delay-3 mt-9 flex flex-col gap-3 sm:flex-row"><button onClick={() => openJoin()} className="group inline-flex items-center justify-center gap-3 bg-[#f97316] px-7 py-4 text-xs font-black uppercase tracking-[0.16em] text-[#101113] transition-all duration-200 hover:bg-[#ff8a3d] active:scale-[.97]">Start your journey <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></button><button onClick={() => scrollTo("#memberships")} className="inline-flex items-center justify-center gap-3 border border-white/25 bg-white/5 px-7 py-4 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-all duration-200 hover:border-white/60 hover:bg-white/10 active:scale-[.97]"><Play size={14} fill="currentColor" /> Explore memberships</button></div>
              <div className="reveal delay-4 mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/15 pt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-white/45"><span className="flex items-center gap-2"><Users size={15} className="text-[#2563eb]" /> 1,200+ members</span><span className="flex items-center gap-2"><Trophy size={15} className="text-[#f97316]" /> 4.9 / 5 rating</span><span className="flex items-center gap-2"><Clock3 size={15} className="text-[#2563eb]" /> 365 days open</span></div>
            </div>
          </div>
          <div className="absolute bottom-7 right-5 hidden items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-white/35 lg:flex"><span className="h-px w-16 bg-white/25" />Scroll to explore</div>
        </section>

        <section id="about" className="relative overflow-hidden border-b border-white/8 bg-[#15171a] py-24 sm:py-32">
          <div className="absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-[#2563eb] to-transparent" />
          <div className="mx-auto grid max-w-[1320px] gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-24 lg:px-12">
            <div className="reveal"><p className="eyebrow"><span /> The Falcon standard</p><h2 className="mt-7 max-w-[590px] font-display text-5xl font-extrabold uppercase leading-[.92] tracking-[-0.045em] sm:text-7xl">Train like<br /><span className="text-[#f97316]">it matters.</span></h2><p className="mt-8 max-w-[560px] text-[16px] leading-8 text-white/58">Falcon Fitness is more than a room full of equipment. It is a deliberate place to build strength, confidence and a better relationship with the work. No ego. No shortcuts. Just better reps, every day.</p><div className="mt-10 grid max-w-[520px] grid-cols-3 gap-4 border-y border-white/10 py-6"><div><p className="font-display text-3xl font-black text-white sm:text-4xl">12k<span className="text-[#2563eb]">+</span></p><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/40">Workouts logged</p></div><div><p className="font-display text-3xl font-black text-white sm:text-4xl">36</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/40">Weekly classes</p></div><div><p className="font-display text-3xl font-black text-white sm:text-4xl">24<span className="text-[#f97316]">/7</span></p><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/40">Member energy</p></div></div><button onClick={() => scrollTo("#contact")} className="group mt-8 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.17em] text-[#2563eb] transition-colors hover:text-white">Come see the space <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></button></div>
            <div className="relative min-h-[470px] overflow-hidden bg-[#202328] sm:min-h-[570px]"><img src={trainerImage} alt="A Falcon Fitness coach" className="absolute inset-0 h-full w-full object-cover object-top grayscale-[.15] transition duration-700 hover:scale-[1.02]" /><div className="absolute inset-0 bg-gradient-to-t from-[#101113] via-transparent to-transparent" /><div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9"><div className="flex items-end justify-between"><div><p className="eyebrow text-[#f97316]"><span className="bg-[#f97316]" /> Meet your coach</p><h3 className="mt-3 font-display text-3xl font-black uppercase tracking-[-0.03em]">Aisha Khan</h3><p className="mt-1 text-xs font-semibold text-white/55">Head of strength · CSCS · 9 years coaching</p></div><div className="grid h-12 w-12 place-items-center border border-white/20 bg-black/30 backdrop-blur"><Award size={21} className="text-[#f97316]" /></div></div></div><div className="absolute right-5 top-5 border border-white/15 bg-[#101113]/65 px-3 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-white/70 backdrop-blur">01 / 03</div></div>
          </div>
        </section>

        <section className="bg-[#101113] py-24 sm:py-32"><div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12"><div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="eyebrow"><span /> Member notes</p><h2 className="mt-6 font-display text-4xl font-extrabold uppercase tracking-[-0.04em] sm:text-6xl">The work speaks.</h2></div><div className="flex gap-2"><button onClick={() => moveTestimonial(-1)} className="grid h-11 w-11 place-items-center border border-white/15 text-white/60 transition hover:border-white/60 hover:text-white" aria-label="Previous testimonial"><ChevronLeft size={18} /></button><button onClick={() => moveTestimonial(1)} className="grid h-11 w-11 place-items-center border border-white/15 text-white/60 transition hover:border-white/60 hover:text-white" aria-label="Next testimonial"><ChevronRight size={18} /></button></div></div><div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]"><div className="relative overflow-hidden border border-white/10 bg-[#17191d] p-8 sm:p-12"><div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#2563eb]/12 blur-[70px]" /><div className="relative"><div className="flex items-center gap-1 text-[#f97316]">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={15} fill="currentColor" />)}</div><blockquote className="mt-7 max-w-[720px] font-display text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-white sm:text-5xl">“{testimonials[testimonial].quote}”</blockquote><div className="mt-10 flex items-center gap-4"><div className="grid h-12 w-12 place-items-center rounded-full bg-[#2563eb] text-sm font-black">{testimonials[testimonial].initials}</div><div><p className="text-sm font-bold">{testimonials[testimonial].name}</p><p className="mt-1 text-xs text-white/45">{testimonials[testimonial].detail}</p></div></div></div></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-2"><div className="flex min-h-[145px] flex-col justify-between bg-[#2563eb] p-5 text-[#101113]"><span className="text-[10px] font-black uppercase tracking-[0.18em]">Average member</span><p className="font-display text-5xl font-black">4.9<span className="text-2xl">/5</span></p><div className="flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={12} fill="currentColor" />)}</div></div><div className="flex min-h-[145px] flex-col justify-between border border-white/10 bg-[#17191d] p-5"><span className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45">Members say</span><p className="font-display text-5xl font-black">96<span className="text-2xl text-[#f97316]">%</span></p><p className="text-xs font-semibold text-white/45">would recommend Falcon</p></div></div></div></div></section>

        <section id="amenities" className="border-y border-white/8 bg-[#15171a] py-24 sm:py-32"><div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12"><div className="max-w-[670px]"><p className="eyebrow"><span /> Built for the long run</p><h2 className="mt-6 font-display text-5xl font-extrabold uppercase leading-[.9] tracking-[-0.05em] sm:text-7xl">Everything<br /><span className="text-[#2563eb]">within reach.</span></h2><p className="mt-7 max-w-[520px] text-[16px] leading-8 text-white/55">Every detail at Falcon is designed to remove friction between you and the session you came for.</p></div><div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">{amenities.map((item, index) => { const Icon = item.icon; return <article key={item.title} className="group min-h-[245px] bg-[#15171a] p-7 transition-colors duration-300 hover:bg-[#1c2026] sm:p-9"><div className={`mb-14 grid h-11 w-11 place-items-center ${item.tone === "blue" ? "bg-[#2563eb] text-white" : "bg-[#f97316] text-[#101113]"}`}><Icon size={20} strokeWidth={2.2} /></div><span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/25">0{index + 1}</span><h3 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-[-0.02em]">{item.title}</h3><p className="mt-3 max-w-[280px] text-sm leading-6 text-white/48">{item.copy}</p></article> })}</div></div></section>

        <section id="memberships" className="bg-[#101113] py-24 sm:py-32"><div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12"><div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end"><div><p className="eyebrow"><span /> Memberships</p><h2 className="mt-6 max-w-[650px] font-display text-5xl font-extrabold uppercase leading-[.9] tracking-[-0.05em] sm:text-7xl">Choose your<br /><span className="text-[#f97316]">next level.</span></h2></div><p className="max-w-[300px] text-sm leading-6 text-white/48 lg:pb-2">No lock-in contracts. No hidden extras. Just a plan that meets you where you are.</p></div><div className="mt-16 grid items-stretch gap-4 lg:grid-cols-3">{plans.map((plan) => <article key={plan.name} className={`relative flex flex-col border p-7 sm:p-9 ${plan.featured ? "border-[#f97316] bg-[#1b1a19] lg:-mt-5 lg:mb-[-20px]" : "border-white/10 bg-[#15171a]"}`}>{plan.featured && <div className="absolute -top-px left-7 -translate-y-1/2 bg-[#f97316] px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-[#101113]">Members' favorite</div>}<div className="flex items-start justify-between"><div><p className={`text-[10px] font-black uppercase tracking-[0.2em] ${plan.accent === "orange" ? "text-[#f97316]" : "text-[#2563eb]"}`}>{plan.kicker}</p><h3 className="mt-4 font-display text-4xl font-black uppercase tracking-[-0.04em]">{plan.name}</h3></div><Ticket size={22} className={plan.accent === "orange" ? "text-[#f97316]" : "text-[#2563eb]"} /></div><div className="mt-8 flex items-baseline gap-2"><span className="font-display text-5xl font-black">₹{plan.price}</span><span className="text-xs text-white/40">/ month</span></div><p className="mt-3 min-h-[48px] text-sm leading-6 text-white/48">{plan.description}</p><div className="my-8 h-px bg-white/10" /><ul className="space-y-4">{plan.features.map((feature) => <li key={feature} className="flex items-center gap-3 text-sm text-white/72"><span className={`grid h-5 w-5 place-items-center ${plan.accent === "orange" ? "bg-[#f97316] text-[#101113]" : "bg-[#2563eb] text-white"}`}><Check size={12} strokeWidth={3} /></span>{feature}</li>)}</ul><button onClick={() => openJoin(plan.name)} className={`mt-10 flex w-full items-center justify-center gap-2 px-5 py-4 text-xs font-black uppercase tracking-[0.15em] transition active:scale-[.98] ${plan.featured ? "bg-[#f97316] text-[#101113] hover:bg-[#ff8a3d]" : "border border-white/20 text-white hover:border-white/70 hover:bg-white/5"}`}>Choose {plan.name} <ArrowRight size={15} /></button></article>)}</div><p className="mt-8 text-center text-xs text-white/32">All plans include a complimentary tour and movement screen.</p></div></section>

        <section id="gallery" className="border-y border-white/8 bg-[#15171a] py-24 sm:py-32"><div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="eyebrow"><span /> Inside Falcon</p><h2 className="mt-6 font-display text-5xl font-extrabold uppercase tracking-[-0.05em] sm:text-7xl">No ordinary<br /><span className="text-[#2563eb]">workout.</span></h2></div><button onClick={() => toast("Gallery tour coming soon", { description: "Ask our team for a walk-through when you visit." })} className="group inline-flex items-center gap-2 pb-1 text-xs font-black uppercase tracking-[0.16em] text-[#f97316]">See the full tour <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></button></div><div className="mt-14 grid auto-rows-[210px] grid-cols-2 gap-3 sm:auto-rows-[250px] lg:auto-rows-[285px] lg:grid-cols-4">{gallery.map((item, index) => <div key={item.label} className={`group relative overflow-hidden ${item.tall ? "row-span-2" : ""} ${index === 1 ? "lg:col-span-1" : ""}`}><img src={item.src} alt={item.alt} loading="lazy" className="h-full w-full object-cover grayscale-[.15] transition duration-700 group-hover:scale-105 group-hover:grayscale-0" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" /><div className="absolute bottom-5 left-5"><p className="text-xs font-black uppercase tracking-[0.16em] text-white">{item.label}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#f97316]">Falcon / Hoskote</p></div></div>)}</div></div></section>

        <section id="contact" className="relative overflow-hidden bg-[#101113] py-24 sm:py-32"><div className="absolute right-[-10%] top-1/4 h-96 w-96 rounded-full bg-[#2563eb]/12 blur-[130px]" /><div className="mx-auto grid max-w-[1320px] gap-16 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-24 lg:px-12"><div><p className="eyebrow"><span /> Find your place</p><h2 className="mt-6 font-display text-5xl font-extrabold uppercase leading-[.9] tracking-[-0.05em] sm:text-7xl">Your next<br /><span className="text-[#f97316]">rep starts here.</span></h2><p className="mt-8 max-w-[430px] text-[16px] leading-8 text-white/55">Come for the equipment. Stay for the people. Leave with proof you can do hard things.</p><div className="mt-10 space-y-6"><a className="contact-line" href="https://maps.google.com/?q=Falcon+Fitness+Hoskote" target="_blank" rel="noreferrer"><span className="contact-icon bg-[#2563eb]"><MapPin size={17} /></span><span><b>Find us</b><small>Old Madras Road, Hoskote, Bengaluru 562114</small></span><ArrowRight size={16} className="ml-auto text-white/35" /></a><a className="contact-line" href="tel:+919900123456"><span className="contact-icon bg-[#f97316] text-[#101113]"><MessageCircle size={17} /></span><span><b>Talk to the team</b><small>+91 99001 23456 · hello@falconfits.in</small></span><ArrowRight size={16} className="ml-auto text-white/35" /></a><div className="contact-line"><span className="contact-icon border border-white/15"><Clock3 size={17} /></span><span><b>Open every day</b><small>Mon – Sun · 5:00 AM – 11:00 PM</small></span></div></div></div><div className="relative overflow-hidden border border-white/10 bg-[#17191d] p-7 sm:p-10"><div className="absolute right-[-50px] top-[-50px] h-44 w-44 rounded-full border border-[#2563eb]/20" /><div className="absolute right-[-15px] top-[-15px] h-28 w-28 rounded-full border border-[#2563eb]/20" /><div className="relative"><p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2563eb]">A little signal from us</p><h3 className="mt-4 font-display text-3xl font-black uppercase tracking-[-0.03em] sm:text-4xl">Get the good stuff.</h3><p className="mt-4 max-w-[420px] text-sm leading-6 text-white/48">Training notes, class drops and member stories — no spam, just things worth opening.</p><form onSubmit={submitNewsletter} className="mt-8 flex flex-col gap-3 sm:flex-row"><input required type="email" value={newsletter} onChange={(event) => { setNewsletter(event.target.value); setNewsletterSent(false); }} placeholder="Your email address" aria-label="Email address" className="min-w-0 flex-1 border border-white/15 bg-[#101113] px-4 py-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#2563eb]" /><button className="bg-[#2563eb] px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#3e79eb] active:scale-[.98]">{newsletterSent ? "You're in" : "Subscribe"}</button></form><div className="my-10 h-px bg-white/10" /><div className="flex flex-wrap items-center justify-between gap-5"><div><p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/40">Follow the journey</p><div className="mt-3 flex gap-2"><a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon"><Instagram size={16} /></a><a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon"><Facebook size={16} /></a><a href="https://wa.me/919900123456" target="_blank" rel="noreferrer" className="social-icon"><MessageCircle size={16} /></a></div></div><div className="text-right"><p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/40">Coordinates</p><p className="mt-2 text-sm font-bold text-white/72">13.0716° N · 77.7982° E</p></div></div></div></div></div></section>
      </main>

      <footer className="border-t border-white/8 bg-[#0c0d0f] py-8"><div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-4 px-5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/35 sm:flex-row sm:items-center sm:px-8 lg:px-12"><span>© 2026 Falcon Fitness Hoskote</span><span>Built for the work / Designed for the long run</span><span>Privacy · Terms</span></div></footer>

      <a href="https://wa.me/919900123456?text=Hi%20Falcon%20Fitness%2C%20I%27d%20like%20to%20know%20more%20about%20membership." target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-[#071c0e] shadow-xl shadow-[#25d366]/20 transition-transform duration-200 hover:scale-110" aria-label="Chat on WhatsApp"><MessageCircle size={24} fill="currentColor" /></a>

      {modalOpen && <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="join-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setModalOpen(false); }}><div className="relative w-full max-w-[520px] border border-white/15 bg-[#17191d] p-7 shadow-2xl sm:p-10"><button onClick={() => setModalOpen(false)} className="absolute right-5 top-5 grid h-9 w-9 place-items-center border border-white/10 text-white/55 transition hover:text-white" aria-label="Close dialog"><X size={18} /></button><p className="eyebrow text-[#f97316]"><span className="bg-[#f97316]" /> Membership inquiry</p><h2 id="join-title" className="mt-5 font-display text-4xl font-black uppercase tracking-[-0.04em]">Start with {selectedPlan}.</h2><p className="mt-3 text-sm leading-6 text-white/48">Tell us a little about yourself. We will take it from here.</p><form onSubmit={submitInquiry} className="mt-8 space-y-4"><input required placeholder="Full name" className="modal-input" /><input required type="tel" placeholder="Phone number" className="modal-input" /><input required type="email" placeholder="Email address" className="modal-input" /><select value={selectedPlan} onChange={(event) => setSelectedPlan(event.target.value)} className="modal-input"><option>Basic</option><option>Premium</option><option>Elite</option></select><button className="mt-2 flex w-full items-center justify-center gap-2 bg-[#f97316] px-5 py-4 text-xs font-black uppercase tracking-[0.16em] text-[#101113] transition hover:bg-[#ff8a3d] active:scale-[.98]">Request a callback <ArrowRight size={15} /></button></form><p className="mt-5 text-center text-[10px] leading-4 text-white/30">By submitting, you agree to be contacted by the Falcon Fitness team.</p></div></div>}
    </div>
  );
}
