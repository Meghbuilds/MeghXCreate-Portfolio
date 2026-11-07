# MEGH — Complete Creative Portfolio

A high-fidelity editorial personal portfolio website engineered for **MEGH** — exploring the intersection of computer science, creative web development, AI workflows, visual design, and video editing.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Three.js**, **GLSL**, **GSAP**, **Lenis**, and **Tailwind CSS**.

---

## ✦ Core Features & Interaction Architecture

1. **Editorial & Dark-Mode Minimalist Aesthetic**
   - Palette: Deep rich black (`#030303`), dark surfaces (`#0b0b0b`), warm ivory text (`#f1eee8`), muted grey (`#aaa9a4`), and restrained burnt orange (`#ff8c59`) & amber (`#e5a43b`) accents.
   - Typography: `Instrument Serif` editorial display headings paired with `DM Sans` interface body and `JetBrains Mono` coordinates and metadata.

2. **Signature Three.js & GLSL Hero Particle Canvas**
   - Cursor-proximity GPU vertex displacement.
   - Concentric orbital rings and geometric letterform point cloud.
   - Automatically pauses on scroll or hidden tab to preserve 0% idle CPU/GPU usage.

3. **Global Motion On / Motion Off Control**
   - Accessible navigation toggle synchronizing state with `localStorage` and `prefers-reduced-motion`.
   - Disables smooth scroll, WebGL animation loops, and CSS transitions seamlessly for users with vestibular sensitivity.

4. **Category-Based Data-Driven Project System**
   - 6 categories: AI Websites, AI Thumbnail Design, Coding Projects, Video Editing, AI Agents & Automation, Creative Experiments.
   - Filter pills with real-time counters.
   - Alternating editorial project cards (`1.25fr 1fr` and `1fr 1.25fr`) with circular floating preview buttons.
   - Interactive Case Study Drawer / Modal with Opportunities, Implementation, Architecture Highlights, and Engineering Notes.

5. **Zero-Layout-Shift Photo Placeholder System**
   - Reserved assets in `public/images/personal/`.
   - Displays intentional architectural placeholders with technical coordinates, crosshairs, and radar rings until real photos are supplied.

6. **Full Technical SEO & AI Discoverability**
   - Dynamic JSON-LD structured data (`Person` and `WebSite` schemas).
   - `sitemap.xml` and `robots.txt`.
   - `public/llms.txt` and synced markdown guides in `public/ai/` for LLM crawler discoverability.

---

## ✦ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## ✦ How-To Guides

### 1. How to Add Your Real Photographs
You do **not** need to touch any CSS, shaders, or GSAP timelines to add your photos:
1. Save your photograph as a WebP image.
2. Place it in `public/images/personal/`:
   - `public/images/personal/megh-hero.webp`
   - `public/images/personal/megh-about.webp`
   - `public/images/personal/megh-profile.webp`
3. Open `src/config/personal.ts` and set:
   ```ts
   images: {
     hero: {
       src: '/images/personal/megh-hero.webp',
       alt: 'Megh Portrait',
       hasRealPhoto: true, // <-- Change to true
     },
     about: {
       src: '/images/personal/megh-about.webp',
       alt: 'Megh in Studio',
       hasRealPhoto: true, // <-- Change to true
     },
     // ...
   }
   ```
4. Save and reload. Your real photograph will instantly display in place of the placeholder with full hover effects and zero layout shift.

---

### 2. How to Add or Edit Projects
All projects are centralized in `src/config/projects.ts`:
1. Add an object to the `projectsData` array:
   ```ts
   {
     id: 'proj-new',
     slug: 'my-new-project',
     title: 'Project Title',
     category: 'AI Websites', // One of the 6 categories
     subcategory: 'Personal Portfolios',
     summary: 'Brief 1-sentence overview.',
     description: 'Detailed description.',
     coverImage: '/images/projects/your-cover.svg',
     technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
     tools: ['Cursor', 'Figma'],
     isClientProject: false,
     status: 'Production',
     featured: true,
     published: true,
     caseStudy: {
       opportunity: 'What problem did this solve?',
       solution: 'How did you build it?',
       keyFeatures: ['Feature 1', 'Feature 2'],
     },
   }
   ```
2. The project will automatically appear in the filter lists, project grid, and modal viewers.

---

### 3. How to Connect Social Media Profiles
Social links are configured in `src/config/social.ts`:
1. When you create an account on GitHub, LinkedIn, X, or YouTube, update its entry:
   ```ts
   {
     id: 'github',
     name: 'GitHub',
     handle: '@megh',
     url: 'https://github.com/your-username',
     enabled: true, // <-- Set to true
     accessibleLabel: "Visit Megh's GitHub Profile",
   }
   ```
2. As soon as `enabled: true` is set, the link will render with proper accessibility tags in the Contact section and Footer.

---

## ✦ Deployment

Deployable with one click on **Vercel**:
```bash
npx vercel
```
Or connect your GitHub repository directly to Vercel or Netlify. The project uses standard Next.js App Router conventions with static optimization.

