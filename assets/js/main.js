const username = "Eric-coutinho";

function fetchRepos() {
  fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("repos", JSON.stringify(data));
      renderRepos();
    })
    .catch((error) => console.error("Erro:", error));
}

function renderRepos() {
  const repos = JSON.parse(localStorage.getItem("repos"));
  const projectsContainer = document.getElementById("projects");
  projectsContainer.innerHTML = "";

  repos.forEach((repo) => {
    const rolDiv = document.createElement("div");
    rolDiv.className = "col-12 col-sm-8 col-md-4";
    rolDiv.innerHTML = `
          <div class="card cardRepos">
            <div class="card-body cardBodyRepo">
              <div class="card-title">${repo.name}</div>
              <div class="card-text description">${
                repo.description || "Sem descrição"
              }</div>
              <div class="card-text center">${
                "Linguagem: " + (repo.language || "Indefinida")
              }</div>
              <div class="card-footer"><a href="${
                repo.html_url
              }" target="_blank">Link para o projeto</a></div>
            </div>
          </div>
        `;
    projectsContainer.appendChild(rolDiv);
  });
}

fetchRepos();
