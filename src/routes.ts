import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  return res.json({ api: "online" });
});

router.use("/*", (req: Request, res: Response) => {
  return res.json({ api: "error: essa página não existe!" });
});

export default router;
