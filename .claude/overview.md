# Karsilo - Educational Platform

## Project Overview
Karsilo is a free educational platform providing university-level courses, practice questions, and student tools for STEM subjects.

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- shadcn/ui components
- Tailwind CSS
- Hosted on Netlify with Cloudflare CDN

## Architecture

### Domain Structure
- **Main site:** karsilo.com (marketing, tools, question bank)
- **Auth/App:** app.karsilo.com (login, signup, user dashboard)
- **Course subdomains:** mathematics.karsilo.com, physics.karsilo.com, astronomy.karsilo.com

### Current Courses
1. **Mathematics** - Calculus, Linear Algebra, Differential Equations
2. **Physics** - Mechanics, Electromagnetism, Thermodynamics, Quantum
3. **Astronomy** - Solar System, Stellar Astrophysics, Cosmology

### Available Tools
1. **Bibliography Creator** (`/tools/bibliography`) - Citation generator for academic papers
2. **File Compressor** (`/tools/compressor`) - Image and PDF compression

## Key Features

### Navigation
- Sticky navbar with shadcn NavigationMenu
- External auth links to app.karsilo.com
- Responsive mobile menu
- Dropdown menus for Courses, Questions, Tools

### Questions System
- PDFs stored in `/public/pdfs/{course}/{module}-questions.pdf` and `-answers.pdf`
- Organized by course and module
- Downloadable question sets and answer keys
- Filter by course (Mathematics, Physics, Astronomy)

### Course Preview
- Main site shows course overviews and sample content
- Full courses hosted on subdomains
- Links to external subdomain for complete course

## Design Principles
- Clean, academic aesthetic
- Professional but approachable
- Mobile-first responsive design
- Fast loading with optimized assets
- Accessible (WCAG AA compliant)

## Content Guidelines
- All content should be university-level
- Accurate, well-researched information
- Clear explanations with examples
- Properly cited sources

## Future Roadmap
- Chemistry course
- Biology course
- Computer Science course
- Additional tools (equation solver, graph plotter, unit converter)
- User accounts with progress tracking
- Interactive problem solving
- Video lessons
- Community forums

## Development Notes
- Use TypeScript strictly
- All components should be typed
- Implement proper error boundaries
- Add loading states for async operations
- SEO optimization with proper meta tags
- Implement analytics (placeholder for now)

## Environment Variables
```bash