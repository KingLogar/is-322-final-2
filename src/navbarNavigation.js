function toGridView() {
    document.getElementById("gridView").style.display = "grid";
    document.getElementById("addTask").style.display = "none";
}

function toAddTask() {
    document.getElementById("gridView").style.display = "none";
    document.getElementById("addTask").style.display = "block";
}

exports.toGridView = toGridView;
exports.toAddTask = toAddTask;