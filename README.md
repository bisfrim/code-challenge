## Getting Started

First, run the development server:

```bash
Install
npm install
# or
pnpm install
# or
yarn install
```

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Approach

- This project was build with [Next.js](https://nextjs.org) bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
The backend and frontend are encapsulate into one app to reduce complexity. Next.js provides the option to build API route so it was the most effient framework for this challenge.
If this was a large product with complex business logic. It will be best to implement the backend in its own repository. 
- This product also utilizes MongoDB. Which was a good choice for this challenge for spend and simplicity.
- For file upload, assests are stored on the filesystem for simplicity. Normally an S3 bucket or any form of cloud environment that can host files will be ideal.

## Notes
Rename ``env.file`` to ``.env`` for MONGO DB connection string 
