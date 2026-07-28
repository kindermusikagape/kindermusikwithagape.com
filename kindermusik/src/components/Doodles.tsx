import React from 'react';

export const HeartDoodle: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 100" 
    className={`fill-none stroke-brand-pink stroke-[4] stroke-linecap-round stroke-linejoin-round ${className}`}
  >
    <path d="M50 35 C35 10, 10 30, 50 85 C90 30, 65 10, 50 35 Z" />
  </svg>
);

export const StarDoodle: React.FC<{ className?: string; color?: string }> = ({ className = "", color = "stroke-yellow-400 fill-yellow-100" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 100" 
    className={`stroke-[4] stroke-linecap-round stroke-linejoin-round ${color} ${className}`}
  >
    <path d="M50 10 L62 38 L92 38 L68 56 L77 86 L50 68 L23 86 L32 56 L8 38 L38 38 Z" />
  </svg>
);

export const MusicNoteDoodle: React.FC<{ className?: string; color?: string }> = ({ className = "", color = "stroke-brand-purple fill-brand-purple/20" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 100" 
    className={`stroke-[4] stroke-linecap-round stroke-linejoin-round ${color} ${className}`}
  >
    <path d="M35 75 A12 12 0 1 1 23 63 A12 12 0 0 1 35 75 Z" />
    <path d="M75 65 A12 12 0 1 1 63 53 A12 12 0 0 1 75 65 Z" />
    <path d="M35 75 V25 L75 15 V65" />
    <path d="M35 35 L75 25" />
  </svg>
);

export const SpiralDoodle: React.FC<{ className?: string; color?: string }> = ({ className = "", color = "stroke-amber-400" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 100" 
    className={`fill-none stroke-[4] stroke-linecap-round ${color} ${className}`}
  >
    <path d="M20 50 Q35 20, 50 50 T80 50" />
  </svg>
);

export const WaveDoodle: React.FC<{ className?: string; color?: string }> = ({ className = "", color = "stroke-brand-teal" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 120 40" 
    className={`fill-none stroke-[4] stroke-linecap-round ${color} ${className}`}
  >
    <path d="M10 20 Q25 10, 40 20 T70 20 T100 20" />
  </svg>
);

export const FlowerDoodle: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 100" 
    className={`fill-none stroke-brand-pink stroke-[4] stroke-linecap-round stroke-linejoin-round ${className}`}
  >
    {/* Five petals */}
    <path d="M50 50 C40 30, 25 35, 35 50 C20 45, 15 60, 35 60 C30 75, 45 80, 50 65 C55 80, 70 75, 65 60 C85 60, 80 45, 65 50 C75 35, 60 30, 50 50 Z" className="fill-pink-100" />
    {/* Center */}
    <circle cx="50" cy="55" r="10" className="fill-amber-300 stroke-amber-500 stroke-[3]" />
  </svg>
);

export const SunDoodle: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 100" 
    className={`fill-none stroke-orange-400 stroke-[4] stroke-linecap-round ${className}`}
  >
    <circle cx="50" cy="50" r="20" className="fill-orange-100" />
    <path d="M50 15 V25 M50 75 V85 M15 50 H25 M75 50 H85 M25 25 L32 32 M68 68 L75 75 M75 25 L68 32 M32 68 L25 75" />
  </svg>
);

export const CuteRainbowDoodle: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 150 120" 
    className={className}
  >
    {/* Arch 1 (Pink) */}
    <path 
      d="M 25 100 C 25 50, 125 50, 125 100" 
      fill="none" 
      stroke="#FF8EA8" 
      strokeWidth="16" 
      strokeLinecap="round" 
    />
    {/* Arch 2 (Yellow) */}
    <path 
      d="M 41 100 C 41 62, 109 62, 109 100" 
      fill="none" 
      stroke="#FFD56B" 
      strokeWidth="14" 
      strokeLinecap="round" 
    />
    {/* Arch 3 (Teal) */}
    <path 
      d="M 57 100 C 57 74, 93 74, 93 100" 
      fill="none" 
      stroke="#6FE1D2" 
      strokeWidth="14" 
      strokeLinecap="round" 
    />
    {/* White accent line inside pink */}
    <path 
      d="M 33 100 C 33 58, 117 58, 117 100" 
      fill="none" 
      stroke="#FFFFFF" 
      strokeWidth="2" 
      strokeLinecap="round" 
      opacity="0.5" 
    />
    {/* Decorative dots / accents */}
    <circle cx="75" cy="112" r="5" fill="#FF8EA8" />
    <circle cx="50" cy="112" r="3" fill="#6FE1D2" />
    <circle cx="100" cy="112" r="3" fill="#FFD56B" />
  </svg>
);

export const StemFlowerDoodle: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 120 150" 
    className={className}
  >
    {/* Green stem */}
    <path 
      d="M 60 90 Q 55 120, 65 140" 
      fill="none" 
      stroke="#4ADE80" 
      strokeWidth="6" 
      strokeLinecap="round" 
    />
    {/* Left leaf */}
    <path 
      d="M 58 115 Q 40 110, 48 100 Q 55 105, 58 115" 
      fill="#4ADE80" 
      stroke="#22C55E" 
      strokeWidth="2" 
    />
    {/* Right leaf */}
    <path 
      d="M 61 125 Q 80 120, 72 110 Q 64 115, 61 125" 
      fill="#4ADE80" 
      stroke="#22C55E" 
      strokeWidth="2" 
    />
    {/* Flower Head */}
    <g transform="translate(60, 60)">
      {/* Petals */}
      <circle cx="0" cy="-22" r="18" fill="#FFB7D5" stroke="#FF65A3" strokeWidth="4" />
      <circle cx="20" cy="-10" r="18" fill="#FFB7D5" stroke="#FF65A3" strokeWidth="4" />
      <circle cx="20" cy="10" r="18" fill="#FFB7D5" stroke="#FF65A3" strokeWidth="4" />
      <circle cx="0" cy="22" r="18" fill="#FFB7D5" stroke="#FF65A3" strokeWidth="4" />
      <circle cx="-20" cy="10" r="18" fill="#FFB7D5" stroke="#FF65A3" strokeWidth="4" />
      <circle cx="-20" cy="-10" r="18" fill="#FFB7D5" stroke="#FF65A3" strokeWidth="4" />
      
      {/* Yellow Center */}
      <circle cx="0" cy="0" r="14" fill="#FDE047" stroke="#EAB308" strokeWidth="4" />
      {/* White inner dot */}
      <circle cx="0" cy="0" r="7" fill="#FFFFFF" opacity="0.6" />
    </g>
  </svg>
);

