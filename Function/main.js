// //cú pháp ==> function trông ra làm sao

// //param: tham số được truyền vào
// let classRoomFartTime = ["Vu", "Diem", "Quyet", "Dung", "Tung"];
// let classFullTime = ["Vu", "DUng", "Khoa", "Han", "Nam"];

// //them một học vào lớp  vao trong classRoom
// function addPersonIntoClass(person, classRoom) {
//   //thực hiện các chức năng của mình4
//   classRoom.push(person);
//   return classRoom; //tương ứng như thằng break bên vòng lặp for ==> khi mà mình return kết thúc cái function của mình
// }

// //Đối số: giá trị được truyền vào khi mà mình gọi function
// // addPersonIntoClass("Minh");

// // console.log(classRoom);

// //từ khóa return được hiểu là trả về

// console.log("lớp fulltime: ", addPersonIntoClass("The Anh", classFullTime));
// console.log("lớp part-time: ", addPersonIntoClass("Quynh", classRoomFartTime));

// //cú pháp
// //function: từ khóa khai báo hàm
// //nameFunction: tên của một cái chức năng ==> phụ vào tính năng mà mọi người đang làm
// // tên này được viết theo camelCase (con lạc đà ==> viết thường chữ đầu và Viết Hoa những chữ cái còn lại)
// //param: nó chính là tham số của hàm ==> nó có thể ko cần param, cũng có thể có 1 param và nhiều param
// //Statemeent / công việc bên trong: đoan code mà chức năng đó cần phải thực hiện

// //hoisting ==> khi mình khai báo với từ funtion ==> nó luôn luôn được đẩy lên trên cùng

// //khi mà mình khởi tạo một cái function ==> cái tên mà được truyền vào bên trong hàm ==> nó sẽ được gọi là tham số

// // khi nào mà nó được gọi là đối số => khi mà mình gọi hàm đấy ra và truyền vào giá trị cụ thể

// //Có bao nhiêu loại function

// //loại thứ nhất: function Expression 1 là mình gắn vào biến ==> ko cần gán gì cả

// let removePersonOutClass = function () {
//   //statements
//   let ketQua = "Đây là function Expression";
//   return ketQua;
// };

// console.log(removePersonOutClass());
// //tại sao nó lại in ra thằng undefined

// //loại thứ hai: function  thực hiện ngay lập tức ==> Hàm IIFE(Immediately invoked function expression)

// //khôi lệnh mà mình cần thực hiện ()()
// (function () {
//   console.log("tối nay ăn gì ");
// })();

// //Arrow Function (ES6) ==> giúp ngắn ngọn hơn ==> dễ hiểu hơn ==> code nhanh hơn

// //đơn giản hóa phạm vi function
// //hoisting ==> khai báo theo kiểu có tên function -==> được đẩy lên trên đầu
// //         ==> arrow function ==> thì nó sẽ được hoisting tại chỗ

// //hiện thị trước những thẳng funtion
// console.log(displayName("BUI Van Vu"));

// //express function
// function displayName(names) {
//   let fullName = names;
//   return fullName;
// }

// //arrow function
// const displayName2 = (names) => {
//   let fullName = names;
//   return fullName;
// };

// console.log(displayName2("Diem"));
// //khác nhau về cách khởi tạo
// //          hoisting

// //Javascript nâng cao rest Param

// //reset Param được thể hiện qua 3 thằng dấu chấm ... ở trên thằng param nó sẽ trả về cho mọi người một kiểu là mảng khi mà truyền đối số vào

// //khởi tạo một function

// function sumPerson(...person) {
//   console.log("Đây là số người học viên vào: ", person);
//   let sumPerson = 0;
//   //lặp qua cái array và tính tổng số học viên
//   for (let i = 0; i < person.length; i++) {
//     sumPerson = sumPerson + person[i];
//   }
//   return sumPerson;
// }

// console.log(sumPerson(3, 4, 7));

//sử dụng 1 thằng WebAPIs (setTimeOut(chức năng, khoảng thời gian) ==> thực hiện đoạn khoảng thời gian được set-up) ==> ví dụ 1000mls =>. sau 1000s nó mới thực hiện chức năng của mình ==> hàm ẩn

// const displayHobby = () => {
//   console.log("lap trinh, tieng nhat");
// };

// setTimeout(() => {
//   displayHobby();
// }, 10000);

//Web Apis

//khác nhau về hoisting khai báo biến (scope ==> (phạm vi của biến))

//var : khai báo lại, gắn lại giá trị, luôn luôn được hoisting lên trên đầu ==> gây ra cho  việc khó đọc hiểu giống function expression
//let: không khai báo lại được, nhưng mà nó có thể gắn lại giá trị ==> hoisting nhưng hoisting tại chỗ giống như thằng arrow fucntion
//const: không khai lại được đồng thời nó cũng không gắn lại được ==> thường dùng cho Hằng số ==> hoisting nhưng hoisting tại chỗ giống như thằng arrow fucntion

//Hoisting

//scope(phạm vi truy cập)
//var ==> có thể truy cập ở bất kì đâu nhưng ở phạm vi cố định ==> function, for(..i)
//let và const ==> được khai báo ở đâu thì truy cập ở đó ví dụ
//1. khai báo let, const ở phạm vi ngoài global ==> thì nó được dùng ở bất kì đâu
// phạm vi funtion thì nó chỉ được dùng ở trong function, for(..i) thì cũng dùng được trong vòng lặp for

//Truong hop sai

// function displayFullName(name) {
//   console.log("name", name);
//   return name;
// }

// console.log(displayFullName(fullName));

// var fullName = "Bui Van Vu";

//closures (khái niệm nâng cao ==> nhưng mà nhiều người đang sử dụng nhưng chưa biết đến thằng này)

// function getPerson() {
//   let person = "Diem";
//   //biến được đặt ở bên ngoài

//   function displayName() {
//     //trong hàm displayName ko có thằng person thì nó  nhảy ra ngoài tìm biến person gần nhất để hiện thi ra thì gọi là closures
//     return person;
//   }

//   return displayName();
// }

// const result = getPerson();
// console.log(result);

//callback(hàm được gọi lại) ==> đây là một khái niệm nâng cao khó hiểu

//function vụ dạy học

//thứ bảy
function teachJavascript() {
  return "Vụ đang dạy mọi người";
}

function vuGiveHomeWork() {
  return "Vụ giao bài tập";
}
//không muốn dùng ngay lập tức

//CHủ nhật
function play() {
  return "chơi ngủ và nghỉ";
}
console.log(play());

//ngày thứ 2
function work() {
  return "đi làm tại rikkei Academy";
}
console.log(work());

//ngày thứ 3 thằng Vụ nó mới dạy mọi người vào buổi tối
function TuesdayTeachJavascript(callback1, callback2) {
  return [callback1, callback2];
}

console.log(TuesdayTeachJavascript(teachJavascript(), vuGiveHomeWork()));
