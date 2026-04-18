"use client";
import React, { useState, useEffect } from 'react';
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
  X,
  Moon,
  Sun,
  Zap, // Added Zap icon for the "Surge" theme
  ShieldCheck,
  TrendingUp,
  BarChart2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = ({ isDark, setIsDark }: { isDark: boolean, setIsDark: (v: boolean | ((prev: boolean) => boolean)) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDark = () => {
    console.log('Toggling dark mode from:', isDark);
    setIsDark((prev: boolean) => !prev);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.history.pushState(null, '', window.location.pathname);
          }}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white">
            <Zap size={24} fill="currentColor" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">Surge Web Studio</span>
        </button>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-primary transition-colors">Services</a>
          <a href="#process" onClick={(e) => handleNavClick(e, 'process')} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-primary transition-colors">How it Works</a>
          <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-primary transition-colors">Examples</a>
          
          <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-800 pl-8">
            <button 
              onClick={toggleDark}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="px-5 py-2.5 bg-brand-primary text-white text-sm font-semibold rounded-full hover:bg-brand-accent transition-all shadow-lg shadow-brand-primary/20">
              Free Website Audit
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleDark}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 dark:text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-0 w-full h-[calc(100vh-80px)] bg-white dark:bg-slate-950 flex flex-col items-center justify-center p-6 gap-8 border-t border-slate-100 dark:border-slate-800"
          >
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-2xl font-bold text-slate-900 dark:text-white hover:text-brand-primary transition-colors">Services</a>
            <a href="#process" onClick={(e) => handleNavClick(e, 'process')} className="text-2xl font-bold text-slate-900 dark:text-white hover:text-brand-primary transition-colors">How it Works</a>
            <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="text-2xl font-bold text-slate-900 dark:text-white hover:text-brand-primary transition-colors">Examples</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="w-full max-w-xs mt-8 py-4 bg-brand-primary text-white text-center text-lg font-bold rounded-xl shadow-lg shadow-brand-primary/20 hover:bg-brand-accent transition-all">
              Free Website Audit
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const TopTitleAndImage = () => (
  <section className="pt-40 pb-20 px-6 md:px-12 lg:px-24 bg-brand-bg dark:bg-slate-900/50 relative overflow-hidden transition-colors duration-300">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="heading-xl mb-6 text-slate-900 dark:text-white">
          A Surge of Customers Starts With a <span className="text-brand-primary dark:text-brand-accent">Great Website</span>
        </h1>
        <p className="text-xl text-muted dark:text-slate-400 mb-8 max-w-lg">
          I build fast, modern websites that help local businesses attract more customers and grow online.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a href="#contact" className="px-8 py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-accent transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-primary/20 group">
            Get Your Free Website Audit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#portfolio" className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center">
            View Example Layouts
          </a>
        </div>
        <div className="flex flex-wrap gap-6">
          {[
            { icon: Zap, text: "Lightning-Fast Load Times" },
            { icon: Users, text: "Increased Customer Inquiries" },
            { icon: ShieldCheck, text: "Built-in Trust Factors" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
              <item.icon size={18} className="text-brand-primary dark:text-brand-accent" />
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
        {/* Subtle surge/lightning element behind the image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full text-brand-primary/5 dark:text-brand-accent/5 -z-10 rotate-12">
           <Zap className="w-full h-full" />
        </div>
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
          alt="Professional web design" 
          className="rounded-3xl shadow-2xl relative z-10 border-8 border-white dark:border-slate-800 transition-colors duration-300"
          referrerPolicy="no-referrer"
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute -top-6 -right-6 z-20 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl flex gap-4 items-center border border-slate-100 dark:border-slate-700"
        >
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 text-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <TrendingUp size={24} />
          </div>
          <div>
            <div className="font-bold text-slate-900 dark:text-white text-lg">Improved Conversion</div>
            <div className="text-sm text-slate-500 dark:text-slate-400">Typical outcome for our clients</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const CustomerProblemsText = () => (
  <section className="section-padding bg-white dark:bg-brand-dark-bg transition-colors duration-300">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="heading-lg mb-6 text-slate-900 dark:text-white">Many Small Businesses Are <span className="text-red-600">Losing Customers</span> Online</h2>
      <p className="text-lg text-muted dark:text-slate-400">In today's world, if your business isn't easy to find on a phone, you're invisible to half your customers.</p>
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
          className="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 transition-colors duration-300"
        >
          <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center text-brand-primary dark:text-brand-accent mb-6">
            <item.icon size={24} />
          </div>
          <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
          <p className="text-sm text-muted dark:text-slate-400">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const OurSolutionText = () => (
  <section className="section-padding bg-brand-primary dark:bg-slate-900 text-white overflow-hidden relative transition-colors duration-300">
    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
    
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
      <div>
        <h2 className="heading-lg mb-8">Stop Guessing. Get a <span className="text-brand-accent">Free Website Audit</span></h2>
        <p className="text-xl opacity-90 mb-8 max-w-lg">
          We'll analyze your current site and give you a clear roadmap to more customers. No strings attached.
        </p>
        <div className="space-y-6">
          {[
            "Speed & Performance Check",
            "Local SEO Visibility Report",
            "Conversion Rate Analysis",
            "Mobile-Friendly Verification"
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
            Claim Your Free Audit <ArrowRight size={20} />
          </a>
        </div>
      </div>
      
      <div className="flex items-center justify-center pt-12 lg:pt-0">
        <div className="w-full max-w-md">
          <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-6 md:p-8 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="w-12 h-12 bg-slate-800 dark:bg-brand-primary text-white rounded-xl flex items-center justify-center flex-shrink-0">
                <BarChart2 size={24} />
              </div>
              <div>
                <div className="font-bold text-lg leading-tight text-slate-900 dark:text-white">Audit Report Preview</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Sample Data</div>
              </div>
            </div>
            
            <div className="space-y-5 md:space-y-6">
              <div>
                <div className="flex justify-between mb-2 text-sm font-bold">
                  <span className="text-slate-700 dark:text-slate-300">Site Speed</span>
                  <span className="text-red-500">Poor</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full w-[25%]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2 text-sm font-bold">
                  <span className="text-slate-700 dark:text-slate-300">Mobile UX</span>
                  <span className="text-yellow-500">Average</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full w-[60%]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2 text-sm font-bold">
                  <span className="text-slate-700 dark:text-slate-300">SEO Visibility</span>
                  <span className="text-green-500">Good</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full w-[85%]"></div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 md:mt-8 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl italic text-sm text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800/50 leading-relaxed shadow-sm">
              "Slow loading times can cause visitors to leave before they even see your services."
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const OurPricingPackages = ({ selectedPlan, onSelectPlan }: { selectedPlan: string | null, onSelectPlan: (plan: string | null) => void }) => (
  <section id="services" className="section-padding bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="heading-lg mb-6 text-slate-900 dark:text-white">Clear & Simple Service Options</h2>
      <p className="text-lg text-muted dark:text-slate-400">No hidden fees or complicated jargon. Just results-driven web design for your local business.</p>
    </div>
    
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Starter Website",
          desc: "For small businesses that need a clean, professional online presence.",
          price: "From 7,000 kr",
          icon: Globe,
          features: ["Homepage", "Services Page", "Contact Page", "Mobile-Friendly", "Basic SEO Setup"]
        },
        {
          title: "Booking Website",
          desc: "For salons, clinics, and appointment-based businesses.",
          price: "From 9,000 kr",
          icon: Calendar,
          features: ["Everything from Starter Website", "Online Booking System", "Service Listing", "Appointment Scheduling", "Contact Page", "Mobile-Friendly"],
          popular: true
        },
        {
          title: "Website Redesign",
          desc: "For businesses with outdated websites that need a modern refresh.",
          price: "From 8,000 kr",
          icon: RefreshCw,
          features: ["Modern Design", "Improved Mobile Performance", "Faster Loading Pages", "SEO Optimization", "Content Updates"]
        }
      ].map((service, i) => {
        const isSelected = selectedPlan === service.title;
        return (
          <div 
            key={i} 
            onClick={() => onSelectPlan(isSelected ? null : service.title)}
            className={`cursor-pointer relative p-10 rounded-3xl transition-all ${isSelected ? 'bg-white dark:bg-slate-800 border-2 border-brand-primary shadow-2xl shadow-brand-primary/10 transform scale-105 z-10' : 'bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-brand-primary/50'}`}
          >
            {service.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-primary text-white text-xs font-bold rounded-full uppercase tracking-widest">
                Most Popular
              </div>
            )}
            <div className="w-14 h-14 bg-brand-bg dark:bg-slate-700 rounded-2xl flex items-center justify-center text-brand-primary dark:text-brand-accent mb-8">
              <service.icon size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">{service.title}</h3>
            <div className="text-xl font-bold text-brand-primary dark:text-brand-accent mb-4">{service.price}</div>
            <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm leading-relaxed">{service.desc}</p>
            <ul className="space-y-4 mb-10">
              {service.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <a 
              href="#contact" 
              onClick={(e) => {
                onSelectPlan(isSelected ? null : service.title);
              }}
              className={`block w-full py-4 text-center font-bold rounded-xl transition-all ${isSelected ? 'bg-brand-primary text-white hover:bg-brand-accent shadow-lg shadow-brand-primary/20' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600'}`}
            >
              {isSelected ? 'Selected' : 'Select Plan'}
            </a>
          </div>
        );
      })}
    </div>
    
    <div className="max-w-3xl mx-auto mt-20 p-8 bg-brand-bg rounded-3xl border border-brand-primary/20 text-center">
      <h4 className="text-xl font-bold text-slate-900 mb-4">Special Portfolio Offer</h4>
      <p className="text-slate-600 mb-0">
        Currently offering <strong>discounted websites</strong> for local businesses while building my local portfolio. Contact me today to lock in a special rate!
      </p>
    </div>
  </section>
);

const WhyChooseUsSection = () => (
  <section className="section-padding bg-white dark:bg-brand-dark-bg transition-colors duration-300">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
      <div>
        <h2 className="heading-lg mb-8 text-slate-900 dark:text-white">Why Choose Me Over a Big Agency?</h2>
        <p className="text-lg text-muted dark:text-slate-400 mb-10">
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
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-primary dark:bg-brand-accent rounded-full"></div>
                {item.title}
              </h4>
              <p className="text-sm text-muted dark:text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border-l-4 border-brand-primary">
          <p className="italic text-slate-700 dark:text-slate-300 font-medium">
            "Built by a software engineer focused on delivering smooth and fast products of excellent quality at competitive prices."
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

const StepByStepProcess = () => (
  <section id="process" className="section-padding bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="heading-lg mb-6 text-slate-900 dark:text-white">How the Process Works</h2>
      <p className="text-lg text-muted dark:text-slate-400">A simple, stress-free path to getting your business online.</p>
    </div>
    
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 relative">
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0"></div>
      
      {[
        { step: "01", title: "Free Consultation", desc: "We discuss your business goals and customer needs." },
        { step: "02", title: "Design Proposal", desc: "I create a layout and structure tailored to your brand." },
        { step: "03", title: "Development", desc: "I build your website using modern, fast technology." },
        { step: "04", title: "Website Launch", desc: "Your site goes live and starts attracting customers." }
      ].map((item, i) => (
        <div key={i} className="relative z-10 bg-slate-50 dark:bg-slate-900/50 p-6 text-center">
          <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-xl shadow-brand-primary/30">
            {item.step}
          </div>
          <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
          <p className="text-sm text-muted dark:text-slate-400">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const ExampleWebsiteItem = (props: any) => {
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
      <div className="aspect-video rounded-2xl overflow-hidden mb-6 shadow-lg relative bg-slate-100 dark:bg-slate-800 transition-colors duration-300">
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
      <div className="text-xs font-bold text-brand-primary dark:text-brand-accent uppercase tracking-widest mb-1">{item.category}</div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
    </motion.div>
  );
};

const RecentExampleWebsites = () => (
  <section id="portfolio" className="section-padding bg-white dark:bg-brand-dark-bg transition-colors duration-300">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="heading-lg mb-6 text-slate-900 dark:text-white">Example Business Websites</h2>
      <p className="text-lg text-muted dark:text-slate-400">See the types of modern layouts I can build for your business.</p>
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
        <ExampleWebsiteItem key={i} item={item} />
      ))}
    </div>
  </section>
);

const ContactFormAndInfo = ({ selectedPlan }: { selectedPlan: string | null }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "00068443-466d-49e7-bc69-70c973af34ce");
    if (selectedPlan) {
      formData.append("Selected Plan", selectedPlan);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        console.error("Error from Web3Forms:", data);
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus('error');
    }
  };

  return (
  <section id="contact" className="section-padding bg-slate-900 dark:bg-slate-950 text-white transition-colors duration-300">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
      <div>
        <h2 className="heading-lg mb-8">Get Your Business Online</h2>
        <p className="text-xl opacity-70 mb-12">
          Contact me for a free consultation and a custom website quote. No pressure, just a friendly chat about your business.
        </p>
        
        <div className="space-y-8">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-brand-accent">
              <Phone size={24} />
            </div>
            <div>
              <div className="text-sm opacity-50 uppercase tracking-widest font-bold mb-1">Call or Text</div>
              <div className="flex flex-col gap-1">
                <a href="tel:+4555261418" className="text-xl font-bold hover:text-brand-accent transition-colors">DK: +45 55 26 14 18</a>
                <a href="tel:+447478375325" className="text-xl font-bold hover:text-brand-accent transition-colors">UK: +44 7478 375325</a>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-brand-accent">
              <Mail size={24} />
            </div>
            <div>
              <div className="text-sm opacity-50 uppercase tracking-widest font-bold mb-1">Email Me</div>
              <a href="mailto:hello@surgewebstudio.com" className="text-xl font-bold hover:text-brand-accent transition-colors">hello@surgewebstudio.com</a>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-brand-accent">
              <MessageSquare size={24} />
            </div>
            <div>
              <div className="text-sm opacity-50 uppercase tracking-widest font-bold mb-1">Direct Message</div>
              <a href="https://wa.me/447478375325" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xl font-bold text-brand-accent hover:text-white transition-colors group">
                Message on WhatsApp <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-brand-dark-bg p-10 rounded-3xl shadow-2xl transition-colors duration-300">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Send a Message</h3>
        
        {selectedPlan && (
          <div className="mb-6 mt-4 p-4 bg-brand-primary/10 border border-brand-primary/20 rounded-xl flex items-center gap-3">
             <div className="text-brand-primary"><CheckCircle2 size={18} /></div>
             <div>
               <p className="text-slate-600 dark:text-slate-400 text-sm">You've chosen the <a href="#services" className="font-bold text-brand-primary hover:underline">{selectedPlan}</a> plan.</p>
             </div>
          </div>
        )}

        <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
          {/* Automatically pass the selected plan into the email */}
          <input type="hidden" name="Selected Plan" value={selectedPlan || "None"} />

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold text-slate-700 dark:text-slate-300">Your Name</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label htmlFor="business" className="text-sm font-bold text-slate-700 dark:text-slate-300">Business Name</label>
              <input type="text" id="business" name="business" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20" placeholder="Local Coffee Shop" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20" placeholder="john@example.com" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-bold text-slate-700 dark:text-slate-300">How can I help?</label>
            <textarea id="message" name="message" required rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20" placeholder="Tell me about your project..."></textarea>
          </div>
          
          {/* Honeypot Spam Protection */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <button 
            type="submit" 
            disabled={status === 'submitting'}
            className="w-full py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-accent transition-all shadow-xl shadow-brand-primary/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === 'submitting' ? (
              <>Sending...</>
            ) : status === 'success' ? (
              <><CheckCircle2 size={20} /> Sent Successfully!</>
            ) : status === 'error' ? (
              <>Error. Try Again.</>
            ) : (
              <>Send Inquiry</>
            )}
          </button>
          
          {status === 'success' && (
            <p className="text-green-500 text-sm text-center font-medium mt-4">
              Thank you! Your message has been sent successfully. I will get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-sm text-center font-medium mt-4">
              Oops! Something went wrong. Please try emailing directly at hello@surgewebstudio.com.
            </p>
          )}
        </form>
      </div>
    </div>
  </section>
  );
};

const FrequentlyAskedQuestions = () => (
  <section className="section-padding bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="heading-lg mb-6 text-slate-900 dark:text-white">Frequently Asked Questions</h2>
    </div>
    
    <div className="max-w-3xl mx-auto space-y-6">
      {[
        { q: "How long does it take to build a website?", a: "Most small business websites are completed within 3 to 7 business days, depending on the complexity and how quickly I receive your content." },
        { q: "Do I need technical knowledge?", a: "No, not at all. I handle everything from design to launch. I'll even show you how to make simple updates yourself if you want to." },
        { q: "Can I update the website later?", a: "Yes! Your website is built to grow with your business. We can add new pages, booking systems, or features whenever you need them." },
        { q: "What about hosting and domain names?", a: "I'll guide you through setting these up so you own them 100%. I don't hold your website hostage like some big agencies do." }
      ].map((item, i) => (
        <div key={i} className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
          <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{item.q}</h4>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.a}</p>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-brand-dark-bg transition-colors duration-300">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center text-white">
          <Zap size={18} fill="currentColor" />
        </div>
        <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">Surge Web Studio</span>
      </div>
      
      <div className="text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Surge Web Studio. Powering local businesses online.
      </div>
      
      <div className="flex gap-6">
        <a href="#" className="text-slate-400 hover:text-brand-primary transition-colors"><Globe size={20} /></a>
        <a href="mailto:hello@surgewebstudio.com" className="text-slate-400 hover:text-brand-primary transition-colors"><Mail size={20} /></a>
        <a href="https://wa.me/447478375325" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-primary transition-colors"><Phone size={20} /></a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  useEffect(() => {
    console.log('Dark mode effect running, isDark:', isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen selection:bg-brand-primary selection:text-white dark:bg-brand-dark-bg transition-colors duration-300">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <main>
        <TopTitleAndImage />
        <CustomerProblemsText />
        <OurSolutionText />
        <OurPricingPackages selectedPlan={selectedPlan} onSelectPlan={setSelectedPlan} />
        <WhyChooseUsSection />
        <StepByStepProcess />
        <RecentExampleWebsites />
        <FrequentlyAskedQuestions />
        <ContactFormAndInfo selectedPlan={selectedPlan} />
      </main>
      <Footer />
    </div>
  );
}

