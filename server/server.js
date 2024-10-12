const express = require("express")
const app = express()
const cors = require("cors")
const corsOptions = {
    origin: "http://localhost:5173"
}

app.use(cors(corsOptions))

app.get("/api", (req, res) => {
    res.json({ teste : ["lista1", "lista2", "lista3", "lista4", "lista5", "lista6"] })
})

app.listen(8080, () => {
    console.log("Server started on port 8080")
})

