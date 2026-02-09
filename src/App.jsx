import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Sun, 
  Zap, 
  CheckCircle, 
  ShieldCheck, 
  BarChart, 
  ArrowRight,
  Menu,
  X,
  FileText,
  Wrench,
  Clock
} from 'lucide-react';

/**
 * Custom SVG Logo Component recreated from your brand assets
 * Features: Circular gradient, sun rays, specific ARK typography, solar grid.
 */
const ArkLogo = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 500 500" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoCircleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#F6E5AF', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#96C9EB', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <circle cx="250" cy="250" r="235" fill="url(#logoCircleGradient)" stroke="#1a2e44" strokeWidth="2" />
    <g transform="translate(250, 215) scale(1.1)">
      <g transform="translate(0, -95)">
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
          <path key={i} d="M 0,-55 L -8,-40 L 8,-40 Z" fill="#1a2e44" transform={`rotate(${angle})`} />
        ))}
      </g>
      <text x="0" y="-82" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="54" fill="#1a2e44" style={{ letterSpacing: '-2px' }}>ARK</text>
      <g transform="translate(-80, -30)">
        <path d="M 15,0 L 145,0 L 160,65 L 0,65 Z" fill="none" stroke="#1a2e44" strokeWidth="6" strokeLinejoin="round" />
        <line x1="80" y1="0" x2="80" y2="65" stroke="#1a2e44" strokeWidth="4" />
        <line x1="7" y1="32" x2="153" y2="32" stroke="#1a2e44" strokeWidth="4" />
        <path d="M 80,18 L 74,32 L 86,32 L 80,46" fill="#1a2e44" />
      </g>
    </g>
    <text x="250" y="325" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="42" fill="#1a2e44">ARK ENERGY</text>
    <text x="250" y="365" textAnchor="middle" fontFamily="sans-serif" fontSize="24" letterSpacing="12" fill="#1a2e44">SOLUTIONS</text>
  </svg>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const navLinks = [
    { name: 'Benefits', href: '#benefits' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 scroll-smooth antialiased selection:bg-blue-100">
      {/* Dynamic Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <ArkLogo className="w-12 h-12 md:w-14 md:h-14" />
            <div className="hidden sm:block leading-none">
              <div className="font-black text-xl text-slate-900 tracking-tighter uppercase">Ark Energy</div>
              <div className="text-[10px] font-bold tracking-[0.3em] text-blue-600 uppercase">Solutions</div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-10 font-bold text-xs uppercase tracking-widest">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-slate-600 hover:text-blue-600 transition-colors">{link.name}</a>
            ))}
            <a href="#contact" className="bg-[#1a2e44] hover:bg-blue-600 text-white px-8 py-3 rounded-2xl transition-all shadow-xl shadow-slate-200">Request Quote</a>
          </div>

          <button className="md:hidden text-slate-900 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Flyout Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl p-8 space-y-6 border-t border-slate-100 animate-in fade-in slide-in-from-top duration-300">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="block text-3xl font-black text-slate-900">{link.name}</a>
            ))}
            <a href="tel:9611078690" className="block bg-blue-600 text-white p-5 rounded-2xl text-center font-bold text-xl shadow-xl">Call 9611078690</a>
          </div>
        )}
      </nav>

      {/* Hero Section: Responsive Grid */}
      <header className="relative pt-40 pb-20 lg:pt-64 lg:pb-48 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-blue-50/50 -z-10 rounded-l-[100px] hidden lg:block"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 md:space-y-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-blue-100">
              <ShieldCheck size={16} /> MNRE Approved Provider
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-slate-900">
              Move towards <span className="text-blue-600">₹0</span> Bills
            </h1>
            <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed max-w-lg font-medium">
              Sustainability made simple. Reduce electricity costs by up to 90% with Karnataka's premium solar experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#contact" className="bg-blue-600 text-white px-10 py-5 rounded-3xl font-black text-lg shadow-2xl shadow-blue-200 hover:bg-[#1a2e44] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group">
                Free Site Visit <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="tel:9611078690" className="bg-white border-2 border-slate-200 px-10 py-5 rounded-3xl font-black text-lg flex items-center justify-center gap-3 hover:border-blue-600 hover:text-blue-600 transition-all">
                <Phone size={22} /> 9611078690
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-3 md:p-4 rounded-[40px] md:rounded-[60px] shadow-2xl border border-slate-100 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80" 
                className="rounded-[30px] md:rounded-[45px] w-full h-[400px] md:h-[500px] object-cover" 
                alt="Solar Installation" 
              />
              <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-white p-6 md:p-10 rounded-[30px] md:rounded-[40px] shadow-2xl border border-slate-50">
                <div className="text-4xl md:text-6xl font-black text-blue-600 mb-1 tracking-tighter">90%</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Avg Savings</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Benefits: Grid Layout */}
      <section id="benefits" className="py-24 md:py-32 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight text-slate-900">The Solar Advantage</h2>
            <p className="text-slate-500 text-lg font-medium">Join 500+ families already saving thousands monthly with our MNRE approved solutions.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              { icon: <Zap size={40} className="text-yellow-500" />, title: "Zero Bills", desc: "Virtually eliminate your monthly utility costs with our high-efficiency panel setups." },
              { icon: <ShieldCheck size={40} className="text-blue-500" />, title: "Premium Hardware", desc: "MNRE approved A-grade components ensuring your investment lasts for 25+ years." },
              { icon: <Wrench size={40} className="text-slate-700" />, title: "Expert Care", desc: "End-to-end management including assessment, net-metering, and yearly maintenance." }
            ].map((b, i) => (
              <div key={i} className="p-10 md:p-12 bg-white rounded-[40px] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="mb-8 p-4 bg-slate-50 rounded-2xl w-fit group-hover:scale-110 transition-transform">{b.icon}</div>
                <h3 className="text-2xl font-black mb-4">{b.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section: Mobile-first Stack */}
      <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-[#1a2e44] rounded-[50px] md:rounded-[80px] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-slate-800">
          <div className="lg:w-1/2 p-10 md:p-16 lg:p-24 text-white relative">
            <div className="absolute -bottom-20 -left-20 opacity-5">
              <ArkLogo className="w-96 h-96" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Secure Your Energy Future.</h2>
            <p className="text-slate-400 text-xl mb-12 md:mb-16 font-medium">Book a free site inspection and receive a detailed ROI report within 24 hours.</p>
            <div className="space-y-10 md:space-y-12">
              <a href="tel:9611078690" className="flex items-center gap-6 md:gap-8 group">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 rounded-[20px] flex items-center justify-center shadow-lg"><Phone size={28} /></div>
                <div>
                  <div className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-1">Helpline</div>
                  <div className="text-2xl md:text-3xl font-black">+91 96110 78690</div>
                </div>
              </a>
              <div className="flex items-center gap-6 md:gap-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-800 rounded-[20px] flex items-center justify-center border border-slate-700"><Mail size={28} /></div>
                <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">Email</div>
                  <div className="text-lg md:text-xl font-bold">arkenergysolutions.vjp@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-white p-10 md:p-16 lg:p-24 border-l border-slate-100">
            {formSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-8 animate-bounce"><CheckCircle size={48} /></div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter">Request Sent!</h3>
                <p className="text-slate-500 text-lg font-medium">We'll call you back shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Full Name</label>
                  <input required type="text" placeholder="Rahul Sharma" className="w-full p-5 md:p-6 bg-slate-50 rounded-2xl border-2 border-slate-100 focus:border-blue-600 outline-none transition-all font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Phone Number</label>
                  <input required type="tel" placeholder="+91" className="w-full p-5 md:p-6 bg-slate-50 rounded-2xl border-2 border-slate-100 focus:border-blue-600 outline-none transition-all font-bold" />
                </div>
                <button className="w-full bg-blue-600 text-white py-5 md:py-6 rounded-3xl font-black text-xl hover:bg-[#1a2e44] transition-all shadow-2xl active:scale-95">Get Free Site Visit</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-slate-100">
        <ArkLogo className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 opacity-80" />
        <div className="font-black text-2xl mb-2 text-slate-900 tracking-tighter uppercase">Ark Energy Solutions</div>
        <div className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.4em]">A Step Towards Sustainability</div>
      </footer>
    </div>
  );
};

export default App;