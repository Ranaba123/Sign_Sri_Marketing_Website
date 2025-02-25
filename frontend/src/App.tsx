import React, { useState } from 'react';
import { 
  MessageSquare, 
  Book, 
  School, 
  Languages, 
  MessageCircle,
  HandPlatter as Translate,
  Github,
  Linkedin,
  Mail,
  PlayCircle,
  Menu,
  X,
  Music2,
} from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';


import PyaraImage from './assets/Pyara.jpg';
import NemsaraImage from './assets/Nemsara.jpg';
import VinukaImage from './assets/Arampath.jpg';
import SanhidaImage from './assets/Sanhida.jpg';
import DileeshaImage from './assets/Dileesha.jpg';
import JoelImage from './assets/Joel.jpg';
import LogoImage from './assets/Logo.jpg';
import ThumbnailImage from './assets/VideoThumbnail.png';
import Video from "./assets/PromotionVideo.mp4";
import HeroImage from './assets/heroImage.jpg';
import GooglePlay from "./assets/Google_Play_Store_badge_EN.svg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['Home', 'About Us', 'Key Features', 'Team', 'Contact Us'];
  const [isPlaying, setIsPlaying] = useState(false);
  

  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const form = event.currentTarget; // Use event.currentTarget instead of event.target
    const formData = new FormData(form);
    formData.append("access_key", "b5509b0e-42bf-4645-a3ef-00902c218022");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        form.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setResult("An error occurred while submitting the form.");
    }
  };

  


  return (
    
    <div className="min-h-screen bg-[#162737] font-sans">
      {/* Navigation - slightly lighter */}
      <nav className="fixed w-full bg-[#1a2f42]/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2 animate-float">
              <a href="#">
                 <img src={LogoImage} alt="Sign Sri Logo" className="w-12 h-12"  />

              </a>
              <a href="#">
                  <span className="text-4xl font-bold">
                      <span className="text-white">Sign</span>
                      <span className="text-[#83e50a]"> ශ්‍රී</span>
                    </span>
              </a>
                
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "#" : `#${item.toLowerCase().replace(' ', '-')}`}
                  className="nav-link text-lg font-medium tracking-wide"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-[#83e50a] hover:text-[#33d2fe] transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "#" : `#${item.toLowerCase().replace(' ', '-')}`}
                  className="block text-white hover:text-[#83e50a] transition-colors duration-300 py-2 text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HeroImage}
            alt="Hero Background"
            className="w-full h-full object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#162737]/10 to-[#162737]/20" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight ]">
            Breaking Barriers in <span className="text-[#83e50a] drop-shadow-[0_0_15px_rgba(131,229,10,0.5)]">Communication</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#33d2fe] mb-8 max-w-2xl mx-auto animate-fade-in leading-relaxed drop-shadow-[0_0_10px_rgba(51,210,254,0.5)]" style={{ animationDelay: '0.2s' }}>
            Empowering the deaf community through innovative AI-powered sign language translation
          </p>
          <button className="bg-[#83e50a] text-[#162737] px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#33d2fe] hover:scale-105 transition-all duration-300 animate-fade-in shadow-[0_0_20px_rgba(131,229,10,0.3)]" style={{ animationDelay: '0.4s' }}>
            Get Started
          </button>
        </div>
      </section>

      {/* About Us - lighter background */}
      <section id="about-us" className="py-20 bg-[#1a2f42]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-[#83e50a] ">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-float">
              <p className="text-lg text-white/90 leading-relaxed">
                SignSri is revolutionizing communication for the deaf community through cutting-edge AI technology. Our mobile application seamlessly translates between sign language and text in real-time, breaking down communication barriers and fostering inclusivity.
              </p>
              {/* video section */}
              <div 
                className="aspect-video bg-[#223548] rounded-lg border-2 border-[#83e50a] overflow-hidden group hover:border-[#33d2fe] transition-colors duration-300 relative cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                  {!isPlaying ? (
                    <>
                      {/* Thumbnail Image */}
                      <img 
                        src={ThumbnailImage} 
                        alt="Video Thumbnail" 
                        className="w-full h-full object-cover"
                      />
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                          <PlayCircle className="w-16 h-16 text-[#83e50a] group-hover:text-[#33d2fe] transition-colors duration-300" />
                      </div>
                    </>
                  ) : (
                    <video 
                    src={Video} 
                    controls 
                    autoPlay 
                    className="w-full h-full"
                  />

                  )}

              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#223548] p-6 rounded-lg border border-[#83e50a] transform hover:scale-105 hover:border-[#33d2fe] transition-all duration-300 ">
                <h3 className="font-semibold mb-2 text-[#83e50a] text-xl">Our Mission</h3>
                <p className="text-white">To create a world where communication knows no boundaries.</p>
              </div>
              <div className="bg-[#223548] p-6 rounded-lg border border-[#83e50a] transform hover:scale-105 hover:border-[#33d2fe] transition-all duration-300 ">
                <h3 className="font-semibold mb-2 text-[#83e50a] text-xl">Our Vision</h3>
                <p className="text-white">Empowering deaf individuals through innovative technology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - darker for contrast */}
      <section id="key-features" className="py-20 bg-[#162737]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#83e50a] mb-16 ]">Key Features</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { icon: Translate, title: 'Sign to Text', description: 'Real-time translation of sign language to text using advanced computer vision.' },
              { icon: MessageSquare, title: 'Text to Sign', description: 'Convert text messages into accurate sign language representations.' },
              { icon: School, title: 'Sign Language School', description: 'Interactive learning platform with gamification features.' },
              { icon: Book, title: 'Sign Language Dictionary', description: 'Comprehensive dictionary of sign language gestures and meanings.' },
              { icon: Languages, title: 'Sign Language Phrase Book', description: 'Quick reference tool for common phrases and expressions.' },
              { icon: MessageCircle, title: 'Community Forum', description: 'Connect with others and share experiences in our vibrant community.' }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[#223548] p-8 rounded-lg border-2 border-[#83e50a] transform hover:scale-105 hover:border-[#33d2fe] transition-all duration-300 ] group"
              >
                <feature.icon className="w-12 h-12 text-[#83e50a] mb-4 group-hover:text-[#33d2fe] transition-colors duration-300 " />
                <h3 className="text-xl font-semibold text-[#83e50a] mb-3 group-hover:text-[#33d2fe] transition-colors duration-300">{feature.title}</h3>
                <p className="text-white leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - lighter background */}
      <section id="team" className="py-20 bg-[#1a2f42]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#83e50a] mb-16 ]">Our Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: 'Pyara Perera', role: 'Team Leader', image: PyaraImage,Linkedin:'https://www.linkedin.com/in/pyara-perera-572725293/'},
              { name: 'Nemsara Ranaba', role: 'Team Member', image: NemsaraImage,Linkedin:'https://www.linkedin.com/in/nemsara-ranaba-27b2701aa/' },
              { name: 'Vinuka Arampath', role: 'Team Member', image: VinukaImage,Linkedin:'https://www.linkedin.com/in/vinuka-ara/' },
              { name: 'Sanhida Gimhan', role: 'Team Member', image: SanhidaImage,Linkedin:'#' },
              { name: 'Joel Lawrence', role: 'Team Member', image: JoelImage,Linkedin:'https://www.linkedin.com/in/joel-lawrence-8b5213262/' },
              { name: 'Dileesha Devendra', role: 'Team Member', image: DileeshaImage,Linkedin:'#' }
            ].map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg transform hover:scale-105 transition-all duration-300 "
              >
                <a href={member.Linkedin} target="_blank" rel="noopener noreferrer"></a>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover brightness-75 group-hover:brightness-100 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#162737] via-[#162737]/50 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#83e50a] group-hover:text-[#33d2fe] transition-colors duration-300">{member.name}</h3>
                    <p className="text-white">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon - darker for contrast */}
      <section className="py-20 bg-[#162737] relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#83e50a] mb-8 animate-float drop-shadow-[0_0_10px_rgba(131,229,10,0.5)]">Coming Soon to Play Store</h2>
          <a 
            href="https://play.google.com/console/about/guides/getting-featured-on-google-play/" // Replace this with the actual Play Store URL for your app 
          >
            <img
              src={GooglePlay}
              alt="Play Store"
              className="h-12 sm:h-16 mx-auto cursor-pointer transform hover:scale-110 transition-transform duration-300 animate-float drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
            />
          </a>
        </div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#83e50a_0%,_transparent_35%)] opacity-20 animate-glow" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#33d2fe_0%,_transparent_35%)] opacity-20 animate-glow" style={{ animationDelay: '1s' }} />
        </div>
      </section>

      {/* Contact Section - lighter background */}
      <section id="contact-us" className="py-20 bg-[#1a2f42]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#83e50a] mb-16 ]">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="transform hover:scale-105 transition-all duration-300">
                <label htmlFor="name" className="block text-lg font-medium text-[#83e50a] mb-2">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  name='name'
                  className="w-full bg-[#223548] border-2 border-[#83e50a] rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-[#33d2fe] focus:ring-2 focus:ring-[#33d2fe]/20 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div className="transform hover:scale-105 transition-all duration-300">
                <label htmlFor="email" className="block text-lg font-medium text-[#83e50a] mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  name='email'
                  className="w-full bg-[#223548] border-2 border-[#83e50a] rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-[#33d2fe] focus:ring-2 focus:ring-[#33d2fe]/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
                
              </div>
              <div className="transform hover:scale-105 transition-all duration-300">
                <label htmlFor="message" className="block text-lg font-medium text-[#83e50a] mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={4} 
                  required 
                  name='message'
                  className="w-full bg-[#223548] border-2 border-[#83e50a] rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-[#33d2fe] focus:ring-2 focus:ring-[#33d2fe]/20 transition-all duration-300"
                  placeholder="Your message"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-[#83e50a] text-[#162737] py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#33d2fe] transform hover:scale-105 transition-all duration-300">
                Send Message
              </button>
              {status && <p className="text-white text-center mt-4">{status}</p>}
            </form>
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-semibold mb-6 text-[#83e50a] ]">Connect With Us</h3>
              <div className="flex justify-center space-x-8">
                {[
                  { icon: Github, href: 'https://github.com/Sign-Sri/Sign-Sri-App.git', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/company/signsri', label: 'LinkedIn' },
                  { icon: Music2, href: 'https://www.tiktok.com/@sign.sri?is_from_webapp=1&sender_device=pc', label: 'Music2' },
                  { icon: Mail, href: 'mailto:signsri.official@gmail.com', label: 'Email' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-[#83e50a] hover:text-[#33d2fe] transform hover:scale-125 transition-all duration-300]"
                  >
                    <social.icon className="w-8 h-8" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - slightly darker */}
      <footer className="py-6 bg-[#162737] border-t-2 border-[#83e50a]/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white">&copy; {new Date().getFullYear()} SignSri. All rights reserved.</p>
        </div>
      </footer>
      <Analytics />
    </div>
    
  );
}

export default App;