FROM denoland/deno:1.36.1

# The port that your application listens to.
EXPOSE 3000

WORKDIR /

# Prefer not to run as root.
# USER deno
USER root

# Cache the dependencies as a layer (the following two steps are re-run only when deps.ts is modified).
# Ideally cache deps.ts will download and compile _all_ external files used in main.ts.
COPY ./app/deps.ts /app/
RUN deno cache deps.ts

# These steps will be re-run upon each file change in your working directory:
COPY ./app/ /app/
# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno cache main.ts

CMD ["run", "-A", "main.ts"]
