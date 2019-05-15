function toGridView() {
    document.getElementById("gridView").style.display = "grid";
    document.getElementById("addTask").style.display = "none";
    document.getElementById('taskList').style.display = "none";
}

function toAddTask() {
    document.getElementById("gridView").style.display = "none";
    document.getElementById("addTask").style.display = "block";
    document.getElementById('taskList').style.display = "none";
}

function toList() {
    document.getElementById("gridView").style.display = "none";
    document.getElementById("addTask").style.display = "none";
    document.getElementById('taskList').style.display = "block";
}

exports.toGridView = toGridView;
exports.toAddTask = toAddTask;
exports.toList = toList;