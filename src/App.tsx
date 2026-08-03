import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock,
  MessageSquare, 
  Heart, 
  Sun, 
  Music, 
  GraduationCap, 
  Users, 
  FlameKindling, 
  BrainCircuit, 
  Star, 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Award,
  ChevronRight,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Brain,
  Flame,
  Activity,
  Globe,
  Check,
  ShieldCheck,
  HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { 
  TESTIMONIALS, 
  BENEFITS, 
  STRUGGLES, 
  THRIVE_METRICS, 
  PROGRAM_CLASSES, 
  GALLERY_MOMENTS, 
  LEARNING_SPACES, 
  MS_CLARICE, 
  OTHER_TEACHERS,
  RECOGNITION_BADGES,
  FAQS
} from './data';


import { 
  HeartDoodle, 
  StarDoodle, 
  MusicNoteDoodle, 
  SpiralDoodle, 
  WaveDoodle, 
  FlowerDoodle, 
  SunDoodle,
  CuteRainbowDoodle,
  StemFlowerDoodle
} from './components/Doodles';

import { MockVideoPlayer } from './components/MockVideoPlayer';
import { TrialBookingModal } from './components/TrialBookingModal';
import { ImageLightbox } from './components/ImageLightbox';

function BadgeImage({ src, alt, type }: { src: string; alt: string; type: 'accredited' | 'topProgram' }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    if (type === 'accredited') {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-sm select-none">
          <polygon points="100,10 170,50 170,130 100,170 30,130 30,50" fill="none" stroke="url(#rainbowGrad)" strokeWidth="6" strokeLinejoin="round" />
          <defs>
            <linearGradient id="rainbowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF5E85" />
              <stop offset="33%" stopColor="#FFAA00" />
              <stop offset="66%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
          <polygon points="100,16 164,53 164,127 100,164 36,127 36,53" fill="#FFFFFF" />
          <text x="100" y="52" textAnchor="middle" fill="#2E1065" fontSize="18" fontWeight="800" fontFamily="sans-serif">
            Kindermusik
          </text>
          <path d="M142,42 L142,34 L148,32 L148,40" stroke="#10B981" strokeWidth="2" fill="none" />
          <circle cx="140" cy="42" r="2.5" fill="#10B981" />
          <rect x="20" y="70" width="160" height="28" rx="4" fill="#5B31B1" />
          <text x="100" y="89" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="900" letterSpacing="1" fontFamily="sans-serif">
            FULLY ACCREDITED
          </text>
          <circle cx="64" cy="114" r="10" fill="#FF8A00" />
          <text x="64" y="118" textAnchor="middle" fill="#FFF" fontSize="9" fontWeight="800">1</text>
          <circle cx="88" cy="114" r="10" fill="#E11D48" />
          <text x="88" y="118" textAnchor="middle" fill="#FFF" fontSize="9" fontWeight="800">2</text>
          <circle cx="112" cy="114" r="10" fill="#7C3AED" />
          <text x="112" y="118" textAnchor="middle" fill="#FFF" fontSize="9" fontWeight="800">3</text>
          <circle cx="136" cy="114" r="10" fill="#10B981" />
          <text x="136" y="118" textAnchor="middle" fill="#FFF" fontSize="9" fontWeight="800">4</text>
          <text x="100" y="136" textAnchor="middle" fill="#5B31B1" fontSize="9" fontWeight="800" letterSpacing="0.5">
            ALL AGES
          </text>
          <path d="M50,145 Q100,175 150,145" fill="none" stroke="#6D28D9" strokeWidth="2" />
          <path d="M60,150 Q50,145 55,140" fill="#6D28D9" />
          <path d="M75,156 Q68,150 72,146" fill="#6D28D9" />
          <path d="M125,156 Q132,150 128,146" fill="#6D28D9" />
          <path d="M140,150 Q150,145 145,140" fill="#6D28D9" />
        </svg>
      );
    } else {
      return (
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-sm select-none">
          <circle cx="100" cy="85" r="65" fill="#3B82F6" />
          <circle cx="100" cy="85" r="60" fill="#F97316" />
          <circle cx="100" cy="85" r="54" fill="#FFFFFF" />
          <polygon points="100,38 108,60 131,60 112,74 119,96 100,82 81,96 88,74 69,60 92,60" fill="#FBBF24" />
          <rect x="25" y="78" width="150" height="26" rx="4" fill="#5B31B1" />
          <text x="100" y="96" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="900" letterSpacing="1" fontFamily="sans-serif">
            TOP PROGRAM
          </text>
          <rect x="75" y="102" width="50" height="16" rx="8" fill="#F59E0B" />
          <text x="100" y="114" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="900">
            2024
          </text>
          <polygon points="65,118 135,118 125,180 100,165 75,180" fill="#14B8A6" />
          <text x="100" y="145" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800" fontFamily="sans-serif">
            Kindermusik.
          </text>
        </svg>
      );
    }
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      onError={() => setHasError(true)}
      className="max-w-full max-h-full object-contain" 
    />
  );
}

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'babies' | 'toddlers' | 'older'>('all');
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const text = "Hello Kindermusik with Agape!\n\nI found your website and I'm interested in your music and movement classes for my child.\n\nCould you please share more information about the classes, schedule and free trial session? Thank you!";
    window.open(`https://wa.me/60195721205?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  // Helper to resolve benefit icons dynamically
  const getBenefitIcon = (iconName: string, theme: string) => {
    const props = { className: "w-6 h-6" };
    switch (iconName) {
      case 'Heart': return <Heart {...props} className={`${props.className} text-rose-500`} />;
      case 'Sun': return <Sun {...props} className={`${props.className} text-amber-500`} />;
      case 'Music': return <Music {...props} className={`${props.className} text-teal-500`} />;
      case 'GraduationCap': return <GraduationCap {...props} className={`${props.className} text-purple-500`} />;
      default: return <Sparkles {...props} className={`${props.className} text-purple-500`} />;
    }
  };

  // Helper to resolve thrive metric icons
  const getThriveIcon = (iconName: string) => {
    const props = { className: "w-7 h-7" };
    switch (iconName) {
      case 'Music': return <Music {...props} />;
      case 'FlameKindling': return <FlameKindling {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Heart': return <Heart {...props} />;
      case 'BrainCircuit': return <BrainCircuit {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative antialiased selection:bg-brand-purple/20 selection:text-brand-purple overflow-x-clip">
      
      {/* 1. HEADER / NAVIGATION */}
      <nav 
        id="navbar" 
        className={`sticky top-0 z-50 bg-brand-teal transition-all duration-300 ease-in-out ${
          isScrolled ? 'shadow-lg bg-brand-teal/95 backdrop-blur-md border-b border-white/10' : 'shadow-md bg-brand-teal'
        }`}
        style={{ height: '96px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a435b4a42c4669a15e386c8.png" 
                alt="Kindermusik with Agape logo" 
                className="object-contain brightness-0 invert"
                style={{ width: '195.257px', height: '85.9826px' }}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Desktop Navigation Links */}
            <div 
              className="hidden lg:flex items-center gap-8"
              style={{ fontSize: '18px' }}
            >
              <a 
                href="#meet-clarice" 
                className="text-white hover:text-yellow-300 transition-all"
                style={{ fontSize: '16px', fontWeight: 'normal' }}
              >
                About Us
              </a>
              <a 
                href="#programs" 
                className="text-white hover:text-yellow-300 transition-all"
                style={{ fontSize: '16px', fontWeight: 'normal' }}
              >
                Programs
              </a>
              <a 
                href="#testimonials" 
                className="text-white hover:text-yellow-300 transition-all"
                style={{ fontSize: '16px', fontWeight: 'normal' }}
              >
                Testimonials
              </a>
              <a 
                href="#faq" 
                className="text-white hover:text-yellow-300 transition-all"
                style={{ fontSize: '16px', fontWeight: 'normal' }}
              >
                FAQ
              </a>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-brand-purple hover:bg-brand-purple-hover rounded-full transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                style={{ height: '41.9792px', width: '267.903px', paddingTop: '0px', paddingBottom: '0px', boxShadow: '0 6px 20px rgba(111,63,245,0.22)' }}
              >
                <Calendar className="w-5 h-5" />
                Book a Free Trial Class
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-brand-green hover:bg-brand-green-hover rounded-full shadow-lg shadow-brand-green/20 hover:shadow-xl hover:shadow-brand-green/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                style={{ height: '41.9792px', paddingTop: '0px', paddingBottom: '0px' }}
              >
                <MessageSquare className="w-5 h-5 fill-white text-brand-green" />
                WhatsApp Us
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-white hover:text-yellow-300 hover:bg-white/10 transition-all cursor-pointer"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-white/10 bg-brand-teal overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <a 
                  href="#meet-clarice" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-white hover:text-yellow-300 hover:bg-white/10 font-semibold text-sm transition-all"
                >
                  About Us
                </a>
                <a 
                  href="#programs" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-white hover:text-yellow-300 hover:bg-white/10 font-semibold text-sm transition-all"
                >
                  Programs
                </a>
                <a 
                  href="#testimonials" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-white hover:text-yellow-300 hover:bg-white/10 font-semibold text-sm transition-all"
                >
                  Testimonials
                </a>
                <a 
                  href="#faq" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-white hover:text-yellow-300 hover:bg-white/10 font-semibold text-sm transition-all"
                >
                  FAQ
                </a>

                <div className="grid grid-cols-1 gap-2.5 pt-4 border-t border-white/10">
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsBookingModalOpen(true);
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-brand-purple hover:bg-brand-purple-hover rounded-full transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    Book a Free Trial Class
                  </button>
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleWhatsAppClick();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-brand-green hover:bg-brand-green-hover rounded-full transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-white text-brand-green" />
                    WhatsApp Us
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. HERO SECTION */}
      <section 
        id="hero" 
        className="relative py-8 md:py-16 lg:py-20 overflow-hidden w-full flex items-center bg-[#FEFEFE]"
        style={{ 
          minHeight: "638px",
          backgroundColor: "#FEFEFE"
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Hero Left Content */}
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left relative z-10 max-w-[532px] mx-auto lg:mx-0">
              <span 
                className="inline-block text-brand-teal font-hand font-bold text-[24px] sm:text-[30px] tracking-wide"
              >
                Music, Movement, Connection.
              </span>
              
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[63px] font-bold font-display text-slate-900 leading-tight tracking-tight max-w-[532px]"
              >
                Helping Children <br className="hidden sm:inline" />
                Grow Through <br className="hidden sm:inline" />
                the <span className="text-brand-purple font-bold">Joy of Music!</span>
              </h1>

              <div className="space-y-2 text-slate-600 text-sm sm:text-base md:text-lg lg:text-[20px] leading-relaxed mx-auto lg:mx-0 max-w-[532px]">
                <p>Every song, every movement and every smile helps your child grow with confidence, curiosity and joy.</p>
                <p>Award-winning Kindermusik classes in Ipoh for babies, toddlers and children aged 0-7,
              <br />
               with locations at Station 18 and Botani.
              </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2 max-w-none lg:max-w-[620px]">
                <button 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2.5 px-6 sm:px-8 text-sm sm:text-base font-bold text-white bg-brand-purple hover:bg-brand-purple-hover rounded-full transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer h-[50px] sm:h-[55px] whitespace-nowrap"
                  style={{ 
                    boxShadow: '0 8px 24px rgba(111,63,245,0.18)' 
                  }}
                >
                  <Calendar className="w-5 h-5" />
                  Book a Free Trial Class
                </button>
                <button 
                  onClick={handleWhatsAppClick}
                  className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2.5 px-6 sm:px-8 text-sm sm:text-base font-bold text-white bg-brand-green hover:bg-brand-green-hover rounded-full shadow-lg shadow-brand-green/20 hover:shadow-xl hover:shadow-brand-green/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer h-[50px] sm:h-[55px] whitespace-nowrap"
                >
                  <MessageSquare className="w-5 h-5 fill-white text-brand-green" />
                  WhatsApp Us
                </button>
              </div>
            </div>

            {/* Hero Right Photo Collage & Illustration */}
            <div className="w-full h-auto flex justify-center lg:justify-end items-center relative z-10">
              <img 
                src="https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a670b470c11dfa80349a210.png" 
                alt="Kindermusik teacher playing music with young children in Ipoh" 
                className="w-full h-auto max-h-[380px] sm:max-h-[480px] lg:max-h-none lg:h-[480px] object-contain max-w-[660px] lg:max-w-none transform lg:scale-110 origin-center transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Full-width Trust Indicators row aligned to the left edge */}
          <div className="pt-[10px] mt-[17px] w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-xs sm:text-sm md:text-base font-semibold text-slate-700 w-full">
              <div className="flex items-center justify-start gap-2 sm:gap-2.5">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-brand-purple shrink-0 stroke-[2.2]" />
                <span className="whitespace-nowrap text-[11px] sm:text-sm md:text-base">Internationally Accredited</span>
              </div>
              <div className="flex items-center justify-start gap-2 sm:gap-2.5">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-brand-teal shrink-0 stroke-[2.2]" />
                <span className="whitespace-nowrap text-[11px] sm:text-sm md:text-base">Award-Winning Program</span>
              </div>
              <div className="flex items-center justify-start gap-2 sm:gap-2.5">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 shrink-0 stroke-[2.2]" />
                <span className="whitespace-nowrap text-[11px] sm:text-sm md:text-base">20+ Years Experience</span>
              </div>
              <div className="flex items-center justify-start gap-2 sm:gap-2.5">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-brand-purple shrink-0 stroke-[2.2]" />
                <span className="whitespace-nowrap text-[11px] sm:text-sm md:text-base">Trusted by Local Families</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VIDEO SECTION */}
      <div 
        className="bg-white py-6 text-center relative overflow-hidden"
      >
        <h2 
          className="text-[30px] sm:text-3xl md:text-4xl font-bold font-display text-slate-900 px-4"
        >
          See What a Real <br className="block sm:hidden" />
          <span className="text-brand-purple">Kindermusik Class</span> <br className="block sm:hidden" />
          Looks Like
        </h2>
      </div>

      <section 
        className="py-12 md:py-16 relative" 
        style={{ backgroundColor: '#FFFFFF', paddingTop: '5px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center rounded-[36px] sm:rounded-[40px] p-6 sm:p-8 lg:p-10"
            style={{ 
              backgroundColor: '#F4E9FF',
              paddingTop: '51px',
              paddingBottom: '45px',
            }}
          >
            {/* Left Column Description */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-brand-purple text-[14px] font-bold uppercase tracking-widest block">Watch & Discover</span>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold font-display text-slate-900 leading-tight">
                See <span className="text-brand-purple">Kindermusik</span> in Action
              </h2>
              <div className="w-12 h-1 bg-brand-purple rounded-full my-2" />

              {/* Trust highlights */}
              <div className="grid grid-cols-1 gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-brand-purple text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Real Weekly Classes</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-brand-purple text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Parent & Child Together</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-brand-purple text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Age-Appropriate Activities</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-brand-purple text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Joyful Music Learning</span>
                </div>
              </div>
              <div className="text-slate-600 text-sm md:text-base leading-relaxed mt-2 space-y-2">
                <p>See how music, movement and play come together to build confidence, connection and joyful learning.</p>
                <p>Every class is interactive, engaging and designed to support your child's development.</p>
              </div>
            </div>

            {/* Right Column Video Player mockup */}
            <div className="lg:col-span-7">
              <MockVideoPlayer />
            </div>
          </div>
        </div>
      </section>

      {/* 3. PARENT CONCERNS */}
      <section className="py-12 bg-white relative">
        <div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div 
            className="rounded-[40px] px-6 py-12 md:px-12 md:py-14 relative shadow-sm border border-purple-50/60" 
            style={{ 
              background: 'radial-gradient(circle at top left, #F9F4FF 0%, #FFFFFF 100%)', 
              paddingBottom: '28px' 
            }}
          >
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <span className="text-brand-purple text-xs font-bold uppercase tracking-widest block">Parent Concerns</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 leading-tight tracking-tight">
                Does This <span className="text-brand-purple">Sound Familiar?</span>
              </h2>
              <p className="text-slate-600 font-medium text-center text-[15px] sm:text-sm md:text-base mt-2">
                Many parents come to us with these same concerns.
              </p>
            </div>

            {/* Cards container */}
            <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-5 gap-6 lg:gap-8 justify-center">
              {STRUGGLES.map((struggle, index) => (
                <div 
                  key={struggle.id} 
                  className={`flex flex-col items-center group relative sm:col-span-2 lg:col-span-1 lg:col-start-auto ${
                    index === 3 ? 'sm:col-start-2' : ''
                  } last:col-span-2 sm:last:col-span-2 lg:last:col-span-1 last:max-w-[calc(50%-12px)] sm:last:max-w-none last:w-full last:mx-auto`}
                >
                  {/* Relative wrapper allowing badge to overflow beyond card boundaries */}
                  <div className="relative w-full aspect-square transition-transform duration-300 group-hover:-translate-y-[6px]">
                    {/* Rounded image container with white border and soft shadow */}
                    <div className="w-full h-full rounded-[24px] overflow-hidden border-4 border-white shadow-sm group-hover:shadow-lg transition-all duration-300 bg-white/55">
                      <img 
                        src={struggle.image} 
                        alt={struggle.alt || struggle.title} 
                        className="w-full h-full object-cover select-none transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                    
                    {/* Minimal white circular badge with #B18AE5 concern icon */}
                    <div className="absolute -top-1.5 -right-1.5 z-10 w-6 h-6 bg-white rounded-full flex items-center justify-center border border-purple-100/80 shadow-sm">
                      <HelpCircle className="w-3.5 h-3.5 text-[#B18AE5] stroke-[2.2]" />
                    </div>
                  </div>

                  {/* Centered label & short supporting sentence under the card */}
                  <h3 
                    className="font-bold text-slate-900 text-[14px] sm:text-[16px] font-display text-center mt-3 max-w-[170px] leading-snug"
                  >
                    {struggle.title}
                  </h3>
                  <p className="text-slate-500 text-[10px] sm:text-xs font-normal text-center mt-1 max-w-[170px] leading-tight">
                    {struggle.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Transition sentence */}
            <p className="text-brand-purple font-medium text-base sm:text-[18px] text-center max-w-2xl mx-auto mt-10 mb-6 px-4 leading-relaxed">
              Every Kindermusik class is thoughtfully designed to nurture these skills through joyful music, movement, and meaningful parent-child experiences.
            </p>

            {/* Prompt Buttons inside the card */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold text-white bg-brand-purple hover:bg-brand-purple-hover rounded-full shadow-md transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                style={{ height: '41.9757px', paddingTop: '0px', paddingBottom: '0px' }}
              >
                <Calendar className="w-4 h-4 text-white" />
                Find My Child's Perfect Class
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold text-white bg-brand-green hover:bg-brand-green-hover rounded-full shadow-md shadow-brand-green/10 transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                style={{ height: '41.9757px', paddingTop: '0px', paddingBottom: '0px' }}
              >
                <MessageSquare className="w-4 h-4 fill-white text-brand-green" />
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BENEFITS SECTION */}
      <section 
        id="why-choose-us" 
        className="py-16 md:py-20 bg-[#FEFEFE] relative overflow-hidden"
        style={{ minHeight: '660px', backgroundColor: '#FEFEFE', paddingTop: '80px', paddingBottom: '80px' }}
      >
        <div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left classroom picture */}
            <div className="lg:col-span-5 relative pl-0 pr-4 sm:pr-6" style={{ paddingLeft: '0px', marginLeft: '0px' }}>
              <div className="relative rounded-[48px] overflow-hidden shadow-none aspect-[4/4.5] bg-slate-100" style={{ marginLeft: '0px' }}>
                <img 
                  src="https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a43c659c597b88b6126684b.png" 
                  alt="Kindermusik educator teaching children in classroom" 
                  className="w-full h-full object-cover"
                  style={{ marginLeft: '0px' }}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Right details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-2">
                <span className="text-brand-purple text-xs sm:text-sm font-bold uppercase tracking-[0.2em] block">WHY KINDERMUSIK?</span>
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold font-display text-slate-900 leading-tight tracking-tight">
                  The Most Natural,<br /><span className="text-brand-purple">Joyful Way</span> to Learn & Grow
                </h2>
              </div>
              
              <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl">
                We believe every child learns differently. That's why we provide engaging, interactive, and colorful learning experiences that support their development at every stage.
              </p>

              {/* Benefits Grid (Matching the design with centered circle icons and centered text) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 pt-3">
                {/* 1. Stronger Parent-Child Bond */}
                <div className="flex flex-col items-center text-center group cursor-pointer">
                  <div className="w-18 h-18 sm:w-22 sm:h-22 bg-[#FFF0F2] rounded-full flex items-center justify-center mb-4 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-rose-200/60">
                    <Heart className="w-9 h-9 sm:w-11 sm:h-11 text-[#FF4E6E] fill-[#FF4E6E]/10 stroke-[2.5] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm font-display mb-2 leading-snug transition-colors group-hover:text-[#FF4E6E]">
                    Stronger<br />Parent-Child Bond
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed max-w-[150px] mx-auto">
                    Build stronger family connections.
                  </p>
                </div>

                {/* 2. Supports Holistic Development */}
                <div className="flex flex-col items-center text-center group cursor-pointer">
                  <div className="w-18 h-18 sm:w-22 sm:h-22 bg-[#FEF5E7] rounded-full flex items-center justify-center mb-4 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-amber-200/60">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 sm:w-11 sm:h-11 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      <path d="M18 20V18a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="11" cy="8" r="4" />
                      <path d="M15 6h.01M16 9h.01M14 11h.01" strokeWidth="3" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm font-display mb-2 leading-snug transition-colors group-hover:text-[#D97706]">
                    Supports Holistic<br />Development
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed max-w-[150px] mx-auto">
                    Supports whole-child development.
                  </p>
                </div>

                {/* 3. Research-Based Curriculum */}
                <div className="flex flex-col items-center text-center group cursor-pointer">
                  <div className="w-18 h-18 sm:w-22 sm:h-22 bg-[#EAFDF9] rounded-full flex items-center justify-center mb-4 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-teal-200/60">
                    <Music className="w-9 h-9 sm:w-11 sm:h-11 text-[#0D9488] stroke-[2.5] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm font-display mb-2 leading-snug transition-colors group-hover:text-[#0D9488]">
                    Research-Based<br />Curriculum
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed max-w-[150px] mx-auto">
                    Proven through decades of research.
                  </p>
                </div>

                {/* 4. Caring & Experienced Teachers */}
                <div className="flex flex-col items-center text-center group cursor-pointer">
                  <div className="w-18 h-18 sm:w-22 sm:h-22 bg-[#F1EEFE] rounded-full flex items-center justify-center mb-4 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-purple-200/60">
                    <Star className="w-9 h-9 sm:w-11 sm:h-11 text-[#7C3AED] fill-[#7C3AED]/5 stroke-[2.5] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm font-display mb-2 leading-snug transition-colors group-hover:text-[#7C3AED]">
                    Caring & Experienced<br />Teachers
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed max-w-[150px] mx-auto">
                    Led by experienced educators.
                  </p>
                </div>
              </div>

              {/* Call to Action section */}
              <div className="pt-4 flex flex-col items-center text-center space-y-3">
                <p className="text-slate-900 font-bold text-base md:text-lg">
                  Ready to Experience Kindermusik?
                </p>
                <button 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white bg-brand-purple hover:bg-brand-purple-hover rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Free Trial Class
                </button>
                <p className="text-xs sm:text-sm font-medium text-slate-500 pt-1">
                  No experience needed • Suitable for ages 0–7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DEVELOPMENT BENEFITS */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-[801px] w-full mx-auto mb-10 space-y-2">
            <span className="text-brand-purple text-xs font-bold uppercase tracking-widest block">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 leading-tight tracking-tight max-w-[801px] mx-auto">
              More Than Music. <span className="text-brand-purple">A Foundation For Life.</span>
            </h2>
            <p className="text-slate-600 font-medium text-[16px] sm:text-sm md:text-base mt-2">
              Every Kindermusik activity is thoughtfully designed to nurture every area of your child's development.
            </p>
          </div>

          {/* Row of 5 circular badges */}
          <div className="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-5 gap-y-10 gap-x-6 md:gap-x-8 justify-between items-start w-full mx-auto">
            {/* Music Sparks Joy */}
            <div className="flex flex-col items-center text-center sm:col-span-2 md:col-span-1">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center mb-4 bg-[#ECE7FF] transition-transform duration-300 hover:scale-105 shadow-sm">
                <Music className="w-10 h-10 md:w-12 md:h-12 text-[#6340C1]" strokeWidth={2.2} />
              </div>
              <span className="font-extrabold text-slate-900 text-[16px] sm:text-[18px] leading-[1.3] font-sans">
                Music
              </span>
              <span className="font-extrabold text-slate-900 text-[16px] sm:text-[18px] leading-[1.3] font-sans">
                Sparks Joy
              </span>
              <span className="font-medium text-slate-500 leading-snug font-sans max-w-[150px] mt-1" style={{ fontSize: '13px' }}>
                Builds a lifelong love for learning.
              </span>
            </div>

            {/* Movement Builds Confidence */}
            <div className="flex flex-col items-center text-center sm:col-span-2 md:col-span-1">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center mb-4 bg-[#FEF3D1] transition-transform duration-300 hover:scale-105 shadow-sm">
                <Flame className="w-10 h-10 md:w-12 md:h-12 text-[#FFA000]" strokeWidth={2.2} />
              </div>
              <span className="font-extrabold text-slate-900 text-[16px] sm:text-[18px] leading-[1.3] font-sans">
                Movement
              </span>
              <span className="font-extrabold text-slate-900 text-[16px] sm:text-[18px] leading-[1.3] font-sans">
                Builds Confidence
              </span>
              <span className="font-medium text-slate-500 leading-snug font-sans max-w-[150px] mt-1" style={{ fontSize: '13px' }}>
                Develops coordination and self-confidence.
              </span>
            </div>

            {/* Connection Creates Belonging */}
            <div className="flex flex-col items-center text-center sm:col-span-2 md:col-span-1">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center mb-4 bg-[#E0F4F0] transition-transform duration-300 hover:scale-105 shadow-sm">
                <Users className="w-10 h-10 md:w-12 md:h-12 text-[#009E83]" strokeWidth={2.2} />
              </div>
              <span className="font-extrabold text-slate-900 text-[16px] sm:text-[18px] leading-[1.3] font-sans">
                Connection
              </span>
              <span className="font-extrabold text-slate-900 text-[16px] sm:text-[18px] leading-[1.3] font-sans">
                Creates Belonging
              </span>
              <span className="font-medium text-slate-500 leading-snug font-sans mt-1" style={{ fontSize: '13px', width: '156px' }}>
                Strengthens friendships and family bonds.
              </span>
            </div>

            {/* Emotional Development */}
            <div className="flex flex-col items-center text-center sm:col-span-2 sm:col-start-2 md:col-span-1 md:col-start-auto">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center mb-4 bg-[#FFE6EC] transition-transform duration-300 hover:scale-105 shadow-sm">
                <Heart className="w-10 h-10 md:w-12 md:h-12 text-slate-900 fill-[#FF4B72]" strokeWidth={2.2} />
              </div>
              <span className="font-extrabold text-slate-900 text-[16px] sm:text-[18px] leading-[1.3] font-sans">
                Emotional
              </span>
              <span className="font-extrabold text-slate-900 text-[16px] sm:text-[18px] leading-[1.3] font-sans">
                Development
              </span>
              <span className="font-medium text-slate-500 leading-snug font-sans mt-1" style={{ fontSize: '13px', width: '175px' }}>
                Supports emotional awareness and resilience.
              </span>
            </div>

            {/* Cognitive Growth */}
            <div className="flex flex-col items-center text-center col-span-2 sm:col-span-2 md:col-span-1">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center mb-4 bg-[#EFEBF9] transition-transform duration-300 hover:scale-105 shadow-sm">
                <Brain className="w-10 h-10 md:w-12 md:h-12 text-[#8257E5]" strokeWidth={2.2} />
              </div>
              <span className="font-extrabold text-slate-900 text-[16px] sm:text-[18px] leading-[1.3] font-sans">
                Cognitive
              </span>
              <span className="font-extrabold text-slate-900 text-[16px] sm:text-[18px] leading-[1.3] font-sans">
                Growth
              </span>
              <span className="font-medium text-slate-500 leading-snug font-sans max-w-[150px] mt-1" style={{ fontSize: '13px' }}>
                Encourages thinking, focus, and creativity.
              </span>
            </div>
          </div>

          {/* Smooth transition message */}
          <p className="text-brand-purple font-medium text-[18px] text-center max-w-[700px] mx-auto mt-12 mb-2 px-4 leading-relaxed">
            Ready to nurture these lifelong skills? Explore the Kindermusik class that's perfectly matched to your child's age and stage.
          </p>
        </div>
      </section>

      {/* 6. RECOGNITION SECTION */}
      <section id="recognised-for-excellence" className="py-8 md:py-12 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F4E9FF] rounded-[36px] sm:rounded-[40px] p-6 sm:p-8 lg:p-10 border border-[#EAE1F5] relative shadow-xs">
          {/* Decorative Corner Accent Icons */}
            <Sparkles className="w-5 h-5 text-[#B596F3] absolute top-6 left-6 hidden sm:block opacity-60" />
            <Music className="w-5 h-5 text-[#5B31B1] absolute top-6 right-6 hidden sm:block opacity-60" />

            {/* Header Title & Subtitle */}
            <div className="text-center mb-8 sm:mb-10 max-w-3xl mx-auto">
              <div className="flex items-center justify-center">
                <h2 className="text-3xl sm:text-[38px] lg:text-[42px] font-bold font-display text-slate-900 tracking-tight leading-tight">
                  Recognised for <span className="text-brand-purple">Excellence</span>
                </h2>
              </div>
              <p className="text-slate-600 font-medium text-sm sm:text-base mt-2.5 tracking-wide leading-relaxed">
                Internationally Accredited. Award-Winning. Parent Trusted.
              </p>
            </div>

            {/* Two Main Recognition Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 sm:mb-8 w-full">
              {/* Card 1: Fully Accredited Kindermusik Program */}
              <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-purple-100/80 shadow-xs flex flex-col sm:flex-row items-center gap-6 transition-all hover:shadow-md w-full">
                <div className="w-32 h-32 sm:w-36 sm:h-36 shrink-0 flex items-center justify-center relative">
                  <BadgeImage 
                    src={RECOGNITION_BADGES.accredited} 
                    alt="Kindermusik international accreditation awards - Fully Accredited Program" 
                    type="accredited"
                  />
                </div>
                <div className="space-y-2.5 text-center sm:text-left flex-1">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#3B1B7D] leading-tight">
                    Fully Accredited <br className="hidden sm:inline" />Kindermusik Program
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                    Our program meets the highest standards of music education for children of all ages.
                  </p>
                </div>
              </div>

              {/* Card 2: Top Program 2024 Award Winner */}
              <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-purple-100/80 shadow-xs flex flex-col sm:flex-row items-center gap-6 transition-all hover:shadow-md w-full">
                <div className="w-32 h-32 sm:w-36 sm:h-36 shrink-0 flex items-center justify-center relative">
                  <BadgeImage 
                    src={RECOGNITION_BADGES.topProgram} 
                    alt="Kindermusik international accreditation awards - Top Program 2024 Winner" 
                    type="topProgram"
                  />
                </div>
                <div className="space-y-2.5 text-center sm:text-left flex-1">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#3B1B7D] leading-tight">
                    Top Program 2024 <br className="hidden sm:inline" />Award Winner
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                    Proud to be recognised for our excellence in early childhood music education.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Highlights / Pillars Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 w-full">
              <div className="flex items-center gap-3 bg-white/70 rounded-2xl p-3 sm:p-3.5 border border-purple-100/50 shadow-2xs">
                <div className="w-9 h-9 rounded-full bg-teal-50/70 border border-teal-100/50 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-teal-500/80" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#3B1B7D]/90 leading-snug">
                  Trusted Worldwide
                </span>
              </div>

              <div className="flex items-center gap-3 bg-white/70 rounded-2xl p-3 sm:p-3.5 border border-purple-100/50 shadow-2xs">
                <div className="w-9 h-9 rounded-full bg-emerald-50/70 border border-emerald-100/50 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-emerald-500/80" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#3B1B7D]/90 leading-snug">
                  Thousands of Families
                </span>
              </div>

              <div className="flex items-center gap-3 bg-white/70 rounded-2xl p-3 sm:p-3.5 border border-purple-100/50 shadow-2xs">
                <div className="w-9 h-9 rounded-full bg-amber-50/70 border border-amber-100/50 flex items-center justify-center shrink-0">
                  <Music className="w-5 h-5 text-amber-500/80" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#3B1B7D]/90 leading-snug">
                  Research-Based Learning
                </span>
              </div>

              <div className="flex items-center gap-3 bg-white/70 rounded-2xl p-3 sm:p-3.5 border border-purple-100/50 shadow-2xs">
                <div className="w-9 h-9 rounded-full bg-pink-50/70 border border-pink-100/50 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 fill-[#FF5E85]/70 text-[#FF5E85]/70" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#3B1B7D]/90 leading-snug">
                  Whole Child Development
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FIND THE RIGHT CLASS FOR YOUR LITTLE ONE */}
      <section id="programs" className="py-16 md:py-20 bg-[#FEFEFE] relative">
        <SpiralDoodle className="absolute top-10 left-12 w-14 h-8 opacity-20 text-brand-teal" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-brand-purple text-xs font-bold uppercase tracking-widest block">Our Programs</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 leading-tight">
  Find the Right Music Class <span className="text-brand-purple">for Your Little One</span>
</h2>
          </div>

          {/* Cards list */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {PROGRAM_CLASSES.map((prog) => (
              <div 
                key={prog.id} 
                className={`rounded-[30px] border-2 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative group bg-white ${prog.bgClass.split(' ')[1]}`}
              >
                {/* Now enrolling badge */}
                <div className="absolute top-3 right-3 z-10 bg-brand-pink text-white text-[9px] font-bold px-2.5 py-1 rounded-full shadow-sm animate-pulse tracking-wide">
                  {prog.badge}
                </div>

                {/* Card Top Image */}
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img 
                    src={prog.image} 
                    alt={prog.alt || prog.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Subtle glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Details Container */}
                <div className={`p-5 sm:p-6 flex flex-col flex-1 justify-between gap-5 ${prog.bgClass.split(' ')[0]}`}>
                  <div className="space-y-2 text-center flex flex-col items-center">
                    <h3 className="text-xl font-bold font-display leading-tight">{prog.title}</h3>
                    <span className="inline-block text-xs font-semibold px-3 py-1 bg-white/60 border border-current/10 rounded-full">
                      {prog.age}
                    </span>
                    <p 
                      className="text-slate-600 leading-relaxed pt-1 mx-auto text-center"
                      style={{
                        fontSize: '13px',
                        width: prog.id === 'p1' ? '161px' : '150px',
                        textAlign: 'center'
                      }}
                    >
                      {prog.description}
                    </p>

                    {/* Perfect For */}
                    {prog.perfectFor && (
                      <div className="w-full pt-3 mt-1 border-t border-slate-900/10 text-center flex flex-col items-center text-xs sm:text-[16px] md:text-xs">
                        <span className="text-[11px] font-bold tracking-wider uppercase text-slate-500 block mb-1.5 text-center">
                          Perfect For
                        </span>
                        <ul className="space-y-1 text-xs text-slate-700 font-medium flex flex-col items-center">
                          {prog.perfectFor.map((item, idx) => (
                            <li key={idx} className="flex items-center justify-center gap-1.5 leading-snug text-center">
                              <span className="text-slate-400 font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <button 
                    onClick={() => setIsBookingModalOpen(true)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-slate-200/50 ${prog.btnClass}`}
                  >
                    Know more
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Direct CTA */}
          <div className="text-center mt-12">
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-brand-purple hover:bg-brand-purple-hover rounded-full shadow-lg cursor-pointer transition-all hover:-translate-y-0.5"
              style={{ height: '48.9792px', paddingTop: '0px', paddingBottom: '0px' }}
            >
              <Calendar className="w-5 h-5" />
              Book a Free Trial Class
            </button>
          </div>
        </div>
      </section>

      {/* 9. MOMENTS & LEARNING SPACES (Combined into a single light purple container) */}
      <section className="py-12 md:py-16 bg-white relative" style={{ paddingTop: '35px', paddingBottom: '65px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F4E9FF] rounded-[30px] px-6 py-10 md:px-12 md:py-12 shadow-sm">
            
            {/* Title 1: Moments from our class */}
            <div className="text-center max-w-[800px] mx-auto mb-10">
              <h2 className="text-[30px] sm:text-3xl md:text-[40px] font-bold font-display text-slate-900 leading-tight mx-auto" style={{ width: '800px', maxWidth: '100%' }}>
                Real Moments. <br className="block sm:hidden" />
                Real Smiles. <br className="block sm:hidden" />
                <span className="text-brand-purple">Real Growth.</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-[16px] md:text-sm font-medium leading-relaxed mt-2.5 mx-auto" style={{ width: '675px', maxWidth: '100%' }}>
                Real classroom moments filled with music, movement, smiles, and meaningful learning experiences.
              </p>
            </div>

            {/* Photo grid - responsive for mobile & desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {GALLERY_MOMENTS.map((src, idx) => {
                const galleryAlts = [
                  "Children playing rhythm instruments in Kindermusik class",
                  "Toddler exploring musical instruments with parent",
                  "Children participating in group movement and dance activity",
                  "Baby listening to music in sensory development class",
                  "Young children singing together in classroom",
                  "Parent and child sharing a joyful musical moment",
                  "Children engaged in hands-on musical learning",
                  "Kindermusik educator guiding children in rhythm play",
                  "Toddlers playing with colorful scarves in movement class",
                  "Children discovering sounds and instruments in music room"
                ];
                return (
                  <div 
                    key={idx} 
                    className="aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-sm hover:shadow-md transition-all duration-300 relative group"
                  >
                    <img 
                      src={src} 
                      alt={galleryAlts[idx] || `Children learning through music and movement photo ${idx + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-brand-purple/10 opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                );
              })}
            </div>

            {/* Title 2: Explore our learning spaces */}
            <div className="text-center max-w-3xl mx-auto mt-14 mb-8">
              <h2 className="text-3xl md:text-[40px] font-bold font-display text-slate-900 leading-tight" style={{ paddingTop: '38px' }}>
                Explore <span className="text-brand-purple">our learning spaces</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-[16px] md:text-sm font-medium leading-relaxed mt-3">
                Safe, clean, and thoughtfully designed spaces where children feel comfortable learning and exploring.
              </p>

              {/* Four small feature icons above room photos */}
              <div className="flex items-center justify-center gap-2.5 sm:gap-8 text-[11px] sm:text-sm font-semibold text-slate-700 mt-5 whitespace-nowrap">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-purple shrink-0 stroke-[2.2]" />
                  <span>Safe</span>
                </div>
                <div className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-teal shrink-0 stroke-[2.2]" />
                  <span>Clean</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-pink fill-brand-pink/20 shrink-0 stroke-[2.2]" />
                  <span>Child-Friendly</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 shrink-0 stroke-[2.2]" />
                  <span>Purpose-Built</span>
                </div>
              </div>
            </div>

            {/* 6 Square cards with real independent images */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 justify-center">
              {LEARNING_SPACES.map((space) => {
                return (
                  <div 
                    key={space.id} 
                    className="relative rounded-[24px] aspect-square w-full border-4 border-white shadow-md transition-all duration-300 bg-[#F4E9FF]"
                  >
                    {/* Real independent image rounded to fit inside border-4 */}
                    <img 
                      src={space.image} 
                      alt={space.alt || `Kindermusik learning space environment - ${space.title}`} 
                      className="w-full h-full object-cover rounded-[20px]"
                    />
                    
                    {/* White pill-shaped label centered at the bottom, brought to the front */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-md border border-purple-100 z-30 w-[122px] h-[24px] flex items-center justify-center mt-0 pb-0 mb-[-31px]">
                      <span className="text-[#3c2069] font-bold text-[10px] tracking-wide text-center truncate px-1">
                        {space.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 11. TESTIMONIALS (Loved by Families. Proven Results.) */}
      <section id="testimonials" className="pt-0 pb-0 bg-[#FEFEFE] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-[780px] mx-auto mb-10 space-y-2">
            <span className="text-brand-purple text-xs font-bold uppercase tracking-widest block text-center">What Parents Say</span>
            <h2 className="text-3xl md:text-[40px] font-bold text-slate-900 leading-tight font-display text-center">
              Loved by Families. <span className="text-brand-purple">Proven Results.</span>
            </h2>
            <p className="text-slate-600 text-[13px] sm:text-sm md:text-base max-w-[700px] mx-auto font-medium leading-relaxed text-center">
              Real stories from real families who’ve experienced the Kindermusik with Agape difference.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((testi, idx) => {
              const quoteWidths = ['217px', 'auto', '224px', '211px'];
              return (
                <div 
                  key={testi.id} 
                  className="bg-[#F5EEFF] rounded-[24px] p-6 md:p-7 flex flex-col justify-between hover:shadow-md hover:scale-[1.01] transition-all duration-300 mt-0"
                >
                  <div>
                    {/* Top row with circular Avatar & Stars next to it */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 shadow-sm border-2 border-white">
                        <img 
                          src={testi.avatar} 
                          alt={testi.alt || `Photo of ${testi.author} Kindermusik parent`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex gap-0.5 text-amber-400">
                        {[...Array(testi.stars)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Quote */}
                    <p 
                      className="text-neutral-900 text-[15px] font-medium leading-relaxed mb-6 text-left"
                      style={quoteWidths[idx] !== 'auto' ? { width: quoteWidths[idx] } : undefined}
                    >
                      {testi.quote}
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="space-y-0.5 pt-4 border-t border-purple-200/20">
                    <p className="text-neutral-900 font-extrabold text-[12px] md:text-[13px] tracking-wide">
                      {testi.author}
                    </p>
                    <p className="text-[#666666] font-extrabold text-[12px] md:text-[13px] tracking-wide">
                      {testi.childInfo}
                    </p>
                    {testi.badge && (
                      <div className="pt-1.5">
                        <span 
                          className="inline-flex items-center font-semibold text-[12px] whitespace-nowrap text-[#6F3CC3]"
                        >
                          <span>{testi.badge}</span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. MEET MS CLARICE KOO & SUPPORTED BY OUR WONDERFUL TEACHERS */}
      <section id="meet-clarice" className="bg-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F4E9FF] rounded-[40px] p-5 sm:p-7 lg:p-8 relative">
            <div className="bg-white rounded-[32px] p-5 sm:p-6 lg:p-8 shadow-sm border border-purple-50 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left Image Side - expanded for 25-30% larger display */}
              <div className="lg:col-span-6 relative flex justify-center items-center">
                <div className="relative w-full max-w-[520px] sm:max-w-[600px] rounded-[28px] overflow-hidden border-4 sm:border-8 border-purple-50 shadow-md transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
                  <img 
                    src={MS_CLARICE.image} 
                    alt={MS_CLARICE.alt || "Kindermusik educator teaching children - Ms Clarice Koo"} 
                    className="w-full h-auto max-h-[600px] object-contain select-none block mx-auto"
                  />
                </div>
              </div>

              {/* Right Information Side */}
              <div className="lg:col-span-6 space-y-4 text-left">
                <div className="space-y-1">
                  <span className="text-brand-purple text-xs font-bold uppercase tracking-widest block">MEET YOUR EDUCATORS</span>
                  <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold font-display text-slate-900 leading-tight tracking-tight">
                    Meet the Team Behind Every <span className="text-brand-purple">Joyful Moment</span>
                  </h2>
                  <div className="pt-2">
                    <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-900 font-display tracking-tight">
                      {MS_CLARICE.name}
                    </h3>
                    <div className="pt-1.5">
                      <span className="inline-block bg-[#FFE9EE] text-[#FF4B72] text-xs md:text-sm font-extrabold px-4 py-1 rounded-full uppercase tracking-wider">
                        {MS_CLARICE.role}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Experience highlight */}
                <div className="flex items-center gap-2 pt-0.5 text-slate-900">
                  <Award className="w-5 h-5 text-brand-purple" strokeWidth={2.5} />
                  <span className="font-bold text-sm md:text-base font-sans tracking-wide uppercase">
                    {MS_CLARICE.experience}
                  </span>
                </div>

                {/* Trust Highlights */}
                <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3 pt-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-brand-green shrink-0" />
                    <span>Internationally Accredited Curriculum</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
                    <span>Research-Based Learning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-brand-purple shrink-0" />
                    <span>Trusted by Thousands of Families</span>
                  </div>
                </div>

                {/* Bio description */}
                <div className="space-y-3.5 pt-3 border-t border-slate-100">
                  <p className="text-slate-600 text-[16px] sm:text-sm md:text-[15px] leading-relaxed font-medium max-w-xl">
                    With over 20 years of experience in music education and working with children and families, Ms Clarice leads the educational vision of Kindermusik with Agape.
                  </p>
                  <p className="text-slate-600 text-[16px] sm:text-sm md:text-[15px] leading-relaxed font-medium max-w-xl">
                    Her passion is to nurture <strong className="font-bold text-slate-800">every child's potential</strong> through the <strong className="font-bold text-slate-800">joy of music</strong>, movement, and meaningful connections.
                  </p>
                </div>
              </div>

            </div>

            {/* Divider Line and Transition Message */}
            <div className="my-10 md:my-14 text-center space-y-3">
              <div className="flex items-center gap-4">
                <div className="flex-1 h-[1.5px] bg-[#E1D8F5]/70 opacity-80" />
                <div className="flex items-center gap-2 text-[#3B1B7D] px-2">
                  <Heart className="w-4 h-4 fill-[#B596F3] text-[#B596F3]" />
                  <span className="font-extrabold text-[#3B1B7D] font-display text-base sm:text-lg md:text-xl text-center">
                    The Caring Educators Your Child Will Learn With
                  </span>
                  <Heart className="w-4 h-4 fill-[#B596F3] text-[#B596F3]" />
                </div>
                <div className="flex-1 h-[1.5px] bg-[#E1D8F5]/70 opacity-80" />
              </div>

              <p className="text-[#6B7280] font-medium text-[15px] sm:text-[16px] text-center max-w-[620px] mx-auto px-4 leading-relaxed pt-1">
                Our passionate educators create a safe, joyful, and engaging environment where every child can learn, grow, and thrive.
              </p>
            </div>

            {/* Three Teachers Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full items-stretch">
              {OTHER_TEACHERS.map((teacher, index) => (
                <div 
                  key={teacher.id} 
                  className={`bg-white rounded-[32px] p-6 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-purple-900/5 hover:-translate-y-[8px] transition-all duration-250 ease-out flex flex-col items-center text-center relative overflow-hidden group border border-purple-50 h-full justify-between ${
                    teacher.id === 'ot1' ? 'order-2 lg:order-1' : teacher.id === 'ot2' ? 'order-1 lg:order-2' : 'order-3 lg:order-3'
                  }`}
                >
                  <div className="flex flex-col items-center shrink-0 w-full">
                    {/* Portrait */}
                    <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-purple-50 shadow-sm relative mb-3">
                      <img 
                        src={teacher.image} 
                        alt={teacher.alt || `Kindermusik educator teaching children - ${teacher.name}`} 
                        className="w-full h-full object-cover transition-transform duration-250 ease-out group-hover:scale-[1.03]"
                      />
                    </div>

                    {/* Name & Title */}
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                      {teacher.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#FF4B72] mt-0.5">{teacher.role}</p>

                    {/* Specialty Badge */}
                    <div className="h-8 flex items-center justify-center mt-2">
                      {teacher.badge && (
                        <div className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5EFFE] text-[#5B31B1] text-xs font-semibold border border-[#E5D7FC]">
                          <span>{teacher.badge}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Divider & Description */}
                  <div className="flex-1 flex flex-col items-center justify-start w-full mt-2">
                    <div className="flex items-center gap-3 my-2 justify-center">
                      <div className="h-[1.5px] w-10 sm:w-14 bg-[#FF8EA8]/50 rounded-full" />
                      <Heart className="w-3.5 h-3.5 fill-[#FF8EA8] text-[#FF8EA8] shrink-0 opacity-80" />
                      <div className="h-[1.5px] w-10 sm:w-14 bg-[#FF8EA8]/50 rounded-full" />
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium px-2 max-w-[280px]">
                      {teacher.bio}
                    </p>
                  </div>

                  {/* Floating music note doodle on bottom right */}
                  <Music 
                    className={`absolute bottom-4 right-4 w-6 h-6 opacity-25 transition-transform duration-250 ease-out group-hover:scale-110 ${
                      index === 0 ? 'text-[#8B5CF6]' : index === 1 ? 'text-[#009E83]' : 'text-[#FF4B72]'
                    }`} 
                    strokeWidth={2.5}
                  />
                </div>
              ))}
            </div>

            {/* Closing Transition Message */}
            <p className="text-brand-purple font-medium text-[18px] text-center max-w-[700px] mx-auto mt-12 mb-4 px-4 leading-[1.6]">
              Every Kindermusik class is led by caring educators who are passionate about helping every child grow with confidence, creativity, and joy.
            </p>

          </div>
        </div>
      </section>

      {/* 13.5 FREQUENTLY ASKED QUESTIONS */}
      <section id="faq" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center space-y-3 mb-12 md:mb-16">
            <span className="text-brand-purple text-xs font-bold uppercase tracking-widest block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-display text-slate-900 leading-tight tracking-tight">
         Kindermusik Classes in Ipoh: <span className="text-brand-purple">What Parents Want to Know</span>
          </h2>
            <p className="text-slate-600 text-base sm:text-[17px] md:text-lg max-w-2xl mx-auto leading-relaxed pt-1">
              Choosing the right programme for your child is an important decision.<br className="hidden sm:inline" /> Here are answers to the questions parents ask us most before booking a trial class.
            </p>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-[24px] border border-purple-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold font-display text-slate-900 group-hover:text-brand-purple transition-colors pr-2">
                      {faq.question}
                    </span>
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-brand-purple text-white rotate-180' : 'bg-purple-50 text-brand-purple group-hover:bg-purple-100'}`}>
                      <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-purple-50/60 mt-1">
                          <p className="pt-4">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Bottom Closing Message & Secondary WhatsApp CTA */}
          <div className="mt-14 sm:mt-16 text-center space-y-4 pt-4">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
              Still have questions?
            </h3>
            <p className="text-slate-600 text-base max-w-md mx-auto leading-relaxed">
              We're always happy to help you choose the right programme for your little one.
            </p>
            <div className="pt-3">
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-brand-green hover:bg-brand-green-hover rounded-full shadow-md hover:shadow-lg shadow-brand-green/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-white text-brand-green" />
                Contact Us on WhatsApp
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 14. CTA: GIVE YOUR CHILD THE GIFT OF MUSIC */}

      <section 
        className="py-16 sm:py-20 bg-brand-purple relative text-white text-center overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center">
          <div className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-[29px] sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] font-bold font-display leading-tight mb-3 whitespace-normal sm:whitespace-nowrap">
              Let's Make Music Part Of Your Child's Journey
            </h2>
            <p className="text-purple-100 text-base sm:text-[17px] max-w-[692px] mx-auto leading-relaxed mb-8 px-2 sm:px-0">
              Join thousands of families who have discovered the joy of learning through music. Book your free trial class today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 px-4 sm:px-0">
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-bold text-brand-purple bg-white hover:bg-purple-50 rounded-full shadow-lg transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Book a Free Trial Class
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-bold text-white bg-brand-green hover:bg-brand-green-hover rounded-full shadow-lg transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white text-brand-green" />
                WhatsApp Us
              </button>
            </div>

            {/* Social Proof & Trust Badges Below CTA */}
            <div className="mt-6 space-y-1.5 text-center px-4 sm:px-0">
              <p className="text-amber-300 font-extrabold text-sm sm:text-base tracking-wide">
                ★★★★★ <span className="text-white font-semibold ml-1">Loved by Hundreds of Families</span>
              </p>
              <p className="text-purple-100 text-xs sm:text-sm font-medium opacity-90 leading-relaxed sm:leading-normal">
                Internationally Accredited • Award-Winning Program • 20+ Years Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 15. FOOTER */}
      <footer 
        className="bg-brand-teal text-white pt-10 pb-8 mt-0 mb-0"
      >
        <div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-auto md:h-[195.038px]"
          style={{ marginBottom: '7px', marginTop: '-1px' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
            
            {/* Left Brand Column */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center">
                <img 
                  src="https://assets.cdn.filesafe.space/5p1FktvwhgI1cg6ZLMMv/media/6a435b4a42c4669a15e386c8.png" 
                  alt="Kindermusik with Agape logo" 
                  className="w-auto object-contain brightness-0 invert"
                  style={{ height: '94.9931px', marginTop: '12px' }}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="font-bold text-xs uppercase tracking-wider text-emerald-100">Quick Links</h3>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#meet-clarice" className="hover:text-yellow-300 transition-all">About Us</a></li>
                <li><a href="#programs" className="hover:text-yellow-300 transition-all">Programs</a></li>
                <li><a href="#testimonials" className="hover:text-yellow-300 transition-all">Testimonials</a></li>
                <li><a href="#faq" className="hover:text-yellow-300 transition-all">FAQ</a></li>
              </ul>
            </div>

            {/* Station 18 Address Column */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-yellow-300" />
                <h3 className="font-bold text-xs uppercase tracking-wider text-emerald-100">Station 18</h3>
              </div>
              <p className="text-xs text-emerald-50 leading-relaxed">
                1, Hala Pengkalan Timur 14,<br />
                Taman Pasir Putih Selatan,<br />
                31650 Ipoh, Perak
              </p>
            </div>

            {/* Botani Address Column */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-yellow-300" />
                <h3 className="font-bold text-xs uppercase tracking-wider text-emerald-100">Botani</h3>
              </div>
              <p className="text-xs text-emerald-50 leading-relaxed">
                42, Lebuh Lapangan Siber 2,<br />
                Bandar Cyber,<br />
                31350 Ipoh, Perak
              </p>
            </div>

            {/* Contact Us Column */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-300" />
                <h3 className="font-bold text-xs uppercase tracking-wider text-emerald-100">Contact Us</h3>
              </div>
              <div className="space-y-3">
                <p className="text-xs text-emerald-50 hover:text-yellow-300 transition-all font-semibold font-mono">
                  +6019 572 1205
                </p>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com/KindermusikwithAgape" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-all p-1.5 bg-white/10 rounded-full">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="https://www.instagram.com/kindermusikwithagape/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-all p-1.5 bg-white/10 rounded-full">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-center text-[10px] text-emerald-100/75">
            &copy; {new Date().getFullYear()} Kindermusik with Agape. All rights reserved.
          </div>
        </div>
      </footer>

      {/* LIGHTBOX FOR IMAGE GALLERY & LEARNING SPACES */}
      <ImageLightbox 
        images={[...GALLERY_MOMENTS, ...LEARNING_SPACES.map(s => s.image)]}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(index) => setLightboxIndex(index)}
      />

      {/* CALENDAR FREE TRIAL BOOKING MODAL */}
      <TrialBookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

    </div>
  );
}
