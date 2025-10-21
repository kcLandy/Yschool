# School Tracking API — Squelette

Ce dépôt contient un squelette pour une API REST versionnée (v1 / v2) destinée au suivi scolaire (cours, enseignants, étudiants, notes).

## Structure
- `src/` : code source (models, controllers, services, middlewares, routes)
- `migrations/` : migrations Sequelize (placeholders)
- `seeders/` : seeders Sequelize (placeholders)
- `.env.example` : exemple de configuration

## Entités (proposées)
- User (id, email, passwordHash, name, role[admin|teacher|student])
- Course (id, title, description, teacherId)
- Enrollment (id, courseId, studentId)
- Grade (id, enrollmentId, value, comment)
- Comment (id, courseId, authorId, content)

## Commandes
```
npm install
cp .env.example .env
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
npm run dev
```

## Livrables fournis
- Squelette de code (models, controllers, services)
- Middlewares : error-handler.js, not-found.js, deprecate.js
- `.env.example`
- Export Postman placeholder (collection.json)
- PDF final contenant la documentation synthétique (dans le dossier `docs/`)

