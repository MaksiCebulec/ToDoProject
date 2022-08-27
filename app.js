const ul = document.querySelector('#taskList');
const form = document.querySelector('#creatingTask');
const taskInput = document.querySelector('#task');
const submitBtn = document.querySelector('#submit');

form.addEventListener('click', (e) => {
    e.preventDefault();
});
let num = 1;
const toDoTasks = [];
const doneTasks = [];
function createTask() {
    if (!(taskInput.value === '')) {
        const taskText = taskInput.value;
        toDoTasks.push(taskText);
        const label = document.createElement('label');
        label.setAttribute('for', `li${num}`);
        label.setAttribute('class', `labels`);
        ul.append(label);
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', `li${num}`);
        checkbox.setAttribute('class', `lis`);
        label.append(checkbox);
        const li = document.createElement('li');
        li.innerText = taskText;
        label.append(li);
        const br = document.createElement('br');
        li.append(br);
        console.dir(checkbox);
        taskInput.value = '';
        num++;
        ifChecked();
    } else {
        alert('Write a task');
    }

}
const doneList = document.querySelector('#doneList');
function ifChecked() {
    const checkboxes = document.querySelectorAll('.lis');
    const labels = document.querySelectorAll('.labels');
    for (let label of labels) {
        label.onclick = function () {
            console.log('In function');
            const input = this.childNodes[0];
            const li = this.childNodes[1];
            if (input.checked) {
                input.checked = false;
                li.removeAttribute('style');
                ul.append(this);
            } else {
                input.checked = true;
                li.setAttribute('style', 'text-decoration: line-through;');
                doneList.append(this);
                for (let i = 0; i < toDoTasks.length; i++) {
                    console.log('array: ', toDoTasks);
                    console.log('Task', toDoTasks[i]);
                    console.log('LI', li.innerText);
                    if (toDoTasks[i] == li.innerText) {
                        console.log('in if');
                        doneTasks.append(toDoTasks[i]);
                        toDoTasks.splice(i, 1);
                    }
                }
            }

        }
    }
}

ifChecked();

submitBtn.addEventListener('click', createTask);
document.querySelector('body').addEventListener('click', ifChecked);