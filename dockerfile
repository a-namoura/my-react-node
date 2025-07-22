FROM node:18
WORKDIR /app

COPY backend ./backend
RUN cd backend && npm install

COPY frontend ./frontend
RUN cd frontend && npm install

RUN npm install -g nodemon concurrently
EXPOSE 3000 5000
CMD concurrently "cd frontend && npm start" "cd backend && npm start"
