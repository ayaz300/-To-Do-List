function addTask() {
  let taskText = document.getElementById("display").value;
  if (taskText.trim() !== "") {
  let li = document.createElement("li");
  li.textContent = taskText;
  let button = document.createElement("button");
  button.textContent = "×";
  button.onclick = function () {
    li.remove();
  }

  li.appendChild(button);
  document.getElementById("taskList").appendChild(li);
  document.getElementById("display").value = "";
  }
}

document.getElementById("display").addEventListener("keypress", function(event) {
  if(event.key == "Enter") {
    addTask();
  }
});