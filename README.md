 ```
 _____                    _       _       
|_   _|__ _ __ ___  _ __ | | __ _| |_ ___ 
  | |/ _ \ '_ ` _ \| '_ \| |/ _` | __/ _ \
  | |  __/ | | | | | |_) | | (_| | ||  __/
  |_|\___|_| |_| |_| .__/|_|\__,_|\__\___|
                   |_|                    
==========================================
```
# Template for Next.js 13 + Typescript + React + MUI v5

This template project features the following technologies:
- Next.js 13
- Typescript
- React
- MUI v5

It does not include the use of Tailwind CSS (for compatibility reasons)


## Getting Started

Install pnpm (if not already installed)
```bash
npm install -g pnpm
```

Install the dependencies:
```bash
pnpm install
```

Run the development server from console or via VSC launch configuration (see below):

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Launch configurations (for debugging)
You can use three different launch configurations:
1. Next.js: debug server-side
2. Next.js: debug client-side
3. Next.js: debug full stack

Source: https://tymick.me/blog/debug-nextjs-with-vs-code


# Docker Setup
A Dockerfile is included to build a production image of the project.
An additional docker-compose file is included to start the container on port 80.

Run `docker buildx build -t my-next-app .`
Use `docker compose run -d` to start the container with the docker compose configuration.
Check the container running with the URL http://localhost


# MUI v5 with Next.js 
Up to 2023-08-07 it was not yet possible to get the combination of technologies for this 
project without manual intervation.
The following describes the already executed steps to have MUI v5 with Next.js working
I followed this guide: https://www.youtube.com/watch?v=w0A08C79bgU
[GitHub Repo with sample code](https://github.com/SimulShift/Next13-App-Router-And-Mui5-Example)


## Create a new Next.js project

Run the following commands inside the repo to start (avoid having a VSC workspace file)

```bash
npx create-next-app@latest .
Would you like to use TypeScript? … Yes
Would you like to use ESLint? …  Yes
Would you like to use Tailwind CSS? … No 
Would you like to use `src/` directory? … Yes
Would you like to use App Router? (recommended) … Yes
Would you like to customize the default import alias? › No 
```

## Test the project
Start the server with `pnpm run dev` and open [http://localhost:3000](http://localhost:3000) with
you browser to see if the project is running.


## Add MUI v5
Install the following packages:
```bash
pnpm add @mui/material  @mui/icons-material @emotion/react @emotion/styled @emotion/cache
```

## Further addaptions following the tutorial
- `layout.tsx`
- `theme/EmotionCache.tsx`
- `theme/ThemeRegistry.tsx`