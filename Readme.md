# **fifi**

A boilerplate with [NextJS](https://github.com/zeit/next.js/) + [ANT Design](ant.design) + [Styled JSX with SCSS](https://www.npmjs.com/package/@zeit/next-sass)

#### [DEMO](https://fifi-ashinga.herokuapp.com/)

With a lot of research and experimentation NextJS is the best framework to work with React JS ( Server side rendering + Code Splitting ) and better performance.

whereas working with [React Starter Kit](https://github.com/kriasoft/react-starter-kit) doesn't give better output for production ( like Code Splitting ) ( please share if you know how to do it ).

### What it has

- [x] SCSS direct import to your components ( see about page for example )
- [x] Seperate SCSS files
- [x] Integrate ANT design
- [x] Express JS
- [x] Code Compression ( Extreme performance )
- [x] SEO from [NEXT SEO](https://github.com/garmeeh/next-seo)


Many other UI frameworks like Grommet, Materialise CSS etc are doing a good job. I see ANT Design is much more sophisticated.

### How

1. Development ```npm run dev```
2. Build & Run ```npm run build``` &&  ```npm run start```

### Doc

#### 1. ANT Design imports optimisation ( to reduce build size )

```
import { DatePicker, Avatar, Badge } from 'antd';
```

### Extra

If you are looking something for production like project
- [React Universally](https://github.com/ctrlplusb/react-universally) has "Now" based deployments, but doesn't have UI framework
- Thanks [Mars](https://github.com/mars/heroku-nextjs) nextjs deployment
