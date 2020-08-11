//define the elements
var buttonEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
// create the function on a listener to the element

var createTaskHandler = function() {

  event.preventDefault();
  // create the new element
  var listItemEl = document.createElement("li");
  // style element
  listItemEl.className = "task-item";
  //givie it text
  listItemEl.textContent = "This is a new task.";
  //insert element into place
  tasksToDoEl.appendChild(listItemEl);
  console.log(event);
 
  };

buttonEl.addEventListener("submit", createTaskHandler); 






  
