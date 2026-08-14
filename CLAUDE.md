# CLAUDE.md — DAVESTACK-3D Portfolio Project Memory

> **Project Owner:** Lazy_dev "Dave" Eluwole  
> **Original Template:** Based on ITom Dev's interactive 3D WebGL portfolio  
> **Last Updated:** 2026-08-14  

---

## ��� Project Overview

This is an **interactive 3D WebGL portfolio** built with React 19, Three.js (via React Three Fiber), GSAP, and Vite. It features a hand-drawn aesthetic with multiple rooms accessible via an infinite corridor.

**Key Architecture:**
- **Single Page Application** with SPA routing via Vercel rewrites
- **Canvas-based 3D experience** mounted at `/src/components/canvas/Experience.jsx`
- **Room-based navigation:** Entrance → Corridor → 4 Rooms (About, Studio, Gallery, Contact)
- **Performance-first:** Adaptive device tiering, async shader compilation, baked lighting

---

## ������ Project Structure

```
DAVESTACK-3D/
├── public/                    # Static assets (textures, images, sounds, fonts)
│   ├── textures/              # Organized by room/scene
│   ├── images/                # General images
│   ├── sounds/                # Audio files
│   ├── cursors/               # Custom cursor assets
│   └── fonts/                 # Local fonts
├── src/
│   ├── components/
│   │   ├── canvas/            # 3D/Three.js components
│   │   │   ├── background/    # Shared background elements
│   │   │   ├── corridor/      # Corridor system (infinite)
│   │   │   ├── entrance/      # Entrance doors animation
│   │   │   ├── rooms/         # 4 main rooms
│   │   │   │   ├── About/     # About room (sky, clouds, milestones)
│   │   │   │   ├── Studio/    # Studio room (monitors, TV, phone)
│   │   │   │   ├── Gallery/   # Gallery room (project cards)
│   │   │   │   └── Contact/   # Contact room (form, social barrels)
│   │   │   ├── shaders/       # Custom GLSL shaders
│   │   │   └── Experience.jsx # Main canvas orchestrator
│   │   ├── dom/               # 2D DOM components (Preloader, PaperTransition)
│   │   └── ui/                # UI overlay components (Navigation, Overlay, Audio)
│   ├── context/               # React Context providers
│   │   ├── AudioManager.jsx   # Audio system
│   │   ├── SceneContext.jsx   # Room navigation state
│   │   ├── PerformanceContext.jsx # Device tiering & quality
│   │   └── AchievementsContext.jsx # Achievement tracking
│   ├── hooks/                 # Custom React hooks
│   │   └── useInfiniteCamera.js # Camera scroll/parallax logic
│   ├── config/                # Configuration files
│   │   └── texturePreloadList.js # All texture paths + device filtering
│   ├── utils/                 # Utility functions
│   ├── styles/                # SCSS styles
│   ├── App.jsx                # Root app component
│   └── main.jsx               # Entry point
├── index.html                 # HTML template with SEO/JSON-LD
├── vite.config.js             # Vite configuration
├── vercel.json                # Vercel SPA rewrites
├── package.json
��── TODO.md                    # Master task list (from original author)
```

---

## ��� Key Components & Data Flow

### Room Navigation (SceneContext)
```
App.jsx → SceneProvider → Experience.jsx → InfiniteCorridorManager → DoorSection → TeleportRoom → Room Components
```
- `SceneContext` manages: `currentRoom`, `hasEntered`, `isTeleporting`, `enterRoom()`, `exitRoom()`

### Performance Tiering (PerformanceContext)
- Detects: `navigator.deviceMemory`, `hardwareConcurrency`, screen size
- Tiers: `HIGH` | `MEDIUM` | `LOW`
- Controls: `dpr`, `antialias`, `shadows`, `powerPreference`
- Auto-downgrades on FPS drops via `PerformanceMonitor`

### Texture Preloading (texturePreloadList.js)
- **PRELOAD_ALL**: useTexture paths (entrance, corridor, gallery, contact, UI)
- **PRELOAD_LOADER**: useLoader(TextureLoader) paths (about, studio)
- **filterTexturesByDevice()**: Filters `_painted.webp` variants for hover-capable devices

### Camera System (useInfiniteCamera)
- Scroll-driven camera movement along corridor (Z-axis)
- Parallax effect on mouse move
- Disabled during teleportation and inside rooms

---

## ������ Development Commands

```bash
# Development
npm run dev          # Start Vite dev server

# Build & Preview
npm run build        # Production build to /dist
npm run preview      # Preview production build

# Linting
npm run lint         # ESLint check
```

---

## ��� Deployment

- **Platform:** Vercel (configured via `vercel.json`)
- **SPA Routing:** Rewrite all paths to `/index.html`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

---

## ��� Environment Variables

Required in Vercel/project settings:
- `VITE_POSTHOG_KEY` — PostHog analytics key
- `VITE_POSTHOG_HOST` — PostHog API host

---

## ��� Visual Style Guide

- **Aesthetic:** Hand-drawn / sketch / paper texture style
- **Color Palette:** Warm paper tones (`#fafafa`, `#f5f0e8`), accent red (`#f33`)
- **Typography:** Inter (UI), Caveat/Gloria Hallelujah (hand-drawn accents)
- **Interactions:** B&W → Color on hover for interactive elements
- **Transitions:** Paper texture page transitions (`PaperTransition.jsx`)

---

## ��� Important Implementation Notes

### Memory Leaks Fixed (from TODO.md)
- �� `new THREE.Vector3()` in `useFrame` moved to module constants
- �� `setState` in `useFrame` replaced with `useRef` + imperative updates
- �� Dead hook `useCorridorCamera` removed
- �� `r3f-perf` import removed from production

### Accessibility (A11y) — DONE
- Keyboard navigation in 3D (arrows, space, pgup/pgdn)
- `inert` on closed panels
- Focus trap in map/modal
- ARIA labels on sliders
- Hover zones as `<button>` elements
- Screen reader fallback layer (`ScreenReaderOverlay.jsx`)

### Audio System
- `AudioManager.jsx` — Ready with play/stop/fade/volume
- Sounds in `/public/sounds/`
- UI toggle via `AudioControls.jsx`

---

## ��� Known Issues / TODO (from TODO.md)

**High Priority:**
1. Cloud clipping in About room (clouds leak into corridor)
2. Monitor click handling in Studio room
3. Corridor decorations (currently empty)

**Medium Priority:**
4. Awards texture readability in About
5. Gallery project card thumbnails (placeholder data in `contentData.js`)
6. Contact room environment enrichment

**Performance:**
- Mobile audit needed (About room heavy)
- Memory leak check: `InfiniteSkyManager.jsx` lines 155-157, 470-471, 710-711
- LOD for distant objects

---

## ��� Session Workflow

When working on this project:
1. **Read CLAUDE.md** first for context
2. **Update CLAUDE.md** after each significant task
3. **Run `npm run dev`** to test changes locally
4. **Run `npm run build && npm run preview`** for production testing
5. **Run `npm run lint`** before committing

---

## ��� References

- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)
- [Three.js Docs](https://threejs.org/docs/)
- [GSAP Docs](https://gsap.com/docs/)
- [Vite Docs](https://vite.dev/)
- Original author's portfolio: https://itomdev.com (reference only)