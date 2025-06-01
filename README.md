# RealEs - Modern Real Estate Website

<a href="https://ibb.co/gMxrvVTk"><img src="https://i.ibb.co/C5fwJ27R/Screenshot-From-2025-06-01-12-23-58.png" alt="Screenshot-From-2025-06-01-12-23-58" border="0"></a>

## Overview

RealEs is a modern, responsive real estate website built with Next.js and Tailwind CSS. The website features a clean, professional design with interactive elements, animations, and a consistent visual language throughout all components.

## Features

- 🏠 **Modern UI Design**: Sleek interface with glassmorphism effects, gradients, and animations
- 📱 **Fully Responsive**: Optimized for all device sizes from mobile to desktop
- 🌈 **Consistent Visual Language**: Emerald accent color scheme used consistently across components
- ✨ **Interactive Elements**: Hover effects, animations, and transitions for enhanced user experience
- 🖼️ **Featured Property Listings**: Showcase properties with detailed information
- 📝 **Service Showcases**: Highlight key real estate services offered
- 👥 **Team Profiles**: Introduce the company's team members
- 💬 **Client Testimonials**: Display client feedback with ratings

## Components

1. **Navbar**: Responsive navigation with mobile drawer
2. **Hero**: Striking hero section with animated background elements
3. **Search Form**: Advanced property search functionality
4. **How It Works**: Step-by-step guide with modern card layout
5. **Featured Properties**: Property listings with hover effects and details
6. **Services**: Service showcase with feature boxes and icons
7. **About Us**: Company information with statistics and team section
8. **Testimonials**: Client testimonials with ratings and profile images
9. **Footer**: Comprehensive footer with contact information

## Technologies Used

- **Next.js**: React framework for production
- **TypeScript**: For type-safe code
- **Tailwind CSS**: For styling with utility classes
- **Lucide Icons**: For beautiful SVG icons
- **Custom Animations**: Implemented with CSS keyframes

## Design Elements

- **Color Scheme**: Emerald green accent with dark navy/black backgrounds
- **Typography**: Clean, modern sans-serif fonts
- **Visual Effects**:
  - Glassmorphism for cards and forms
  - Gradient backgrounds and text
  - Floating animated elements
  - Hover transitions
  - Consistent border treatments

## Getting Started

### Prerequisites

- Node.js (v18.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/real-es.git
cd real-es
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
real-es/
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js app directory
│   ├── components/     # React components
│   ├── constants/      # Constants and data
│   └── lib/            # Utility functions
├── next.config.ts      # Next.js configuration
└── tailwind.config.js  # Tailwind CSS configuration
```

## Customization

- Update property listings in `constants/index.ts`
- Modify color scheme in `globals.css`
- Replace images in the `public` directory
- Adjust animations and transitions in `globals.css`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
