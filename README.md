# Backend Forms

## 📌 Descripción

Backend desarrollado para la recepción, validación y persistencia de datos provenientes de formularios web.

La API permite almacenar información de usuarios (nombre, edad, barrio, profesión, contacto y consentimiento) en una base de datos PostgreSQL, siguiendo una arquitectura en capas y buenas prácticas de desarrollo backend.

Este proyecto fue diseñado como base escalable para futuras integraciones (CRM, dashboards, automatizaciones, etc.).
---

## 🛠️ Stack Tecnológico

- Node.js
- Express.js
- Sequelize (ORM)
- PostgreSQL
- dotenv
- cors
---

## 🧱 Arquitectura

El proyecto sigue una arquitectura en capas:

```
Request HTTP
     ↓
Routes
     ↓
Controllers
     ↓
Services
     ↓
Models (Sequelize)
     ↓
PostgreSQL
```

Separación de responsabilidades:

- **Routes**: Definición de endpoints
- **Controllers**: Manejo de requests/responses
- **Services**: Lógica de negocio
- **Models**: Acceso a datos con Sequelize
- **Middlewares**: Validación y manejo de errores

## 📁 Estructura del Proyecto

```
src/
├── config/        # Configuración (DB, env)
├── controllers/   # Controladores
├── services/      # Lógica de negocio
├── models/        # Modelos Sequelize
├── routes/        # Endpoints
├── middlewares/   # Validaciones y errores
├── database/      # Conexión y sync DB
├── app.js
└── server.js
```

---
## 🔐 Seguridad

- Variables sensibles protegidas con `.env`
- `.env` ignorado en `.gitignore`
- Sequelize previene SQL Injection
- Validaciones en middleware

---
