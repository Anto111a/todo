'use strict';
// ET -5h
// AT - 4h-15m
let modalAddTask = document.querySelector('#modalAddTask');
let formAddTask = document.querySelector('#formAddTask');
let formRemoveTasks = document.querySelector('.formRemoveTasks');
let counterPanels = document.querySelector('.counter-panels');
let modalEditTask = document.querySelector('#modalEditTask');
let formEditTask = document.querySelector('#formEditTask');
let modalDeleteTask = document.querySelector('#modalDeleteTask');
let buttonConfirm = document.querySelector('#buttonConfirm');
let taskCounter = document.querySelectorAll('.counter-num');

formAddTask.addEventListener('submit', formAddTaskHandler);
formRemoveTasks.addEventListener('click', formRemoveTasksHandler);
formEditTask.addEventListener('submit', formEditTaskHandler);
$(modalAddTask).on('shown.bs.modal', modalAddTaskHandler);

for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
    let task = JSON.parse(localStorage[key]);
    addTask(task, key);
    }
};

$('.datepicker').datepicker({
    format: 'mm/dd/yyyy',
    startDate: '-3d'
});