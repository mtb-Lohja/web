# MTB-Lohja web site

This is a static rewrite of the old legacy www.mtb-lohja.com web site.

## Development

Make sure that you have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
```

Then you can run it by:

```sh
cd gatsby-example-site
npm run develop
```

## Deploy

Run `gatsby build` and deploy the output folder `/public` to any static hosting.
Firebase hosting has been set up, just run `firebase deploy` on root after
build.

In problem situations clean up target folders first with `rm -rf public .cache`
