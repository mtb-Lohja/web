# MTB-Lohja web site

This is a static rewrite of the old legacy www.mtb-lohja.com web site.

## Development

```sh
yarn run develop
```

## Deploy

CI build and deployment has been set up for this site. So just push to master
branch to deploy. See .github/workflows/deploy.yml for specifics.

To test locally or hackily deploy from local run `gatsby build` and deploy the
output folder `/public` to any static hosting. Firebase hosting has been set up,
just run `firebase deploy` on root after build.

In problem situations clean up target folders first with `rm -rf public .cache`
