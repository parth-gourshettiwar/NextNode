import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Eye, Code2, Zap, Target, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
        ctx.fill();

        particles.forEach((otherParticle, j) => {
          if (i === j) return;
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Theory',
      description: 'Learn the fundamentals of linked lists with detailed explanations',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Eye,
      title: 'Interactive Visualizer',
      description: 'See linked list operations come to life with real-time animations',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Code2,
      title: 'Code Examples',
      description: 'Practice with ready-to-use code snippets in C++ and Java',
      color: 'from-green-500 to-green-600',
    },
  ];

  const stats = [
    { icon: Zap, label: 'Interactive', value: 'Visualizations' },
    { icon: Target, label: 'Practical', value: 'Examples' },
    { icon: Users, label: 'Beginner', value: 'Friendly' },
  ];

  return (
    <div className="relative min-h-screen pt-16">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10 opacity-30"
      />

      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
              <span className="text-blue-600 dark:text-blue-400">
                🚀 Welcome to NextNode
              </span>
            </div>
            <h1 className="text-slate-900 dark:text-white mb-6 max-w-4xl mx-auto">
              Master Linked Lists Visually!
            </h1>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 text-lg sm:text-xl">
              Dive into the world of data structures with our interactive learning platform. 
              Understand linked lists through comprehensive theory, dynamic visualizations, 
              and practical code examples. Perfect for students, developers, and anyone 
              looking to strengthen their programming fundamentals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/theory">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg">
                  Start Learning
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/visualizer">
                <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                  Try Visualizer
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg"
                >
                  <Icon className="w-8 h-8 text-blue-500 mb-3 mx-auto" />
                  <div className="text-slate-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 bg-white/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-slate-900 dark:text-white mb-4">
              Everything You Need to Learn
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg">
              A complete learning experience designed for your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-full">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-slate-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12 text-center text-white shadow-2xl"
        >
          <h2 className="text-white mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join thousands of learners mastering data structures with NextNode
          </p>
          <Link to="/theory">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
