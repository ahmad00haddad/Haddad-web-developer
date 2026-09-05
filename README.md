# Ahmad Haddad: AI-Powered Digital Canvas

Build a premium, Awwwards-winning style single-page portfolio website for Ahmad Haddad, a Computer Engineer and Web Developer who leverages AI to build modern digital experiences. The site must be extremely concise, visually striking, and avoid any long paragraphs or a "Skills" section. 

**Design System & Theme:**
- **Colors (Dark Mode):** Deep dark background (`#09090b` or `#000000`). Integrate a very subtle, soft olive/dark green radial gradient glow (e.g., `#2b3324` fading into the dark background) to add depth, matching a high-end cinematic vibe. Text should be off-white (`#f8fafc`) and muted grey (`#94a3b8`).
- **Typography:** Use massive, bold display fonts (like Clash Display, Syne, or Playfair Display) for main headings. Use a clean modern sans-serif (like Inter or Geist) for small utility text. Mix serif and sans-serif for an editorial feel (e.g., "PRODUCT *DESIGN*").

**Layout & Sections (Single Page Architecture):**

1. **Header / Navigation:**
- Minimalist top navbar. 
- Left side: A clean text logo "|| Ahmad ||". 
- Right side: Clean, small links: "Projects", "About Me", "Contact".

2. **Hero Section (Inspired by Roshan Sahu & Jingjing Han references):**
- Massive, screen-spanning typography reading "Creative" and "Dev" (or "Web" & "Engineer").
- Create a collage effect: place 2-3 floating, high-quality placeholder thumbnail images behind and between the huge text layers using absolute positioning.
- In the center or slightly offset, include a minimalist bio wrapped in large thin parentheses `( )`: 
  "HELLO! I'm Ahmad Haddad, a Computer Engineer & Web Developer utilizing AI to build web experiences."

3. **Selected Work / Projects Section:**
- Use a large watermark-style background text reading "W O R K" or "PROJECTS".
- **Layout Style:** Create an asymmetrical, overlapping layout for the project cards. Some images should be large, others small. 
- **Card Design:** Each project must have a sleek thumbnail image. Overlay glassmorphism pill-shaped tags on the images (e.g., "WEB", "AI"). Include small 90-degree rotated utility text on the sides of the layout (e.g., "UX/UI", "SINCE 2024") for an editorial magazine feel.
- **GitHub List View:** Under the visual cards, include a sleek, minimalist dark-mode list of projects resembling a terminal/GitHub list with a small green dot indicator. Use these exact real repositories of mine as the data:
  - ahmad00haddad/memoria
  - ahmad00haddad/nas-irbid
  - ahmad00haddad/haddad-rate-card
  - ahmad00haddad/petvan-your-pet-s-comfort-delivered
  - ahmad00haddad/fazaa-jo
  - ahmad00haddad/lovable-production-hub
  - ahmad00haddad/faiihouse
  - ahmad00haddad/moujestudio

4. **Footer / Contact Section:**
- Extremely minimalist. A massive heading saying "Let's Talk".
- Display the contact information clearly with clean typography and hover effects:
  - LinkedIn: https://www.linkedin.com/in/ahmad00haddad/
  - Email: ahmad000haddad@gmail.com
  - WhatsApp: 00962799256345

**Technical & Styling Rules (Tailwind CSS):**
- DO NOT include any "Skills" or "Tech Stack" section.
- DO NOT add complex scroll animations yet (keep it static but stunning). Basic hover states on buttons and links are sufficient.
- Heavily utilize Tailwind CSS for overlapping elements (`absolute`, `z-10`, `z-20`), glassmorphism (`backdrop-blur-md`, `bg-white/5`, `border-white/10`), and typography tracking (`tracking-tighter`, `leading-none`).
- Ensure the layout is fully responsive, simplifying the overlapping images into a neat column on mobile devices.

الصور المرفقة امثله على التصميم المطلوب ويمكنك الابتكار و الابداع

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/247f1c51-febe-4c9d-a73a-fb1f223ec0c7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
