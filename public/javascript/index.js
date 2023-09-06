const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      const characterListElement = document.querySelector(
        ".characters-container"
      );
      characterListElement.innerHTML = "";
      charactersAPI.getFullList();
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const characterListElement = document.querySelector(
        ".characters-container"
      );
      characterListElement.innerHTML = "";
      const characterId = document.querySelector(
        'input[name="character-id"]'
      ).value;
      charactersAPI.getOneRegister(characterId);
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      const characterListElement = document.querySelector(
        ".characters-container"
      );
      characterListElement.innerHTML = "";
      const characterId = document.querySelector(
        'input[name="character-id-delete"]'
      ).value;

      charactersAPI.deleteOneRegister(characterId);
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const characterListElement = document.querySelector(
        ".characters-container"
      );
      characterListElement.innerHTML = "";
      const characterId = document.querySelector('input[name="chr-id"]').value;
      const editOne = {
        id: document.getElementById("edit-character-form").elements[0].value,
        name: document.getElementById("edit-character-form").elements[1].value,
        occupation: document.getElementById("edit-character-form").elements[2]
          .value,
        weapon: document.getElementById("edit-character-form").elements[3]
          .value,
        cartoon: document.getElementById("edit-character-form").elements[4]
          .value,
      };
      console.log(editOne);
      charactersAPI.updateOneRegister(editOne, characterId);
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const characterListElement = document.querySelector(
        ".characters-container"
      );
      characterListElement.innerHTML = "";
      const createNew = {
        name: document.getElementById("new-character-form").elements[0].value,
        occupation:
          document.getElementById("new-character-form").elements[1].value,
        weapon: document.getElementById("new-character-form").elements[2].value,
        cartoon:
          document.getElementById("new-character-form").elements[3].value,
      };
      charactersAPI.createOneRegister(createNew);
    });
});
