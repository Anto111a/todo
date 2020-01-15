'use strict';
function addTask(newTask, id) {
    let taskElement = document.createElement('li');
    taskElement.classList.add('list-group-item');
    taskElement.innerText = newTask.title;
    taskElement.setAttribute('data-id', id);

    let buttons = {
		container: document.createElement('div'),
		edit: document.createElement('button'),
        delete: document.createElement('button'),
        showMore: document.createElement('button'),
    };
    
    let xRamdom = Math.floor(Math.random() * 100000);

    buttons.edit.classList.add('btn', 'btn-warning', 'btn-edit', 'btn-xs');
	buttons.edit.innerHTML = '<i class="glyphicon glyphicon-pencil"></i>';
	buttons.edit.addEventListener('click', editButtonHandler);

	buttons.delete.classList.add('btn', 'btn-danger', 'btn-delete', 'btn-xs');
	buttons.delete.innerHTML = '<i class="glyphicon glyphicon-trash"></i>';
	buttons.delete.addEventListener('click', deleteButtonHandler);

    buttons.showMore.classList.add('btn', 'btn-info', 'btn-xs');
    buttons.showMore.setAttribute('type', 'button');
    buttons.showMore.setAttribute('data-toggle', 'collapse');
    buttons.showMore.setAttribute('data-target', `#${xRamdom}`);
    buttons.showMore.setAttribute('title', 'Show details');
    buttons.showMore.innerHTML = '<i class="glyphicon glyphicon-arrow-down"></i>';

    buttons.container.appendChild(buttons.showMore);
	buttons.container.appendChild(buttons.edit);
    buttons.container.appendChild(buttons.delete);
    

	buttons.container.classList.add('pull-right', 'buttons-container');

	taskElement.appendChild(buttons.container);

    let detailsElem = document.createElement('div');
    detailsElem.setAttribute('id', `${xRamdom}`);
    detailsElem.classList.add('collapse');
    detailsElem.innerHTML = `<hr><p>${newTask.description}</p><p>${newTask.date}</p>`;

    let taskContainer = document.querySelector(`[data-status="${newTask.status}"]`);
    taskContainer.appendChild(taskElement);
    taskElement.appendChild(detailsElem);
    taskCounter[newTask.status-1].innerText= +taskCounter[newTask.status-1].innerText + 1;
};

function removeTask() {
    localStorage.clear();
    while(document.querySelector('[data-status]')) {
        document.querySelector('[data-status]').remove();
    };

    for(let i = 0; i <3; i++) {
        taskCounter[i].innerText=0;
    }
};

function getCurrentTab() {
    let tabs = document.querySelectorAll('.tab-pane');
    let targetTab;

    tabs.forEach(function (element) {
        if (element.classList.contains('active')) {
            targetTab = element.firstElementChild.getAttribute('data-status');
        }
    });
    return targetTab;
};
