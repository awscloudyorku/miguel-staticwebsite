# AWS Cloud Club @ York University - Project 1: Static Website

A modern, single-page landing website for the AWS Cloud Club at York University, built with React and deployed on AWS Amplify.

## Tech Stack

- **React 19** with **Vite** for fast builds and HMR
- **Tailwind CSS** for utility-first styling
- Custom scroll-reveal animations via Intersection Observer

## Getting Started

```bash
npm install
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview production build
```

## Deployment

This project is deployed via **AWS Amplify**. Pushing to the `main` branch triggers an automatic build and deploy.

---

## Research Report: What is AWS Amplify?

### What It Is

AWS Amplify is a service from Amazon Web Services (AWS) that makes it easy to build, deploy, and host web applications. Think of it like a publishing platform for websites and apps. You give it your code, and it handles everything needed to make your site available on the internet.

You don't need to worry about setting up servers, configuring networking, or managing infrastructure. Amplify takes care of all of that behind the scenes.

### What It Does

Amplify provides two main things:

1. **Hosting** — It takes your website files (HTML, CSS, JavaScript) and serves them to users around the world using a global content delivery network (CDN). This means your site loads fast no matter where someone is visiting from.

2. **CI/CD (Continuous Integration / Continuous Deployment)** — When you connect Amplify to a GitHub repository, it automatically rebuilds and redeploys your site every time you push new code. No manual uploads or extra steps required.

Amplify also supports backend features like user authentication, databases, and file storage, but at its core it is a straightforward way to get a website live on the internet.

### Real-World Use Cases

1. **Student portfolio site** — A student building a personal portfolio can push their code to GitHub and have Amplify automatically deploy it to a live URL. Every time they update their portfolio, the changes go live within minutes with zero manual work.

2. **Startup landing page** — A small team launching a product can use Amplify to host their marketing site. They get HTTPS, a custom domain, and global performance out of the box without needing a dedicated DevOps engineer to manage infrastructure.

---

## Author

Created by Miguel Advincula, for the AWS Cloud Club @ York University