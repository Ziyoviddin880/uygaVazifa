// let a = prompt("Birinchi sonni kiriting:");
// let b = prompt("Ikkinchi sonni kiriting:");

// let c = confirm(
//   "Siz " +
//     a +
//     " va " +
//     b +
//     " sonlarini kiritdingiz Agar OK ni bossangiz ikkala son qo'shiladi CANCEL ni bossangiz ayriladi"
// );

// if (c === true) {
//   alert(a + "+" + b + " = " + (Number(a) + Number(b)));
// } else {
//   if (a - b >= 0) {
//     alert(a + "-" + b + " = " + (a - b));
//   } else {
//     alert(a + " soni " + b + " dan kichik ayirib bo'maydi!");
//   }
// }

let name = prompt("Ismingizni kiriting:");

if (!name) {
  alert("Ismingizni kiriting!");
  name = prompt("Ismingizni kiriting:");
}
let cases = prompt(
  "Ismingizni katta yoki kichik harflarda qilishingiz mumkin \n 1)katta harflar \n 2)kichik harflar"
);

if (cases === "1") {
  alert(name.toUpperCase());
} else if (cases === "2") {
  alert(name.toLowerCase());
} else {
  alert("1 yoki 2 ni kiriting!");
  cases = prompt(
    "Ismingizni katta yoki kichik harflarda qilishingiz mumkin \n 1)katta harflar \n 2)kichik harflar"
  );
  if (cases === "1") {
    alert(name.toUpperCase());
  } else if (cases === "2") {
    alert(name.toLowerCase());
  }
}
