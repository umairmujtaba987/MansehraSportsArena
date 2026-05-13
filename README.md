# 🏟️ Mansehra Sports Arena

A comprehensive full-stack web application for managing sports facilities, bookings, and events. Built with modern web technologies featuring real-time capabilities, secure authentication, and a responsive design.


---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Building for Production](#building-for-production)
- [Development](#development)
- [API Documentation](#api-documentation)
- [Database](#database)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

---

## 🎯 Overview

Mansehra Sports Arena is a modern full-stack application designed to streamline sports facility management. It provides a seamless experience for users to book sports facilities, manage events, and participate in community sports activities.

The application follows a monorepo architecture with:
- **Frontend:** React-based client with Vite build tool
- **Backend:** Express.js server with WebSocket support
- **Shared:** Common types and utilities
- **Database:** PostgreSQL with Drizzle ORM

---

## ✨ Features

### Core Features
- 🏢 **Facility Management** - Browse and manage sports facilities
- 📅 **Booking System** - Real-time facility booking and reservations
- 🔐 **Secure Authentication** - User authentication with Passport.js
- 👥 **User Management** - Profile management and role-based access
- 💬 **Real-time Communication** - WebSocket-powered notifications
- 🎨 **Responsive Design** - Mobile-first, modern UI with Tailwind CSS
- ⚡ **Performance Optimized** - Fast load times with Vite and optimized assets

### Technical Highlights
- TypeScript for type safety
- Radix UI components for accessibility
- Drizzle ORM for database operations
- BCrypt for secure password hashing
- Session-based authentication
- PostgreSQL database
- Real-time updates with WebSockets

---

## 🛠️ Tech Stack

### Frontend
- **React** 19.2.0
- **Vite** 5.4.2 - Build tool and dev server
- **TypeScript** 5.6.3
- **Tailwind CSS** 3.4.17 - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible components
- **React Query** (@tanstack/react-query) 5.90.10 - Server state management
- **Wouter** 3.7.1 - Lightweight router

### Backend
- **Express** 5.1.0 - Web server framework
- **Passport** 0.7+ - Authentication middleware
- **Drizzle ORM** 0.44.7 - TypeScript ORM
- **PostgreSQL** 16 - Database
- **WebSockets (ws)** 8.18.3 - Real-time communication
- **Bcrypt** 2.4.3 - Password hashing

### Development Tools
- **Vite Plugins** - Cartographer and Dev Banner for Replit integration
- **PostCSS** - CSS processing
- **ESBuild** 0.25.0 - JavaScript bundler
- **Drizzle Kit** 0.31.4 - ORM utilities

---

## 📁 Project Structure

```
MansehraSportsArena/
├── client/                    # React frontend
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   ├── pages/            # Page components
│   │   ├── hooks/            # Custom React hooks
│   │   ├── styles/           # Global styles
│   │   └── App.tsx           # Main app component
│   └── index.html            # HTML entry point
├── server/                    # Express backend
│   ├── routes/               # API routes
│   ├── middleware/           # Express middleware
│   ├── db/                   # Database setup and migrations
│   └── index.ts              # Server entry point
├── shared/                    # Shared types and utilities
│   ├── types/                # TypeScript interfaces
│   └── constants/            # Shared constants
├── attached_assets/          # Static assets
├── dist/                      # Built files (generated)
│   └── public/               # Frontend build output
├── package.json              # Root dependencies
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── drizzle.config.ts         # Drizzle ORM configuration
├── vercel.json               # Vercel deployment config
└── .replit                   # Replit configuration

```

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

### Required
- **Node.js** 20.x or higher ([Download](https://nodejs.org/))
- **npm** 10.x or higher (comes with Node.js)
- **PostgreSQL** 16 or higher ([Download](https://www.postgresql.org/download/))

### Recommended
- **Git** 2.0+ for version control
- **Visual Studio Code** or your preferred code editor
- **Postman** or **Thunder Client** for API testing

---

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/umairmujtaba987/MansehraSportsArena.git
cd MansehraSportsArena
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all dependencies listed in `package.json` for the monorepo structure.

### Step 3: Set Up Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/mansehra_sports_arena

# Session Configuration
SESSION_SECRET=your-super-secret-session-key-change-this-in-production

# Authentication
PASSPORT_SECRET=your-passport-secret-key

# Optional: API Keys and URLs
VITE_API_URL=http://localhost:5000
VITE_WS_URL=ws://localhost:5000
```

**Important Security Notes:**
- Change all secret keys in production
- Never commit `.env.local` to version control
- Use strong, random strings for secrets
- Add `.env.local` to `.gitignore`

### Step 4: Set Up PostgreSQL Database

#### Option A: Local Installation

1. **Start PostgreSQL service:**
   ```bash
   # macOS
   brew services start postgresql

   # Linux (Ubuntu/Debian)
   sudo systemctl start postgresql

   # Windows
   # Start from Services or PostgreSQL Stack Builder
   ```

2. **Create a new database:**
   ```bash
   createdb mansehra_sports_arena
   ```

3. **Update DATABASE_URL in `.env.local`:**
   ```env
   DATABASE_URL=postgresql://postgres:password@localhost:5432/mansehra_sports_arena
   ```

#### Option B: Using Docker

```bash
docker run --name mansehra-postgres \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=yourpassword \
  -e POSTGRES_DB=mansehra_sports_arena \
  -p 5432:5432 \
  -d postgres:16
```

### Step 5: Run Database Migrations

```bash
npm run migrate
```

This will apply all pending migrations to your database using Drizzle.

---

## ⚙️ Configuration

### Vite Configuration

The `vite.config.ts` is pre-configured with:
- React plugin support
- Path aliases (`@`, `@shared`, `@assets`)
- Proper source root and output directories
- Replit-specific plugins (auto-disabled in production)

### Tailwind CSS

Tailwind is configured in `tailwind.config.ts` with:
- Custom theme extensions
- Responsive breakpoints
- Animation utilities
- Dark mode support

### TypeScript

TypeScript configuration in `tsconfig.json` provides:
- Strict type checking
- Modern ES2020+ target
- Module resolution with path aliases
- React JSX support

### Drizzle ORM

Database schema and configuration are managed through:
- `drizzle.config.ts` - ORM configuration
- `server/db/schema.ts` - Database schema definitions
- Auto-migrations on startup

---

## 🎮 Running the Application

### Development Mode

**Start the development server with hot-reload:**

```bash
npm run dev
```

This command will:
- Start the Vite dev server (Frontend: http://localhost:5173)
- Start the Express backend (API: http://localhost:5000)
- Enable hot module replacement for React components
- Watch for TypeScript changes

The application will be available at: **http://localhost:5173**

### Production Mode

**Build the application:**

```bash
npm run build
```

This generates:
- Optimized frontend bundle in `dist/public/`
- Compiled backend server

**Start the production server:**

```bash
npm run start
```

The application will run on the configured PORT (default: 5000)

---

## 🏗️ Building for Production

### Step 1: Build the Project

```bash
npm run build
```

### Step 2: Set Production Environment Variables

Create `.env.production` with production-specific values:

```env
NODE_ENV=production
PORT=5000
DATABASE_URL=postgresql://prod_user:prod_password@prod_host:5432/mansehra_sports_arena
SESSION_SECRET=your-production-session-secret-key-change-this
PASSPORT_SECRET=your-production-passport-secret
```

### Step 3: Run Production Build

```bash
npm run start
```

### Step 4: Verify Deployment

- Check the application at your deployment URL
- Test all critical features
- Monitor server logs for errors

---

## 💻 Development

### Code Structure Best Practices

```
client/src/
├── components/          # Reusable components
│   ├── common/         # Shared across pages
│   ├── forms/          # Form-related components
│   └── layout/         # Layout components
├── pages/              # Page-level components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── styles/             # Global and module styles
├── types/              # TypeScript types
└── App.tsx             # Root component
```

### Creating a New Feature

1. **Create a page component:**
   ```typescript
   // client/src/pages/NewFeature.tsx
   import { useState } from 'react';
   
   export default function NewFeature() {
     return (
       <div>
         {/* Your component code */}
       </div>
     );
   }
   ```

2. **Add a route in `App.tsx`:**
   ```typescript
   import NewFeature from './pages/NewFeature';
   
   <Route path="/new-feature" component={NewFeature} />
   ```

3. **Create API endpoints in backend:**
   ```typescript
   // server/routes/newFeature.ts
   import { Router } from 'express';
   
   const router = Router();
   
   router.get('/api/new-feature', (req, res) => {
     // Handle request
     res.json({ message: 'Success' });
   });
   
   export default router;
   ```

### Running Tests

Currently, the project uses:
- TypeScript for type safety
- Vite for fast feedback during development

To add testing:

```bash
npm install --save-dev vitest @testing-library/react
```

### Linting and Formatting

Recommended tools:
- **ESLint** - JavaScript/TypeScript linting
- **Prettier** - Code formatting

```bash
npm install --save-dev eslint prettier eslint-config-prettier
```

---

## 📚 API Documentation

### Authentication Endpoints

**POST** `/api/auth/register`
- Register a new user
- Body: `{ email, password, name }`

**POST** `/api/auth/login`
- User login
- Body: `{ email, password }`

**POST** `/api/auth/logout`
- User logout
- Requires authentication

**GET** `/api/auth/me`
- Get current user info
- Requires authentication

### Facility Endpoints

**GET** `/api/facilities`
- List all facilities

**GET** `/api/facilities/:id`
- Get facility details

**POST** `/api/facilities`
- Create new facility (admin only)

**PUT** `/api/facilities/:id`
- Update facility (admin only)

### Booking Endpoints

**GET** `/api/bookings`
- List user's bookings
- Requires authentication

**POST** `/api/bookings`
- Create a new booking
- Body: `{ facilityId, date, timeSlot }`
- Requires authentication

**DELETE** `/api/bookings/:id`
- Cancel a booking
- Requires authentication

### WebSocket Events

**Connect** - `/ws`
```typescript
// Listen for real-time updates
socket.on('booking-update', (data) => {
  // Handle booking updates
});
```

---

## 🗄️ Database

### Schema Overview

The database includes tables for:
- **users** - User accounts and authentication
- **facilities** - Sports facilities information
- **bookings** - Facility bookings and reservations
- **slots** - Available time slots
- **reviews** - User reviews and ratings

### Running Migrations

```bash
# Create a new migration
npm run migrate:create

# Apply migrations
npm run migrate

# Rollback last migration
npm run migrate:rollback
```

### Database Backups

```bash
# Export database
pg_dump mansehra_sports_arena > backup.sql

# Import database
psql mansehra_sports_arena < backup.sql
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/MansehraSportsArena.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the code structure guidelines
   - Write clear, descriptive commit messages
   - Test your changes thoroughly

4. **Commit your changes**
   ```bash
   git commit -m "feat: add your feature description"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Provide a clear description of changes
   - Reference any related issues
   - Include screenshots for UI changes

### Code Style Guidelines

- Use TypeScript for all new code
- Follow Prettier formatting
- Use ESLint-compliant code
- Write descriptive variable and function names
- Add JSDoc comments for complex logic

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🆘 Support

### Getting Help

- **Documentation:** Check the [design guidelines](./design_guidelines.md)
- **Issues:** Report bugs on [GitHub Issues](https://github.com/umairmujtaba987/MansehraSportsArena/issues)
- **Discussions:** Join [GitHub Discussions](https://github.com/umairmujtaba987/MansehraSportsArena/discussions)

### Common Issues

#### Database Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:5432
```
**Solution:** Ensure PostgreSQL is running and DATABASE_URL is correct

#### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::5000
```
**Solution:** Change PORT in .env.local or kill the process using the port

#### Module Not Found
```
Error: Cannot find module '@/...'
```
**Solution:** Ensure dependencies are installed: `npm install`

#### Hot Reload Not Working
```
Solution: Restart the dev server: npm run dev
```

---

## 📞 Contact & Social

- **GitHub:** https://github.com/umairmujtaba987
- **Issues & Feedback:** [GitHub Issues](https://github.com/umairmujtaba987/MansehraSportsArena/issues)

---

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- UI Components from [Radix UI](https://www.radix-ui.com/)
- Database ORM by [Drizzle](https://orm.drizzle.team/)
- Deployed on [Vercel](https://vercel.com/)

---

**Last Updated:** May 13, 2026

**Status:** ✅ Active Development

---

*Happy coding! 🚀*
