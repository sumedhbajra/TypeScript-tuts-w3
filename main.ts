let firstName: string = "Sumedh";
console.log(firstName);

firstName = 23;
console.log(firstName);

let anyName = "raj";
console.log(anyName);

anyName = 23;
console.log(anyName);

const json = JSON.parse("55");
console.log(json);
console.log(typeof json);

let v: any = true;
console.log(v);

v = 23;
console.log(v);

let w: unknown = 1;
console.log(w);

w = "hello Nepal";
console.log(w);

w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  },
} as { runANonExistentMethod: () => void };

w.runANonExistentMethod();

if (typeof w === "object" && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}

let x: never = true;
console.log(x);

let y: undefined = undefined;
let z: null = null;

const names: string[] = [];
names.push("Sumedh");

console.log(names);

let securedName: readonly string[] = ["raj", "bajracharya"];
console.log(securedName);

securedName.push("patan");
console.log(securedName);

let ourTuple: readonly [number, boolean, string];
ourTuple = [2, false, "Sumedh R. Bajracharya"];

ourTuple.push("haha");
console.log(ourTuple);

const graph: [x: number, y: number] = [2, 3];
console.log(graph);

const graph1: [number, number] = [55, 22];
const [i, j] = graph1;

console.log(i, j);

const car: {
  type: string;
  model: string;
  isBroken: boolean;
  year: number;
  mileage?: number;
} = {
  type: "toyota",
  model: "Corolla",
  year: 2009,
  isBroken: false,
};

car.year = 2002;
car.mileage = 20;

console.log(car);

// Index Signature
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 24;
nameAgeMap.Mark = 67;
console.log(nameAgeMap);
/*  */