# SkillBanto Marketing Website

## Overview

SkillBanto is a modern full-stack web application designed to help educators and content creators monetize their expertise through online courses, coaching, and digital learning products. The platform features a marketing website built with React and Three.js for interactive 3D elements, backed by an Express.js server with PostgreSQL database integration.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **3D Graphics**: Three.js with React Three Fiber for interactive elements
- **Animations**: Framer Motion for smooth UI animations and GSAP for advanced scroll animations
- **State Management**: Zustand for lightweight state management
- **Build Tool**: Vite for fast development and optimized builds
- **UI Components**: Radix UI components with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: Express sessions with PostgreSQL store
- **API Design**: RESTful API with proper error handling and validation

### Development Environment
- **Package Manager**: npm
- **Type Safety**: TypeScript across frontend, backend, and shared types
- **Code Quality**: ESBuild for fast compilation
- **Development Server**: tsx for TypeScript execution in development

## Key Components

### 1. Marketing Pages
- **HomePage**: Hero section with animated video background, feature showcases, and interactive elements
- **AboutPage**: Team showcase with detailed member profiles
- **PricingPage**: Flexible pricing plans with calculator functionality
- **ProductsPage**: Feature overview with detailed product information
- **ResourcesPage**: Help center, community, and educational resources

### 2. Interactive Elements
- **3D Components**: Logo3D, Card3D with custom shaders for neon and hologram effects
- **Animation Systems**: Scroll-triggered animations, particle effects, and smooth transitions
- **Dynamic Content**: Real-time revenue counters, feature slideshows, and creator showcases

### 3. Database Schema
- **Users**: User profiles with authentication and role management
- **Courses**: Course creation and management system
- **Modules/Lessons**: Hierarchical content structure
- **Enrollments**: Student-course relationship tracking
- **Pages**: Dynamic page content management

### 4. External Integrations
- **Facebook Pixel**: Marketing analytics and conversion tracking
- **External API**: Integration with Skillbanto web application for user management

## Data Flow

1. **Marketing Flow**: Visitors browse marketing pages → View features and pricing → Click CTA buttons → Redirect to external Skillbanto app for signup
2. **Content Management**: Admins can create and edit dynamic pages through the page editor system
3. **Analytics Flow**: User interactions tracked via Facebook Pixel for marketing optimization
4. **Database Operations**: All data operations use Drizzle ORM with proper type safety and validation

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React Router, React Query)
- Three.js ecosystem (@react-three/fiber, @react-three/drei)
- Animation libraries (Framer Motion, GSAP)
- UI library (Radix UI components)

### Backend Dependencies
- Express.js with middleware (cors, session management)
- Neon PostgreSQL serverless client
- Drizzle ORM with PostgreSQL adapter
- Zod for runtime type validation

### Build and Development
- Vite for frontend bundling
- ESBuild for backend compilation
- TypeScript for type safety
- PostCSS with Tailwind CSS

## Deployment Strategy

### Build Process
The application uses a custom build script (`build.sh`) that:
1. Cleans previous builds
2. Builds React frontend to `dist/public/`
3. Builds Express backend to `dist/index.js`
4. Copies index.html to dist root for deployment detection
5. Verifies build structure

### Deployment Options
1. **Autoscale Deployment (Recommended)**: Full-stack deployment using Express server
2. **Static Deployment**: Frontend-only deployment for static hosting

### Environment Configuration
- Development: Local development with hot reload
- Production: Cloud Run deployment with environment variables
- Database: Neon PostgreSQL with connection pooling

### Required Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `EXTERNAL_API_URL`: Skillbanto API endpoint
- `EXTERNAL_API_KEY`: API authentication key
- `EXTERNAL_WEBAPP_URL`: Skillbanto web application URL

## Changelog

- August 16, 2025. **PROJECT MIGRATION COMPLETED**: Successfully migrated SkillBanto marketing website from Replit Agent to standard Replit environment. All functionality verified working including React frontend, Express backend, and database connectivity. Project ready for development and deployment.
- July 1, 2025. **CRITICAL DEPLOYMENT FIXES COMPLETED**: Successfully resolved all ES module/CommonJS deployment errors with comprehensive solution:
  ✅ Fixed ESBuild configuration to output CommonJS format instead of ESM
  ✅ Removed "type": "module" from deployment package.json to allow CommonJS execution
  ✅ Updated server to bind to port 5000 on 0.0.0.0 interface with proper error handling
  ✅ Converted all ES6 imports to CommonJS requires in production build
  ✅ Updated deployment configuration with correct port mapping (5000 -> 80)
  ✅ Created deploy-fixes.sh script with verification and testing
  ✅ Verified CommonJS build works correctly with API endpoints
  All deployment compatibility issues resolved and ready for production.
- July 1, 2025. **DEPLOYMENT ISSUES RESOLVED**: Applied comprehensive fixes for ES module/CommonJS deployment errors. Removed "type": "module" requirement by creating dedicated CommonJS production build. Updated build scripts to generate CommonJS format with proper port configuration (5000 -> 80 mapping). Created deployment-ready scripts including full React build and CommonJS server bundle. All suggested deployment fixes implemented and tested successfully.
- July 1, 2025. Prepared full React application for deployment: Set up deployment configuration for complete app with 1900+ modules to build on deployment servers (local build times out). Includes all features: video backgrounds, 16 pages, 22 components, CreatorShowcase positioning, black/purple backgrounds, Facebook Pixel ID: 1287437309222426, animations, React Router. Backend server ready (30.5kb)
- June 28, 2025. Implemented consistent green/white theme with gradient green colors throughout all navigation pages matching "Start for Free" button styling
- June 27, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.