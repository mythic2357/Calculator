let str = ""
let buttons = document.querySelectorAll("button")
let arrayBtns = Array.from(buttons)
let numinput = document.getElementById("input")

for (let btn of arrayBtns) {
    btn.addEventListener("click", function (e) {
        let value1 = e.target.value
        if (value1 == "=") {
            let sol = eval(str)
            numinput.value = sol
        }
        else if (value1 == "AC") {
            str = ""
            numinput.value = str
        }
        else if (value1 == "C") {
            str = str.substring(0, str.length-1)
            numinput.value = str
        }
        else {
            str = str + value1
            numinput.value = str
        }
    })
}