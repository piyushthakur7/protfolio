# Portfolio Website

## Overview

This is a modern portfolio website built with React and Express.js showcasing a developer's work, skills, and providing a contact form for potential clients or employers. The application features a responsive design with dark theme styling, smooth animations, and a professional layout suitable for web developers and data scientists.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Comprehensive component library built on Radix UI primitives with shadcn/ui
- **Styling**: Tailwind CSS with CSS variables for theming and responsive design
- **State Management**: TanStack Query for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database Layer**: Drizzle ORM with PostgreSQL schema definitions
- **Storage**: In-memory storage implementation with interface for easy database migration
- **API Design**: RESTful endpoints for contact form submissions and message retrieval
- **Development**: Hot module replacement with Vite integration for seamless development experience

### Database Schema
- **Users Table**: Basic user authentication structure with username and password fields
- **Contact Messages Table**: Stores form submissions with name, email, message content, and timestamps
- **Schema Validation**: Zod integration with Drizzle for runtime type checking and validation

### UI/UX Design Decisions
- **Component System**: Modular design with reusable UI components following design system principles
- **Theme**: Dark theme with green accent colors for modern, professional appearance
- **Typography**: Multiple font families including Inter, DM Sans, and Fira Code for varied content types
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive layouts
- **Animations**: Smooth transitions and hover effects for enhanced user experience

### Development Experience
- **Type Safety**: Full TypeScript integration across frontend, backend, and shared schemas
- **Code Quality**: ESM modules throughout the codebase for modern JavaScript standards
- **Path Aliases**: Simplified imports with @ aliases for cleaner code organization
- **Hot Reload**: Development server with instant updates and error overlay

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database driver for scalable data storage
- **drizzle-orm**: Type-safe ORM for database operations and schema management
- **@tanstack/react-query**: Powerful data synchronization for React applications

### UI and Styling
- **@radix-ui/***: Comprehensive collection of accessible, unstyled UI primitives
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **class-variance-authority**: Type-safe variant API for component styling
- **lucide-react**: Modern icon library with consistent design

### Form and Validation
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Form validation resolver for multiple schema libraries
- **zod**: TypeScript-first schema validation library

### Development Tools
- **vite**: Next-generation frontend build tool with fast HMR
- **tsx**: TypeScript execution environment for Node.js development
- **esbuild**: Fast JavaScript bundler for production builds

### Additional Features
- **date-fns**: Modern date utility library for timestamp formatting
- **nanoid**: Secure URL-friendly unique string ID generator
- **wouter**: Minimalist routing library for React applications