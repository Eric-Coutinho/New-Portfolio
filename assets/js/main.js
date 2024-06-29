const username = "Eric-coutinho";

function fetchRepos() {
  fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((repo) => {
        console.log(repo);
      });
    })
    .catch((error) => console.error("Erro:", error));
}

fetchRepos();
