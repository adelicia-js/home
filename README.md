# Adelicia's Portfolio 🧜🏽‍♀️

A modern, responsive portfolio website showcasing my journey as a full-stack developer. Built with React, Vite, TypeScript, and styled-components, featuring smooth animations and an elegant gradient design.

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices with mobile-first approach
- **Modern Tech Stack**: React 18, TypeScript, Vite, styled-components
- **Smooth Animations**: Interactive hover effects and smooth scrolling
- **Professional Layout**: Clean, modern design with gradient backgrounds
- **Social Integration**: Direct links to GitHub, LinkedIn, and email
- **Resume Access**: Built-in PDF resume viewer
- **Performance Optimized**: Fast loading with Vite's HMR and build optimization

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1, TypeScript 5.8.3
- **Styling**: styled-components 6.1.18, Material UI Icons
- **Build Tool**: Vite 6.3.5
- **Routing**: React Router DOM 6.30.1  
- **Development**: ESLint, TypeScript compiler
- **Icons**: Material UI Icons, Lucide React

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/adelicia-js/home.git

# Navigate to project directory  
cd home

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload

# Production  
npm run build        # Build for production (includes TypeScript compilation)
npm run preview      # Preview production build locally
npm run prod         # Build and preview production build

# Code Quality
npm run lint         # Run ESLint for code quality checks
npm run type-check   # Run TypeScript compiler without emitting files
```

## 📁 Project Structure

```
home/
├── src/
│   ├── pages/           # Page components
│   │   ├── root.tsx     # Homepage with navigation
│   │   ├── about.tsx    # About me page
│   │   ├── projects.tsx # Projects showcase
│   │   └── roadmap.tsx  # Development roadmap
│   ├── styles/          # Styling system
│   │   ├── globalStyles.ts  # Global styles and gradient container
│   │   ├── theme.ts         # Design tokens and theme
│   │   └── styled.d.ts      # TypeScript declarations
│   ├── error-page.tsx   # Error boundary component
│   ├── main.tsx         # Application entry point
│   └── utils.ts         # Utility functions
├── public/
│   ├── screenshots/     # Project screenshots
│   ├── ady-resume.pdf   # Resume document
│   ├── me.jpg          # Profile photo
│   └── triquetra.ico   # Favicon
└── dist/               # Production build output
```

## 🎨 Design System

The portfolio uses a carefully crafted design system with:

- **Color Palette**: Emerald green gradients with sea-inspired shadows
- **Typography**: Mix of default fonts and Space Mono for tech elements
- **Responsive Breakpoints**: Mobile-first with sm (640px), md (768px), lg (1024px)
- **Animation**: Smooth transitions and hover effects throughout
- **Accessibility**: Semantic HTML and proper contrast ratios

## 📱 Pages Overview

### Homepage (`/`)
- Hero section with animated introduction
- Tech stack showcase: React | Next.js | Vite | Node.js | Figma | Vercel
- Social media links with hover animations
- Navigation menu with scroll animations

### About Me (`/me`)
- Personal background and journey
- Skills and experience highlights
- Professional interests and goals

### Projects (`/projects`) 
- Curated portfolio of development projects
- Project screenshots and descriptions
- Links to live demos and source code

### Resume (`/ady-resume.pdf`)
- Direct access to downloadable PDF resume
- Professional experience and education
- Skills and certifications

## 🌐 Deployment

The site is optimized for deployment on modern platforms:

- **Recommended**: Vercel, Netlify, or Cloudflare Pages
- **Build Command**: `npm run build`
- **Output Directory**: `dist/`
- **Node Version**: 18+

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 🛡️ Code Quality

The project maintains high code quality standards:

- **TypeScript**: Strict mode enabled with comprehensive type checking
- **ESLint**: Configured with React and TypeScript rules
- **Prettier**: Code formatting (if configured)
- **Component Architecture**: Modular, reusable styled-components
- **Performance**: Optimized bundle size and loading times

## 🤝 Contributing

While this is a personal portfolio, feedback and suggestions are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📞 Contact

- **Portfolio**: [adelicia-js.com](https://adelicia-js.com)
- **Email**: [a.seq2804@gmail.com](mailto:a.seq2804@gmail.com)
- **LinkedIn**: [linkedin.com/in/adelicia](https://linkedin.com/in/adelicia)
- **GitHub**: [github.com/adelicia-js](https://github.com/adelicia-js)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with 💙 by Adelicia**

*Thank you for visiting* 🧜🏽‍♀️🌴

</div>