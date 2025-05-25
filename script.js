let input = document.getElementById("input-task");
let addbtn = document.getElementById("add-button");
let tasklist = document.getElementById("task-list");

addbtn.addEventListener("click", () =>{
    let taskText = input.value.trim();
    if(taskText ==="") return;

    let li = document.createElement("li");

    li.textContent = taskText;

    li.addEventListener("click", () =>{
        li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(deleteBtn);
    tasklist.appendChild(li);

    input.value = "";
});
