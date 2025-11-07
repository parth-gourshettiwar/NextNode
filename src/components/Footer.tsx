import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white/50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white">NN</span>
              </div>
              <span className="text-slate-900 dark:text-white">NextNode</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              An interactive platform for learning data structures through visualization and practice.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-slate-600 dark:text-slate-400 hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/theory" className="text-slate-600 dark:text-slate-400 hover:text-blue-500">
                  Theory
                </a>
              </li>
              <li>
                <a href="/visualizer" className="text-slate-600 dark:text-slate-400 hover:text-blue-500">
                  Visualizer
                </a>
              </li>
              <li>
                <a href="/code" className="text-slate-600 dark:text-slate-400 hover:text-blue-500">
                  Code
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-slate-900 dark:text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/parth-gourshettiwar/NextNode.git"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-500 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/parth-gourshettiwar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-500 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@nextnode.com"
                className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-500 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by NextNode Team
            <span className="mx-2">•</span>
            © 2025 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
