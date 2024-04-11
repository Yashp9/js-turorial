// //window.alert("hi");
// var a = 828; // var has a global scope
// console.log(`the value of a is ${a}`);
// {
//   var a = 67;
//   console.log(`the value of a inside the block is ${a}`);
// }
// console.log(`the value of a after changing it inside the block ${a}`);
// // output will be 828 , 67 , 67 thats why if you want tha diffrent value
// //of the same variable in diffrent blocks then use let insted of var

// let b = 55;
// console.log(`the value of b is ${b}`);
// {
//   let b = 54;
//   console.log(`the value of b inside the block is ${b}`);
// }
// console.log(`the value of b after changing it inside the block ${b}`);

// //var can be updated and reddeclared again but let can be updated but not redeclared.
// const name = "dhokla";
// //const, once declared cann't be changed ;

//############## 02 {datatype[primitive] and objects[non-primitive]} ###############
//nnbbssu =>null,no,BigInt,boolean,string,symbol,undefined.
// let a = null;
// let b = 67;
// let c = BigInt("9999");
// let d = true;
// let e = "my_name";
// let f = Symbol("$");
// let g = undefined;
// console.log(a,b,c,d,e,f,g)
// // console.log(`a = ${a} b = ${b} c = ${c}  d = ${d} e = ${e} f = ${f} g = ${g}`);
// console.log(typeof(c));

// //basics of object
// const school = {
//     "school_name":"vsixe",
//     "good":false,
//     "classes":22
// }
// console.log(school["school_name"],school["good"]);

// let age = prompt("enter your age");
// let x = parseInt(age);
// console.log(typeof(x),x);
// switch(x){
//     case 12:
//         console.log("12");
//         break;

//     case 14:
//         console.log("14");
//         break;
// }


//for in loop
// let subject_marks = {
//     "science":67,
//     "maths":77,
//     "computer":99,
//     hindi:78
// }
// let animal = {
//     cow:67,
//     lion:5,
//     tiger:8,
//     zebra:66
// }
// console.log(subject_marks.hindi   );
// for(let a in subject_marks){
//     console.log(a+" = "+subject_marks[a]);
// }
// for(let keys in animal)
// {
//     console.log(`${animal[keys]} ${keys}`);
// }

// let arr = ["yashbro","yashpro","yashboss"]
// for(let x of arr)
// {
//     console.log(x);
// }

// let obj_1 = {
//     item:100,
//     type:"plastic",
//     color:"purple"
// }
// for(x in obj_1){
//     console.log(`${x} = ${obj_1[x]}`); 
// }
// const pi = 3.14;
// let radius,area;
// document.getElementById("click").onclick = function(){
//     radius = document.getElementById("get").value;
//     radius = Number(radius);
//     area=pi*radius*radius;
//     document.getElementById("answer").textContent = area;
    
// };
// let pre = 0;
// document.getElementById("inc").onclick = function()
// {
//     pre++
//     document.getElementById("count").textContent = pre;
// }
// document.getElementById("dec").onclick = function()
// {
//     pre--
//     document.getElementById("count").textContent = pre;
// }
// document.getElementById("res").onclick = function()
// {
//     document.getElementById("count").textContent = 0;
// }
//50 to 100
// for(let i = 0;i<=200;i++){
//     let x = Math.floor((Math.random()*50)+50)
//     console.log(x);
//     }
//     //code for random range is (Math.random()*max-min)+min

// let username = window.prompt("enter your name");
// let first = username.trim();
// first = first.charAt(0);
// first = first.toUpperCase();
// let last = username.slice(1);
// last = last.toLowerCase();
// alert(first+last);


//method chaining
// let username = window.prompt("enter your name");
// username = username.trim().charAt(0).toUpperCase()+username.slice(1).toLowerCase();
// alert(username);

// let real_no = Math.floor((Math.random()*10)+1);
// let running = true;
// let guess
// while(running)
// {
//     guess = window.prompt("enter your no between 1-10");
//     guess=Number(guess);
//     if(real_no>guess)
//     {
//         window.alert("no is too low");
//     }
//     else if(real_no<guess)
//     {
//         window.alert("no is too high");
//     }
//     else if(real_no==guess)
//     {
//         window.alert("you got the right answer");
//         running = false;
//     }

// }
let input_val = document.getElementById("value");
let tofahrenhite = document.getElementById("far");
let tocelsius = document.getElementById("cel");
let result = document.getElementById("result");
let temp;
function convert()
{
    if(tocelsius.checked)
    {
      temp = (input_val.value-32)*5/9;
      result.textContent = temp.toFixed(2)+" degree celsius";
    }
    if(tofahrenhite.checked)
    {
      temp = ((9/5)*input_val.value)+32;
      result.textContent = temp.toFixed(2)+" degree fahrenhite";
    }
}