# Bob - 3D Virtual Reality Experiment

![Project Banner](/public/docs/banner.png)

> A small virtual reality (VR) experiment built with A-Frame, exploring the possibilities of immersive experiences on the web.

**✨ [Try it live](https://bob-3dvr.vercel.app/)**

## 📖 Summary

- [Objective](#-objective)
- [About](#-about)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Running Locally](#-running-locally)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

## 🎯 Objective

Bob is an educational experiment created during the first contact with **A-Frame**, a web framework that makes it easy to create virtual reality experiences directly in the browser. The project demonstrates the fundamentals of web VR and WebXR, serving as a proof of concept to explore the possibilities of immersive experiences on the web.

## 🌟 About

Exploring Virtual Reality with A-Frame! Bob emerged as a result of curiosity during the **Augmented and Virtual Reality** course at Vertex | Instituto Privado de Tecnologia e Inovação.

### Creating Bob

- **Image**: Created with **Gemini** in 3D cartoon style
- **3D Model**: Converted to `.glb` using **Hyper3D.ai**
- **Experience**: Implemented with **A-Frame**

## 🚀 Features

- ✅ **Auto-Rotation** - Bob continuously rotates for a complete view
- ✅ **Mouse/Touch Interaction** - Interactive control via mouse or touch
- ✅ **Responsive Design** - Works across different screen sizes
- ✅ **HUD Information Display** - Overlaid user interface with information
- ✅ **Custom 3D Models** - High-quality characters and objects
- ✅ **WebXR Support** - Compatible with VR devices and headsets

## 🛠️ Tech Stack

### Frontend

- **A-Frame** 1.7.1 - Web framework for VR/AR
- **TypeScript** ~5.9.3 - Static typing
- **Vite** 8.0.0 - Fast build tool
- **A-Frame Components**:
  - `aframe-environment-component` - Pre-built environments
  - `aframe-particle-system-component` - Particle effects

### DevOps

- **Hosting**: Vercel
- **Version Control**: Git/GitHub

## 📂 Project Structure

```bash
bob-3d-virtual-reality/
├── src/
│   ├── main.ts                 # Application entry point
│   ├── components/             # Reusable components
│   │   ├── auto-rotate.ts      # Auto-rotation logic
│   │   ├── floating.ts         # Floating effect
│   │   └── interaction.ts      # User interactions
│   ├── scripts/
│   │   └── hud-toggle.ts       # HUD control
│   └── styles/
│       ├── hud.css             # HUD styling
│       ├── responsivity.css    # Responsiveness
│       └── social.css          # Social styling
├── public/
│   ├── models/                 # 3D models (.glb, .gltf)
│   └── social/                 # Social media assets
├── index.html                  # Main HTML
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies
```

## 💻 Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/Talyslan/bob-3d-virtual-reality.git
cd bob-3d-virtual-reality
```

### 2. Install dependencies

```bash
pnpm install
# or 
npm install
```

### 3. Run in development

The server will be available at [http://localhost:3000/](http://localhost:3000/)

```bash
pnpm run dev
# or 
npm run dev
```

### 4. Build for production

```bash
pnpm run build
# or 
npm run build
```

Output will be generated in the `dist/` folder.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

For more details, check [CONTRIBUTING.md](CONTRIBUTING.md).

## 📚 Resources

- [A-Frame Documentation](https://aframe.io/docs/)
- [WebXR](https://www.w3.org/TR/webxr/)
- [Hyper3D.ai](https://hyper3d.ai/)

## 📜 License

This project is licensed under the MIT License.
See the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Created by [Talyslan Canabarro](https://github.com/Talyslan)

A fun first contact with virtual reality and XR that sparked curiosity to explore more of the immersive web experience universe!
