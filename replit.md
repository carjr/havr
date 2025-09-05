# HAVR Tecnologia Website

## Overview

This is a modern institutional website for HAVR Tecnologia, a technology company specializing in custom systems, mobile applications, and AI solutions. The website is built as a single-page application using React with a full-stack architecture, designed to showcase the company's services and convert visitors into clients.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: Comprehensive set of Radix UI primitives wrapped in custom components
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript throughout the stack
- **API Design**: RESTful endpoints under `/api` prefix
- **File Serving**: Static file serving for assets and built frontend
- **Development**: Hot module replacement with Vite integration
- **Error Handling**: Centralized error middleware with proper HTTP status codes

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Definition**: Type-safe schema definitions in shared directory
- **Migrations**: Drizzle Kit for database migrations
- **Connection**: Neon Database serverless PostgreSQL
- **Session Storage**: PostgreSQL-backed sessions with connect-pg-simple

### Authentication and Authorization
- **User Management**: Basic user schema with username/password authentication
- **Session Handling**: Express sessions with PostgreSQL storage
- **Password Security**: Prepared for password hashing implementation
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle ORM**: Type-safe database toolkit and query builder
- **connect-pg-simple**: PostgreSQL session store for Express

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless component primitives for accessibility
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets including social media icons

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety across the entire stack
- **ESBuild**: Fast bundling for production builds
- **Replit Integration**: Development environment optimization for Replit

### Communication Features
- **WhatsApp Integration**: Direct links for customer communication
- **Contact Forms**: Form handling with validation and feedback
- **Toast Notifications**: User feedback system for form submissions

The application follows a monorepo structure with clear separation between client, server, and shared code, enabling type safety across the entire stack while maintaining clean architectural boundaries.