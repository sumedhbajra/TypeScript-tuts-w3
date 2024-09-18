// Primitive Types

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

// Intro to arrays
const names: string[] = [];
names.push("Sumedh");

console.log(names);

let securedName: readonly string[] = ["raj", "bajracharya"];
console.log(securedName);

securedName.push("patan"); // Error here.
console.log(securedName);

let ourTuple: readonly [number, boolean, string];
ourTuple = [2, false, "Sumedh R. Bajracharya"];

ourTuple.push("haha");
console.log(ourTuple);

// Array Destructuring
const graph: [x: number, y: number] = [2, 3];
console.log(graph);

const graph1: [number, number] = [55, 22];
const [i, j] = graph1;

console.log(i, j);

// Intro to TS Object
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

// Intro to ENUM
enum CardinalDirections {
  North = 1,
  East,
  South,
  West,
}

console.log(CardinalDirections);

let currentDirection = CardinalDirections.South;
let currentDirection1 = CardinalDirections.North;
// logs 0
console.log(currentDirection);
console.log(currentDirection1);

currentDirection = "North"; // Error
console.log(currentDirection);

// Intro to Enum
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}

let showStatusCode = StatusCodes.NotFound;
console.log(showStatusCode);

// Intro to Type Aliases
type CarYear = number;
type CarType = string;
type CarModel = string;
type CarIsBroken = boolean;
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
  isBroken?: CarIsBroken;
};

const carYear: CarYear = 2009;
const carType: CarType = "Audi";
const carModel: CarModel = "Good";
const carIsBroken: CarIsBroken = false;
const car1: Car = {
  year: carYear,
  type: carType,
  model: carModel,
  isBroken: carIsBroken,
};

// Introduction to Interfaces
interface Rectangle {
  height: number;
  width: number;
}

const rectangle: Rectangle = {
  height: 20,
  width: 21,
};
console.log(rectangle);

// More on Interfaces
interface ColoredRectangle extends Rectangle {
  color: string;
}

const coloredRectangle: ColoredRectangle = {
  color: "red",
  height: 20,
  width: 20,
};

console.log(coloredRectangle);

// Intro to multiple type casting on a single variable.

// Union - OR - |
function printStatusCode(code: string | number) {
  console.log(`The Code is ${code}`);
}

printStatusCode(404);
printStatusCode("hello");

//Into to TS functions - Having return types
function getTime(): number | string {
  return new Date().getTime();
}

function anotherThing(): string | number {
  return "My Nepal";
}

function doTheThing(): void {
  console.log("This doesn't return anything.");
}

console.log(getTime());
console.log(anotherThing());
console.log(doTheThing());

// Casting in TS
const x1: unknown = "nepal";
console.log(x1);
console.log((x1 as string).length);
console.log((<string>x1).length);

const x2: unknown = 5;
console.log((x2 as string).length);

// Intro Class in typescript
class MyDog {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }
  public getName(): string {
    return this.name;
  }

  public setName(): void {
    this.name = "Internally named";
  }
}

const newDog = new MyDog("Conrad");
newDog.setName();
console.log(newDog.getName());

//////////////
class Person {
  private readonly name: string;

  public constructor(name: string) {
    // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name; // Produce Error becoz of readonly
  }
}

const person = new Person("Jane");

console.log(person.getName());
