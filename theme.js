const body = document.querySelector("body"),
toggle = document.querySelector(".toggle");
let getMode = localStorage.getItem("mode");

if (getMode && getMode === "theme_two") {
    body.classList.toggle("theme_two");
    toggle.classList.toggle("active")
}

toggle.addEventListener("click", ()=> {
    body.classList.toggle("theme_two");

    if (!body.classList.contains("theme_two")) {
        return localStorage.setItem("mode", "");
    }
    
    return localStorage.setItem("mode", "theme_two");
});

toggle.addEventListener("click", () => toggle.classList.toggle("active"));