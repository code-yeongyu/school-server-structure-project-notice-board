import articleRouter from "app/article/routes"
import { Router } from "express"

const router = Router()

router.use("/article", articleRouter)

export default router
