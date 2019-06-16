# 👷 `worker-template` CORS Preflight

A template for handling CORS preflight requests with Workers.

With this Worker, you can handle [CORS preflight requests](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request). It passes GET, POST and HEAD requests through to the origin, while OPTIONS requests are answered directly.

[`index.js`](https://github.com/cloudflare/worker-template/blob/master/index.js) is the content of the Workers script.

#### Wrangler
To generate using [wrangler](https://github.com/cloudflare/wrangler)

```
wrangler generate myApp https://github.com/conzorkingkong/cors-preflight-template
```

#### Serverless
To deploy using serverless add a [`serverless.yml`](https://serverless.com/framework/docs/providers/cloudflare/) file.
