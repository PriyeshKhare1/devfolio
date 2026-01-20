# 🎨 DevFolio - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS featuring 3D animations and smooth interactions.

## 🚀 Live Demo

**[View Live Portfolio](https://devfolio-three-sepia.vercel.app)**

## ✨ Features

- 🎭 **Interactive 3D Hero Section** with Three.js
- 🌓 **Dark/Light Mode** support
- ✨ **Smooth Animations** using Framer Motion
- 📱 **Fully Responsive** design
- 🎨 **Modern UI/UX** with gradient effects
- 📧 **Contact Form** with EmailJS integration
- 🚀 **Optimized Performance**

## 🛠️ Built With

- **React** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Three.js** - 3D Graphics
- **Framer Motion** - Animations
- **EmailJS** - Contact Form
- **React Three Fiber** - 3D React Components

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/PriyeshKhare1/devfolio.git

# Navigate to project directory
cd devfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔧 Configuration

### Email Setup

To enable the contact form, update EmailJS credentials in `src/sections/Contact.jsx`:

```javascript
emailjs.sendForm(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  formRef.current,
  "YOUR_PUBLIC_KEY"
)
```

### Personal Information

Update your details in:
- `src/sections/Hero3d.jsx` - Name and title
- `src/sections/About.jsx` - About description
- `src/sections/Projects.jsx` - Project details
- `src/sections/Contact.jsx` - Contact information
- `src/sections/Footer.jsx` - Social links

## 📁 Project Structure

```
devfolio/
├── src/
│   ├── components/     # Reusable components
│   ├── sections/       # Page sections
│   ├── assets/         # Images and static files
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── public/             # Public assets
└── package.json        # Dependencies
```

## 🚀 Deployment

This project is deployed on Vercel. Any push to the `main` branch will trigger automatic deployment.

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Priyesh Khare**
- GitHub: [@PriyeshKhare1](https://github.com/PriyeshKhare1)
- Portfolio: [devfolio-three-sepia.vercel.app](https://devfolio-three-sepia.vercel.app)

---

⭐ Star this repo if you find it helpful!
