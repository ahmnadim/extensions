fetch("https://icanhazdadjoke.com/", {
  headers: {
    Accept: "application/json",
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const joke = data.joke;
    const jokeText = document.getElementById("joak");
    jokeText.innerHTML = joke;
  })
  .catch((error) => {
    console.log(error);
  });
