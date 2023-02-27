"use script"


functionName(12,13);
function functionName(a,b){
  let sum = a + b;
  console.log(sum);

  return sum;
}

const functionName2 = function (a , b){
  let sum = a - b;
  console.log(sum);


  return sum;
};

functionName2(12,14);

const arrowFunction = ( a =1, b = 1)=> a*b;
console.log(arrowFunction(100));
console.log(arrowFunction(1000, 0.1));

// const user = {
//   fName: "Shakhzoda",
//   lName: "Istamova",
//   email: "@gamil.com",
//   nowYear:2023,


//   countyear:function(age){
//     const birthYear = this.nowYear - age;
//     return birthYear;
//   },


//   birthYear(age , sum){
//     const birthYear = this.nowYear - age;
//     return{birthYear, sum};
//   },
// }

//  //console.log(user.birthYear(20));


// const admin = {
//   fName: "Shakhzoda",
//   lName: "Istamova",
//   email: "@gamil.com",
//   nowYear:2053,
// };


// let a=[40,30];
// let b=10;

// // console.log(user.birthYear.call(admin, b));
// // console.log(user.birthYear.call(admin, ...a));

// //console.log(user.birthYear.apply(admin,[b]));