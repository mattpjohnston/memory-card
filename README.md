# Memory Card

A small React game built for [The Odin Project memory card assignment](https://www.theodinproject.com/lessons/node-path-react-new-memory-card).

You get points by clicking dog cards, but each card only counts once per round.  
Click the same dog twice and your current score resets.

## Live Demo

https://mattpjohnston.github.io/memory-card/

## Built With

- React
- Vite
- Tailwind CSS
- Dog API: https://dog.ceo/dog-api/

## How It Works

- On load, the app fetches 12 random dog images.
- Each image is normalised into a card object with an `id`, `imageUrl`, and breed name derived from the API response.
- Clicking a new card increases your score.
- Clicking a duplicate card resets your current score.
- After every click, the cards are shuffled.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

This repo is set up for GitHub Pages with a workflow in:

`.github/workflows/deploy-pages.yml`

Pushing to `main` triggers a new build and deploy.
