var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button")
var tabPanels = document.querySelectorAll(".tabContainer .tabPanel")

function showPanel(panelIndex, colorCode) {
    tabButtons.forEach(function(node) {
        node.style.backgroundColor = "";
        node.style.color = "";
    });
    tabButtons[panelIndex].style.backgroundColor = colorCode;
    tabButtons[panelIndex].style.color = "white";
    tabPanels.forEach(function(node) {
        node.style.display = "none";
    });
    tabPanels[panelIndex].style.display = "flex";
    tabPanels[panelIndex].style.backgroundColor = colorCode;
}

showPanel(0, "blue")


const imageInput = document.querySelector(".image_input")
const uploadImage = document.querySelector(".upload_img")
const send = document.querySelector(".send")
const title = document.querySelector(".title")
const description = document.querySelector(".description")

let newFile = null;
imageInput.addEventListener('change', (e) => {
    let file = e.target.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
        newFile = reader.result
    }
    reader.readAsDataURL(file)
})
send.addEventListener("click", () => {
    axios.post("https://oguz-fe9a7-default-rtdb.firebaseio.com/features.json", { id: Date.now(), description: description.value, title: title.value, image: newFile, })
        .then(res => {

            title.value = ""
            description.value = ""
            imageInput.value = ""
            console.log(res)
        })
        .catch(error => console.log(error))
})


// const imageInput = document.getElementById("image_inputTe")
// const uploadImage = document.getElementById("upload_imgTe")
// const send = document.getElementById("sendTe")
// const title = document.getElementById("titleTe")
// const description = document.getElementById("descriptionTe")
// const text = document.getElementById("textTe")
// let newFile = null;
// imageInput.addEventListener('change', (e) => {
//     let file = e.target.files[0]
//     const reader = new FileReader()
//     reader.onloadend = () => {
//         newFile = reader.result
//     }
//     reader.readAsDataURL(file)
// })
// send.addEventListener("click", () => {
//     axios.post("https://oguz-fe9a7-default-rtdb.firebaseio.com/features.json", { id: Date.now(), description: description.value, title: title.value, image: newFile })
//         .then(res => {
//             title.value = ""
//             description.value = ""
//             uploadImage.value = ""
//             console.log(res)
//         })
//         .catch(error => console.log(error))
// })