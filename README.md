# Aura UI

![Built With](https://img.shields.io/badge/Built%20With-Gemini%203.0%20Pro-8E44AD)
![Time](https://img.shields.io/badge/Dev%20Time-30--40%20Mins-success)

A immersive landing page designed with modern web technologies. This project combines 3D WebGL experiences with practical UI layouts like bento grids, all optimized for smooth user interactions and experience.

>**Note:** This project was built using the new **Gemini 3.0 Pro** model. The entire development process, from architecture to debugging, was completed in approximately **30-40 minutes**.

## Features

* **3D Hero Section:** An interactive 3D environment that responds to mouse movement, built with React Three Fiber.
* **Performance Optimized:** Implements code splitting and lazy loading to ensure the site loads instantly, even with heavy 3D assets.
* **Smooth Scrolling:** Uses Lenis for a premium, momentum-based scrolling feel.
* **Modern Layouts:** Features a responsive bento grid design for showcasing content effectively.
* **Interactive Elements:** Includes custom cursors, hover effects, and sticky parallax scrolling for the work section.

## Tech Stack

* **Core:** React 18, TypeScript
* **Build Tool:** Vite (Custom chunking configuration)
* **Styling:** Tailwind CSS v4
* **3D & Graphics:** Three.js, React Three Fiber, Drei, Postprocessing
* **Icons:** Lucide React

## Quick Start

1.  **Clone the repository**
    ```bash
    git clone https://github.com/pranav89624/aura-ui.git
    cd aura-ui
    ```

2.  **Install dependencies**.
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## Project Structure

```text
src/
├── components/
│   ├── Hero.tsx          # Main 3D landing scene
│   ├── Features.tsx      # Bento grid layout and marquee
│   ├── Work.tsx          # Sticky parallax project cards
│   ├── Footer.tsx        # Footer section with interactions
│   ├── Preloader.tsx     # Loading screen state
│   ├── SEO.tsx           # Head meta tag management
│   ├── CipherText.tsx    # Text scrambling effect component
│   ├── TiltCard.tsx      # 3D tilt effect wrapper for cards
│   ├── SpotlightCard.tsx # Hover spotlight effect wrapper
│   └── customCursor.tsx  # Custom cursor follower
├── utils/
│   └── cn.ts             # Utility for merging Tailwind classes
├── App.tsx               # Main application and lazy load setup
├── main.tsx              # Entry point
└── index.css             # Global styles and Tailwind imports
```

## The Gemini 3.0 Pro Experiment

This project was created to test the limits of the **new Gemini 3.0 Pro model**.

* **Prompt Strategy:** The AI acted as a "Top 1% Frontend Designer & Developer trying to create a billion dollar agency landing page" handling everything from architectural decisions to resolving complex WebGL context crashes.
* **Speed:** The working prototype, including animations and responsive design, was completed in **30-40 minutes**.
* **Complex Problem Solving:**
    * *Challenge:* React 19 beta caused `addEventListener` crashes with Three.js.
    * *AI Solution:* Gemini identified the peer dependency mismatch, downgraded to the stable React 18 stack, and implemented specific Vite chunking strategies to maintain performance.

---

<div align="center">
  <strong>Experience the live demo:</strong> <a href="https://aura-ui-umber.vercel.app" target="_blank">https://aura-ui-umber.vercel.app</a>

*Created by [Pranav Verma](https://github.com/pranav89624) using Gemini 3.0 Pro.*
</div>