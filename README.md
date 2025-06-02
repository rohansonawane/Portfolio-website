# Rohan Sonawane's Portfolio

A modern, responsive portfolio website built with Next.js 14, showcasing my work as a Full Stack Developer. The portfolio features smooth animations, interactive components, and a clean, professional design.

## 🚀 Features

- **Modern Design**: Clean and professional UI with glass-morphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth page transitions and component animations using Framer Motion
- **Interactive Components**: 
  - Animated statistics with CountUp
  - Interactive project cards
  - Honeycomb skills display
  - Floating skills animation
  - Stair transition effects
- **Performance Optimized**: Fast loading times and optimized assets
- **SEO Friendly**: Proper meta tags, OpenGraph, and Twitter card support
- **Dark Mode**: Beautiful dark theme with accent colors
- **Contact Integration**: Live chat support via TawkTo
- **Analytics**: Google Analytics integration

## 🛠️ Technologies Used

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **UI Components**: Radix UI
- **Analytics**: Google Tag Manager
- **Chat**: TawkTo
- **Deployment**: Vercel

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.jsx         # Root layout with metadata
│   ├── page.jsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── AboutSection.jsx   # About section component
│   ├── AnimatedText.jsx   # Animated text component
│   ├── ContactSection.jsx # Contact form section
│   ├── ExperienceSection.jsx # Experience timeline
│   ├── FeaturedProjects.jsx  # Projects showcase
│   ├── FloatingSkills.jsx    # Floating skills animation
│   ├── Header.jsx         # Navigation header
│   ├── HoneycombSkills.jsx   # Skills display
│   ├── Stats.jsx         # Statistics with CountUp
│   └── ...               # Other components
├── public/               # Static assets
│   ├── assets/          # Images and other assets
│   └── favicon/         # Favicon files
└── scripts/             # Utility scripts
```

## 🎯 Key Components

### Stats Component
- Animated statistics with CountUp
- Intersection Observer for scroll-based animations
- Responsive grid layout
- Shows experience, projects, technologies, and client satisfaction

### Featured Projects
- Interactive project cards
- Image optimization with Next.js Image
- Technology tags and links
- Smooth hover effects

### Skills Display
- Honeycomb layout for skills
- Interactive hover effects
- Categorized skills display
- Animated icons

### Contact Section
- Modern contact form
- Live chat integration
- Social media links
- Location information

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/rohansonawane/Portfolio.git
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices
- Tablets
- Laptops
- Desktop screens
- Large displays

## 🎨 Customization

To customize the portfolio:
1. Update the content in the components
2. Modify the color scheme in `globals.css`
3. Add your own projects in `FeaturedProjects.jsx`
4. Update the statistics in `Stats.jsx`

## 🔧 Performance Optimizations

- Image optimization with Next.js Image
- Font optimization with next/font
- Component lazy loading
- Efficient animations
- Proper meta tags for SEO
- Optimized assets

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Rohan Sonawane**
- Portfolio: [rohansonawane.tech](https://rohansonawane.tech)
- GitHub: [@rohansonawane](https://github.com/rohansonawane)
- LinkedIn: [Rohan Sonawane](https://linkedin.com/in/rohansonawane)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Framer Motion for the animation library
- Tailwind CSS for the styling framework
- All the open-source contributors
