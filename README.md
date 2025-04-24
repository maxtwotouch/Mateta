# SailGuide

A custom **Vite + React + TypeScript** web app featuring **React Router** and **Tailwind CSS**, showcasing curated anchorages, harbors, and restaurants for charter sailing in Croatia and Greece. Includes dynamic routing, map-ready data models, and affiliate integration-ready architecture.

---

## 🚀 Features

- **Static site generation** with Vite for lightning-fast builds and HMR.
- **Type-safe** React components with TypeScript.
- **Client-side routing** via React Router (`/`, `/about`, `/anchorages/:id`).
- **Utility-first styling** with Tailwind CSS and responsive design.
- **Data-driven pages**: In-memory `anchorages` data model to drive dynamic pages.
- **Scaffolded for extension**: Easily integrate map libraries (Leaflet, Mapbox) and headless CMS or affiliate widgets.

---

## 📦 Tech Stack

- **Vite** – Next-generation build tool.
- **React** – UI library.
- **TypeScript** – Static typing.
- **React Router DOM** – Routing.
- **Tailwind CSS** – Utility-first styling.
- **PostCSS & Autoprefixer** – CSS processing.

---

## 🛠️ Prerequisites

- Node.js v16+
- npm v8+

---

## ⚙️ Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/mateta.git
   cd Mateta
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the dev server**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📂 Project Structure

```
my-sailing-app/
├─ public/               # Static assets (favicon, index.html)
├─ src/
│  ├─ components/        # Reusable UI components (Navbar, Footer)
│  ├─ data/              # In-memory data models (anchorages.ts)
│  ├─ routes/            # Page components (Home, About, Anchorage)
│  ├─ index.css          # Tailwind directives & global styles
│  ├─ App.tsx            # Main layout & route definitions
│  └─ main.tsx           # React entry point (imports index.css)
├─ tailwind.config.js    # Tailwind configuration (content globs)
├─ postcss.config.js     # PostCSS plugins
├─ tsconfig.json         # TypeScript configuration
├─ package.json          # npm scripts and dependencies
└─ README.md             # This file
```

---

## 📜 Scripts

| Command         | Description                           |
| --------------- | ------------------------------------- |
| `npm run dev`   | Start development server (http://localhost:5173) |
| `npm run build` | Build for production (dist/ folder)   |
| `npm run preview` | Preview production build locally   |

---

## 🌐 Usage

- Navigate between **Home**, **About**, and individual **Anchorage** pages.
- Each anchorage card links to `/anchorages/:id` displaying detailed info.
- Extend by adding new entries to `src/data/anchorages.ts`.

---

## 🧩 Extending the App

1. **Map Integration**: Install and configure Leaflet or Mapbox GL JS. Wrap coordinates from the data model in a `<Map>` component.  
2. **Headless CMS**: Swap the in-memory `anchorages` array for a CMS API (Strapi, Sanity) and fetch in React with SWR or React Query.  
3. **Affiliate Widgets**: Embed booking widgets via iframes or build a custom Next.js API route to proxy charter provider APIs.

---

## 🤝 Contributing

1. Fork the repository.  
2. Create a feature branch (`git checkout -b feature-name`).  
3. Commit your changes (`git commit -m 'Add some feature'`).  
4. Push to the branch (`git push origin feature-name`).  
5. Open a pull request.

Please follow the existing code style and include meaningful commit messages.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

