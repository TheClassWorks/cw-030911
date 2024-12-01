let $ = document;

// let h1Elem = $.querySelector(".titr");

// // h1Elem.addEventListener("click", function () {
// //   console.log("تیتر کلیک شد");
// // });
// h1Elem.addEventListener("click", () => console.log("تیتر کلیک شد"));

let hiddenBtn = $.querySelector("#btn");
let h1Elem = $.querySelector(".titr");

hiddenBtn.addEventListener("click", () => {
  h1Elem.classList.toggle("hide");
});

h1Elem.addEventListener("click", () => h1Elem.classList.toggle("banafsh"));

<i class="bi bi-eye"></i>
<i class="bi bi-eye-slash"></i>