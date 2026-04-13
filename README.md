# replay.place

A project for viewing the ATmosphereConf 2026 stream VODs, built as part of the [Streamplace VOD Jam](https://blog.stream.place/3micfu6ifyk2a).

Very barebones, but interested in using this to explore the idea of persistent engagement data (watch history, reactions) stored in user PDSs.

## AI Disclosure

Hell no.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of your app:

```sh
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
