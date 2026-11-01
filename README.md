# React + Express Starter

A small practice project with a React frontend and an Express API, kept in separate directories. The current frontend is a simple Hello World screen; the API returns a JSON greeting. This repository is a starting point, not a finished full-stack product.

## What is implemented

- **React frontend:** a simple page with headings, text, and a button.
- **Express API:** `GET /api` responds with `{ "message": "Hello from the backend!" }`.
- **Development environment:** a Dockerfile and Docker Compose configuration for running both services.

The frontend does **not** currently fetch from the API.

## Structure

```text
frontend/            React application (Create React App)
backend/server.js    Express API
dockerfile           Development container
docker-compose.yml   Compose configuration
```

## Run locally

Requires Node.js and npm. Use two terminals:

**Terminal 1 — backend**

```bash
cd backend
npm install
npm start
```

**Terminal 2 — frontend**

```bash
cd frontend
npm install
npm start
```

- React UI: http://localhost:3000
- API: http://localhost:5000/api

Alternatively, use the included development Compose configuration from the repository root:

```bash
docker compose up --build
```

## Next steps

- Connect the React UI to `GET /api`.
- Add meaningful application features and tests.
- Add screenshots once the UI moves beyond the starter screen.

## Source

- [Frontend](./frontend/)
- [Backend](./backend/server.js)
