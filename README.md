Docker + React + Vite + CI/CD Full Setup Guide
This document explains the complete setup process for Docker, WSL2, React Vite projects, Docker build/run commands, troubleshooting, and free deployment platforms with CI/CD.
1. Install Docker Desktop
•	Download Docker Desktop from the official website.
•	Install Docker Desktop with WSL2 enabled.
•	Restart your PC after installation.
•	Verify Docker installation using: docker --version
2. Install WSL2 and Ubuntu
•	Open PowerShell as Administrator.
•	Run: wsl --install -d Ubuntu
•	Restart your PC.
•	Verify installation using: wsl -l -v
3. Verify Docker Engine
•	Open Docker Desktop.
•	Wait until Docker Engine is running.
•	Test Docker using: docker run hello-world
4. Create React Vite Project
•	Run: npm create vite@latest
•	Install dependencies using: npm install
•	Verify scripts in package.json.
5. Dockerfile for Vite React App
•	Use the following Dockerfile:
•	FROM node:20
•	WORKDIR /app
•	COPY package*.json ./
•	RUN npm install
•	COPY . .
•	EXPOSE 5173
•	CMD ["npm", "run", "dev", "--", "--host"]
6. Create .dockerignore
•	Create a .dockerignore file.
•	Add: node_modules, dist, .git
7. Build Docker Image
•	Run: docker build -t api .
8. Run Docker Container
•	Run: docker run -p 5173:5173 api
•	Open browser: http://localhost:5173
9. Common Errors and Fixes
•	Error: docker command not found → Install Docker Desktop.
•	Error: Docker Desktop unable to start → Install WSL2 and Ubuntu.
•	Error: Missing script dev → Use npm run dev instead of npm dev.
•	Error: Port not accessible → Add --host in Vite command.
10. Production Dockerfile
•	Use multi-stage builds with Nginx for production deployments.
•	FROM node:20 AS build
•	RUN npm run build
•	FROM nginx:alpine
11. Free Deployment Platforms
•	Render
•	Railway
•	Fly.io
•	Koyeb
•	Northflank
•	Vercel
•	Netlify
12. CI/CD Workflow
•	GitHub → GitHub Actions → Docker Hub → Render/Railway
•	Automate Docker builds and deployments using GitHub Actions.
Important Commands
•	docker --version
•	docker build -t api .
•	docker run -p 5173:5173 api
•	docker ps
•	docker images
•	wsl -l -v
•	wsl --update
•	npm run dev
