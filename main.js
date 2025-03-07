
let button = document.getElementById('addbtn');

// Add a new task when the button is clicked
button.addEventListener('click', () => {
  let task = document.getElementById('input').value;

  // Create list item and task elements
  let li = document.createElement('li');
  let taskText = document.createElement('p');
  taskText.innerHTML = task;
  li.appendChild(taskText);

  // Create and add a checkbox to the task
  let check = document.createElement('input');
  check.setAttribute("type", "checkbox");
  li.prepend(check);
  check.classList.add('checkbox');

  // Add event listener for checkbox to mark task as done
  check.addEventListener('change', () => {
    taskText.classList.toggle('checkedlist');
    savedata();
  });

  // Add delete button to the task
  let deletebtn = document.createElement('p');
  deletebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deletebtn.classList.add('deleteBtn');
  li.appendChild(deletebtn);
  // Event listener for delete button
  deletebtn.addEventListener('click', () => {
    li.remove();
    savedata();
  });

  // Append the task to the result container
  let result = document.getElementById('result');
  if(task === ""){
    li.remove();
  }
  else{
    result.appendChild(li);
    savedata();
  }
 

  // Save data after adding the task
});

// Function to save the tasks to localStorage
function savedata() {
  let result = document.getElementById('result');
  localStorage.setItem("data", result.innerHTML);
}

// Function to load tasks from localStorage
function showtask() {
  let result = document.getElementById('result');
  result.innerHTML = localStorage.getItem("data");

  // Reattach event listeners to the loaded tasks
  let tasks = result.querySelectorAll('li');
  tasks.forEach(task => {
    let check = task.querySelector('input[type="checkbox"]');
    let taskText = task.querySelector('p');
    let deletebtn = task.querySelector('.deleteBtn');

    // Event listener for checkbox to mark task as done
    check.addEventListener('change', () => {
      taskText.classList.toggle('checkedlist');
      savedata();
    });

    // Event listener for delete button
    deletebtn.addEventListener('click', () => {
      task.remove();
      savedata();
    });
  });
}

// Show tasks when the page loads or refreshes
showtask();
