'use client';

import { motion } from 'framer-motion';
import { Code2, Users, GitBranch, MessageSquare, Zap, Heart } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-600" />,
      title: "Project Collaboration",
      description: "Share your projects, get feedback, and collaborate with developers worldwide"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Developer Community",
      description: "Connect with like-minded developers and build lasting professional relationships"
    },
    {
      icon: <GitBranch className="w-8 h-8 text-blue-600" />,
      title: "GitHub Integration",
      description: "Seamlessly integrate with GitHub to showcase your repositories and contributions"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-600" />,
      title: "Real-time Support",
      description: "Get instant help with debugging and technical queries from the community"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Process Updates",
      description: "Keep track of your development process and share progress with others"
    },
    {
      icon: <Heart className="w-8 h-8 text-purple-600" />,
      title: "Knowledge Sharing",
      description: "Learn from others' experiences and share your expertise with the community"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Developers" },
    { number: "100K+", label: "Projects Shared" },
    { number: "500K+", label: "Code Reviews" },
    { number: "24/7", label: "Community Support" }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">DevConnect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're building the world's most supportive developer community where collaboration meets innovation. 
            Connect, learn, and grow with thousands of passionate developers from around the globe.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20 mb-16"
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              To create a vibrant ecosystem where developers can seamlessly collaborate on projects, 
              share knowledge, debug code together, and accelerate their professional growth. We believe 
              that the best solutions emerge when brilliant minds work together.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
            What Drives Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h4>
              <p className="text-gray-600">
                We believe that the best code is written together, not in isolation.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h4>
              <p className="text-gray-600">
                Pushing boundaries and exploring new technologies to solve real problems.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Growth</h4>
              <p className="text-gray-600">
                Supporting every developer's journey from beginner to expert.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;