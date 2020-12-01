import { Router } from "express"
import { body } from "express-validator"
import { addArticle, getArticle, getArticles } from "app/article/controllers"
import { validationResultChecker } from "middlewares"

const router = Router()

const addArticleMiddlewares = [
    body("writer").notEmpty(),
    body("content").notEmpty(),
    validationResultChecker,
]

router.post("/", addArticleMiddlewares, addArticle)
router.get("/:id", getArticle)
router.get("/", getArticles)

export default router
