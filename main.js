

// const form = document.getElementById("form");
// const input = document.getElementById("input");
// const btnMinus = document.getElementById("minus");
// const btnPlus = document.getElementById("plus");
// const soz = document.getElementById("text");

// let count = 0;

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const inputValue = Number(input.value);


//     if (inputValue == "") {
//         alert("Son kiriting!");
//     }
//     count = inputValue;
//     soz.textContent = count;




//     input.value = "";

// })

// btnMinus.addEventListener("click", function () {
//     count--;
//     soz.textContent = count;
// });

// btnPlus.addEventListener("click", function () {
//     count++;
//     soz.textContent = count;
// });






const form = document.getElementById("form");
const input = document.getElementById("input");
const btnMinus = document.getElementById("minus");
const btnPlus = document.getElementById("plus");
const soz = document.getElementById("text");
const colorPicker = document.getElementById("colorPicker");

let count = 0;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputValue = Number(input.value);

    if (input.value === "") {
        alert("Son kiriting!");
    }
    count = inputValue;
    soz.textContent = count;
    input.value = "";
});

btnMinus.addEventListener("click", function () {
    count--;
    soz.textContent = count;
});

btnPlus.addEventListener("click", function () {
    count++;
    soz.textContent = count;
});

colorPicker.addEventListener("input", function () {
    soz.style.color = this.value;
});

