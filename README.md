# 1C44180C
Next.js->CloudRun

## env

### Node.js

```
❯ node -v
v18.16.1
```

```
❯ npm -v 
9.7.2
```

## create project

```
❯ npx create-next-app@latest
Need to install the following packages:
  create-next-app@13.4.9
Ok to proceed? (y) y
✔ What is your project named? … my-app
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias? … No / Yes
```

## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## build image

```
docker build -t nextjs-docker .
```

run at local

```
docker run -p 3000:3000 nextjs-docker
```

## deploy to Cloud Run

```
❯ gcloud run deploy bb1629be-frontend --source .
```

