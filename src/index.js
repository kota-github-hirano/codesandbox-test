/**
 * const,let等の変数宣言
 */

// ctr+/でまとめてコメントアウト可能

// var val1 = "変数";
// console.log(val1);

// // var変数は上書き可能
// val1="hennsuu";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "変数変数";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);
// //letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);
// //letは再宣言不可

// const val3 = "const変数";
// console.log(val3);
// //constは上書き不可
// //constは再宣言不可

// //constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 28
// };
// console.log(val4);
// val4.name = "上書き";
// val4.address = "熊本";
// console.log(val4);

// //constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("other");
// console.log(val5);

// /**
//  * テンプレート文字列
//  */
// const name = "平野";
// const age = 28;
// //「私の名前は平野です。年齢は28歳です」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です 年齢は${age}歳です。`;
// console.log(message2);

// /**
//  * アロー関数
//  */

// // function func1(str) {
// //   return str;
// // }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));
// //1行で処理が終わる場合こうもかける
// const func22 = (str) => str;
// console.log(func22("func22です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */

//  const myProfile={
//    name:"平野",
//    age:28,
//  };
//  const message1 = `名前は${myProfile.name}です年齢は${myProfile.age}歳です`
//  console.log(message1);

//  const{name,age}=myProfile;
//  const message2 = `名前は${name}です年齢は${age}歳です`
//  console.log(message2);

const myProfile = ["hirano", 28];
const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
console.log(message3);

const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}です!`;
console.log(message4);
