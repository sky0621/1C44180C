# c44180c
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
docker build -t c44180c-docker .
```

run at local

```
docker run -p 3000:3000 c44180c-docker
```

## deploy to Cloud Run

```
gcloud run deploy c44180c --source .
```

## setup

### Ant Design

```
npm install antd
```

### Prettier

```
npm install --save-dev --save-exact prettier
```

### server-only

```
npm install server-only
```

### reset.css

```
npm install @acab/reset.css
```

### Prisma

```
npm install prisma --save-dev
```

```
npx prisma init --datasource-provider mysql
```

```
npm install @prisma/client
```

```
npx prisma migrate dev --name init
```

```
npx prisma migrate dev
```
