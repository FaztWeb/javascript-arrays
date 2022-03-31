import fetch from "node-fetch";

const links = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/comments",
];

// const promises = array.map((url) => fetch(url).then((data) => data.json()));
// const results = await Promise.all(promises);

// console.log(results);

async function execute() {
  for (const link of links) {
    await fetch(link).then(async (data) => {
      const res = await data.json();
      console.log(res);
    });
  }
}

execute();
