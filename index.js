// onsole.log("Hello World!");
//          alert("me");  
//          console.warn("This is warning");
//          console.error("this is error");


// var num1 = 34;
// var num2 = 34;
// document.write(num1+num2);
// console.log(num1+num2);

// var str = "this is string ";
// var str2 = "this is string too";

// console.log(str);

// var und = undefined;
// var und;
// console.log(und);

// var n = null;
// console.log(n);

// var arr = [1,2,3,4,5];



// function avg(a,b){
//     return (a+b)/2;
// }
// c1 = avg(12,6);
// c2= avg (14,12);
// console.log(c1,c2);



// var age = 20;
// if(age>12){
//     console.log("you are not a kid ");
// }
// else
//      console.log("You are a kid now");


// var age = 32;
// if(age>38){
//     console.log("you are not a kid");
// }

// else if(age>32){
//     console.log("you are too old");
// }

// else if(age==32){
//     console.log("You are able to join for election:")
// }

// else 
//    console.log("not valid:");



// var arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr);
// for(var i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }


// let myarr = ['ali',12,null,true];
// myarr.pop();
// myarr.push('razzaq');
// myarr.shift();
// myarr.unshift('qq');
// myarr.sort();

// console.log(myarr);


// let str = "I am a good boy and she is good too."
// console.log(str);
// console.log(str.length);
// console.log(str.indexOf("good"));
// console.log(str.lastIndexOf("good"));

// console.log(str.slice(1,11));


// let mydate = new Date();
// console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getMonth());
// console.log(mydate.getDay());



// DOM MANIPULATION
// let elem = document.getElementById('click');
// console.log(elem);
// let elemclass = document.getElementsByClassName('container');
// console.log(elemclass);

// elemclass[1].style.background = "yellow";
// elemclass[1].style.border = "2px solid black";

// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemclass[0].innerHTML);
// console.log(elemclass[1].innerText);

// tn = document.getElementsByTagName('div')
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText="this is a created element";
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerText="this is a created bold element";
// tn[0].replaceChild(createdElement2,createdElement);


// sel = document.querySelector('.container')
// console.log(sel);
// sel = document.querySelectorAll('.container')
// console.log(sel);

// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b>We are clicked </b>"
//    console.log("Button was clicked:");
// }
// )
// firstContainer.addEventListener('mouseover',function(){
//     console.log("MouseOver was clicked:");
//  }
//  )
//  firstContainer.addEventListener('mouseout',function(){
//     console.log("MouseOut was clicked:");
//  }
//  )

// firstContainer.addEventListener('mousedown',function(){
//         console.log("Mousedown was clicked:");
//      }
//      )



// Arrow function
//  function sum(a,b){
//     return a+b;
//  }

//  sum = (a,b)=>{
//    return a+b;
//  }

// setTimeOut and setinterval --> scheduling a function
// logkaro = ()=>{
//     console.log("i am your log");
// }
// setTimeout(logkaro,2000);
// setInterval(logkaro,2000);
// clr = setInterval(logkaro,2000);


// localStorage.getItem('name','abdul')
// null
// localStorage
// localStorage.setItem('name','abdul')
// undefined
// localStorage
// Storage {name: 'abdul', length: 1}name: "abdul"length: 1[[Prototype]]: Storage
// localStorage.getItem('name')
// 'abdul'
// localStorage.removeItem('name');
// localStorage.clear();


// JSON 
// obj = {name:"abdul",length:1}
// jso = JSON.stringify(obj);
// console.log(jso);
// console.log(typeof jso);
// console.log(typeof obj);


//   var a = confirm('Are you 18+?');
//   alert(a);


// var a = prompt('Enter your Name?');
// alert(a);
// document.write(a);

// function fun (){
//     alert("Event Activated:");
// }
//  var myWindow;
// function OpenWindow(){
//    myWindow =  window.open("https://www.google.com","","width=500px,height=500px,top=200px,left=200px");
// }

// function closeWindow(){
//     myWindow.close();
// }

// window.onload = function(){
// var body = document.getElementsByTagName('body');
// var button = document.getElementById('button');

// button.onclick = function (){
//     if(body.className=="black"){
//         body.className="white";
//         button.className="black";
//     }
//     else{
//         body.className="balck";
//         button.className="white";
//     }

// };
// };


