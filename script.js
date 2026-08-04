const select = document.getElementById("colorSelect");
const button = document.querySelector('input[type="button"]');

button.addEventListener("click", function () {
    select.remove(select.selectedIndex);
});