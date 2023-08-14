// File: main.ts
// Author: Matrix byte.

import { Application, Router } from "./deps.ts";

const router = new Router();
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

router.get("/", async (ctx, next) => {
    try {
        await ctx.send({
            root: `${Deno.cwd()}/static/`,
            index: "index.html",
        });
    } catch (error) {
        console.error(error.message);
        await next();
    }
});

router.get("/static/:file*", async (ctx, next) => {
    const filename = ctx.params["file"];
    try {
        await ctx.send({
            root: `${Deno.cwd()}/static/`,
            path: filename,
        });
    } catch (error) {
        console.error(error.message);
        await next();
    }
});

router.get("/readme", async (ctx, next) => {
    try {
        await ctx.send({
            root: `${Deno.cwd()}/`,
            path: "README.md",
        });
    } catch (error) {
        console.error(error.message);
        await next();
    }
});

await app.listen({ port: 3000 });
