import { FastifyInstance } from "fastify";

export function routes(app: FastifyInstance) {
  app.get("/", (req, res) => res.status(200).send({ api: "online" }));
  app.get("/*", (req, res) =>
    res.status(400).send({ error: "Esta pagina não existe!" })
  );
}
