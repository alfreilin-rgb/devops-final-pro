const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/api", (req, res) => {
  res.send("🔥 App DevOps PRO funcionando");
});

// Puerto dinámico (Render) o 4000 en local
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Servidor en puerto " + PORT);
});

module.exports = app;