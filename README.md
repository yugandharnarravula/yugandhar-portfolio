# Yugandhar Narravula — AI Engineer Portfolio

Personal portfolio website built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.

🔗 **Live:** [https://yugandhar-portfolio-three.vercel.app/]([https://yugandhar-portfolio-three.vercel.app/])

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React + custom SVGs

## Getting Started

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build   # production build
npm start       # run production server
```

## Project Structure

```
app/                    # Next.js App Router pages
  layout.tsx            # Root layout + SEO metadata
  page.tsx              # Home page
  projects/[slug]/      # Dynamic project detail pages
components/             # React components
  Hero.tsx
  Navbar.tsx
  About.tsx
  Skills.tsx
  Projects.tsx
  LiveDemos.tsx
  Experience.tsx
  Contact.tsx
  Footer.tsx
  icons.tsx             # Custom SVG icons
lib/
  data.ts               # All portfolio content (projects, experience, skills)
public/
  Yugandhar_Resume.pdf  # Resume file
```

## Customization

All content lives in `lib/data.ts` — update projects, experience, skills, and personal info there.
