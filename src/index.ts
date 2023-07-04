import "dotenv/config";
import express from "express";
import http from "http";

import routes from "./routes";

const app = express();
const server = http.createServer(app as any);

const port = (process.env.PORT as any) || 3000;
const host = "0.0.0.0";

app.use(routes);

server.listen(port, host, () => console.log("server runner in " + port));
