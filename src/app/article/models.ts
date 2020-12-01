import { Schema, model, Document } from "mongoose"

interface ArticleModel {
    writer: string
    content: string
}

interface ArticleModelDocument extends Document, ArticleModel {}

const articleSchema: Schema<ArticleModelDocument> = new Schema(
    {
        writer: { type: String, required: true },
        content: { type: String, required: true },
    },
    { timestamps: true }
)

articleSchema.index({ username: 1 })

const Article = model<ArticleModelDocument>("Article", articleSchema)

export { ArticleModel, ArticleModelDocument as ArticleModelSchema, Article }
