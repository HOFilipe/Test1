# HOF Storybook test

A tiny React Native design system that runs in the browser, so it can be published
to Chromatic and linked back to Figma with the Storybook Connect plugin.

## Why this is set up the way it is

React Native components normally only run on a phone or simulator, and Chromatic
can't host that. So this project uses **`@storybook/react-native-web-vite`**, which
renders the exact same React Native components in a browser via `react-native-web`.

The components are written once, in real React Native (`View`, `Text`, `Pressable`,
`StyleSheet`). Nothing here is web-only. The same files would drop into the real
HOF app unchanged — which is the whole point of the test.

## What's inside

```
.github/workflows/chromatic.yml   Publishes to Chromatic on every push
.storybook/                       Storybook config
src/components/
  tokens.ts                       Colours, spacing, radii, type sizes
  Button.tsx    + stories         4 variants x 3 sizes, loading + disabled
  Badge.tsx     + stories         5 semantic tones
  Card.tsx      + stories         Composed from Badge + Button
```

## Setup

1. Push these files to a GitHub repo.
2. Create a project for that repo at [chromatic.com](https://www.chromatic.com) and copy the project token.
3. In the GitHub repo: **Settings → Secrets and variables → Actions → New repository secret**.
   Name it `CHROMATIC_PROJECT_TOKEN`, paste the token.
4. Push any change (or re-run the workflow). Chromatic builds and gives you a URL.
5. In Figma, select a component and paste a story URL into the Storybook Connect plugin.

## Running it locally (optional)

```bash
npm install
npm run storybook      # opens on http://localhost:6006
npm run build-storybook
```

## Notes for the real rollout

- `tokens.ts` is the seam between Figma and code. In production these values should be
  generated from Figma variables rather than typed by hand.
- `autoAcceptChanges: true` in the workflow skips Chromatic's visual review step. Fine for
  a test; turn it off when you want visual regression review to actually gate anything.
- The real HOF repo already has `react-native` installed, so adopting this means adding
  Storybook config and story files, not restructuring the app.
