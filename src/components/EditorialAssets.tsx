import React from 'react';

export const LessonPlanAsset = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="400" height="300" fill="#FDFBF7" />
    
    {/* Abstract Planner Grid */}
    <rect x="80" y="60" width="240" height="180" rx="2" stroke="#0F172A" strokeWidth="2" />
    <line x1="80" y1="100" x2="320" y2="100" stroke="#0F172A" strokeWidth="1" strokeOpacity="0.5" />
    <line x1="80" y1="140" x2="320" y2="140" stroke="#0F172A" strokeWidth="1" strokeOpacity="0.5" />
    <line x1="80" y1="180" x2="320" y2="180" stroke="#0F172A" strokeWidth="1" strokeOpacity="0.5" />
    
    {/* Column lines */}
    <line x1="140" y1="60" x2="140" y2="240" stroke="#0F172A" strokeWidth="1" strokeOpacity="0.5" />
    
    {/* Gold Accents - Highlights */}
    <rect x="150" y="70" width="160" height="20" fill="#D4AF37" fillOpacity="0.1" />
    <rect x="90" y="150" width="40" height="20" fill="#D4AF37" fillOpacity="0.2" />
    
    {/* "Text" blocks */}
    <rect x="155" y="110" width="80" height="4" rx="2" fill="#0F172A" />
    <rect x="155" y="155" width="120" height="4" rx="2" fill="#0F172A" />
    <rect x="155" y="195" width="100" height="4" rx="2" fill="#0F172A" />
  </svg>
);

export const ResearchAsset = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="400" height="300" fill="#FDFBF7" />
    
    {/* Paper Stack Effect */}
    <rect x="90" y="50" width="220" height="200" fill="#E5E0D8" />
    <rect x="80" y="60" width="220" height="200" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
    
    {/* Abstract Text Lines */}
    <rect x="110" y="90" width="100" height="8" rx="2" fill="#0F172A" /> {/* Title */}
    
    <rect x="110" y="120" width="160" height="4" rx="2" fill="#4A4A4A" />
    <rect x="110" y="135" width="160" height="4" rx="2" fill="#4A4A4A" />
    <rect x="110" y="150" width="140" height="4" rx="2" fill="#4A4A4A" />
    
    <rect x="110" y="180" width="160" height="4" rx="2" fill="#4A4A4A" />
    <rect x="110" y="195" width="160" height="4" rx="2" fill="#4A4A4A" />
    <rect x="110" y="210" width="120" height="4" rx="2" fill="#4A4A4A" />
    
    {/* Gold Seal/Stamp */}
    <circle cx="250" cy="210" r="25" fill="#D4AF37" fillOpacity="0.2" stroke="#D4AF37" strokeWidth="2" />
    <path d="M240 215L248 222L265 200" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const MaterialsAsset = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="400" height="300" fill="#FDFBF7" />
    
    {/* Abstract Shapes - Building Blocks */}
    
    {/* Triangle */}
    <path d="M200 60L260 160H140L200 60Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
    
    {/* Circle */}
    <circle cx="150" cy="180" r="50" fill="#D4AF37" fillOpacity="0.15" stroke="#D4AF37" strokeWidth="2" />
    
    {/* Square */}
    <rect x="210" y="140" width="90" height="90" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
    <rect x="220" y="150" width="70" height="70" fill="#0F172A" fillOpacity="0.05" />
    
    {/* Connecting Line */}
    <path d="M150 180C150 180 180 180 200 110" stroke="#0F172A" strokeWidth="1" strokeDasharray="4 4" />
  </svg>
);
