# Captured by Angie - Photography Portfolio

A modern, high-end photography portfolio website built with React and Tailwind CSS. Features smooth animations, mobile-responsive design, and conversion-optimized layout.

## ✨ Features

- **Modern Design**: Clean, artistic layout with full-width hero sections and high-quality imagery
- **Smooth Animations**: Powered by Framer Motion for elegant scroll-triggered animations
- **Mobile Responsive**: Fully optimized for all device sizes
- **SEO Optimized**: Includes meta tags and structured data for local business
- **Fast Performance**: Built with Vite for lightning-fast load times
- **Conversion Focused**: Strategic CTAs and user-friendly contact form

## 🎨 Design Specifications

### Color Palette
- **Primary**: `#F8F5F2` (Soft Ivory)
- **Accent**: `#C08457` (Warm Copper)
- **Secondary**: `#1E1E1E` (Deep Charcoal)
- **Highlight**: `#F2B880` (Soft Gold)
- **Neutral**: `#EDEDED` & `#FFFFFF`

### Typography
- **Headings**: Playfair Display (Serif)
- **Body**: Inter (Sans-serif)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
captured-by-angie/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Landing hero section
│   │   ├── About.jsx         # About section
│   │   ├── Portfolio.jsx     # Portfolio gallery
│   │   ├── Services.jsx      # Services offered
│   │   ├── Testimonials.jsx  # Client testimonials
│   │   ├── Contact.jsx       # Contact form
│   │   └── Footer.jsx        # Footer with links
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html                # HTML template with SEO tags
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js            # Vite configuration
└── package.json              # Dependencies
```

## 🎯 Key Sections

1. **Hero Section**: Full-screen background with compelling headline and CTA
2. **About**: Introduction to Captured by Angie with imagery
3. **Portfolio**: Masonry-style gallery showcasing work
4. **Services**: Three main service offerings (Portraits, Sports, Events)
5. **Testimonials**: Rotating client testimonials
6. **Contact**: Form with contact information
7. **Footer**: Social links and copyright

## 🛠️ Technologies Used

- **React 18**: Modern UI library
- **Vite**: Fast build tool
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Unsplash**: High-quality placeholder images

## 📝 Customization

### Updating Images

Replace the Unsplash URLs in each component with your own images:

```jsx
// Example from Hero.jsx
<img
  src="YOUR_IMAGE_URL_HERE"
  alt="Photography background"
  className="w-full h-full object-cover"
/>
```

### Updating Contact Information

Edit the contact details in `Contact.jsx` and `Footer.jsx`:

```jsx
<a href="mailto:YOUR_EMAIL">YOUR_EMAIL</a>
<a href="tel:YOUR_PHONE">YOUR_PHONE</a>
```

### Customizing Colors

Modify the color palette in `tailwind.config.js`:

```js
colors: {
  ivory: '#F8F5F2',
  copper: '#C08457',
  charcoal: '#1E1E1E',
  gold: '#F2B880',
  neutral: '#EDEDED',
}
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will auto-detect Vite and deploy

### Netlify

1. Push your code to GitHub
2. Connect your repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Other Platforms

Build the project and upload the `dist` folder to any static hosting service.

## 📧 Contact

For questions or support, reach out to:
- Email: hello@capturedbyangie.com
- Instagram: [@capturedbyangie](https://instagram.com)

## 📄 License

© 2025 Captured by Angie. All rights reserved.

---

Built with ❤️ for photography that captures life's beautiful moments.

