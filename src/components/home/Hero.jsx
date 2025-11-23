import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const videoRef = useRef(null);
  // Background video in /assets (uploaded as background_hero_video.mp4)
  const videoSrc = '/assets/background_hero_video.mp4';

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-white">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {videoSrc && (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 pt-20">
        <div className="max-w-4xl">
          {/* Top Badge */}
          <div className="mb-8 inline-block">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full text-sm font-medium text-gray-900 shadow-sm transition-shadow hover:shadow-md cursor-default">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span style={{ fontFamily: '"Product Sans", "Google Sans", sans-serif' }}>Visionary for Education</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1
            className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] leading-tight text-[#202124] mb-6 -ml-1 tracking-tight whitespace-nowrap"
            style={{ 
              fontFamily: '"Product Sans", "Google Sans", sans-serif',
              fontWeight: 450, 
              letterSpacing: '-0.03em' 
            }}
          >
            Learn with{" "}
            <span className="relative inline-block perspective-1000">
              <motion.span
                className="inline-block text-blue-600 font-medium origin-center"
                initial={{ rotateX: 90, opacity: 0, y: 50 }}
                animate={{ rotateX: 0, opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.2
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateX: 10,
                  transition: { duration: 0.2 }
                }}
              >
                3D visuals
              </motion.span>
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-[#5f6368] mb-10 max-w-2xl leading-relaxed"
            style={{ 
              fontFamily: '"Product Sans", "Google Sans", sans-serif',
              fontWeight: 400 
            }}
          >
            Master any subject or skill with 3D visuals and 24/7 AI support, designed for every student, teacher, and family.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button 
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-[#202124] text-white text-[17px] font-medium hover:bg-[#3c4043] transition-colors"
              style={{ fontFamily: '"Product Sans", "Google Sans", sans-serif' }}
            >
              Start free now
            </button>

            <button 
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-[#f1f3f4] text-[#202124] text-[17px] font-medium hover:bg-[#e8eaed] transition-colors"
              style={{ fontFamily: '"Google Sans", sans-serif' }}
            >
              Explore more
            </button>
          </div>

         
        </div>
      </div>
    </section>
  );
  }