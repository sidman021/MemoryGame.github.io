console.log("JS Connected")

const emojis = ["😂", "😂", "❤️", "❤️", "😒", "😒", "😎", "😎", "🚗", "🚗", "🍕", "🍕", "🍗", "🍗", "🎈", "🎈"]

let shuffle = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1);
for (let i = 0; i < emojis.length; i++) {
    let div = document.createElement("div");
    div.className = "item";
    div.innerHTML = shuffle[i];
    div.onclick = function () {
        this.classList.add("boxOpen");
        setTimeout(() => {
            if (document.querySelectorAll(".boxOpen").length > 1) {
                if (document.querySelectorAll(".boxOpen")[0].innerHTML == document.querySelectorAll(".boxOpen")[1].innerHTML) {
                    document.querySelectorAll(".boxOpen")[0].classList.add("boxMatch");
                    document.querySelectorAll(".boxOpen")[1].classList.add("boxMatch");
                    
                    document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
                    document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");

                    if(document.querySelectorAll(".boxMatch").length == emojis.length){
                        alert("Game Won")
                    }
                }
                else{
                    document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
                    document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
                }
            }
        }, 500)
    }
    document.querySelector(".game").appendChild(div);
}