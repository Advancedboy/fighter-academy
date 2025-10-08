# 🥋 Martial Arts Academy Platform

A full-stack web application for a martial arts academy.  
Users can book classes, choose a coach, view schedules, and manage their profiles.  
Admins can manage coaches, classes, and students via an admin panel.

## 🚀 Features

- 🔐 Authentication & Authorization (JWT)
- 📅 Class booking system with capacity control
- 🧑‍🏫 Coach profiles with schedules
- 👤 User dashboard (upcoming classes & history)
- 🛠 Admin panel for academy management
- 💾 PostgreSQL + Prisma ORM
- 🎨 Responsive UI with Next.js + TailwindCSS
- 🧪 Tested with Jest & Cypress

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, TailwindCSS
- **Backend:** NestJS, Node.js, Prisma ORM
- **Database:** PostgreSQL
- **Deployment:** Docker, Vercel (frontend), Render/Railway (backend)
- **Other:** ESLint, Prettier, Husky

## 📂 Project Structure

martial-arts-academy/
├── backend/ # NestJS API
├── frontend/ # Next.js client
├── docker/ # Docker & docker-compose configs
└── docs/ # Documentation & diagrams

## 📝 Getting Started

Clone the repository and run locally with Docker:

```bash
git clone https://github.com/Advancedboy/fighter-academy.git
docker-compose up --build
```

Frontend will be available at http://localhost:3000
Backend will be available at http://localhost:4000

📜 License

This project is licensed under the MIT License - see the LICENSE
