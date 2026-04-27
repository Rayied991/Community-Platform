# Craftwave - A community platform where creators share what they've built and discover what's launching!
Get complete access to Craftwave, a community-driven platform that connects creators, builders, and innovators in one vibrant space where authentic launches meet genuine feedback.
## ⚡ Features

### 🛠️ Core Technologies:

- 🚀 Next.js 16 App Router for server-side rendering, routing, and API endpoints with Server Components

- ⚛️ React 19 for building interactive user interfaces with reusable components

- 🔑 Clerk for secure authentication with Passkeys, Github, and Google Sign-in

- 🎨 ShadcN UI for accessible, customizable React components

- 💾 NeonDB (PostgreSQL) for serverless database storage of products and user data

- 🗄️ Drizzle ORM for type-safe database queries and migrations

- 📜 TypeScript for static typing and enhanced development experience

- 💅 TailwindCSS 4 for utility-first, responsive styling

- ✅ Zod for schema validation and form handling

- 🎯 React Hook Form for efficient form management

### 💫 Application Features:

- 📝 Product submission with validation and moderation

- 🎨 Beautiful, interactive product cards and layouts

- 🔒 Secure file handling and processing

- 🔐 Protected routes and API endpoints

- 👨‍💼 Admin panel for product management and moderation

- 📊 Featured products and recently launched sections

- 📱 Responsive design for mobile and desktop

- 🔄 Real-time updates and path revalidation

- 🚀 Production-ready deployment

- 🔔 Toast notifications for submission status, updates, and error handling

- 📈 Performance optimizations

- 🔍 SEO-friendly product pages

- 🗳️ Voting system for community engagement

- 🏷️ Tag-based product categorization

## 🚀 Getting Started

### Prerequisites
 
- Node.js 18+
- A [Clerk](https://clerk.com) account
- A [NeonDB](https://neon.tech) database


To get started with this project:

1. Fork the repo

2. Copy the .env.example variables into a separate .env.local file

3. Create the required credentials:

   - Clerk authentication keys

   - NeonDB database connection string

## 📁 Project Structure
 
```
Craftwave/
├── app/
│   ├── admin/
│   ├── explore/
│   ├── products/
│   └── submit/
├── components/
│   ├── admin/
│   ├── common/
│   ├── forms/
│   ├── Landing-Page/
│   ├── products/
│   └── ui/
├── db/
├── drizzle/
├── lib/
├── public/
└── README.md
```
 
---

## 🔨 How to Fork and Clone

1. Click the "Fork" button in the top right corner of this repository to create your own copy

2. Clone your forked repository to your local machine

3. Install dependencies with `npm install`

4. Set up your environment variables

5. Run database migrations with `npx drizzle-kit push`

6. Run the development server with `npm run dev`

## 🤝 Contributing
 
Contributions are welcome! Please open an issue first to discuss any significant changes.
 
1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request
---
## 🙏 Acknowledgements
 
- [Clerk](https://go.clerk.com/DoJyZw3) — Authentication infrastructure
- [NeonDB](https://neon.tech) — Serverless PostgreSQL
- [Drizzle ORM](https://orm.drizzle.team) — Type-safe database layer
- [shadcn/ui](https://ui.shadcn.com) — UI component system
- [Next.js](https://nextjs.org) — The React framework
---