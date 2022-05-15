const btn_login = document.getElementById("btn-login");
const selector = document.getElementById("selector");
function onBtnLoginClicked() {
    if(selector.value == 1) {
        window.location.href = "../../../layouts/patientLayout/index.html";
    } else {
        window.location.href = "../../../layouts/doctorLayout/index.html";
    }
}

btn_login.addEventListener("click", onBtnLoginClicked);