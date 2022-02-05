# TaxScouts technical test | Book search App

Deploy: https://vercel.com/martinlupa/tax-scouts-technical-test

Author: Martin I. Lupa Groppelli, February 2022.

Book search App made on React as part of a technical test.
Users perceived performance was taken into consideration while at the same time a debounce was implemented to control the quantity of fetch requests triggered by the search input update.

## Repository

https://github.com/MartinLupa/tax-scouts-technical-test

## How to use

Navigate to project folder and run:

```bash
npm install
npm start
```

## Project info

Tested with Node v14.16.1 and npm 6.14.12.

### Front-end | REACT

- useState, useEffect, useRef (dropdown close on click outside).
- Custom hooks: useDebounce (fetch trigger control), useFetch.
- React Router v6 | Public router and Private router.
- Protected routes.
- Use of third party APIs: Penguin Random House.
- Styled components.
- Libraries: Material UI.
