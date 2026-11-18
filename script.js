// The list of tasks lives here. The page is drawn from this array.
const tasks = [];

// 1. Find the elements
const input = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const list = document.getElementById("task-list");

// Draw the list from the tasks array
function render() {
  list.innerHTML = "";
  for (const task of tasks) {
    const item = document.createElement("li");
    item.textContent = task.text;
    list.appendChild(item);
  }
}

// 2. Listen for a click, 3. change the page
addButton.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return; // ignore empty tasks
  tasks.push({ text: text, done: false });
  input.value = "";
  render();
});
