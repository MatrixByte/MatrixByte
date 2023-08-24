import { Bot } from "https://deno.land/x/grammy@v1.18.1/mod.ts";

const bot = new Bot("6590657947:AAHUchn63w-2F6ODqZ7dJcNbea1--6Jp-OE");

// Reply to any message with "Hi there!".
bot.on("message", (ctx) => ctx.reply("Hi there!"));

bot.start();
