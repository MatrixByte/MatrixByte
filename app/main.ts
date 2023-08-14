// File: main.ts
// Author: Matrix byte.

import { Application, Router } from "./deps.ts";

const app = new Application();
const router = new Router();

router.get("/", async (ctx, next) => {
    try {
        const resp_text = await Deno.readTextFile(`${Deno.cwd()}/README.md`);
        ctx.response.body = resp_text;
    } catch (error) {
        console.error(error.message);
        await next();
    }
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 3000 });
