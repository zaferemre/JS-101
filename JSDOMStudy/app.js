//This is a FAKE Http Request Function
//It takes 1 second to resolve or reject the promise, depending on the url that is passed in
/* const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "Bilbo" },
          { id: 5, username: "Esmerelda" },
        ],
        "/users/1": {
          id: 1,
          username: "Bilbo",
          upvotes: 360,
          city: "Lisbon",
          topPostId: 454321,
        },
        "/users/5": {
          id: 5,
          username: "Esmerelda",
          upvotes: 571,
          city: "Honolulu",
        },
        "/posts/454321": {
          id: 454321,
          title: "Ladies & Gentlemen, may I introduce my pet pig, Hamlet",
        },
        "/about": "This is the about page!",
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data }); //resolve with a value!
      } else {
        reject({ status: 404 }); //reject with a value!
      }
    }, 1000);
  });
};

fakeRequest("/users")
  .then((res) => {
    console.log(res);
    const id = res.data[0].id;
    return fakeRequest(`/users/${id}`);
  })
  .then((res) => {
    console.log(res);
    const postId = res.data.topPostId;
    return fakeRequest(`/posts/${postId}`);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("OH NO!", err);
  });
 */
// ************************************************
// ATTEMPT 2 (deliberate error to illustrate CATCH)
// ************************************************
// fakeRequest('/users')
// 	.then((res) => {
// 		console.log(res);
// 		const id = res.data[0].id;
// 		return fakeRequest(`/useALSKDJrs/${id}`); //INVALID URL, CATCH WILL RUN!
// 	})
// 	.then((res) => {
// 		console.log(res);
// 		const postId = res.data.topPostId;
// 		return fakeRequest(`/posts/${postId}`);
// 	})
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log('OH NO!', err);
// 	});

//HTTP REQUESTS COURSE
/* 
const swapiResponse = {
  name: "Yavin IV",
  rotation_period: "24",
  orbital_period: "4818",
  diameter: "10200",
  climate: "temperate, tropical",
  gravity: "1 standard",
  terrain: "jungle, rainforests",
  surface_water: "8",
  population: "1000",
  residents: [],
  films: ["https://swapi.dev/api/films/1/"],
  created: "2014-12-10T11:37:19.144000Z",
  edited: "2014-12-20T20:58:18.421000Z",
  url: "https://swapi.dev/api/planets/3/",
};

const firstReq = new XMLHttpRequest();

firstReq.addEventListener("load", () => {
  console.log("FIRST REQUEST SENT");
  const data = JSON.parse(firstReq.responseText);
  console.log(data); */
//console.log(this.responseText);
//if this is wanted to use you should use a function instead
//of an arrow function

/*   const filmURL = data.results[0].films[0];
  const filmReq = new XMLHttpRequest();
  filmReq.addEventListener("load", function () {
    console.log("SECOND REQUEST SENT");
    const filmData = JSON.parse(this.responseText);
    console.log(filmData);
    console.log(filmData.title);
  });
  filmReq.addEventListener("error", function () {
    console.log("ERROR", e);
  });
  filmReq.open("GET", filmURL);
  filmReq.send();
});

firstReq.addEventListener("error", () => {
  console.log("Error");
});

firstReq.open("GET", "https://swapi.dev/api/planets/");
firstReq.send();
console.log("Request Sent!"); */

//HTTPRequest with Fetch
//returns a promise

//Response returns a readable stream which is a byte data
//Which allows for extremely large things to be read as you go
//.json reads it to completion

/* const prom = fetch("https://swapi.dev/api/planets/")
  .then((response) => {
    console.log(response);
    //  console.log(response.json()); //This takes a long time and returns a promise

    if (!response.ok) {
      //This allows for the code to not run if 404
      throw new Error(`Status Code Error: ${response.status}`);
    } else {
      response.json().then((data) => {
        //This prints the promise
        console.log("**************FETCH**************");
        console.log(data);

        for (let planet of data.results) {
          console.log(planet.name);
        }
      });
    }
  })
  .catch((err) => {
    console.log("Something is wrong");
    console.log(err);
  });
 */

//Then chaining
/* const checkStatusAndParse = (response) => {
  if (!response.ok) throw Error(`Status Code Error: ${response.status}`);
  return response.json();
};

fetch("https://swapi.dev/api/planets/")
  .then(checkStatusAndParse)
  .then((data) => {
    console.log("FETCHED ALL PLANETS (first 10)");
    for (let planet of data.results) {
      console.log(planet.name);
    }
    const nextURL = data.next;
    return fetch(nextURL);
  })
  .then(checkStatusAndParse)
  .then((data) => {
    console.log("Fetched Next 10 Planets");
    for (let planet of data.results) {
      console.log(planet.name);
    }
  })
  .catch((err) => {
    console.log("Something is wrong");
    console.log(err);
  });
 */

//Axios

axios
  .get("https://swapi.dev/api/planets/")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

//Async returns a promise
async function greet() {
  return "Selam";
}

greet().then((val) => {
  console.log("Promise resolved", val);
});

async function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw "X and Y must be numbers";
  }
  return x + y;
}

add("e", "r")
  .then((val) => {
    console.log("Promise resolved", val);
  })
  .catch((err) => {
    console.log("Promise rejected", err);
  });

/* function getPlanets() {
  return axios.get("https://swapi.dev/api/planets/");
}
getPlanets().then((res) => {
  console.log(res.data);
});
 */

async function getPlanets() {
  const res = await axios.get("https://swapi.dev/api/planets/");
  console.log(res.data);
}
getPlanets().catch((err) => {
  console.log("In CATCH!! ");
  console.log(err);
});

async function getPlanetsTryCatch() {
  try {
    const res = await axios.get("https://swapi.dev/api/planets/");
    console.log(res.data);
  } catch (e) {
    console.log("In CATCH!! ");
    console.log(err);
  }
}

async function get3Pokemon() {
  //Instead of await this line by line
  const poke1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const poke2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const poke3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");

  //We can do this so that all api calls run parallel
  /*  const prom1 = await poke2;
           const prom2 = await poke3;
           const prom3 = await poke1; */

  //Promise all is resolved when all promises in array is resolved
  const results = await Promise.all([poke1, poke2, poke3]);
  console.log(results);
  printPokemon(results);
  /*   console.log(prom1.data.name);
                console.log(prom2.data.name);
                console.log(prom3.data.name); */
}

function printPokemon(results) {
  for (let pokemon of results) {
    console.log(pokemon.data.name);
  }
}
