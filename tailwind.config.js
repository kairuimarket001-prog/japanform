/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Financial Tech Primary Colors
        'fintech-blue': '#1E3A8A',
        'fintech-blue-light': '#3B82F6',
        'fintech-blue-dark': '#1E40AF',

        // Background Colors
        'fintech-bg': '#F5F7FA',
        'fintech-bg-secondary': '#E5E7EB',
        'fintech-card': '#FFFFFF',

        // Text Colors
        'fintech-text-primary': '#111827',
        'fintech-text-secondary': '#6B7280',
        'fintech-text-tertiary': '#9CA3AF',

        // Border Colors
        'fintech-border': '#E5E7EB',
        'fintech-border-dark': '#D1D5DB',
        'fintech-border-focus': '#1E3A8A',

        // Action Colors
        'fintech-link': '#2563EB',
        'fintech-link-hover': '#1D4ED8',
        'fintech-success': '#10B981',
        'fintech-success-hover': '#059669',

        // Legacy Ocean Blue Theme (kept for compatibility)
        'ocean-50': '#f0f9ff',
        'ocean-100': '#e0f2fe',
        'ocean-200': '#bae6fd',
        'ocean-300': '#7dd3fc',
        'ocean-400': '#38bdf8',
        'ocean-500': '#0ea5e9',
        'ocean-600': '#0284c7',
        'ocean-700': '#0369a1',
        'ocean-800': '#075985',
        'ocean-900': '#0c4a6e',

        // Teal Supporting Color
        'teal-50': '#f0fdfa',
        'teal-100': '#ccfbf1',
        'teal-200': '#99f6e4',
        'teal-300': '#5eead4',
        'teal-400': '#2dd4bf',
        'teal-500': '#14b8a6',
        'teal-600': '#0d9488',
        'teal-700': '#0f766e',
        'teal-800': '#115e59',
        'teal-900': '#134e4a',
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(to bottom, #f0f9ff, #e0f2fe, #bae6fd)',
        'ocean-radial': 'radial-gradient(circle at top, #0ea5e9, transparent)',
        'teal-gradient': 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
        'teal-soft': 'linear-gradient(to bottom, #f0fdfa, #ccfbf1)',
        'coral-gradient': 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)',
        'amber-gradient': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
        'ocean-coral': 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 50%, #fb923c 100%)',
        'peaceful-sky': 'linear-gradient(to bottom, #ffffff, #f0f9ff, #e0f2fe)',
      },
      boxShadow: {
        'fintech-card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'fintech-card-hover': '0 6px 24px rgba(0, 0, 0, 0.12)',
        'ocean-glow': '0 0 20px rgba(14, 165, 233, 0.4)',
        'ocean-glow-lg': '0 0 40px rgba(14, 165, 233, 0.5)',
        'teal-glow': '0 0 20px rgba(20, 184, 166, 0.4)',
        'teal-glow-lg': '0 0 40px rgba(20, 184, 166, 0.5)',
      },
      animation: {
        'pulse-ocean': 'pulse-ocean 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-rotate': 'float-rotate 4s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.3s ease-in',
        'radar-scan': 'radar-scan 4s linear infinite',
        'radar-pulse': 'radar-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-ocean': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(14, 165, 233, 0.4)' },
          '50%': { opacity: 0.9, boxShadow: '0 0 40px rgba(14, 165, 233, 0.6)' },
        },
        'float-rotate': {
          '0%, 100%': { transform: 'rotate(0deg) translateY(0)' },
          '50%': { transform: 'rotate(5deg) translateY(-10px)' },
        },
        'fadeIn': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'radar-scan': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'radar-pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
      },
      fontFamily: {
        'sans': ['Noto Sans JP', 'Yu Gothic', 'Hiragino Sans', 'sans-serif'],
        'title': ['Noto Sans JP', 'Yu Gothic', 'Hiragino Sans', 'sans-serif'],
        'subtitle': ['Noto Sans JP', 'Yu Gothic', 'Hiragino Sans', 'sans-serif'],
      },
      spacing: {
        '7.5': '30px',
      },
      borderRadius: {
        'modern-xl': '20px',
        'modern-lg': '16px',
        'modern-md': '12px',
      },
    },
  },
  plugins: [],
};
