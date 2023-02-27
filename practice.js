var element = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    let color = "#";
    //  since we need #F1B25A type of color so number of arrey lenght is 6
    for (let i = 0; i < 6; i++) {
        color += element[randomNumber()];
    }
    document.body.style.backgroundColor = color;
    btn.style.backgroundColor = color;
});

/* since we want random background generator so we have to pass the function that generates random number from 
color element in the array because we are going to use number from the array*/

function randomNumber() {
    return Math.floor(Math.random() * element.length);
}
