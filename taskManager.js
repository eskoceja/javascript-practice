// Create an IIFE named taskManager that contains the following functionality:
// A private variable named tasks to store task descriptions. It should be initialized as an empty array.
// A addTask function that takes a task description as an argument and adds it to the tasks array.
// A displayTasks function that logs all tasks in the tasks array to the console.
// The IIFE should return an object with the addTask and displayTasks functions.

// Add three sample tasks using the taskManager's addTask function.

// Use the taskManager to display the list of tasks.

let taskManager = (function () {
  let task = [];

  function addTask(description) {
    task.push(description);
    return addTask;
  };

  function displayTasks() {
    for (index of task) {
        console.log(index);
    }
  };

  return { addTask: addTask, displayTasks: displayTasks };
})();


taskManager.addTask('mop');
taskManager.addTask('sweep');
taskManager.addTask('dust');
taskManager.displayTasks();




