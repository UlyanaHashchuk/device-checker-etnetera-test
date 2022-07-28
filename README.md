This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install dependencies:

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages

1. `sing-in` page, accessed by `/sign-in`.
2. `home` page, accessed by `/`. There is device list with filter options. 
   - You can filter devices by system, vendor, show just available or simple search by model in search field.
   - If the user is admin, then he can go to the third page to create device from the top navigation.
   - You can borrow device, return or check who and when borrowed any device.
3. `add-device` page, accessed by `/add-device`. Only `admin` can access it, others will be redirected to `home` page. There admin can add new device.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
