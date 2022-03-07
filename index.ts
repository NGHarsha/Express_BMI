import express from "express";
import { indexBMIRouter } from "./routes";

const app = express();
app.use(express.json());

app.use(indexBMIRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

export { app };
