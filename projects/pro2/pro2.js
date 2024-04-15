// function generate_password(){
//     let container="";
//     let password = "";
//     const numberval = "1234567890";
//     const upperval = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const lowerval = "abcdefghijklmnopqrstuvwxyz";
//     const symbolval = "!@#$%^&*";
//     let length = document.getElementById("length").value;
//     let isuppercase = document.getElementById("uppercase").Checked;
//     let islowercase = document.getElementById("lowercase").Checked;
//     let isnumber = document.getElementById("number").Checked;
//     let issymbol = document.getElementById("symbol").Checked;
//     let displaychange = document.getElementById("displaypassword");
//     displaychange.innerHTML = <h1>"length must be atleast 1"</h1>

//     isuppercase?container+=upperval:"";
//     islowercase?container+=lowerval:"";
//     isnumber?container+=symbolval:"";
//     issymbol?container+=numberval:"";
//     if(length==0)
//     {
//         displaychange.innerHTML = <h1>"length must be atleast 1"</h1>
//     }
//     console.log(container.length);
//     if(container.length===0)
//     {
//         displaychange.innerHTML = <h1>atleast select one type</h1>
//     }
//     for(let i=0;i<length;i++)
//     {
//         let selectval = Math.floor(Math.random()*container.length);
//         password+=container[selectval];

//     }
//     console.log(password);
//     displaychange.innerHTML = password;
// }

// // const password_length = 5;
// // const allowupper = true;
// // const allowlower = true;
// // const allowsymbol = true;
// // const allowno = tr
// // let finalpassword = generate_password(password_length,allowupper,allowlower,allowsymbol,allowno);
// // // document.getElementById("password").innerText = password;
// // window.alert(password);
function generate_password() {
  let container = "";
  let password = "";
  const numberval = "1234567890";
  const upperval = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerval = "abcdefghijklmnopqrstuvwxyz";
  const symbolval = "!@#$%^&*";
  console.log("hihi");
  let length = document.getElementById("length").value;
  let isuppercase = document.getElementById("uppercase").checked;
  let islowercase = document.getElementById("lowercase").checked;
  let isnumber = document.getElementById("number").checked;
  let issymbol = document.getElementById("symbol").checked;
  let badlomc = document.getElementById("displaypassword");
  isuppercase ? (container += upperval) : "";
  islowercase ? (container += lowerval) : "";
  isnumber ? (container += symbolval) : "";
  issymbol ? (container += numberval) : "";
  console.log(length);
  if (length == 0) {
    badlomc.innerText = "length must be atleast 1";
  }
  console.log(container.length);
  if (container.length === 0) {
    badlomc.innerText = "atleast select one type";
  }
  for (let i = 0; i < length; i++) {
    let selectval = Math.floor(Math.random() * container.length);
    password += container[selectval];
  }
  console.log(password);
  badlomc.innerHTML = password;
}
