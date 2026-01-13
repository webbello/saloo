# Saloo & Neena Chowdhury - Journey Website

A modern, performance-optimized website showcasing the incredible journey and world records of Saloo & Neena Chowdhury, the first and fastest circumnavigators of the globe by car.

## 🌟 Features

- **Modern Tech Stack**: Built with Nuxt 4.2, Vue 3 Composition API, and Tailwind CSS 4.1
- **Performance Optimized**: Fast loading, optimized images, and efficient code splitting
- **SEO Optimized**: Comprehensive meta tags, structured data, and search engine friendly
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Interactive Elements**: Globe animations, parallax effects, and smooth transitions
- **Content Management**: Blog system with Markdown support via Nuxt Content
- **Gallery System**: Categorized photo gallery with lightbox functionality

## 🚀 Tech Stack

- **Framework**: Nuxt 4.2
- **Frontend**: Vue 3 with Composition API
- **Styling**: Tailwind CSS 4.1
- **Icons**: Iconify with Lucide icons
- **Content**: Nuxt Content for blog management
- **Images**: Nuxt Image for optimization
- **Utilities**: VueUse for composables

## 📁 Project Structure

```
├── assets/
│   └── css/
│       └── main.css          # Global styles and Tailwind imports
├── components/
│   ├── AppHeader.vue         # Navigation header
│   ├── AppFooter.vue         # Site footer
│   ├── GlobeAnimation.vue    # Hero globe animation
│   ├── GlobeParallax.vue     # Timeline globe parallax
│   ├── JourneyCard.vue       # Journey display card
│   ├── TimelineEvent.vue     # Timeline event component
│   ├── AchievementCard.vue   # Achievement display card
│   └── BlogCard.vue          # Blog post card
├── content/
│   └── blog/                 # Blog posts in Markdown
├── layouts/
│   └── default.vue           # Default layout
├── pages/
│   ├── index.vue             # Homepage
│   ├── about.vue             # About page
│   ├── timeline.vue          # Journey timeline
│   ├── journeys/
│   │   └── index.vue         # Journeys listing
│   ├── achievements.vue      # World records & achievements
│   ├── gallery.vue           # Photo gallery
│   ├── blog/
│   │   ├── index.vue         # Blog listing
│   │   └── [...slug].vue     # Dynamic blog posts
│   └── contact.vue           # Contact form
├── app.vue                   # Root component
├── nuxt.config.ts           # Nuxt configuration
└── tailwind.config.js       # Tailwind configuration
```

## 🎨 Design Features

### Animations & Interactions
- Globe SVG animation on homepage hero
- Parallax globe effects on timeline
- Smooth hover transitions
- Loading animations
- Responsive image galleries with lightbox

### Performance Optimizations
- Lazy loading images
- Optimized SVG animations
- Efficient component structure
- Minimal bundle size
- Fast page transitions

### SEO & Accessibility
- Semantic HTML structure
- Comprehensive meta tags
- Open Graph and Twitter Card support
- Accessible navigation
- Screen reader friendly

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd saloo-neena-journey
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📝 Content Management

### Adding Blog Posts
Create new Markdown files in `content/blog/` with frontmatter:

```markdown
---
title: 'Your Post Title'
description: 'Post description'
date: '2024-01-15'
author: 'Author Name'
category: 'Category'
featured: true
image: '/images/blog/post-image.jpg'
tags: ['tag1', 'tag2']
---

# Your content here...
```

### Managing Gallery Images
Update the `allImages` array in `pages/gallery.vue` to add new photos with proper categorization.

## 🎯 Key Pages

1. **Homepage** (`/`) - Hero section with globe animation and featured content
2. **About** (`/about`) - Detailed biography and story
3. **Timeline** (`/timeline`) - Chronological journey events with parallax effects
4. **Journeys** (`/journeys`) - Filterable journey collection
5. **Achievements** (`/achievements`) - World records and recognition
6. **Gallery** (`/gallery`) - Categorized photo collection with lightbox
7. **Blog** (`/blog`) - Journey stories and updates
8. **Contact** (`/contact`) - Contact form and information

## 🌐 Deployment

The site is optimized for static generation and can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Saloo & Neena Chowdhury for their incredible achievements
- Guinness World Records for official recognition
- The adventure and motor rallying community
- All supporters of their historic journeys

---

*Built with ❤️ to honor the legacy of world record holders Saloo & Neena Chowdhury*
