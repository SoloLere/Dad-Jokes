const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();
jokeBtn.addEventListener("click", generateJoke);

// using async await
async function generateJoke() {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    const response = await fetch(
      "https://icanhazdadjoke.com/",
      config
    );
    console.log(response);
    if (!response) throw new Error("🔥🔥Something went wrong");
    const data = await response.json();
    jokeEl.innerText = data.joke;
  } catch (err) {
    (err) => console.error(`${err.message} ${err.status}`);
  }
}

// Using .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com/", config)
//     .then((response) => {
//       if (!response) throw new Error("🔥🔥Something went wrong");
//       return response.json();
//     })
//     .then((data) => {
//       jokeEl.innerText = data.joke;
//     })
//     .catch((err) => console.error(`${err} ${err.status}`));
// }
