# Adelicia's Portfolio 🧜🏽‍♀️

An interactive portfolio reimagined as a little space adventure: a wormhole landing with a stranded-astronaut NPC, a galaxy hub of object-portals, and navigable environments. Built with React, Vite, TypeScript, and styled-components.

## 🌟 Features

- **Interactive experience**: Wormhole landing → galaxy hub → environments, driven by client-side scene state (no page reloads)
- **Modern Tech Stack**: React 18, TypeScript, Vite, styled-components, framer-motion
- **Game-style dialogue**: Typewriter text in a pixel font (Silkscreen) with Yes/No choices
- **Living backdrops**: Drifting gradients, a parallax starfield, and gently floating characters
- **Responsive Design**: Mobile-first, full-viewport scenes
- **Performance Optimized**: Lazy-loaded galaxy chunk, Vite HMR and build optimization

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
│   ├── main.tsx           # Entry: single "/" route (App) + ErrorPage
│   ├── App.tsx            # App shell: ThemeProvider + GlobalStyle + SceneMachine
│   ├── components/        # UI grouped by scene area
│   │   ├── SceneMachine.tsx    # Renders the current scene
│   │   ├── ErrorPage.tsx       # Route error element
│   │   ├── landing/            # WormholeScene (the landing)
│   │   ├── galaxy/             # GalaxyScene + PlanetButton + background layers
│   │   └── environments/       # PlaceholderEnv (the five sections)
│   ├── hooks/             # useSceneMachine (scene state + transitions)
│   ├── data/              # galaxyLayout.ts (planet placements)
│   ├── types/             # scene.ts (scene ids + guards + PlanetPlacement)
│   └── styles/            # theme.ts, styled.d.ts, globalStyles.ts, animations.ts
├── public/
│   ├── objects/          # astronaut.png, rocket.png
│   ├── planets/          # planet-1..3.png
│   ├── screenshots/      # Project screenshots (for the future Projects env)
│   ├── ady-resume.pdf    # Resume document
│   ├── me.jpg            # Profile photo
│   └── *.svg             # landing-wormhole, landing-clutter, space-clutter, spiral-galaxy
└── dist/                 # Production build output
```

## 🎨 Design System

The experience uses a space-themed design system:

- **Color Palette**: Deep-space indigos and purples with teal and warm gold accents (`theme.play`)
- **Typography**: Inter for base/UI text, Silkscreen (pixel) for the game dialogue
- **Responsive**: Mobile-first, full-viewport scenes; media queries written inline
- **Animation**: Drifting gradients and starfields, floating characters, typewriter dialogue
- **Accessibility**: Semantic buttons with `aria-label`s, reduced-motion-friendly transitions

## 📱 Experience Overview

### Landing
- A spinning wormhole portal on a drifting starfield
- Adelicia the astronaut as an NPC — click her for a typewriter dialogue (Yes/No)
- Enter the wormhole to fly through to the galaxy

### Galaxy hub
- A vibrant drifting gradient + parallax starfield
- Five object-portals — About, Projects, Resume, Contact, Hobbies — that float and label on hover

### Environments
- One per portal; currently placeholders ("environment coming soon")
- Real content will be ported in from the pre-play pages (kept locally in `scribble/_legacy/`, gitignored) + `public/` assets

### Resume
- Served as a static asset at `/ady-resume.pdf`

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