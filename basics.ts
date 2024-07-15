// Primitive
let age: number;

age = 12;

let userName: string | string[];

userName = 'Shaker';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Reading', 'Swimming', 'DJing'];

type Person = {
	name: string;
	age: number;
	hobbies: string[];
};

let person: Person;

person = {
	name: 'Emmanuel',
	age: 20,
	hobbies: ['Reading', 'Running'],
};

let people: Person[];

// Type inference
let course: string | number = 'SW Deployment';

course = 1235;

// Functions & types
const addition = (a: number, b: number) => {
	return a + b;
};

const displayOutput = (value: any) => {
	console.log(value);
};

// Generics
const insertAtBeginning = <T>(array: T[], value: T) => {
	const newArray = [value, ...array];
	return newArray;
};

const demoArray = [1, 2, 3, 4];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split('');
