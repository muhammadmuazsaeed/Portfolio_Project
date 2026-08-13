# Muhammad Muaz Saeed — Portfolio

React + Vite + Tailwind portfolio.

## Run locally

```bash
npm install
npm run dev
```

## Add your profile photo

Put your photo file in `public/` (e.g. `public/profile.jpg`), then in
`src/App.jsx` find the comment inside the "ABOUT" section:

```jsx
{/* Replace this block with: <img src="/profile.jpg" className="w-full h-full object-cover" /> */}
MS
```

Replace the `MS` text with:

```jsx
<img src="/profile.jpg" className="w-full h-full object-cover" alt="Muhammad Muaz Saeed" />
```

## Build for production

```bash
npm run build
```

This creates a `dist/` folder — that's what gets deployed.

## Deploy on Netlify (recommended)

1. Push this whole folder to a new GitHub repository.
2. Go to https://app.netlify.com and log in with GitHub.
3. Click **Add new site → Import an existing project**.
4. Select your repo.
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **Deploy**. Netlify gives you a live link like
   `your-site-name.netlify.app`.
7. Every time you `git push` new changes, Netlify redeploys automatically.

## Contact form

The contact form submits to Formspree:
`https://formspree.io/f/xeajknjk`

Free plan allows 50 submissions/month. Check your Formspree dashboard to
see incoming messages.
