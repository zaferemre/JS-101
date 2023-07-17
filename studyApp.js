const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

numbers.forEach(function (num) {
  console.log(num);
});

function printTriple(n) {
  console.log(n * 3);
}

numbers.forEach(printTriple);

const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
];

books.forEach(function (book) {
  console.log(book.title.toUpperCase());
});

for (let book of books) {
  console.log(book.title.toUpperCase());
}

numbers.forEach(function (num, idx) {
  console.log(idx, num);
});

//Map

const words = ["Zafer", "elif", "luna", "fakir"];

const doubles = numbers.map(function (num) {
  return num * 2;
});

const numDetail = numbers.map(function (n) {
  return {
    value: n,
    isEven: n % 2 == 0,
  };
});

const abbrews = words.map(function (words) {
  return words.toUpperCase().split("").join(".");
});

const bookNames = books.map(function (book) {
  return book.title;
});

//Arrow functions

const squareFunc = function (x) {
  return x * x;
};
const square = (x) => {
  return x * x;
};

//Parantez ve no coma
const squareNoReturn = (x) => x * x;

const squareOneLine = (x) => x * x;

const doubles1 = numbers.map((n) => n * 2);
const doubles2 = numbers.map((n) => {
  return n * 2;
});

//.find
let movies = [
  "The Fantastic Mr. Fox",
  "Mr.and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds",
];

const movie1 = movies.find((movie) => {
  return movie.includes("Mrs");
});

const movie2 = movies.find((movie) => movie.indexOf("Mrs") === 0);

// .filter
const oddNumbersArr = numbers.filter((num) => num % 2 === 1);

// .every .some returns bool
const moviesEvery = movies.some((word) => word.startsWith("M"));

//integer sort
//Descending
const dscDort = numbers.slice().sort((a, b) => b - a);

books.sort((a, b) => a.rating - b.rating); //This orders the array into a sorted by increasing ratings

//greeting is predetermined if it is not set while calling
//Default parameter
const greet = (person, greeting = "HI!") =>
  console.log(`${greeting} , ${person}`);

// If you want to address each element of an array or any object you can use ...array
// As it will reach to the elements each (not the whole array as a block)

const combinedExample = [...numbers, ...bookNames];

//This is useful since if you make them equal to eachother an other way
//They will address the same so any change in the main array changes the other array
const numbersCopy = [...numbers];

const newInfoBook = { ...books[0], myReview: 4.9 };
// Keep in mind this doesnt changes the books array rather only creates a copy for the
//Adrassed element

//REST
const sumOfUnknownAmountNums = (...nums) => nums.reduce((acc, x) => acc + x);

//also can be used as fullName(first, last, ...titles) type
//Takes first and second as first and last name then everything goes to titles

const [gold, silver, bronze] = movies;
const [winner, ...others] = movies;

//also for objects

const { title: kitapIsmi } = books[0];
const { title, ...other } = books[1];

//I have no idea what this is doing
const [{ title: nameOfBook }, { rating }] = books;

/*function print({ title, rating }) {
  console.log(`${title}, ${rating}`);
}*/

const print = ({ title, rating }) => console.log(`${title}, ${rating}`);

const role = "host";
const person = "Elif Tufan";
const role2 = "guest";
const person2 = "Zafer Çalişir";
const dreamTeam = {
  [role]: person,
  [role2]: person2,
};

const personObj = {
  first: "Zafer",
  last: "Calisir",
  nickName: "Neptune",
  fullName() {
    const { first, last, nickName } = this;
    console.log(`${first} ${last} AKA ${nickName}`);
  },
};
