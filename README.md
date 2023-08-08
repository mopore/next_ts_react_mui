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

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


# Template Creation - Step by step
Up to 2023-08-07 it was not yet possible to get the combination of technologies for this project
without manual intervation.
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


# Docker Setup

Run `docker buildx build -t my-next-app .`
Use `docker compose run -d` to start the container with the docker compose configuration.

