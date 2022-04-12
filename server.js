// Entry point for our project

const http = require("http");
const express = require("express");

const routes = require("./src/routes")

const { port, appURL } = config.webServer;

const app = express();

const server = http.createServer(app);

/**
 * Apply global server middlewares
 */
applyServerMiddlewares(app);

/**
 * Apply global server headers
 */
applyServerHeaders(app);

/**
 * Setup serving FE static from express
 */
setupStaticServe(app);

/**
 * Attach all routes
 */
app.use(routes);

server.listen(port, () => {
    logger.info(`Server started ${appURL}:${port}, Mode: ${process.env.NODE_ENV}`);
});
