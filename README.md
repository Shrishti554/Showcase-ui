# 📱 Feature Showcase Component

An interactive and responsive **feature showcase section** built with React + TypeScript.  
It highlights multiple product features with smooth transitions, sticky scroll behavior, and mobile-first design.

---

## ✨ Features

### 🔹 Clickable Points (Right Side)
- Each feature button sets the **active state**.
- Active state is indicated with a **blue marker**.
- On click, the **iPhone image, heading, and description** update.

### 🔹 Navigation Arrows (Left Side)
- Left/Right arrows navigate between features.
- UI updates in sync with feature changes.

### 🔹 Scroll Behavior
- Section becomes **sticky** when in view.
- On scrolling, features **auto-advance from 1 → 5**.
- After the last feature, the page scrolls normally.

### 🔹 Mobile Responsiveness
- Fully **responsive layout**.
- Tap-friendly design with proper spacing.
- Optimized for small-screen readability.

---

## 🛠️ Tech Stack
- **React (with TypeScript)**
- **Framer Motion** → animations
- **TailwindCSS** → responsive styling
- Clean, self-contained codebase

---

## 🚀 Deployment
Deployed on **Vercel**:  
👉 [Live Demo](https://showcase-ui-seven.vercel.app/)

---

## 📂 Project Setup

```bash
# 1. Clone repository
git clone https://github.com/your-username/feature-showcase.git

# 2. Navigate into project folder
cd feature-showcase

# 3. Install dependencies
npm install

# 4. Run locally
npm run dev

# 5. Build for production
npm run build
