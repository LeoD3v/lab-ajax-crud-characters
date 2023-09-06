class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(`http://localhost:8000/characters`)
      .then((response) => {
        console.log("Data:", response.data);

        const characterListElement = document.querySelector(
          ".characters-container"
        );
        const characters = response.data;

        const characterListHTML = characters
          .map((character) => {
            return `
            <div class="character-info">
              <div class="name">${character.name}</div>
              <div class="occupation">${character.occupation}</div>
              <div class="cartoon">${character.cartoon ? "Yes" : "No"}</div>
              <div class="weapon">${character.weapon}</div>
            </div>
          `;
          })
          .join("");

        characterListElement.innerHTML = characterListHTML;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getOneRegister(id) {
    axios
      .get(`http://localhost:8000/characters/${id}`)
      .then((response) => {
        const characterData = response.data;
        const characterListElement = document.querySelector(
          ".characters-container"
        );

        const characterInfoDiv = document.createElement("div");
        characterInfoDiv.classList.add("character-info");

        const nameDiv = document.createElement("div");
        nameDiv.classList.add("name");
        nameDiv.textContent = `Name: ${characterData.name}`;

        const occupationDiv = document.createElement("div");
        occupationDiv.classList.add("occupation");
        occupationDiv.textContent = `Occupation: ${characterData.occupation}`;

        const cartoonDiv = document.createElement("div");
        cartoonDiv.classList.add("cartoon");
        cartoonDiv.textContent = `Cartoon: ${
          characterData.cartoon ? "yes" : "no"
        }`;

        const weaponDiv = document.createElement("div");
        weaponDiv.classList.add("weapon");
        weaponDiv.textContent = `Weapon: ${characterData.weapon}`;

        characterInfoDiv.appendChild(nameDiv);
        characterInfoDiv.appendChild(occupationDiv);
        characterInfoDiv.appendChild(weaponDiv);
        characterInfoDiv.appendChild(cartoonDiv);

        characterListElement.appendChild(characterInfoDiv);
      })
      .catch((error) => {
        error;
      });
  }

  createOneRegister(createNew) {
    axios
      .post(`http://localhost:8000/characters`, createNew)
      .then((response) => {
        console.log(response);
        const characterData = response.data;
        const characterListElement = document.querySelector(
          ".characters-container"
        );

        const characterInfoDiv = document.createElement("div");
        characterInfoDiv.classList.add("character-info");

        const nameDiv = document.createElement("div");
        nameDiv.classList.add("name");
        nameDiv.textContent = `Name: ${characterData.name}`;

        const occupationDiv = document.createElement("div");
        occupationDiv.classList.add("occupation");
        occupationDiv.textContent = `Occupation: ${characterData.occupation}`;

        const cartoonDiv = document.createElement("div");
        cartoonDiv.classList.add("cartoon");
        cartoonDiv.textContent = `Cartoon: ${
          characterData.cartoon ? "yes" : "no"
        }`;

        const weaponDiv = document.createElement("div");
        weaponDiv.classList.add("weapon");
        weaponDiv.textContent = `Weapon: ${characterData.weapon}`;

        characterInfoDiv.appendChild(nameDiv);
        characterInfoDiv.appendChild(occupationDiv);
        characterInfoDiv.appendChild(weaponDiv);
        characterInfoDiv.appendChild(cartoonDiv);

        characterListElement.appendChild(characterInfoDiv);
        console.log(response);
      })
      .catch((err) => {
        err;
      });
  }

  updateOneRegister(edit, id) {
    axios
      .put(`http://localhost:8000/characters/${id}`, edit)
      .then((response) => {
        console.log(response);
        const characterData = response.data;
        const characterListElement = document.querySelector(
          ".characters-container"
        );

        const characterInfoDiv = document.createElement("div");
        characterInfoDiv.classList.add("character-info");

        const nameDiv = document.createElement("div");
        nameDiv.classList.add("name");
        nameDiv.textContent = `Name: ${characterData.name}`;

        const occupationDiv = document.createElement("div");
        occupationDiv.classList.add("occupation");
        occupationDiv.textContent = `Occupation: ${characterData.occupation}`;

        const cartoonDiv = document.createElement("div");
        cartoonDiv.classList.add("cartoon");
        cartoonDiv.textContent = `Cartoon: ${
          characterData.cartoon ? "yes" : "no"
        }`;

        const weaponDiv = document.createElement("div");
        weaponDiv.classList.add("weapon");
        weaponDiv.textContent = `Weapon: ${characterData.weapon}`;

        characterInfoDiv.appendChild(nameDiv);
        characterInfoDiv.appendChild(occupationDiv);
        characterInfoDiv.appendChild(weaponDiv);
        characterInfoDiv.appendChild(cartoonDiv);

        characterListElement.appendChild(characterInfoDiv);
      })
      .catch((err) => {
        err;
      });
  }

  deleteOneRegister(id) {
    axios
      .delete(`http://localhost:8000/characters/${id}`)
      .then((response) => {
        console.log("id:", id, response.data);

        const characterData = response.data;
        const characterListElement = document.querySelector(
          ".characters-container"
        );

        const characterInfoDiv = document.createElement("div");
        characterInfoDiv.classList.add("character-info");

        const nameDiv = document.createElement("div");
        nameDiv.classList.add("name");
        nameDiv.textContent = `Name: ${characterData.name}`;

        const occupationDiv = document.createElement("div");
        occupationDiv.classList.add("occupation");
        occupationDiv.textContent = `Occupation: ${characterData.occupation}`;

        const cartoonDiv = document.createElement("div");
        cartoonDiv.classList.add("cartoon");
        cartoonDiv.textContent = `Cartoon: ${
          characterData.cartoon ? "yes" : "no"
        }`;

        const weaponDiv = document.createElement("div");
        weaponDiv.classList.add("weapon");
        weaponDiv.textContent = `Weapon: ${characterData.weapon}`;

        characterInfoDiv.appendChild(nameDiv);
        characterInfoDiv.appendChild(occupationDiv);
        characterInfoDiv.appendChild(weaponDiv);
        characterInfoDiv.appendChild(cartoonDiv);

        characterListElement.appendChild(characterInfoDiv);
        res;
      })
      .catch((error) => {
        error;
      });
  }
}
