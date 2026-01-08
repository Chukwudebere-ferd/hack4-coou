# Hack4COOU - Hackathon Website

Welcome to the Hack4COOU hackathon website! This is a modern, responsive web application built with Next.js, React, and Tailwind CSS.

## Project Overview

Hack4COOU is a comprehensive hackathon landing page featuring:
- Event information and registration
- Pre-hackathon training courses
- Schedule and timeline tracking
- Mentors and team showcase
- Sponsor highlights
- Prize information
- FAQ section

##  Project Structure

```
hack4coou/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main landing page
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                  # Reusable shadcn/ui components
│   ├── navbar.tsx           # Navigation bar
│   ├── hero-section.tsx     # Hero banner
│   ├── about-section.tsx    # About section
│   ├── why-participate-section.tsx   # Why participate section
│   ├── who-can-participate-section.tsx  # Eligibility section
│   ├── training-section.tsx # Pre-hackathon training
│   ├── prizes-section.tsx   # Prize information
│   ├── sponsors-section.tsx # Sponsors grid
│   ├── timeline-section.tsx # Event schedule
│   ├── faq-section.tsx      # FAQ accordion
│   └── footer-section.tsx   # Footer
├── data/
│   ├── hero-data.ts         # Hero section content
│   ├── training-data.ts     # Training courses
│   ├── prizes-data.ts       # Prize tiers
│   ├── sponsors-data.ts     # Sponsor information
│   ├── timeline-data.ts     # Event timeline
│   ├── faq-data.ts          # FAQ items
│   ├── footer-data.ts       # Footer links
│   ├── mentors-data.ts      # Mentor profiles
│   └── team-data.ts         # Team members
├── hooks/
│   └── use-mobile.tsx       # Mobile detection hook
├── lib/
│   └── utils.ts             # Utility functions
└── public/
    └── assets/              # Images and media
```

## Design System

The project uses:
- **Tailwind CSS v4** for styling
- **shadcn/ui** components for UI elements
- **Next.js 16** with App Router
- **React 19.2** with modern hooks

### Color Palette
- Primary: `#13ec80` (Green)
- Secondary: `#0B0C10` (Dark)
- Accent: `#15181E` (Lighter Dark)
- Gray: Various gray shades for text

## 📦 Key Dependencies

- `next` - React framework
- `react` & `react-dom` - UI library
- `tailwindcss` - Utility-first CSS
- `recharts` - Charting library
- `radix-ui` - Accessible component primitives
- `lucide-react` - Icon library

## 🚀 Getting Started

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Data Management

All content is centralized in the `/data` folder. To update any section:

1. **Training Courses**: Edit `data/training-data.ts`
2. **Prizes**: Edit `data/prizes-data.ts`
3. **Sponsors**: Edit `data/sponsors-data.ts`
4. **Timeline**: Edit `data/timeline-data.ts`
5. **FAQs**: Edit `data/faq-data.ts`
6. **Mentors**: Edit `data/mentors-data.ts`

Each data file exports typed interfaces and arrays that are imported by their respective components.

## Key Features

### Modular Architecture
- Each section is a standalone component
- All content is centralized in data files
- Easy to maintain and update

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Smooth animations and transitions

### Scroll Animations
- Timeline items highlight on scroll
- Smooth intersection observer effects

### Interactive Elements
- Hover effects on cards
- Smooth transitions
- Accessible buttons and links

## 🔧 Development Guidelines

### Adding a New Training Course

1. Update `data/training-data.ts`:
   ```typescript
   {
     id: "4",
     title: "New Course",
     description: "Course description",
     icon: "icon-name",
     color: "text-color-code",
     hoverColor: "group-hover:text-color-code",
     accentColor: "color-hex",
     link: "https://link-to-course.com"
   }
   ```

2. The component will automatically render the new course

### Styling Convention

- Use Tailwind classes for styling
- Prefer semantic classes over arbitrary values
- Maintain consistent spacing using the Tailwind scale
- Use CSS variables for theme colors

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Ensure all components are properly modularized
4. Test on multiple screen sizes
5. Submit a pull request

##  Contact & Support

For questions or support, please reach out to the hackathon team.


**Happy Hacking! 🚀**
