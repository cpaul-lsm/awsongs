# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Environment Setup

This application requires Sanity CMS configuration. Create a `.env` file in the root directory with the following variables:

```bash
SANITY_PROJECT_ID=your_sanity_project_id_here
SANITY_DATASET=production
SANITY_WRITE_TOKEN=your_sanity_write_token_here
```

### Getting Sanity Credentials

1. Go to your [Sanity project dashboard](https://www.sanity.io/manage)
2. Navigate to API settings
3. Copy your Project ID
4. Create a new API token with write permissions
5. Use 'production' as your dataset name (or your preferred dataset)

**Note:** The 500 "Error fetching data" occurs when these environment variables are not properly configured.
