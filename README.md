## Next.js 공부 및 연습

앞으로 진행 할 프로젝트인 '1일 1냥'을 Next.js와 mobX를 활용해서 만들기로 했다.
그에 앞서서 Next.js를 간단한 방법으로 메이크업 쇼핑 api를 활용하여 사용해보았다.

React와 비슷한 것 같다.
하지만 다르다.
예를 들어 React에서 infinite scroll을 구현해보고, Next.js로 옮겼는데 실행이 되지 않아서 찾아보았다.
그런데 안되는 이유를 한 사이트에서 찾을 수 있었다.
이유
"NextJS is a framework that allows you to build Static and Server Side Rendered Apps. It uses NodeJS to render your application and window is not defined in NodeJS."

그래서 useEffect로 해결하는 등 React와는 조금 다른 모습을 보이는 부분이 있다.




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
