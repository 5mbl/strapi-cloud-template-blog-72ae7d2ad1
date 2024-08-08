module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      origin: "*", // Accept requests from all origins
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      keepHeaderOnError: true,
    },
  },
  // Custom middleware to ensure CORS headers are set
  {
    name: "strapi::custom-cors",
    config: {
      beforeInitialize() {
        strapi.server.use((ctx, next) => {
          ctx.set("Access-Control-Allow-Origin", "*");
          ctx.set(
            "Access-Control-Allow-Methods",
            "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS"
          );
          ctx.set(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization, Origin, Accept"
          );
          return next();
        });
      },
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
