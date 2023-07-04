import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  return res.json({ api: "online" });
});

export default router;
