import { Request, Response } from "express"
import { Article } from "app/article/models"
import { isValidObjectId } from "mongoose"

const addArticle = async (req: Request, res: Response) => {
    const { writer, content } = req.body

    try {
        const article = await Article.create({
            writer: writer,
            content: content,
        })
        return res.status(201).send(article)
    } catch (error) {
        console.log(error)
        return res.status(500).send()
    }
}

const getArticle = async (req: Request, res: Response) => {
    const articleID = req.params["id"]
    if (!isValidObjectId(articleID)) {
        return res.status(404).send()
    }
    const isArticleExists = await Article.exists({ _id: articleID })
    if (!isArticleExists) {
        return res.status(404).send()
    }
    const article = await Article.findById(req.params["id"])
    return res.send(article)
}

const getArticles = async (req: Request, res: Response) => {
    const articles = await Article.find({})
    return res.send({ articles: articles })
}

export { addArticle, getArticle, getArticles }
