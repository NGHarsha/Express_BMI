import express, { Request, Response } from "express";
import { bmiMap, calculateBMI, overweightCount } from "../common/bmiUtils";
import { bmiObject } from "../common/requestInt";

const router = express.Router();

router.post("/api/bmi", (req: Request, res: Response) => {
  const reqArray: bmiObject[] = req.body;
  reqArray.forEach((person: bmiObject) => {
    calculateBMI(person);
  });
  const oc = overweightCount(reqArray);
  res.send({
    data: reqArray,
    numberOfOverweightPeople: oc,
  });
});

export { router as indexBMIRouter };
