"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SEO } from "@/components/seo"
import { JsonLd, schemas } from "@/components/json-ld"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Users,
  Monitor,
  Briefcase,
  Sprout,
  Award,
  Phone,
  MapPin,
  MessageCircle,
  ChevronRight,
  Star,
  CheckCircle,
  Mail,
  ArrowRight,
  Play,
  TrendingUp,
} from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    service_interested: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch('https://examquiz.dedicated.co.za/api/send-contact-us-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: "info@multiplexconsultingservices.co.za",
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          service_interested: formData.service_interested || undefined
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.'
        })
        // Reset form
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          service_interested: "",
          message: ""
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Something went wrong. Please try again or contact us directly.'
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <SEO 
        title="Multiplex Consulting Services - Accredited Skills Development & Training"
        description="Transform your future with Multiplex Consulting Services. Accredited skills development, entrepreneurship support, and comprehensive training programs. SETA accredited provider empowering excellence."
        url="https://multiplexconsultingservices.co.za"
        type="website"
      />
      <JsonLd data={schemas.organization} id="organization-schema" />
      <JsonLd data={schemas.localBusiness} id="local-business-schema" />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-white/20 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start space-y-0">
              <div className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Multiplex Consulting Services
              </div>
              <p className="text-xs text-gray-500 mt-0.5">Empowering People. Enabling Business.</p>
            </div>
            <div className="flex items-center space-x-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-700 transition-all duration-300 font-medium relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-blue-700 transition-all duration-300 font-medium relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-700 transition-all duration-300 font-medium relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Button 
                className="bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-800 hover:to-teal-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-bold"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  })
                }}
              >
                Enroll Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-50/50 via-white to-blue-50/50"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-navy-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-center space-x-3">
                <Badge className="bg-gradient-to-r from-navy-100 to-teal-100 text-navy-800 border-navy-200 px-4 py-2 text-sm font-medium">
                  <Award className="w-4 h-4 mr-2" />
                  Accredited Training Provider
                </Badge>
              </div>
              {/* Add logo below badge */}
              <div className="flex justify-center mt-4">
                <img
                  src="/images/logo.png"
                  alt="Multiplex Consulting Services Logo"
                  className="w-60 h-auto"
                />
              </div>

      
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Multiplex Consulting Services is committed to empowering individuals and small businesses through practical skills training and advisory services. Our mission is to build capacity and unlock economic potential in communities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-800 hover:to-teal-600 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    })
                  }}
                >
                  Request Information
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">
                    500+
                  </div>
                  <div className="text-sm text-gray-600">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">
                    95%
                  </div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">
                    3
                  </div>
                  <div className="text-sm text-gray-600">SETA Accredited</div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-navy-600/20 to-teal-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
              <div className="relative">
                <img
                  src="/images/hero-training.jpg"
                  alt="Professional skills training environment with students learning computer skills"
                  className="rounded-3xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-navy-500 to-teal-600 p-3 rounded-xl">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Accredited Programs</p>
                      <p className="text-sm text-gray-600">AgriSETA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200 mb-6">
              About Our Mission
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                About Multiplex Consulting Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Multiplex Consulting Services offers tailored training and strategic consulting to individuals, SMMEs, and community-based projects. We believe in actionable learning, impactful partnerships, and measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Training",
                description: "Experienced instructors delivering industry-relevant curriculum",
                color: "from-navy-500 to-teal-600",
                bgColor: "from-navy-50 to-teal-50",
              },
              {
                icon: Award,
                title: "Accredited Programs",
                description: "Recognized certifications from leading industry bodies",
                color: "from-blue-500 to-indigo-600",
                bgColor: "from-blue-50 to-indigo-50",
              },
              {
                icon: TrendingUp,
                title: "Career Growth",
                description: "Comprehensive support from training to job placement",
                color: "from-purple-500 to-pink-600",
                bgColor: "from-purple-50 to-pink-50",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm transform hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`bg-gradient-to-br ${item.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className={`bg-gradient-to-br ${item.color} p-3 rounded-xl shadow-lg`}>
                      <item.icon className="h-8 w-8 text-navy-700" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-navy-200/20 to-teal-200/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-navy-100 to-teal-100 text-navy-800 border-navy-200 mb-6">
              Our Services
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Comprehensive Training Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Designed to meet industry demands and empower your career growth with cutting-edge programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Skills Development & Accredited Training",
                description: "Empower your team with SETA-accredited and practical development programs across sectors.",
                features: [
                  "Advanced Financial Statement Analysis",
                  "Advanced Management Programme",
                  "The Competent Manager",
                  "5-Day MBA in HR",
                  "Financial Management for Non-Financial Professionals",
                  "Linking Training to Organisational Goals",
                ],
                color: "from-navy-500 to-teal-600",
                bgGradient: "from-navy-50 to-teal-50",
              },
              {
                icon: Users,
                title: "Leadership & Governance Training",
                description: "Enhance executive capability and professional resilience.",
                features: [
                  "Personal Effectiveness & Influencing Skills",
                  "Priority & Time Management",
                  "Setting Priorities & Stress Reduction",
                  "Negotiation & Conflict Management",
                  "The Competent Manager",
                ],
                color: "from-blue-500 to-indigo-600",
                bgGradient: "from-blue-50 to-indigo-50",
              },
              {
                icon: Monitor,
                title: "Online Learning Tools",
                description: "Digital tools and systems training to modernize how businesses learn and operate.",
                features: [
                  "Business Systems Analysis",
                  "Professional Business Systems Analyst",
                  "Discovering & Modelling User Requirements",
                  "Financial Modelling & Forecasting",
                  "Maintenance Strategy Implementation",
                ],
                color: "from-purple-500 to-pink-600",
                bgGradient: "from-purple-50 to-pink-50",
              },
              {
                icon: Briefcase,
                title: "Business Consulting & Process Training",
                description: "Drive operational excellence and improve performance with proven methods.",
                features: [
                  "Business Process Analysis & Modelling",
                  "Operation Performance & Productivity",
                  "Risk-Based Maintenance (RBM & RBI)",
                  "Problem Solving & Root Cause Analysis",
                  "Asset Management Fundamentals",
                ],
                color: "from-orange-500 to-red-600",
                bgGradient: "from-orange-50 to-red-50",
              },
              {
                icon: Sprout,
                title: "Supply Chain & Inventory Management",
                description: "Master procurement, logistics, and inventory for cost savings and efficiency.",
                features: [
                  "Warehouse & Stores Management",
                  "Inventory & Stock Control",
                  "Logistics & Supply Chain Management",
                  "Tendering & Supplier Selection",
                  "Vendor Qualification & Contract Compliance",
                ],
                color: "from-green-500 to-emerald-600",
                bgGradient: "from-green-50 to-emerald-50",
              },
              {
                icon: Award,
                title: "Recruitment, HR & Organisational Support",
                description: "Build strong teams and efficient HR systems.",
                features: [
                  "Advanced Interviewing & Recruitment Skills",
                  "Professional Recruitment Analyst",
                  "Maintenance Contracting & Outsourcing",
                  "Training Linked to Organisational Goals",
                ],
                color: "from-pink-500 to-rose-600",
                bgGradient: "from-pink-50 to-rose-50",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm transform hover:-translate-y-3 hover:scale-105"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`bg-gradient-to-br ${service.bgGradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className={`bg-gradient-to-br ${service.color} p-3 rounded-xl shadow-lg`}>
                      <service.icon className="h-6 w-6 text-navy-700" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-navy-700 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  {service.features && (
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-1 mr-3">
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border-yellow-200 mb-6">
              Success Stories
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                What Our Students Say
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Thabo Mthembu",
                role: "Operations Manager",
                content:
                  "Multiplex Consulting Services provided practical, accredited training that helped me advance my career and lead my team with confidence.",
                initials: "TM",
                color: "from-navy-500 to-teal-600",
              },
              {
                name: "Nomsa Phiri",
                role: "Business Analyst",
                content:
                  "The business consulting and process training programs were a game changer for our company. We improved efficiency and achieved measurable results.",
                initials: "NP",
                color: "from-blue-500 to-indigo-600",
              },
              {
                name: "Sipho Mabaso",
                role: "HR Specialist",
                content:
                  "Thanks to Multiplex, I gained valuable HR and recruitment skills that made a real impact in our organisation's talent management.",
                initials: "SM",
                color: "from-green-500 to-emerald-600",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm transform hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</blockquote>
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center mr-4 shadow-lg`}
                    >
                      <span className="text-white font-bold">{testimonial.initials}</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-navy-50 via-teal-50 to-blue-50 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-navy-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="space-y-16">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <Badge className="bg-gradient-to-r from-navy-100 to-teal-100 text-navy-800 border-navy-200 mb-6">
                    Get In Touch
                  </Badge>
                  <h2 className="text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      Ready to Transform Your Future?
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Contact us today to learn more about our training programs and how we can help you achieve your
                    goals.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Address",
                      content: "04 Jacana Crescent, Crystal Park Ext3\nCity of Ekurhuleni, 1515",
                      color: "from-navy-500 to-teal-600",
                    },
                    {
                      icon: Phone,
                      title: "Phone",
                      content: "075 393 1431",
                      color: "from-blue-500 to-indigo-600",
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      content: "info@multiplexconsultingservices.co.za",
                      color: "from-purple-500 to-pink-600",
                    },
                  ].map((contact, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div
                        className={`bg-gradient-to-br ${contact.color} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <contact.icon className="h-6 w-6 text-navy-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{contact.title}</h3>
                        <p className="text-gray-600 whitespace-pre-line">{contact.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Accreditation Logos */}
                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg">
                  <h3 className="font-bold text-gray-900 mb-4">Accredited By</h3>
                  <div className="flex flex-wrap gap-3">
                    {["AgriSETA"].map((accreditation, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="px-4 py-2 bg-white/80 border-navy-200 text-navy-800 hover:bg-navy-50 transition-colors"
                      >
                        {accreditation}
                      </Badge>
                    ))}
                    <Badge
                      variant="outline"
                      className="px-4 py-2 bg-white/80 border-navy-200 text-navy-800 hover:bg-navy-50 transition-colors"
                    >
                      AGRI/c prov/2489/23
                    </Badge>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg">
                  <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://linkedin.com/company/multiplexconsultingservices"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-4 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                    >
                      <span className="font-bold text-sm group-hover:scale-110 transition-transform">LinkedIn</span>
                    </a>
                    <a
                      href="https://wa.me/27645348988"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 group"
                    >
                      <MessageCircle className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-2xl">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Request Information
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-3 block">First Name</label>
                        <Input
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleInputChange}
                          placeholder="Enter your first name"
                          className="border-gray-200 focus:border-navy-500 focus:ring-navy-500/20 bg-white/80"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-3 block">Last Name</label>
                        <Input
                          name="last_name"
                          value={formData.last_name}
                          onChange={handleInputChange}
                          placeholder="Enter your last name"
                          className="border-gray-200 focus:border-navy-500 focus:ring-navy-500/20 bg-white/80"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-3 block">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="border-gray-200 focus:border-navy-500 focus:ring-navy-500/20 bg-white/80"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-3 block">Phone</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="border-gray-200 focus:border-navy-500 focus:ring-navy-500/20 bg-white/80"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-3 block">Program of Interest</label>
                      <Input
                        name="service_interested"
                        value={formData.service_interested}
                        onChange={handleInputChange}
                        placeholder="Which program interests you?"
                        className="border-gray-200 focus:border-navy-500 focus:ring-navy-500/20 bg-white/80"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-3 block">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your training needs"
                        rows={4}
                        className="border-gray-200 focus:border-navy-500 focus:ring-navy-500/20 bg-white/80"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-navy-700 hover:bg-navy-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    {submitStatus.type === 'success' && (
                      <p className="text-green-600 text-center">{submitStatus.message}</p>
                    )}
                    {submitStatus.type === 'error' && (
                      <p className="text-red-600 text-center">{submitStatus.message}</p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Google Map */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Our Training Center</h3>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps?q=-26.046813590885524,27.951583884656596&z=15&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
              <p className="text-gray-600 mt-4 text-center">
                04 Jacana Crescent, Crystal Park Ext3, City of Ekurhuleni, 1515
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-navy-600/10 to-teal-600/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Training
                </div>
                <p className="text-sm text-gray-400 -mt-1">Empowering Excellence</p>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering communities through comprehensive skills development and accredited training programs that
                transform lives and build futures.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-navy-400 transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-navy-400 transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-navy-400 transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Contact Info
              </h3>
              <div className="space-y-4 text-gray-400">
                <p className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 text-navy-400" />
                  Fancpurt Office Park, 9 Felstead Road, Northriding,<br />Johannesburg, 2162
                </p>
                <p className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-navy-400" />
                  Tel: +27 10 023 9091
                </p>
                <p className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-navy-400" />
                  Mobile: +27 68 771 8694
                </p>
                <p className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-3 text-navy-400" />
                  WhatsApp: +27 75 393 1431
                </p>
                <div className="flex items-center space-x-4 mt-2">
                  <a href="https://facebook.com/multiplexconsultingservices" target="_blank" rel="noopener noreferrer" className="hover:text-navy-400 underline">Facebook</a>
                  <a href="https://linkedin.com/company/multiplexconsultingservices" target="_blank" rel="noopener noreferrer" className="hover:text-navy-400 underline">LinkedIn: Multiplexconsultingservices</a>
                </div>
                <div className="mt-2 text-xs text-gray-400">
                  Company registration number: 2014/174698/07
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 Multiplex Consulting Services. All rights reserved. | Transforming lives through education.<br />
              <span className="text-navy-400">AGRI/c prov/2489/23</span>
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Developed by <a href="https://www.dimpo.co.za" target="_blank" rel="noopener noreferrer" className="underline hover:text-navy-400">Dimpo Business Solutions</a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Chat Widget */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          size="lg"
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full w-16 h-16 p-0 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 group"
          onClick={() => window.open("https://wa.me/27645348988", "_blank")}
        >
          <MessageCircle className="h-7 w-7 group-hover:scale-110 transition-transform" />
        </Button>
      </div>
    </div>
    </>
  )
}
