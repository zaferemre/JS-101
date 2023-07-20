// To select the element with id of bear-photo:
document.getElementById("bear-photo");

//To select the element with id of main:
document.getElementById("main");

//Promise Study

const makeDogPromise = () => {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        resolved();
      } else {
        rejected();
      }
    }, 1000);
  });
};

makeDogPromise()
  .then(() => {
    console.log("Onaylandı");
  })
  .catch(() => {
    console.log("Reddedildi");
  });

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();

      const pages = {
        "/users": [
          { id: 1, username: "Bilbo" },
          { id: 2, username: "Frodo" },
        ],
        "/about": "This is the about page!",
      };
      const data = pages[url];

      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 1000);
  });
};

fakeRequest("/users")
  .then((res) => {
    console.log("Status Code", res.status);
    console.log("Status Code", res.data);
    console.log("RequestWorked");
  })
  .catch((res) => {
    console.log(res.status);
    console.log("ReqFailed");
  });
