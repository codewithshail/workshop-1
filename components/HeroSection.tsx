"use client"

import React, { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowRight, 
  Code2, 
  Users, 
  MessageSquare, 
  GitBranch,
  Star,
  Zap,
  Shield,
  Globe
} from 'lucide-react'

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset
        const parallax = heroRef.current.querySelector('.parallax-bg') as HTMLElement
        if (parallax) {
          parallax.style.transform = `translateY(${scrolled * 0.5}px)`
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const features = [
    { icon: <Code2 className="w-5 h-5" />, text: "Share Projects" },
    { icon: <Users className="w-5 h-5" />, text: "Collaborate" },
    { icon: <MessageSquare className="w-5 h-5" />, text: "Get Help" },
    { icon: <GitBranch className="w-5 h-5" />, text: "Track Progress" },
  ]

  const stats = [
    { number: "10K+", label: "Developers" },
    { number: "5K+", label: "Projects" },
    { number: "50K+", label: "Debug Sessions" },
    { number: "98%", label: "Issues Resolved" },
  ]

  const techStack = [
    "React", "Next.js", "TypeScript", "Python", "Node.js", "Docker", "AWS", "MongoDB"
  ]

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      {/* Animated Background */}


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
        {/* Beta Badge */}
        <div className="flex justify-center mb-8">
          <Badge variant="secondary" className="px-4 py-2 text-sm bg-blue-100 text-blue-800 border-blue-200">
            <Zap className="w-4 h-4 mr-2" />
            Now in Beta - Join Early Access
          </Badge>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Where Developers{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Connect
          </span>
          ,{" "}
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Create
          </span>
          {" "}&{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Collaborate
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Join the ultimate developer community where you can showcase projects, get instant debugging help, 
          share your coding journey, and connect with fellow developers worldwide.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white hover:shadow-md transition-all duration-200"
            >
              {feature.icon}
              <span>{feature.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:bg-blue-50"
          >
            Explore Projects
            <Code2 className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 mb-6 font-medium">Popular Technologies in Our Community</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white hover:shadow-md transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-12 text-gray-500">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5" />
            <span className="text-sm">Secure Platform</span>
          </div>
          <div className="flex items-center space-x-2">
            <Globe className="w-5 h-5" />
            <span className="text-sm">Global Community</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="text-sm">4.9/5 Developer Rating</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection