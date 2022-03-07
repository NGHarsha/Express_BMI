import { bmiObject } from "./requestInt";

const bmiMap = new Map<Array<number>, Array<string>>();
bmiMap.set([18.5, 24.9], ["Normal weight", "Low risk"]);
bmiMap.set([25, 29.9], ["Overweight", "Enhanced risk"]);
bmiMap.set([30, 34.9], ["Moderately obese", "Medium risk"]);
bmiMap.set([35, 39.9], ["Severel obese", "High risk"]);

const calculateBMI = (person: bmiObject) => {
  const heightM = person.HeightCm / 100;
  let c = person.WeightKg / (heightM * heightM);
  let res;
  if (c <= 18.4) {
    res = ["Underweight", "Malnutrition risk"];
  }
  if (c >= 40) {
    res = ["Very severely obese", "Very high risk"];
  }
  bmiMap.forEach((v: string[], k: number[]) => {
    if (k[0] <= c && c <= k[1]) {
      res = v;
    }
  });
  person.bmi = c;
  if (res) {
    person.bmiCategory = res[0];
    person.healthRisk = res[1];
  }
};

const overweightCount = (personList: bmiObject[]) => {
  return personList.reduce((reducerValue, item) => {
    return item.bmiCategory === "Overweight" ? reducerValue + 1 : reducerValue;
  }, 0);
};

export { bmiMap, calculateBMI, overweightCount };
