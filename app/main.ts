// File: main.ts
// Author: Matrix byte.

import { Application, Router } from "./deps.ts";
import { Bot } from "https://deno.land/x/grammy@v1.18.1/mod.ts";

setTimeout(() => {
    const bot = new Bot("6590657947:AAHUchn63w-2F6ODqZ7dJcNbea1--6Jp-OE");

    // Reply to any message with "Hi there!".
    bot.on("message", (ctx) => ctx.reply("Hi there!"));

    bot.start();
}, 2000);

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
