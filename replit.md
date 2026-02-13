# TestimonialKit Landing Page

## Overview
A validation landing page for TestimonialKit - an affordable testimonial collection tool. The page collects email signups from potential early users (indie hackers, SaaS founders) who want a cheaper alternative to Senja and Testimonial.to.

## Recent Changes
- 2026-02-13: Initial landing page built with Hero, Problem, Pricing, and CTA sections
- 2026-02-13: Email signup API endpoint and PostgreSQL storage implemented
- 2026-02-13: Form validation with Zod, duplicate email handling

## Project Architecture
- **Frontend:** React + Tailwind CSS + shadcn/ui components, single landing page
- **Backend:** Express.js with PostgreSQL database for email signups
- **Database:** PostgreSQL with Drizzle ORM (signups table)

### Key Files
- `client/src/pages/landing.tsx` - Main landing page
- `client/src/components/hero-section.tsx` - Hero with nav, headline, widget preview
- `client/src/components/problem-section.tsx` - 3 problems solved
- `client/src/components/pricing-section.tsx` - Free/Starter/Pro pricing cards
- `client/src/components/cta-section.tsx` - Final CTA with signup form + footer
- `client/src/components/signup-form.tsx` - Email collection form
- `shared/schema.ts` - Data models (users, signups)
- `server/routes.ts` - API routes (POST /api/signups, GET /api/signups/count)
- `server/storage.ts` - DatabaseStorage implementation

### API Endpoints
- `POST /api/signups` - Create email signup (email, plan)
- `GET /api/signups/count` - Get total signup count

## User Preferences
- English-speaking target audience
- Blue/white SaaS color scheme
- Inter font family
- Clean, simple, non-corporate tone
- "Made by indie hackers, for indie hackers"
