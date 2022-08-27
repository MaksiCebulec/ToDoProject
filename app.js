const ul = document.querySelector('#taskList');
const form = document.querySelector('#creatingTask');
const taskInput = document.querySelector('#task');
const submitBtn = document.querySelector('#submit');

form.addEventListener('click', (e) => {
    e.preventDefault();
});

function createTask() {
    const taskText = taskInput.value;
    const li = document.createElement('li');
    li.innerText = taskText;
    ul.append(li);



    taskInput.value = '';
}

submitBtn.addEventListener('click', createTask);