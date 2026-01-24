FROM denoland/deno:2.6.6 AS build

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

WORKDIR /app

COPY . .
RUN deno install && deno task build
RUN deno compile -o /navis_landing --include _fresh --include assets -A _fresh/compiled-entry.js

FROM denoland/deno:alpine-2.6.6

COPY --from=build /navis_landing /landing

EXPOSE 8000
CMD [ "./landing" ]
