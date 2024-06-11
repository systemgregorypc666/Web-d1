# Web-d1
site Web d1
# `web-d1`

Create D1 and copy output to the `wrangler.toml`:

```shell
wrangler d1 create web-d1-tutorial
```

Create migrations folder `migrations` and create a new migration:

```shell
wrangler d1 migrations list web-d1

wrangler d1 migrations apply web-d1
wrangler d1 migrations apply web-d1 --remote=true
```

Local database is created in the path `.wrangler/state/v3/d1/miniflare-D1DatabaseObject`, you can connect to it and also use when developing locally:

```shell
wrangler dev src/index.ts

Your worker has access to the following bindings:
- D1 Databases:
  - DB: web-d1-tutorial
```

Vitest: https://github.com/systemgregorypc666/Web-d1