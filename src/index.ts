import fastify from "fastify";

import { routes } from "./routes";

const app = fastify();

routes(app);

app
  .listen({ port: 3000 })
  .then(() => console.log(`server runner http://localhost:3000`));
