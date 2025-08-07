'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Hammer, PaintBucket, Zap, Home, Wrench, Lightbulb, Shield, Users, Phone, Mail, MapPin, Star, Menu, X, CheckCircle, Clock, DollarSign, Calendar } from 'lucide-react'
import { useState } from 'react'

export default function HandymanWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    description: '',
    budget: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false)
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setContactForm({ name: '', email: '', subject: '', message: '' })
    
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setQuoteForm({ name: '', email: '', phone: '', service: '', description: '', budget: '' })
    
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  const services = [
    { 
      icon: Hammer, 
      title: "PROJECT DEVELOPMENT", 
      desc: "Professional design and planning of construction work",
      price: "Starting at $500",
      details: "Complete project planning, architectural drawings, permits, and timeline development. We handle all aspects of project development from concept to completion."
    },
    { 
      icon: Home, 
      title: "FLOORING INSTALLATION", 
      desc: "Installation of all types of floor coverings",
      price: "Starting at $8/sq ft",
      details: "Hardwood, laminate, tile, carpet, and luxury vinyl installation. Professional subfloor preparation and finishing included."
    },
    { 
      icon: Zap, 
      title: "FIXTURE INSTALLATION", 
      desc: "Installation and connection of lighting fixtures",
      price: "Starting at $150",
      details: "Ceiling fans, chandeliers, pendant lights, and outdoor fixtures. Licensed electrician ensures safe and code-compliant installation."
    },
    { 
      icon: Shield, 
      title: "WALL CONSTRUCTION", 
      desc: "Construction and finishing of various wall types",
      price: "Starting at $25/sq ft",
      details: "Drywall installation, framing, insulation, and finishing. Interior and exterior walls with professional texture and paint preparation."
    },
    { 
      icon: Home, 
      title: "SITE SURVEYS", 
      desc: "Technical inspection and condition assessment",
      price: "Starting at $300",
      details: "Comprehensive property assessment, structural analysis, and detailed reporting. Identify potential issues before they become problems."
    },
    { 
      icon: PaintBucket, 
      title: "PROFESSIONAL PAINTING", 
      desc: "Interior and exterior painting work",
      price: "Starting at $3/sq ft",
      details: "Premium paint application, surface preparation, and color consultation. Residential and commercial painting with warranty."
    },
    { 
      icon: Zap, 
      title: "ELECTRICAL WORK", 
      desc: "Installation and repair of electrical networks",
      price: "Starting at $200",
      details: "Wiring, outlets, panels, and safety inspections. Licensed electricians ensure all work meets local codes and safety standards."
    },
    { 
      icon: Users, 
      title: "INTERIOR BUILD OUTS", 
      desc: "Complete interior construction and renovation",
      price: "Starting at $50/sq ft",
      details: "Full interior renovations including framing, electrical, plumbing, flooring, and finishing. Turn-key solutions for residential and commercial spaces."
    },
    { 
      icon: Wrench, 
      title: "MILL WORK", 
      desc: "Custom carpentry and woodworking",
      price: "Starting at $400",
      details: "Custom cabinets, trim work, built-ins, and specialty woodworking. Precision craftsmanship with attention to detail."
    },
    { 
      icon: Lightbulb, 
      title: "LIGHTING INSTALLATION", 
      desc: "Complete lighting system design and installation",
      price: "Starting at $250",
      details: "LED upgrades, smart lighting systems, and energy-efficient solutions. Design consultation and professional installation included."
    },
    { 
      icon: Shield, 
      title: "DECORATIVE FINISHES", 
      desc: "Specialty finishes and decorative work",
      price: "Starting at $15/sq ft",
      details: "Textured walls, faux finishes, wallpaper installation, and decorative painting. Transform your space with custom finishes."
    },
    { 
      icon: Home, 
      title: "COMPLETE RENOVATIONS", 
      desc: "Comprehensive turnkey renovation services",
      price: "Starting at $75/sq ft",
      details: "Full home or commercial renovations from design to completion. Project management, permits, and warranty included."
    }
  ]

  const portfolioItems = [
    { image: "/images/flooring.png", title: "Modern Kitchen Renovation", category: "Interior" },
    { image: "/images/painting-work.png", title: "Exterior House Painting", category: "Exterior" },
    { image: "/images/wall-work.png", title: "Office Build-Out", category: "Commercial" },
    { image: "/images/ceiling-work.png", title: "Bathroom Remodel", category: "Interior" },
    { image: "/images/consultation.png", title: "Custom Home Build", category: "Construction" },
    { image: "/images/planning.png", title: "Retail Space Design", category: "Commercial" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="relative">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl shadow-lg">
                    <Hammer className="h-6 w-6 text-white transform rotate-12" />
                    <Wrench className="h-4 w-4 text-white absolute top-1 right-1 transform -rotate-45" />
                  </div>
                </div>
                <div className="ml-3">
                  <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                    CraftPro
                  </span>
                  <div className="text-xs text-gray-500 font-medium tracking-wider">SOLUTIONS</div>
                </div>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-900 hover:text-teal-500 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-600 hover:text-teal-500 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-600 hover:text-teal-500 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Portfolio
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-600 hover:text-teal-500 px-3 py-2 text-sm font-medium transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-600 hover:text-teal-500 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contact
                </button>
                <a href="tel:+15551234567" className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Call Now
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-teal-500 p-2"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-600 hover:text-teal-500 w-full text-left">Home</button>
                <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-600 hover:text-teal-500 w-full text-left">Services</button>
                <button onClick={() => scrollToSection('portfolio')} className="block px-3 py-2 text-gray-600 hover:text-teal-500 w-full text-left">Portfolio</button>
                <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-600 hover:text-teal-500 w-full text-left">About</button>
                <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-600 hover:text-teal-500 w-full text-left">Contact</button>
                <a href="tel:+15551234567" className="block px-3 py-2 bg-teal-500 text-white rounded-lg text-center mx-3 mt-4">Call Now</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-white to-teal-50 py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                EXPERT CRAFTSMANSHIP{' '}
                <span className="text-teal-500">DELIVERED</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We provide a full range of construction and repair services. Our team of experienced craftsmen 
                guarantees quality work completion within the established timeframes. From minor repairs to major 
                construction projects - we bring your ideas to reality using modern technologies and 
                quality materials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 text-lg">
                      GET FREE QUOTE
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Request Free Quote</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleQuoteSubmit} className="space-y-4">
                      <Input 
                        placeholder="Your name" 
                        value={quoteForm.name}
                        onChange={(e) => setQuoteForm({...quoteForm, name: e.target.value})}
                        required
                      />
                      <Input 
                        type="email" 
                        placeholder="Your email" 
                        value={quoteForm.email}
                        onChange={(e) => setQuoteForm({...quoteForm, email: e.target.value})}
                        required
                      />
                      <Input 
                        type="tel" 
                        placeholder="Phone number" 
                        value={quoteForm.phone}
                        onChange={(e) => setQuoteForm({...quoteForm, phone: e.target.value})}
                        required
                      />
                      <select 
                        className="w-full p-2 border rounded-md"
                        value={quoteForm.service}
                        onChange={(e) => setQuoteForm({...quoteForm, service: e.target.value})}
                        required
                      >
                        <option value="">Select Service</option>
                        <option value="renovation">Complete Renovation</option>
                        <option value="painting">Painting</option>
                        <option value="flooring">Flooring</option>
                        <option value="electrical">Electrical Work</option>
                        <option value="other">Other</option>
                      </select>
                      <Textarea 
                        placeholder="Project description" 
                        value={quoteForm.description}
                        onChange={(e) => setQuoteForm({...quoteForm, description: e.target.value})}
                        required
                      />
                      <select 
                        className="w-full p-2 border rounded-md"
                        value={quoteForm.budget}
                        onChange={(e) => setQuoteForm({...quoteForm, budget: e.target.value})}
                        required
                      >
                        <option value="">Budget Range</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-15k">$5,000 - $15,000</option>
                        <option value="15k-50k">$15,000 - $50,000</option>
                        <option value="over-50k">Over $50,000</option>
                      </select>
                      <Button 
                        type="submit" 
                        className="w-full bg-teal-500 hover:bg-teal-600"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Get Quote'}
                      </Button>
                      {submitSuccess && (
                        <div className="text-green-600 text-center flex items-center justify-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          Quote request sent successfully!
                        </div>
                      )}
                    </form>
                  </DialogContent>
                </Dialog>
                <a href="tel:+15551234567">
                  <Button variant="outline" className="px-8 py-3 text-lg border-teal-500 text-teal-500 hover:bg-teal-50">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </Button>
                </a>
              </div>
              
              <div className="mt-8 flex items-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-500">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Service</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-500">Licensed</div>
                  <div className="text-sm text-gray-600">& Insured</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-500">5★</div>
                  <div className="text-sm text-gray-600">Rated Service</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-teal-500 rounded-lg p-8 pb-[0]">
                <img 
                  src="/images/hero-handyman.png" 
                  alt="Professional handyman" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              OUR <span className="text-teal-500">SERVICES</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional construction and repair services with transparent pricing and quality guarantee
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="text-center p-6 hover:shadow-lg transition-all cursor-pointer hover:scale-105">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 text-sm">{service.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{service.desc}</p>
                      <Badge variant="secondary" className="bg-teal-100 text-teal-700">
                        {service.price}
                      </Badge>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-lg">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      {service.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <p className="text-gray-600">{service.details}</p>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-teal-500" />
                      <span className="font-semibold">{service.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-teal-500" />
                      <span>Free consultation and estimate</span>
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="flex-1 bg-teal-500 hover:bg-teal-600">
                            Get Quote
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>Request Quote for {service.title}</DialogTitle>
                          </DialogHeader>
                          <form onSubmit={handleQuoteSubmit} className="space-y-4">
                            <Input placeholder="Your name" required />
                            <Input type="email" placeholder="Your email" required />
                            <Input type="tel" placeholder="Phone number" required />
                            <Textarea placeholder="Project details" required />
                            <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600">
                              Send Quote Request
                            </Button>
                          </form>
                        </DialogContent>
                      </Dialog>
                      <a href="tel:+15551234567" className="flex-1">
                        <Button variant="outline" className="w-full">
                          <Phone className="h-4 w-4 mr-2" />
                          Call
                        </Button>
                      </a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              OUR <span className="text-teal-500">PORTFOLIO</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our recent projects and see the quality craftsmanship we deliver
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow mx-[0] mt-[] py-[0]">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image || "/placeholder.svg"} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <Badge variant="outline" className="text-teal-600 border-teal-200">
                    {item.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3">
                  View More Projects
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Complete Portfolio</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    We have completed over 500 projects in the past 15 years. Our portfolio includes:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Residential renovations and remodeling</li>
                    <li>• Commercial build-outs and office spaces</li>
                    <li>• Custom home construction</li>
                    <li>• Restaurant and retail spaces</li>
                    <li>• Emergency repair services</li>
                  </ul>
                  <div className="pt-4">
                    <Button className="w-full bg-teal-500 hover:bg-teal-600" onClick={() => scrollToSection('contact')}>
                      Contact Us for Your Project
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ABOUT <span className="text-teal-500">US</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                CraftPro Solutions is a team of skilled professionals with years of experience in construction 
                and repair. We specialize in delivering exceptional craftsmanship for projects of any complexity - from minor 
                household repairs to large-scale construction projects.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our goal is to provide quality services that exceed client expectations. 
                We guarantee a professional approach, adherence to deadlines, and the use of only 
                quality materials and modern equipment.
              </p>
              <div className="flex gap-4">
                <Button className="bg-teal-500 hover:bg-teal-600 text-white" onClick={() => scrollToSection('contact')}>
                  GET STARTED
                </Button>
                <a href="tel:+15551234567">
                  <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-50">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Us
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-teal-500 rounded-lg p-8">
                <div className="bg-white rounded-lg p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-500 mb-2">500+</div>
                      <div className="text-sm text-gray-600">Completed Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-500 mb-2">15+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-500 mb-2">100%</div>
                      <div className="text-sm text-gray-600">Satisfied Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-500 mb-2">24/7</div>
                      <div className="text-sm text-gray-600">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              CLIENT <span className="text-teal-500">TESTIMONIALS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Mr. Johnson",
                text: "Excellent work! The CraftPro team completed our kitchen renovation quickly and with exceptional quality. I recommend them to everyone!",
                rating: 5,
                project: "Kitchen Renovation"
              },
              {
                name: "Ms. Davis", 
                text: "Professional approach and attention to detail. The result exceeded all expectations. Thank you for the excellent work!",
                rating: 5,
                project: "Bathroom Remodel"
              },
              {
                name: "Mr. Wilson",
                text: "Reliable team with great experience. All work was completed on time and with quality guarantee. Will hire again!",
                rating: 5,
                project: "Office Build-out"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              className="bg-teal-500 hover:bg-teal-600 text-white"
              onClick={() => window.open('https://www.google.com/search?q=craftpro+solutions+reviews', '_blank')}
            >
              Read More Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              CONTACT <span className="text-teal-500">US</span>
            </h2>
            <p className="text-lg text-gray-600">
              Ready to start your project? Get in touch with us today!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-teal-500 rounded-lg p-8 text-white mb-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a href="tel:+15551234567" className="flex items-center hover:text-teal-200 transition-colors">
                    <Phone className="w-6 h-6 mr-4" />
                    <span>+1 (555) 123-4567</span>
                  </a>
                  <a href="mailto:info@craftprosolutions.com" className="flex items-center hover:text-teal-200 transition-colors">
                    <Mail className="w-6 h-6 mr-4" />
                    <span>info@craftprosolutions.com</span>
                  </a>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 mr-4" />
                    <span>123 Construction Ave, New York, NY</span>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-teal-400">
                  <h4 className="font-semibold mb-4">Business Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>7:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Emergency Only</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              {submitSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-600 mb-4">We'll get back to you within 24 hours.</p>
                  <Button 
                    onClick={() => setSubmitSuccess(false)}
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <Input 
                      placeholder="Your name" 
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your email" 
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Subject" 
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your message" 
                      rows={4} 
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="bg-teal-500 hover:bg-teal-600 text-white w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="h-4 w-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'SEND MESSAGE'
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="relative">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg">
                    <Hammer className="h-5 w-5 text-white transform rotate-12" />
                    <Wrench className="h-3 w-3 text-white absolute top-0.5 right-0.5 transform -rotate-45" />
                  </div>
                </div>
                <div className="ml-2">
                  <span className="text-xl font-bold text-white">CraftPro</span>
                  <div className="text-xs text-gray-400 font-medium">SOLUTIONS</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Expert craftsmanship and professional construction services in New York and surrounding areas.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white">
                  Facebook
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white">
                  Instagram
                </Button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Construction</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Renovation</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Electrical</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Plumbing</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-white transition-colors">Our Work</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition-colors">Reviews</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <a href="tel:+15551234567" className="block hover:text-white transition-colors">+1 (555) 123-4567</a>
                <a href="mailto:info@craftprosolutions.com" className="block hover:text-white transition-colors">info@craftprosolutions.com</a>
                <p>123 Construction Ave, NY</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CraftPro Solutions. All rights reserved. | Licensed & Insured | Emergency Services Available</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
