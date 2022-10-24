const taskInput = document.querySelector("#input");
const inputButton = document.getElementById("input-button");
const taskList = document.querySelector("#task-list");

inputButton.addEventListener("click", addTask);

taskList.addEventListener("click", removeTask);

function addTask(e) {
  if (taskInput.value === "") {
    alert("scrivi qualcosa");
  }
  //creare nuovo li e aggiungere classe
  const li = document.createElement("li");
  li.className = "task";

  // createTextNode crea un nodo di testo ed inserirlo nel "li"
  li.appendChild(document.createTextNode(taskInput.value));

  // creare link
  const link = document.createElement("a");

  //aggiungere la classe
  link.className = "delete-todo";

  //aggiungere una X al link
  link.innerHTML = "<p>x</p>";

  //mettere link nel "li"
  li.appendChild(link);

  //mettere li dentro ul
  taskList.appendChild(li);

  //per "svuotare" l'input in cui inserire il todo
  taskInput.value = "";

  e.preventDefault();
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-todo")) {
    e.target.parentElement.parentElement.remove();
  }
}
