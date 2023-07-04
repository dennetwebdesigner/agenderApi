import "dotenv/config";
import fastify from "fastify";
import http from "http";

import { routes } from "./routes";

const app = fastify();
const server = http.createServer(app as any);

routes(app);

const port = process.env.PORT as any;

server.listen(port, "0.0.0.0", () => console.log("server runner in " + port));
