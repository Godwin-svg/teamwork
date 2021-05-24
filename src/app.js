const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("homepage");
})
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`server runing on port ${PORT}`);
})