/* document.getElementById("img1").onmouseover = abc;
      function abc() {
        document.getElementById("img1").style.filter = "grayscale(0%)";
      }

      document.getElementById("img1").onmouseout = xyz;
      function xyz() {
        document.getElementById("img1").style.filter = "grayscale(100%)";
      }

      document.getElementById("img2").onmouseover = def;
      function def() {
        document.getElementById("img2").style.filter = "grayscale(0%)";
      }

      document.getElementById("img2").onmouseout = mno;
      function mno() {
        document.getElementById("img2").style.filter = "grayscale(100%)";
      } */


    //   document
    //     .getElementById("img1")
    //     .addEventListener("mouseover", function () {
    //       this.style.filter = "grayscale(0%)";
    //     });

    //   document.getElementById("img1").addEventListener("mouseout", function () {
    //     this.style.filter = "grayscale(100%)";
    //   });

    //   document
    //     .getElementById("img2")
    //     .addEventListener("mouseover", function () {
    //       this.style.filter = "grayscale(0%)";
    //     });

    //   document.getElementById("img2").addEventListener("mouseout", function () {
    //     this.style.filter = "grayscale(100%)";
    //   });


    // window.addEventListener("scroll",
    //  function () {

    //   if (window.pageYOffset < 1000) {
    //     document.body.style.background = "black";
    //     document.body.style.color = "white";

    //   } 
    //   else if (window.pageYOffset > 400) {
    //     document.body.style.background = "green";
    //   }
    // });


    // let person = {
    //   firstName: "Abdul",
    //   lastName: "Razzaq",
    //   age: 19,
    //   hobbies: ["playing cricet", "watching movies", "coding"],
    //   living: { food: "pizza", vegetable: "onion", fruits: "apple" },
    // };
    // console.log(person.living.food);


    // var x = Math.round(5.5);
    //   var x = Math.ceil(5.3);
    //   var x = Math.floor(5.9);

    //   var x = Math.pow(5, 2);
    //   var x = Math.sqrt(100);
    //   var x = Math.min(100, 2, 33, 44, 55, 66);
    //   var x = Math.max(100, 2, 33, 44, 55, 66);

    //   console.log(x);


    // var d = new Date("march 10 2010");
    //   document.write(d);
    //   document.write("<br>");
    //   document.write(d.toDateString());
    //   document.write("<br>");
    //   document.write(d.getFullYear());


    // var title = document.getElementById('title');
    //   title.textContent='Online Classes';
    //   title.innerText='Pro classes';
    //   title.innerHTML = '<h1> HELLO </h1>';
    //   var header =  document.getElementById('header');
    //   header.style.borderBottom = '5px solid #000';
    // console.log(title);


    // var itemss = document.getElementsByClassName('list-items');
    //   itemss[1].textContent = "DIGITAL MARKETING";
    //   itemss[0].style.fontWeight = "bold";
    //   itemss[1].style.fontWeight = "bold";
    //   itemss[2].style.fontWeight = "bold";
    //   itemss[3].style.fontWeight = "bold";

    //   itemss[0].style.color = "black";
    //   itemss[1].style.color = "black";
    //   itemss[2].style.color = "black";
    //   itemss[3].style.color = "black";

    //   itemss[0].style.backgroundColor = "orange";
    //   itemss[1].style.backgroundColor = "orange";
    //   itemss[2].style.backgroundColor = "orange";
    //   itemss[3].style.backgroundColor = "orange";

    //    for(var i=0; i<itemss.length; i++){
    //     itemss[i].style.backgroundColor = "yellow";
    //    }
    // console.log(itemss[1]);



    // var tag = document.querySelector('#tagline');
    // tag.style.color="red";

    // var list = document.querySelector('.list-items');
    // list.style.color="yellow";

    // var tag = document.querySelector('#tagline');
    // tag.style.color="yellow";

    // var list = document.querySelector('.list-items:last-child');
    // list.style.color="red";

    // var list = document.querySelector('.list-items:nth-child(2)');
    // list.style.color="red";

    // var list = document.querySelector('.list-items:nth-child(3)');
    // list.style.color="red";

    // var list = document.querySelector('.list-items');
    // list.style.color="red";

    // var input = document.querySelector('input');
    // input.value="Enter your Name:";

    // var button = document.querySelector('input[type="submit"]');
    // button.style.backgroundColor="green";
    // button.style.color="white";
    // button.value="SEND";

    // var odd = document.querySelectorAll('li:nth-child(odd)');
    //   for(var i=0; i<odd.length; i++){
    //     odd[i].style.backgroundColor="green";
    //   }

    //   var even = document.querySelectorAll('li:nth-child(even)');
    //   for(var i=0; i<even.length; i++){
    //     even[i].style.backgroundColor="yellow";
    //   }


    // var newDiv = document.createElement('div');

    //   newDiv.className="box";
    //   newDiv.id="textBox";

    //   var text = document.createTextNode('Hey! I am Abdul Razzaq');
    //   console.log(text);
    //   newDiv.appendChild(text);
    //   console.log(newDiv);

    //   var container = document.querySelector('#content');
    //   var form  = document.querySelector('form');

        
    //     newDiv.style.color="red";
    //     newDiv.style.backgroundColor="yellow";
    //     newDiv.style.border='2px solid black';
    //     newDiv.style.padding='4px';
    //     newDiv.style.margin="15px 900px 0px 4px";

    //   container.insertBefore(newDiv,form);


    var feet = document.getElementById('feet');
    var inch = document.getElementById('inch');

    feet.addEventListener('input',function () {
       let f = this.value;
      let i = f*12;
      inch.value = i;
    });

    inch.addEventListener('input',function () {
      let i = this.value;
     let f = i/12;
     feet.value = f;
   });