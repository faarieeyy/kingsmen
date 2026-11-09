"use client";
import TrainingScroll from "@/components/home/TrainingScroll";
import ServicesHorizontalScroll from "@/components/home/ServicesHorizontalScroll";
import HeroVideoScroll from "@/components/home/HeroVideoScroll";
import ComprehensiveBanner from "@/components/home/ComprehensiveBanner";
import TrustFeaturesBar from "@/components/home/TrustFeaturesBar";

export default function Home() {
  return (
    <>
      {/* 01 - HERO WITH SILKY SMOOTH VIDEO SCROLL ANIMATION */}
      <HeroVideoScroll />

      {/* 02 - COMPREHENSIVE SECURITY SOLUTIONS PANORAMIC BANNER */}
      <ComprehensiveBanner />

      {/* 03 - TRUST & ESSENTIALS PILLARS BAR */}
      <TrustFeaturesBar />

      {/* 04 - SERVICES HORIZONTAL SCROLL HUB */}
      <ServicesHorizontalScroll />

      {/* SELECTION / TRAINING / SUPERVISION SCROLL ANIMATION */}
      <TrainingScroll />

    </>
  );
}

