'use client';

import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { useState } from 'react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Community",
      icon: <Star className="w-6 h-6" />,
      price: { monthly: 0, annual: 0 },
      description: "Perfect for getting started and exploring the community",
      features: [
        "Join public discussions",
        "Share up to 3 projects",
        "Basic GitHub integration",
        "Community support",
        "Standard profile",
        "Basic code sharing"
      ],
      buttonText: "Get Started Free",
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Developer",
      icon: <Zap className="w-6 h-6" />,
      price: { monthly: 15, annual: 150 },
      description: "For active developers who want to collaborate and grow",
      features: [
        "Everything in Community",
        "Unlimited project sharing",
        "Advanced GitHub integration",
        "Priority community support",
        "Enhanced profile features",
        "Private project discussions",
        "Code review requests",
        "Progress tracking tools",
        "Direct messaging"
      ],
      buttonText: "Start Free Trial",
      popular: true,
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "Team",
      icon: <Crown className="w-6 h-6" />,
      price: { monthly: 45, annual: 450 },
      description: "For teams and organizations building together",
      features: [
        "Everything in Developer",
        "Team workspaces",
        "Advanced analytics",
        "Team member management",
        "Priority support",
        "Custom integrations",
        "Team collaboration tools",
        "Advanced debugging assistance",
        "Dedicated team channels",
        "Custom deployment workflows"
      ],
      buttonText: "Contact Sales",
      popular: false,
      color: "from-purple-500 to-pink-600"
    }
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
            Choose Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start free and scale as you grow. All plans include access to our vibrant developer community.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                Save 17%
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border-2 p-8 ${
                plan.popular 
                  ? 'border-blue-500 scale-105 lg:scale-110' 
                  : 'border-white/30 hover:border-blue-200'
              } transition-all duration-300 hover:shadow-2xl`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${plan.color} text-white mb-4`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    {plan.price.monthly > 0 && (
                      <span className="text-gray-500 ml-2">
                        /{isAnnual ? 'year' : 'month'}
                      </span>
                    )}
                  </div>
                  {isAnnual && plan.price.monthly > 0 && (
                    <p className="text-sm text-gray-500 mt-1">
                      ${(plan.price.annual / 12).toFixed(0)} per month, billed annually
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  {plan.buttonText}
                </button>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">
                  Features Included
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <h4 className="font-semibold text-gray-900 mb-3">Can I change plans anytime?</h4>
              <p className="text-gray-600 text-sm">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <h4 className="font-semibold text-gray-900 mb-3">Is there a free trial?</h4>
              <p className="text-gray-600 text-sm">
                All paid plans come with a 14-day free trial. No credit card required to start.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <h4 className="font-semibold text-gray-900 mb-3">What about team discounts?</h4>
              <p className="text-gray-600 text-sm">
                We offer custom pricing for teams of 10+ developers. Contact our sales team for details.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <h4 className="font-semibold text-gray-900 mb-3">Do you offer refunds?</h4>
              <p className="text-gray-600 text-sm">
                Yes, we offer a 30-day money-back guarantee for all paid plans, no questions asked.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Join Our Developer Community?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Start collaborating with thousands of developers, share your projects, and accelerate your growth today.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg">
              Get Started Free
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;