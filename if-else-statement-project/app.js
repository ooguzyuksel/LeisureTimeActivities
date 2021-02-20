const not = document.querySelectorAll(".note");
const success = document.querySelector(".success");
const failure = document.querySelector(".failed")

const not1 = parseInt(prompt("Mid-Term 1: "));
const not2 = parseInt(prompt("Mid-Term 2: "));
const final = parseInt(prompt("Final Exam: "));

const donemSonu = ((not1 + not2 + final) / 3);


if (donemSonu > 50) {
    success.classList.add("active");
    success.style.background = "greenyellow";
}
else {
    failure.classList.add("active");
    failure.style.background = "tomato";
}




/* function notDurumu() {
    not.forEach((notlar) => {
        notlariSil();
        notlar.classList.add("active");
    });

    function notlariSil() {
        not.forEach((notlar1) => {
            notlar1.classList.remove("active")
        });
    };
};
 */
