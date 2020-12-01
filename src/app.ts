import express from "express"
import morgan from "morgan"
import bodyParser from "body-parser"
import routes from "routes"

const app = express()
app.use(bodyParser.json())

if (process.env.NODE_ENV !== "test") {
    app.use(morgan("combined"))
}

app.use("", routes)

export default app
