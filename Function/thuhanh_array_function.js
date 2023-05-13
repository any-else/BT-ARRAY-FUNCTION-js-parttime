/**
 *
 */

let personList = ["Diem", "Vu", "Quyet", "DUNG", "MInh"];

//có 5 phần tử
//có index sẽ là 4 ==> để mà lấy ra chỉ số index của phần cuối cùng trong mảng => personList.length - 1

//để truy xuất phần tử ==> personList[0] ==> "Diem"

/**
 * Bài 1:
 */
// làm chay for (..i)
let myColorList = ["Red", "Green", "White", "Black"];
let mangTen = ["VU", "DIEM", "QUYET", "MINH"];

function xuLyMang(listColor) {
  let result = listColor[0];
  for (let i = 1; i < listColor.length; i++) {
    result = result + `+ ${listColor[i]}`;
  }
  return result;
}

console.log(xuLyMang(myColorList));

/**
 * bài số 2
 *
 */

let inputUser = prompt("Nhập vào một dãy số: ");

//cho về một mảng
let numberList = inputUser.split("");
console.log(numberList);
let str = "";
// 025468;
//duyet qua mang
for (let i = 0; i < numberList.length; i = i + 1) {
  //nếu số thứ nhất mà chẵn, số thứ hai cũng thế
  if (numberList[i] % 2 == 0 && numberList[i + 1] % 2 == 0) {
    str = str + `${numberList[i]}-`;
  } else {
    str = str + `${numberList[i]}`;
  }
}

console.log(str);
