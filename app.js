const ul = document.querySelector('#taskList');
const form = document.querySelector('#creatingTask');
const taskInput = document.querySelector('#task');
const submitBtn = document.querySelector('#submit');

form.addEventListener('click', (e) => {
    e.preventDefault();
});
let num = 1;
const allTasks = [];
function createTask() {
    const taskText = taskInput.value;
    allTasks.push(taskText);
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
}

function ifChecked() {
    const checkboxes = document.querySelectorAll('.lis');
    const labels = document.querySelectorAll('.labels');
    for (let label of labels) {
        label.onclick = function () {
            console.log('In function');
            const input = this.childNodes[0];
            if (input.checked) {
                input.checked = false;
                const li = this.childNodes[1];
                li.removeAttribute('style');
            } else {
                input.checked = true;
                const li = this.childNodes[1];
                li.setAttribute('style', 'text-decoration: line-through;');
            }

        }
    }

    // for (let checkbox of checkboxes) {
    //     console.log('Checking');
    //     if (checkbox.checked) {
    //         console.log(checkbox.nextSibling);
    //         const li = checkbox.nextSibling;
    //         li.setAttribute('style', 'text-decoration: line-through;');
    //     } else if (!(checkbox.checked)) {

    //     }
    // }
}

ifChecked();

submitBtn.addEventListener('click', createTask);
document.querySelector('body').addEventListener('click', ifChecked);