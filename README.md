# Gym Super Admin Dashboard

<div align="center">

## Neon 3D Super Admin SaaS Frontend

<p>
  A premium, dark-mode, frontend-only dashboard for managing a multi-gym SaaS platform.
</p>

<p>
  <img alt="React" src="https://img.shields.io/badge/React-18-0b0f0b?style=for-the-badge&logo=react&logoColor=42ff00">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-5-0b0f0b?style=for-the-badge&logo=vite&logoColor=42ff00">
  <img alt="Redux Toolkit" src="https://img.shields.io/badge/Redux_Toolkit-State-0b0f0b?style=for-the-badge&logo=redux&logoColor=42ff00">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind-Dark_UI-0b0f0b?style=for-the-badge&logo=tailwindcss&logoColor=42ff00">
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer_Motion-Animations-0b0f0b?style=for-the-badge&logo=framer&logoColor=42ff00">
</p>

```text
              ██████╗ ██╗   ██╗███╗   ███╗
             ██╔════╝ ╚██╗ ██╔╝████╗ ████║
             ██║  ███╗ ╚████╔╝ ██╔████╔██║
             ██║   ██║  ╚██╔╝  ██║╚██╔╝██║
             ╚██████╔╝   ██║   ██║ ╚═╝ ██║
              ╚═════╝    ╚═╝   ╚═╝     ╚═╝

        ███████╗██╗   ██╗██████╗ ███████╗██████╗
        ██╔════╝██║   ██║██╔══██╗██╔════╝██╔══██╗
        ███████╗██║   ██║██████╔╝█████╗  ██████╔╝
        ╚════██║██║   ██║██╔═══╝ ██╔══╝  ██╔══██╗
        ███████║╚██████╔╝██║     ███████╗██║  ██║
        ╚══════╝ ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═╝
```

</div>

---

## Overview

This project is a production-style **Super Admin Dashboard frontend** for a **Gym Management SaaS Platform**.

It is built with:

- React
- Vite
- Redux Toolkit
- React Router DOM
- Framer Motion
- Tailwind CSS

The app is intentionally **frontend only**.

- No backend integration
- No API calls
- No database connection
- All screens use mock data
- Architecture is kept backend-ready for future integration

---

## 3D Design Direction

The interface is designed to feel like a premium enterprise control room:

- Neon green highlight system
- Deep black glassmorphism panels
- Layered card depth and soft glow
- Motion-driven transitions
- Dark theme only
- Desktop-first responsive layout

Color palette:

- `#42ff00` Neon Green
- `#030303` Black
- `#ffffff` White

---

## Features

### Authentication

- Mock login screen
- Email and password fields
- Login button
- Forgot password button

### Layout

- Collapsible sidebar
- Animated navigation
- Protected routes
- Responsive dashboard shell

### Dashboard

- Total gyms
- Active gyms
- Expired gyms
- Total revenue
- Monthly revenue
- Total users
- Active trainers
- Active members
- Revenue graph
- Gym growth graph
- Subscription growth graph

### Gym Management

- Gym listing table
- Search
- Status filters
- Pagination UI
- Actions: view, edit, suspend, activate, delete

### Gym Details

- Gym information
- Subscription details
- Revenue generated
- Member count
- Trainer count
- Tabs for overview, members, trainers, orders, subscription history

### Subscription Management

- Active plans
- Expired plans
- Upcoming renewals
- Pricing cards for Basic, Premium, Enterprise
- Upgrade, downgrade, extend, suspend actions

### Revenue

- Total revenue
- Monthly revenue
- Yearly revenue
- Subscription revenue chart
- Gym revenue ranking

### Analytics

- User growth
- Gym growth
- Revenue growth
- KPI cards
- Mock channel/acquisition table

### Support Center

- Ticket list
- Ticket detail panel
- Status views: Open, Pending, Closed

### Notifications

- System notifications
- Subscription alerts
- Payment alerts

### Settings

- Profile
- Platform settings
- Branding
- Security

---

## Folder Structure

```text
src/
├── app/
├── components/
│   ├── common/
│   └── navigation/
├── constants/
├── features/
│   ├── auth/
│   ├── dashboard/
│   ├── gyms/
│   ├── notifications/
│   ├── revenue/
│   └── subscriptions/
├── hooks/
├── layouts/
├── pages/
├── routes/
└── store/
```

---

## Redux Slices

The project includes mock Redux state for:

- `authSlice`
- `dashboardSlice`
- `gymSlice`
- `subscriptionSlice`
- `revenueSlice`
- `notificationSlice`

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

---

## Mock Login

Use any email and password on the login screen.

Suggested demo email:

```text
admin@gymsuper.io
```

This login is fully mocked in Redux and does not connect to any server.

---

## Frontend Architecture Notes

This project is structured so backend integration can be added later with minimal UI refactoring.

Recommended future integration points:

- Replace mock data with API service layer
- Connect auth slice to real authentication
- Replace chart mock arrays with backend analytics data
- Add real CRUD flows for gyms and subscriptions
- Persist settings and notifications from backend services

---

## Production Notes

- Frontend only
- Clean routing structure
- Reusable UI components
- Animated transitions with Framer Motion
- Tailwind-based design system
- Backend-ready state architecture

---

## License

This project is for internal/product development use unless you define your own license.

