import "dotenv/config";
import fastify from "fastify";

import { routes } from "./routes";

const app = fastify();

routes(app);

const port = process.env.PORT as any;

app.listen({ port }).then(() => console.log(`server runner port ${port}`));
