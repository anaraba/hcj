document.addEventListener("DOMContentLoaded", function () {
    var taskForm = document.getElementById("taskForm");
    var taskList = document.getElementById("taskList");

    taskForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        var taskTitle = document.getElementById("taskTitle").value;
        var taskContent = document.getElementById("taskContent").value;

        // Креирање нова задача
        var listItem = document.createElement("li");
        listItem.innerHTML = `<span><strong>${taskTitle}:</strong> ${taskContent}</span>`;
        
        // Копче за бришење на задачата
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Избриши задача";
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        // Ресетирање на формата
        taskForm.reset();
    });
});
