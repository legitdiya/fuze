# Fuze - University Dating App

## Overview

Fuze is a university-exclusive dating app built as a full-stack web application. The project uses a modern React frontend with TypeScript and a Node.js/Express backend, implementing a swiping-based matching system for university students.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **Styling**: Tailwind CSS with a dark theme design system
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: Zustand for authentication state, React Query for server state
- **Routing**: Wouter for client-side routing
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Storage**: In-memory storage implementation with interface for easy swapping to database
- **Development**: Hot module replacement via Vite integration

### Project Structure
- `client/` - React frontend application
- `server/` - Express backend with API routes
- `shared/` - Shared TypeScript schemas and types
- `migrations/` - Database migration files

## Key Components

### Authentication System
- Custom auth store using Zustand for client-side state
- Mock authentication with form validation
- Protected routes with redirect logic
- No backend authentication implemented (frontend-only prototype)

### User Interface
- **Welcome Page**: Landing page with login/signup options
- **Auth Page**: Toggleable login/signup forms with validation
- **Home Page**: Profile swiping interface with like/skip functionality
- **Profile Page**: User profile management with edit capabilities
- **Navigation**: Responsive navbar with mobile hamburger menu

### Database Schema
- Users table with basic profile information (id, username, password)
- Extensible schema design using Drizzle ORM
- PostgreSQL dialect configured but using in-memory storage

### UI Design System
- Dark theme with purple/pink gradient accents
- Glass-morphism effects and smooth animations
- Mobile-first responsive design
- Custom CSS variables for consistent theming

## Data Flow

1. **User Registration/Login**: Forms validate input → Store user in auth state → Redirect to home
2. **Profile Browsing**: Load mock profiles → Display cards → Handle swipe actions → Show toast notifications
3. **Profile Management**: Load current user → Enable editing → Update auth store → Save changes

## External Dependencies

### Core Dependencies
- **React Ecosystem**: react, react-dom, @tanstack/react-query
- **UI Library**: @radix-ui components, lucide-react icons
- **Styling**: tailwindcss, class-variance-authority, clsx
- **Forms**: react-hook-form, @hookform/resolvers
- **Database**: drizzle-orm, @neondatabase/serverless
- **Utilities**: date-fns, zod, zustand

### Development Tools
- **Build**: vite, @vitejs/plugin-react
- **Database**: drizzle-kit for migrations
- **Runtime**: tsx for TypeScript execution
- **Replit Integration**: @replit/vite-plugin-cartographer

## Deployment Strategy

### Build Process
1. Frontend builds to `dist/public` via Vite
2. Backend bundles to `dist/index.js` via esbuild
3. Static files served from Express in production

### Environment Configuration
- Development: Vite dev server with HMR and backend proxy
- Production: Express serves both API and static frontend
- Database: PostgreSQL connection via DATABASE_URL environment variable

### Scripts
- `npm run dev` - Development with hot reload
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run db:push` - Push schema changes to database

### Deployment Notes
- Designed for Replit hosting with integrated development tools
- Database migrations handled via Drizzle Kit
- Environment variables required: DATABASE_URL
- Frontend routing handled client-side with fallback to index.html