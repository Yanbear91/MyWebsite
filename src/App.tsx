import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Globe, 
  Smartphone, 
  Search, 
  Calendar, 
  RefreshCw, 
  Users, 
  Clock, 
  MessageSquare, 
  Layout, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
            L
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">LocalBiz Web</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">Services</a>
          <a href="#process" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">How it Works</a>
          <a href="#portfolio" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">Examples</a>
          <a href="#contact" className="px-5 py-2.5 bg-brand-primary text-white text-sm font-semibold rounded-full hover:bg-brand-accent transition-all shadow-lg shadow-brand-primary/20">
            Get a Quote
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <a href="#services" onClick={() => setIsOpen(false)} className="text-lg font-medium">Services</a>
              <a href="#process" onClick={() => setIsOpen(false)} className="text-lg font-medium">How it Works</a>
              <a href="#portfolio" onClick={() => setIsOpen(false)} className="text-lg font-medium">Examples</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="w-full py-4 bg-brand-primary text-white text-center font-bold rounded-xl">
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="pt-40 pb-20 px-6 md:px-12 lg:px-24 bg-brand-bg relative overflow-hidden">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
          <MapPin size={14} /> Local to Your Area
        </div>
        <h1 className="heading-xl mb-6 text-slate-900">
          Affordable Websites for <span className="text-brand-primary">Local Businesses</span>
        </h1>
        <p className="text-xl text-muted mb-8 max-w-lg">
          I help small businesses get modern, professional websites that attract more customers and build real trust online.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a href="#contact" className="px-8 py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-accent transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-primary/20 group">
            Get a Free Consultation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#portfolio" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center">
            View Example Layouts
          </a>
        </div>
        <div className="flex flex-wrap gap-6">
          {[
            { icon: Clock, text: "Fast 7-Day Setup" },
            { icon: Smartphone, text: "Mobile Friendly" },
            { icon: CheckCircle2, text: "Affordable Pricing" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <item.icon size={18} className="text-brand-primary" />
              {item.text}
            </div>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative hidden lg:block"
      >
        <div className="aspect-square bg-gradient-to-br from-brand-primary to-brand-accent rounded-3xl rotate-3 absolute inset-0 opacity-10 blur-3xl"></div>
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
          alt="Professional web design" 
          className="rounded-3xl shadow-2xl relative z-10 border-8 border-white"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </div>
  </section>
);

const Problem = () => (
  <section className="section-padding bg-white">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="heading-lg mb-6 text-slate-900">Many Small Businesses Are <span className="text-red-600">Losing Customers</span> Online</h2>
      <p className="text-lg text-muted">In today's world, if your business isn't easy to find on a phone, you're invisible to half your customers.</p>
    </div>
    
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { 
          title: "Invisible on Google", 
          desc: "Customers search on Google before choosing a business. If you're not there, they find your competitor.",
          icon: Search
        },
        { 
          title: "Unprofessional Look", 
          desc: "Facebook pages often look less professional than a dedicated website. First impressions matter.",
          icon: Layout
        },
        { 
          title: "Broken on Mobile", 
          desc: "Old websites do not work well on phones, frustrating customers who want to find you quickly.",
          icon: Smartphone
        },
        { 
          title: "Hard to Contact", 
          desc: "If customers cannot easily find your phone number or address, they will simply move on.",
          icon: Phone
        }
      ].map((item, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -5 }}
          className="p-8 bg-slate-50 rounded-2xl border border-slate-100"
        >
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-primary mb-6">
            <item.icon size={24} />
          </div>
          <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
          <p className="text-sm text-muted">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const Solution = () => (
  <section className="section-padding bg-brand-primary text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
    
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
      <div>
        <h2 className="heading-lg mb-8">Simple Websites That Help Businesses <span className="text-brand-accent">Get More Customers</span></h2>
        <div className="space-y-6">
          {[
            "Professional website design that builds trust",
            "Mobile-friendly layout for customers on the go",
            "Clear contact forms to capture new leads",
            "Google Maps integration so people can find you",
            "Easy-to-read service pages explaining what you do"
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={14} className="text-white" />
              </div>
              <p className="text-lg font-medium opacity-90">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-primary font-bold rounded-xl hover:bg-slate-100 transition-all">
            Start Your Project Today <ChevronRight size={20} />
          </a>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4 pt-12">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80" className="rounded-2xl shadow-2xl" alt="Business" referrerPolicy="no-referrer" />
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80" className="rounded-2xl shadow-2xl" alt="Meeting" referrerPolicy="no-referrer" />
        </div>
        <div className="space-y-4">
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80" className="rounded-2xl shadow-2xl" alt="Office" referrerPolicy="no-referrer" />
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80" className="rounded-2xl shadow-2xl" alt="Workspace" referrerPolicy="no-referrer" />
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="section-padding bg-slate-50">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="heading-lg mb-6 text-slate-900">Clear & Simple Service Options</h2>
      <p className="text-lg text-muted">No hidden fees or complicated jargon. Just results-driven web design for your local business.</p>
    </div>
    
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Starter Website",
          desc: "For small businesses that need a clean, professional online presence.",
          icon: Globe,
          features: ["Homepage", "Services Page", "Contact Page", "Mobile-Friendly", "Basic SEO Setup"]
        },
        {
          title: "Booking Website",
          desc: "For salons, clinics, and appointment-based businesses.",
          icon: Calendar,
          features: ["Online Booking System", "Service Listing", "Appointment Scheduling", "Contact Page", "Mobile-Friendly"],
          popular: true
        },
        {
          title: "Website Redesign",
          desc: "For businesses with outdated websites that need a modern refresh.",
          icon: RefreshCw,
          features: ["Modern Design", "Improved Mobile Performance", "Faster Loading Pages", "SEO Optimization", "Content Updates"]
        }
      ].map((service, i) => (
        <div 
          key={i} 
          className={`relative p-10 rounded-3xl bg-white border ${service.popular ? 'border-brand-primary shadow-2xl shadow-brand-primary/10' : 'border-slate-200 shadow-sm'}`}
        >
          {service.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-primary text-white text-xs font-bold rounded-full uppercase tracking-widest">
              Most Popular
            </div>
          )}
          <div className="w-14 h-14 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-primary mb-8">
            <service.icon size={28} />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
          <p className="text-slate-500 mb-8 text-sm leading-relaxed">{service.desc}</p>
          <ul className="space-y-4 mb-10">
            {service.features.map((feature, j) => (
              <li key={j} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <CheckCircle2 size={16} className="text-emerald-500" />
                {feature}
              </li>
            ))}
          </ul>
          <a 
            href="#contact" 
            className={`block w-full py-4 text-center font-bold rounded-xl transition-all ${service.popular ? 'bg-brand-primary text-white hover:bg-brand-accent' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
          >
            Select Plan
          </a>
        </div>
      ))}
    </div>
  </section>
);

const WhyChooseMe = () => (
  <section className="section-padding bg-white">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
      <div>
        <h2 className="heading-lg mb-8 text-slate-900">Why Choose Me Over a Big Agency?</h2>
        <p className="text-lg text-muted mb-10">
          I'm a local developer who cares about your success. You'll work directly with me, not a project manager at a large corporation.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-8">
          {[
            { title: "Local to the Area", desc: "I understand the local market and your customers." },
            { title: "Affordable Pricing", desc: "No large agency overhead means better prices for you." },
            { title: "Fast Turnaround", desc: "Most websites are launched within 7 business days." },
            { title: "Direct Communication", desc: "You have my direct phone number and email." }
          ].map((item, i) => (
            <div key={i}>
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                {item.title}
              </h4>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-slate-50 rounded-2xl border-l-4 border-brand-primary">
          <p className="italic text-slate-700 font-medium">
            "Built by a software engineering graduate focused on helping local businesses grow."
          </p>
        </div>
      </div>
      
      <div className="relative">
        <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
            alt="Modern Office" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-10 -right-10 bg-brand-primary text-white p-10 rounded-3xl shadow-2xl hidden md:block">
          <div className="text-4xl font-bold mb-1">7 Days</div>
          <div className="text-sm font-medium opacity-80 uppercase tracking-widest">Average Launch Time</div>
        </div>
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="process" className="section-padding bg-slate-50">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="heading-lg mb-6 text-slate-900">How the Process Works</h2>
      <p className="text-lg text-muted">A simple, stress-free path to getting your business online.</p>
    </div>
    
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 relative">
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
      
      {[
        { step: "01", title: "Free Consultation", desc: "We discuss your business goals and customer needs." },
        { step: "02", title: "Design Proposal", desc: "I create a layout and structure tailored to your brand." },
        { step: "03", title: "Development", desc: "I build your website using modern, fast technology." },
        { step: "04", title: "Website Launch", desc: "Your site goes live and starts attracting customers." }
      ].map((item, i) => (
        <div key={i} className="relative z-10 bg-slate-50 p-6 text-center">
          <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-xl shadow-brand-primary/30">
            {item.step}
          </div>
          <h3 className="text-lg font-bold mb-3 text-slate-900">{item.title}</h3>
          <p className="text-sm text-muted">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const PortfolioItem = (props: any) => {
  const { item } = props;
  const [currentImg, setCurrentImg] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const images = Array.isArray(item.img) ? item.img : [item.img];

  React.useEffect(() => {
    if (images.length > 1 && isHovered) {
      const interval = setInterval(() => {
        setCurrentImg((prev) => (prev + 1) % images.length);
      }, 1000); // 1 second rotation on hover
      return () => clearInterval(interval);
    } else if (!isHovered) {
      setCurrentImg(0); // Reset to first image when not hovered
    }
  }, [images.length, isHovered]);

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <div className="aspect-video rounded-2xl overflow-hidden mb-6 shadow-lg relative bg-slate-100">
        <AnimatePresence mode="wait">
          <motion.img 
            key={images[currentImg]}
            src={images[currentImg]} 
            alt={item.title} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            referrerPolicy="no-referrer" 
          />
        </AnimatePresence>
      </div>
      <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-1">{item.category}</div>
      <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
    </motion.div>
  );
};

const Portfolio = () => (
  <section id="portfolio" className="section-padding bg-white">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="heading-lg mb-6 text-slate-900">Example Business Websites</h2>
      <p className="text-lg text-muted">See the types of modern layouts I can build for your business.</p>
    </div>
    
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { 
          title: "Restaurant Website", 
          category: "Hospitality", 
          img: [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
          ]
        },
        { 
          title: "Hair Salon Website", 
          category: "Beauty", 
          img: [
            "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80"
          ]
        },
        { 
          title: "Local Trades Website", 
          category: "Trades", 
          img: [
            "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=600&q=80", // Plumbing
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80", // Construction
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"  // Electrician
          ]
        },
        { 
          title: "Cleaning Company Website", 
          category: "Services", 
          img: [
            "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=600&q=80"
          ]
        }
      ].map((item, i) => (
        <PortfolioItem key={i} item={item} />
      ))}
    </div>
    
    <div className="max-w-3xl mx-auto mt-20 p-8 bg-brand-bg rounded-3xl border border-brand-primary/20 text-center">
      <h4 className="text-xl font-bold text-slate-900 mb-4">Special Portfolio Offer</h4>
      <p className="text-slate-600 mb-0">
        Currently offering <strong>discounted websites</strong> for local businesses while building my local portfolio. Contact me today to lock in a special rate!
      </p>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section-padding bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
      <div>
        <h2 className="heading-lg mb-8">Get Your Business Online</h2>
        <p className="text-xl opacity-70 mb-12">
          Contact me for a free consultation and a custom website quote. No pressure, just a friendly chat about your business.
        </p>
        
        <div className="space-y-8">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-accent">
              <Phone size={24} />
            </div>
            <div>
              <div className="text-sm opacity-50 uppercase tracking-widest font-bold mb-1">Call or Text</div>
              <div className="text-xl font-bold">(555) 123-4567</div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-accent">
              <Mail size={24} />
            </div>
            <div>
              <div className="text-sm opacity-50 uppercase tracking-widest font-bold mb-1">Email Me</div>
              <div className="text-xl font-bold">hello@localbizweb.com</div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-accent">
              <MessageSquare size={24} />
            </div>
            <div>
              <div className="text-sm opacity-50 uppercase tracking-widest font-bold mb-1">Direct Message</div>
              <div className="text-xl font-bold">Available on WhatsApp</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-10 rounded-3xl shadow-2xl">
        <h3 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h3>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Your Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/20" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Business Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/20" placeholder="Local Coffee Shop" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Email Address</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/20" placeholder="john@example.com" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">How can I help?</label>
            <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/20" placeholder="Tell me about your project..."></textarea>
          </div>
          <button className="w-full py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-accent transition-all shadow-xl shadow-brand-primary/20">
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  </section>
);

const FAQ = () => (
  <section className="section-padding bg-slate-50">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="heading-lg mb-6 text-slate-900">Frequently Asked Questions</h2>
    </div>
    
    <div className="max-w-3xl mx-auto space-y-6">
      {[
        { q: "How long does it take to build a website?", a: "Most small business websites are completed within 3 to 7 business days, depending on the complexity and how quickly I receive your content." },
        { q: "Do I need technical knowledge?", a: "No, not at all. I handle everything from design to launch. I'll even show you how to make simple updates yourself if you want to." },
        { q: "Can I update the website later?", a: "Yes! Your website is built to grow with your business. We can add new pages, booking systems, or features whenever you need them." },
        { q: "What about hosting and domain names?", a: "I'll guide you through setting these up so you own them 100%. I don't hold your website hostage like some big agencies do." }
      ].map((item, i) => (
        <div key={i} className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <h4 className="text-lg font-bold text-slate-900 mb-3">{item.q}</h4>
          <p className="text-slate-600 leading-relaxed">{item.a}</p>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-slate-100 bg-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center text-white font-bold">
          L
        </div>
        <span className="font-bold text-lg tracking-tight text-slate-900">LocalBiz Web Design</span>
      </div>
      
      <div className="text-sm text-slate-500">
        © {new Date().getFullYear()} LocalBiz Web Design. Helping local businesses grow online.
      </div>
      
      <div className="flex gap-6">
        <a href="#" className="text-slate-400 hover:text-brand-primary transition-colors"><Globe size={20} /></a>
        <a href="#" className="text-slate-400 hover:text-brand-primary transition-colors"><Mail size={20} /></a>
        <a href="#" className="text-slate-400 hover:text-brand-primary transition-colors"><Phone size={20} /></a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <WhyChooseMe />
        <Process />
        <Portfolio />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
