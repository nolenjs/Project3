//Assign arrays
let tasks = [];
let completed = [];
//cardCount for id for card
let cardCount = 0;
let inputCount = 0;

function deleteTask(cardId){
    let id = "taskCard" + cardId;
    let parent = document.getElementById("taskList");
    let child = document.getElementById(id);
    parent.removeChild(child);
}

function completeTask(cardId){
    let id = "taskCard" + cardId;
    let complete = "complete" + cardId;
    let cardName = document.getElementById(id);
    let txt = document.getElementById(complete);
    txt.innerHTML = "<span>COMPLETED!</span>";
    completed.push(cardId);
    console.log(completed);
    cardName.style.backgroundColor = "#00aa00";
    txt.style.pointerEvents = "none";
}

function addTask(){
    //get inputs
    let date = document.getElementById("date").value;
    let task = document.getElementById("task-maker").value;
    //other tasks
    tasks.push(task);
    console.log(tasks);
    let taskList = document.getElementById("taskList");
    let card = "<div id='taskCard" + cardCount + "' class='mdl-cell--4-col demo-card-event mdl-card mdl-shadow--2dp card'>\n" +
        "            <div class='mdl-card__title mdl-card--expand'>\n" +
        "                <h4 contenteditable='true' class='task' id='task" + cardCount + "'>\n" + tasks[cardCount] +
        "                </h4>\n" +
        "                <button class='trash-button mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect'>\n" +
        "                    <i class='material-icons' onclick='deleteTask(" + cardCount + ")'>delete_forever</i>\n" +
        "                </button>\n" +
        "            </div>\n" +
        "            <div class='mdl-card__actions mdl-card--border'>\n" +
        "                <span contenteditable='true'>Due: " + date + "</span>\n" +
        "                <div class='mdl-layout-spacer'></div>\n" +
        "                <button onclick='completeTask(" + cardCount + ")' class='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect' id='complete" + cardCount + "'>\n" +
        "                    <i class='done material-icons'>done</i>\n" +
        "                </button>\n" +
        "            </div>\n" +
        "        </div>";
    taskList.innerHTML += card;
    cardCount++;
}

function enterInput(){
    let date = document.getElementById("date");
    if(event.keyCode === 13 && inputCount === 0){
        date.focus();
        inputCount++;
    }
    else if(event.keyCode === 13 && inputCount === 1){
        addTask();
        inputCount = 0;
    }
}

function focusField(){
    inputCount++;
}
