// File: log_snap.ts
// Author: Matrix byte.

import { LogSnag } from "https://cdn.logsnag.com/deno/0.1.8/index.ts";

const log_snag = new LogSnag({
    token: "d12e9a633d06b609ba489a659a944cf6",
    project: "test",
});

// let count = 1219;
// setInterval(async () => {
//     await log_snag.insight({
//         title: "User Count",
//         value: count,
//         icon: "👨",
//     });
//     count++;
//     console.log(count);
// }, 1200);

await log_snag.publish({
    channel: "test-channel",
    event: "User Joined",
    description: "Email: user0@example.com",
    icon: "🎉",
    tags: {
        name: "user 0",
        email: "user0@example.com",
    },
    notify: true,
});
