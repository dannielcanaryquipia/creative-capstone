# GSAP Animation & Transition Skills — Creative Capstone Portfolio

**Project:** [creative-capstone.vercel.app](https://creative-capstone.vercel.app/)
**Stack:** React + TypeScript + Tailwind CSS + GSAP
**Role:** Frontend developer (built alongside capstone student Alvin Valeza)

---

## 1. Skills Already Demonstrated

Use this section as your "what I actually did" reference — the kind of specifics that hold up when an interviewer asks "walk me through how you built that."

- **GSAP core animation (`gsap.to`, `gsap.from`, `gsap.fromTo`)** — animating opacity, position (x/y), scale, and rotation on mount or on interaction.
- **Timelines (`gsap.timeline()`)** — sequencing multiple elements (e.g., hero text, then image, then CTA button) instead of firing animations all at once.
- **ScrollTrigger plugin** — triggering animations as sections enter the viewport (fade-ins, staggered reveals, pinning sections while scrolling).
- **Stagger animations** — animating groups of elements (nav links, cards, list items) with a delay offset between each for a cascading effect.
- **Page/section transitions** — smoothing the visual jump between routes or sections so the site doesn't feel like a static template.
- **Easing functions** — choosing `power2.out`, `elastic`, `back.out`, etc. to match the feel of the brand/portfolio rather than using default linear motion.
- **React integration patterns** — using `useRef` + `useEffect` (or `useGSAP` hook from `@gsap/react`) to safely scope GSAP animations inside React's render lifecycle and clean them up on unmount.
- **Tailwind + GSAP coexistence** — using Tailwind for static layout/spacing/typography and GSAP purely for motion, keeping concerns separated.

**Resume/portfolio line you can use:**
> "Built interactive scroll-based animations and page transitions using GSAP and ScrollTrigger in a React + TypeScript portfolio site, including staggered reveals and timeline-sequenced hero animations."

---

## 2. Skills to Deepen (Next Learning Targets)

| Skill | Why it matters | How to practice |
|---|---|---|
| **ScrollSmoother** | Gives that premium "buttery scroll" feel agencies love | Add to a scroll-heavy section of the same site |
| **SplitText plugin** | Character/word-level text reveals (common in creative portfolios) | Animate a hero headline letter-by-letter |
| **GSAP + Framer Motion comparison** | Many JD's ask for "animation libraries" broadly | Rebuild one section in Framer Motion, compare code/DX |
| **Performance (will-change, transforms only)** | Avoid janky animations on lower-end devices | Test your site on a throttled CPU in DevTools |
| **Custom cursor / magnetic buttons** | Common "wow factor" ask in creative dev roles | Add a magnetic hover effect to one CTA button |
| **matchMedia() for responsive animation** | Different animation behavior on mobile vs desktop | Disable/reduce heavy ScrollTrigger effects on mobile |
| **Accessibility (prefers-reduced-motion)** | Shows maturity/production-readiness | Wrap animations in a media query check |

---

## 3. Suggested Order of Learning (2–3 week pace)

1. **Week 1:** SplitText + text reveal animations → apply to hero section
2. **Week 1–2:** ScrollSmoother → apply to full-page scroll experience
3. **Week 2:** `prefers-reduced-motion` + matchMedia responsive tuning
4. **Week 2–3:** Custom cursor / magnetic interactions on 1–2 elements
5. **Week 3:** Write a short case-study README (see Section 4) and update portfolio + resume bullet

---

## 4. Case-Study Write-up Template (for portfolio/GitHub README)

```
## Creative Capstone Portfolio

**Stack:** React, TypeScript, Tailwind CSS, GSAP (ScrollTrigger)
**Live:** https://creative-capstone.vercel.app/

### What I built
- [1–2 sentence summary of the site's purpose]

### Animation highlights
- Hero section: staggered fade/slide-in timeline on load
- Scroll sections: ScrollTrigger-based reveal animations
- Navigation: smooth scroll + active-state transitions

### Technical decisions
- Used GSAP over CSS-only animations for [reason: sequencing control / scroll-linked triggers]
- Scoped animations with useRef + useEffect for React lifecycle safety

### What I'd improve next
- [pick 1–2 items from Section 2 above]
```

---

## 5. Interview Talking Points

If asked "what animation libraries have you worked with":
- Lead with GSAP + ScrollTrigger specifically, not just "I know animations."
- Mention the React integration detail (ref-based scoping) — this signals you understand React lifecycle, not just copy-pasted GSAP snippets.
- If asked about performance, mention you animate `transform`/`opacity` (GPU-accelerated) rather than layout-triggering properties like `top`/`left`/`width`.

---

## 6. Recommended AI Models for the About Page Background Image

For a creative-portfolio "About" page, the background image usually needs to feel abstract/atmospheric rather than literal — texture, gradients, soft light, or subtle geometric shapes that won't compete with your GSAP text animations on top. Here are 3 models worth trying, in order of recommendation:

### 1. **Flux (Flux.1 — via Krea, Freepik, or Replicate)**
- **Why:** Best prompt adherence + very clean, modern aesthetic out of the box — good for gradient/abstract backgrounds without weird artifacts.
- **Best for:** Soft gradient meshes, abstract light textures, minimal geometric backdrops.
- **Prompt tip:** `"abstract dark gradient background, soft blue and purple light bloom, minimal, high resolution, no text, no people"`

### 2. **Midjourney (v6/v7)**
- **Why:** Strongest at atmospheric, artistic, and "premium portfolio" looks — great if you want the background to feel like a design agency site.
- **Best for:** Moody textures, film-grain gradients, subtle 3D-render-like backgrounds.
- **Prompt tip:** `"dark abstract background, subtle grain texture, cinematic lighting, minimalist, --ar 16:9 --style raw"`

### 3. **Adobe Firefly**
- **Why:** Commercially safe (trained on licensed/Adobe Stock content), so zero copyright risk if this ever goes on a client project or resume portfolio you show to employers. Also integrates directly if you already use Photoshop/Illustrator.
- **Best for:** Safe, professional-looking abstract backgrounds when you need to guarantee usage rights.
- **Prompt tip:** `"abstract minimalist background, soft light gradient, dark navy tones, no text"`

### Workflow Recommendation
1. Generate 3–4 variants in **Flux** first (fastest, cheapest, great default quality).
2. If none hit the vibe, try **Midjourney** for a more "designed" feel.
3. Use **Firefly** as the safe fallback if you want to publicly showcase this in your portfolio/resume without any licensing concerns.
4. Once you pick one, run it through a quick optimization pass (compress to WebP, blur/darken if text needs to sit on top) before wiring it into the About page — this also keeps your GSAP-animated text readable and your Lighthouse performance score high.

---

## 7. Implementation: 3D Background for the About Page

Inspired by GetLayers-style abstract 3D scenes, here's an original React Three Fiber implementation you can drop into your project. It renders floating, softly rotating geometric shapes with subtle mouse-parallax — the same "modern 3D" feel without needing a GetLayers subscription, and it's fully yours to customize.

### Install dependencies

```bash
npm install three @react-three/fiber @react-three/drei
```

### Component: `AboutBackground3D.tsx`

```tsx
import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// A single floating shape with slow rotation + distort shader
function FloatingShape({
  position,
  color,
  geometry,
}: {
  position: [number, number, number];
  color: string;
  geometry: "sphere" | "torus" | "box";
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.08;
      meshRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position}>
        {geometry === "sphere" && <sphereGeometry args={[1, 64, 64]} />}
        {geometry === "torus" && <torusGeometry args={[1, 0.35, 32, 100]} />}
        {geometry === "box" && <boxGeometry args={[1.4, 1.4, 1.4]} />}
        <MeshDistortMaterial
          color={color}
          speed={1.5}
          distort={0.25}
          radius={1}
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
}

// Mouse-parallax wrapper: whole scene shifts slightly toward cursor
function ParallaxGroup({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null!);
  const { pointer } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.3,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.2,
        0.05
      );
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

export default function AboutBackground3D() {
  const shapes = useMemo(
    () => [
      { position: [-2.5, 1, 0] as [number, number, number], color: "#6366f1", geometry: "sphere" as const },
      { position: [2.2, -0.8, -1] as [number, number, number], color: "#8b5cf6", geometry: "torus" as const },
      { position: [0, 1.8, -2] as [number, number, number], color: "#3b82f6", geometry: "box" as const },
    ],
    []
  );

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 pointer-events-none"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]} // caps pixel ratio for perf
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={0.8} />
        <Suspense fallback={null}>
          <ParallaxGroup>
            {shapes.map((s, i) => (
              <FloatingShape key={i} {...s} />
            ))}
          </ParallaxGroup>
        </Suspense>
      </Canvas>
    </div>
  );
}
```

### Usage in your About page

```tsx
import AboutBackground3D from "./components/AboutBackground3D";

export default function AboutPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">
      <AboutBackground3D />
      {/* your existing GSAP-animated text/content sits on top, unaffected */}
      <div className="relative z-10 px-8 py-24">
        <h1 className="text-4xl font-bold text-white">About Me</h1>
        {/* ... */}
      </div>
    </section>
  );
}
```

### Integration notes

- **Layering:** the canvas is `absolute inset-0 -z-10`, so your existing GSAP text animations on the About page sit untouched on top (`relative z-10`).
- **Performance:** `dpr={[1, 1.5]}` caps the pixel ratio so it doesn't tank frame rate on high-DPI phones. Test on your Lenovo LOQ's integrated display and a mid-range Android phone before shipping.
- **Reduced motion:** wrap the `<AboutBackground3D />` render in a check for `window.matchMedia('(prefers-reduced-motion: reduce)')` and skip mounting the Canvas entirely for users who've opted out of motion — swap in a static gradient instead.
- **Mobile fallback:** consider hiding the 3D canvas below a Tailwind breakpoint (e.g. `hidden md:block`) and using one of the AI-generated background images from Section 6 as the mobile background instead — three.js scenes are GPU-heavy and not every phone in the job market you're targeting will handle it smoothly.
- **Colors:** swap the three hex colors (`#6366f1`, `#8b5cf6`, `#3b82f6`) to match your site's existing palette.

### Why this approach over a GetLayers subscription

- Zero cost, fully custom, no licensing dependency on a third-party service.
- You end up understanding the actual React Three Fiber code — a stronger interview talking point than "I used a template."
- Still gives you the "modern 3D floating shapes" look GetLayers scenes are known for.

---

*This file is meant as a living document — update Section 1 as you add real features, and check off Section 2 items as you complete them.*
