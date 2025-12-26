# Phoenix Bookkeeping Website

A premium, single-page React application built for **Phoenix Bookkeeping**, specializing in project-based bookkeeping cleanup for Business Owners and CPAs.

![Project Banner](public/og-image-placeholder.jpg)

## 🌟 Overview

This project is designed to be a high-conversion landing page that builds trust through aesthetic excellence and clear, persona-driven user flows. It features a modern tech stack, accessible UI components, and smooth animations.

### Key Features
- **Dual Persona Workflows**: Distinct content sections and intake paths for *Business Owners* vs. *CPAs*.
- **Interactive Intake Modals**:
  - Accessible, overlay-based forms powered by **Radix UI**.
  - "Smart Expand" functionality allowing deep links (e.g., `/#intake-business`) to auto-open specific forms.
  - Context-aware validation using **Zod** and **React Hook Form**.
- **Visual Process Maps**: Mobile-responsive timelines that switch from horizontal (desktop) to vertical (mobile) layouts.
- **Private Scheduling**: A hidden, no-index route (`/schedule`) for booking consultations via Calendly.
- **Premium Aesthetics**:
  - **Glassmorphism** sticky navigation.
  - **Framer Motion** scroll reveals and entrance animations.
  - Custom **Tailwind CSS v4** theme with "Navy & Soft Blue" palette.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using `@theme` variables)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Primitives**: [Radix UI](https://www.radix-ui.com/) (Dialog, Slot)
- **Forms**: React Hook Form + Zod

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/phoenix-bookkeeping.git
   cd phoenix-bookkeeping/web
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

## 📁 Project Structure

```text
web/
├── app/
│   ├── globals.css        # Tailwind v4 theme & global styles
│   ├── layout.tsx         # Root layout (Fonts, SEO Metadata, Providers)
│   ├── page.tsx           # Main Landing Page composition
│   ├── robots.ts          # SEO crawler configuration
│   └── schedule/          # Private scheduling page
├── components/
│   ├── sections/          # Major page sections (Hero, BusinessOwners, etc.)
│   │   └── forms/         # Complex form logic components
│   └── ui/                # Reusable atoms (Button, Dialog, Input)
├── lib/
│   ├── intake-context.tsx # Global state for Modal management
│   ├── schemas.ts         # Zod validation schemas
│   └── utils.ts           # Helper functions (cn)
└── public/                # Static assets (images, fonts)
```

## 🎨 Customization Guide

### Colors & Branding
The project uses **Tailwind v4 CSS variables** defined in `app/globals.css`.
- **Navy Palette**: `--color-navy-50` to `--color-navy-900`
- **Blue Palette**: `--color-blue-50` to `--color-blue-600`
- **Fonts**: Configured in `app/layout.tsx` (`Playfair Display` & `Inter`).

### Modifying Forms
Form validation logic is centralized in `lib/schemas.ts`.
To add a field:
1. Update the Zod schema in `lib/schemas.ts`.
2. Add the JSX input field in `components/sections/forms/BusinessOwnerSection.tsx` (or CPASection).

### Connecting to Email
Currently, forms log data to the console (`console.log`). To connect a real backend:
1. Go to `components/sections/forms/BusinessOwnerSection.tsx`.
2. Locate the `onSubmit` function.
3. Replace the `setTimeout` mock with a call to your API (e.g., using `fetch` or a Server Action).

## 🚢 Deployment

The easiest way to deploy is via **Vercel**:

1. Push your code to a Git repository (GitHub/GitLab).
2. Import the project into Vercel.
3. Vercel will auto-detect Next.js and deploy.

### SEO Notes
- The main page (`/`) is indexed.
- The schedule page (`/schedule`) is set to `noindex` in `robots.ts` and page metadata to keep it private.

---

built with ❤️ by [Your Name/Agency]
