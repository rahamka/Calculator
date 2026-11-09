# Apna Calculator 🖩

A simple, responsive calculator built with ReactJS and TailwindCSS. It handles basic arithmetic and runs fully in the browser.

**Live Preview:** https://rahamka.github.io/Calculator/

<!-- Add a screenshot here: ![Apna Calculator](./screenshot.png) -->

## Tech Stack

- ReactJS
- TailwindCSS
- JavaScript (ES6)

## Features

- Basic arithmetic operations on a clean, responsive layout
- **AC (All Clear):** removes the entire input
- **C (Clear):** removes the last digit or symbol

## How It Works

- The current expression is stored with the `useState()` hook, so the display updates on every button press.
- The final result is calculated with JavaScript's `eval()` function.

> **Note:** `eval()` is fine for a small learning project like this, but it is not recommended in production apps because it can run arbitrary code. A safer next step is to write a custom expression parser or use a library like `math.js`.

## Run Locally

```bash
git clone https://github.com/rahamka/Calculator.git
cd Calculator
npm install
npm run dev
```

## What I Learned

- Managing state with React hooks
- Building responsive layouts with TailwindCSS
- Handling button events and updating UI in real time

## Future Improvements

- Replace `eval()` with a safe expression parser
- Add keyboard support
- Add decimal and error handling edge cases
