# Note

To fix pnpm ".npmrc" warn execute this:

```shell
pnpm config set //registry.npmjs.org/:_authToken "$NPM_TOKEN"
pnpm install
```