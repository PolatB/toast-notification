const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
    createFunction();
})

function createFunction(){
    const notif = document.createElement("div");
    notif.classList.add("toast");
    
    notif.innerHTML = "Thank you master!"

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}