document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("container");
    var addBoxButton = document.getElementById("addBox");

    function createBox() {
        var box = document.createElement("div");
        box.className = "box";

        // Промена на рабовите при клик
        box.addEventListener("click", function () {
            if (box.style.borderRadius === "50%") {
                box.style.borderRadius = "45%";
            } else {
                box.style.borderRadius = "50%";
            }
        });

        // Промена на боја при позиционирање на глувчето врз квадратот
        box.addEventListener("mouseover", function () {
            box.style.backgroundColor = "magenta";
        });

        // Враќање на бојата при напуштање на квадратот
        box.addEventListener("mouseout", function () {
            box.style.backgroundColor = "black";
        });

        container.appendChild(box);
    }

    // Додавање нов квадрат со кликање на копчето
    addBoxButton.addEventListener("click", createBox);

    // Додавање еден почетен квадрат за пример
    createBox();
});
