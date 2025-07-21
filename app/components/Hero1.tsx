"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Leaf,
  Satellite,
  BarChart3,
  Globe,
  Users,
  Shield,
  Zap,
  Target,
  CheckCircle,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Hero1 = () => {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  // const testimonials = [
  //   {
  //     text: "Carbon Bloom helped us track and reduce our carbon footprint by 40% in just 6 months. Their AI-powered insights are game-changing for sustainable agriculture.",
  //     author: "Dr. Amara Okafor",
  //     role: "Climate Scientist",
  //     avatar:
  //       "https://images.unsplash.com/photo-1494790108755-2616c04c52fc?w=60&h=60&fit=crop&crop=face",
  //   },
  //   {
  //     text: "The satellite monitoring and GIS integration provided by Carbon Bloom has revolutionized how we approach environmental conservation in our region.",
  //     author: "John Mwangi",
  //     role: "Environmental Officer",
  //     avatar:
  //       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
  //   },
  //   {
  //     text: "This platform is the best carbon tracking solution we've used. The real-time data and actionable insights have transformed our sustainability practices.",
  //     author: "Fatima Hassan",
  //     role: "Sustainability Manager",
  //     avatar:
  //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
  //   },
  // ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-emerald-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6 border border-green-200">
                {/* <Leaf className="w-4 h-4 mr-2" /> */}
                {/* AI-Powered Climate Solutions */}
                {/* <ArrowUpRight className="ml-2 w-4 h-4" /> */}
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                We Bring{" "}
                <span className="text-green-600">Carbon Intelligence</span> To
                Your Environment
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                Empowering Africa's Climate Action with AI, GIS &
                Satellite-Powered Carbon Tracking. Monitor, measure, and manage
                your environmental impact with precision.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <Link href="/auth/register" passHref legacyBehavior>
                  <a className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg text-center">
                    Register Now
                  </a>
                </Link>
                <Link href="/auth/login" passHref legacyBehavior>
                  <a className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center text-center">
                    Login
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=300&h=200&fit=crop"
                  alt="Satellite monitoring"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300&h=200&fit=crop"
                  alt="Environmental data"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  {/* <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div> */}
                  <span className="text-sm font-medium text-gray-700">
                    {/* Live Monitoring */}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497436072909-f5e4c0c52c8d?w=500&h=600&fit=crop"
                alt="Carbon tracking specialist"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 bg-green-100 rounded-full p-4">
                <Satellite className="w-12 h-12 text-green-600" />
              </div>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-green-600 font-semibold">
                  About Carbon Bloom
                </span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Let Us Make Your Carbon Footprint Visible & Actionable
              </h2>

              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                If you're looking for a fantastic, reliable carbon tracking
                service, you've come to the right place. We do things
                differently here at Carbon Bloom. We are taking a high-tech
                approach to a traditionally complex sector, and are
                revolutionizing climate action across Africa.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What is Included In Our Carbon Tracking Service?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Satellite-powered monitoring",
                    "AI-driven carbon calculations",
                    "GIS mapping and analysis",
                    "Real-time data visualization",
                    "Custom reporting dashboard",
                    "And More!",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Many Capabilities, One Focus:{" "}
              <span className="text-green-600">Climate Action</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get the ease of a single provider who can help with all your
              carbon tracking and climate action needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12 text-green-600" />,
                title: "Easy One-Time Setup",
                description:
                  "View pricing options, select a service plan, and start tracking your carbon footprint in just 5 minutes or less.",
              },
              {
                icon: <Target className="w-12 h-12 text-green-600" />,
                title: "Instant Analysis",
                description:
                  "We offer instant, personalized carbon footprint analysis based on your location, activities, and environmental data.",
              },
              {
                icon: <BarChart3 className="w-12 h-12 text-green-600" />,
                title: "Full-Service Monitoring",
                description:
                  "Looking for carbon tracking, emissions monitoring, sustainability reporting, environmental impact assessment, and more...",
              },
              {
                icon: <Shield className="w-12 h-12 text-green-600" />,
                title: "Accuracy Guarantee",
                description:
                  "If you're not satisfied with our data accuracy, we'll refine our models. It's as simple as that for carbon tracking.",
              },
              {
                icon: <Users className="w-12 h-12 text-green-600" />,
                title: "Happy Clients",
                description:
                  "Amazingly innovative solutions. What more could you ask for, we're here to handle all your climate action needs.",
              },
              {
                icon: <Globe className="w-12 h-12 text-green-600" />,
                title: "All-in-One Platform",
                description:
                  "Monitoring, reporting, analysis... all done through the Carbon Bloom platform for comprehensive climate management.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section removed as requested */}

      {/* Testimonials Section
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              What our partners say about Carbon Bloom
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 relative">
              <div className="flex justify-center mb-8">
                <Quote className="w-16 h-16 text-green-600 opacity-20" />
              </div>

              <div className="text-center">
                <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-green-600">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? "bg-green-600"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer Section */}
      <footer className="py-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center text-sm">
        &copy; {new Date().getFullYear()} Carbon Bloom. All rights reserved.
      </footer>
    </>
  );
};

export default Hero1;
