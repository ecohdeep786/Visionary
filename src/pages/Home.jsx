import React, { Suspense, lazy } from "react";
import Hero from "../components/home/Hero";

// Lazy load below-the-fold sections
const PersonaGrid = lazy(() => import("../components/home/PersonaGrid"));
const LearningJourney = lazy(() => import("../components/home/LearningJourney"));
const AutoRotatingCarousel = lazy(() => import("../components/home/AutoRotatingCarousel"));
const ConnectedApps = lazy(() => import("../components/home/ConnectedApps"));
const AIMentorSection = lazy(() => import("../components/home/AIMentorSection"));
const CTASection = lazy(() => import("../components/home/CTASection"));

export default function Home() {
  return (
    <div>
      <Hero />
      <Suspense fallback={<div className="h-64" />}>
        <PersonaGrid />
      </Suspense>
      <Suspense fallback={<div className="h-64" />}>
        <LearningJourney />
      </Suspense>
      <Suspense fallback={<div className="h-64" />}>
        <AutoRotatingCarousel />
      </Suspense>
      <Suspense fallback={<div className="h-64" />}>
        <ConnectedApps />
      </Suspense>
      <Suspense fallback={<div className="h-64" />}>
        <AIMentorSection />
      </Suspense>
      <Suspense fallback={<div className="h-64" />}>
        <CTASection />
      </Suspense>
    </div>
  );
}