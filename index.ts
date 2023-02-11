import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send({ message: "Server is working just fine!" });
});

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
