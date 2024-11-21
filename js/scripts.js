// // This function is to show hello world


// /*\
//  1, dfdff
//  3 dfd
// 4. multiline comments

// */
// //dfdfd


var firstName ="This my date of birth";
var lastName ="17 october 2003";

console.log(firstName + " " +lastName);



var num1= 50;
var num2= 3;
var multiplication = num1 * num2;
console.log(multiplication)


var num1= 1000;
var num2= 2;
var division= num1/num2;
console.log(division);


var fullName = "Lamiya mimi";
console.log(fullName.length);

console.log(fullName[4]);

var fullName = "Lamiya Mimi";
console.log(fullName.replace("Mimi" , "Hamduna"));


var power = Math.pow(10,12);
console.log(power);


var squareRoot = Math.sqrt(169);
console.log(squareRoot);

var randomNumber = Math.random();
console.log(randomNumber);


var count = "40.05";
var count2 = "20";

var sum = parseFloat(count) + parseInt(count2);

console.log(sum);


var birthday = "17 october";
var currentDate = "21 october";
 if(currentDate === "17 october" ) {
    console.log("happy birhday")
 } else{
    console.log("sorry")
 }



 var birthday = "17 october";
 var currentDate = "21 october";
  if(currentDate >= "21 october" ) {
     console.log("happy birhday")
  } else{
     console.log("sorry")
  }
 
 

  function minusNumber(num1,num2) {
   
   var result = num1 - num2;
   console.log(result);
   alert(result)
 
 
  }
      
  

  minusNumber(1024,128);



  function divisionNumber(num1,num2) {
   
   var result = num1/num2;
   return result;
 
  }
      
  

 var divisionResult = divisionNumber(1024,128);
 alert(divisionResult)

 var divisionResult1 = divisionNumber(1000,100);
 alert(divisionResult1)

 var divisionResult2 = divisionNumber(5000,100);
 alert(divisionResult2)



function divisionNumber(c) {

   var result =  (9 * c/ 5) + 32
   return result;
}

var divisionResult = divisionNumber(38);
console.log( divisionResult);
document.getElementById("fahr_1").innerHTML =divisionResult;




function divisionNumber(c) {

   var result =  (9 * c/ 5) + 32
   return result;
}

var divisionResult = divisionNumber(24);
console.log( divisionResult);
document.getElementById("fahr_2").innerHTML =divisionResult;



function divisionNumber(c) {

   var result =  (9 * c/ 5) + 32
   return result;
}

var divisionResult = divisionNumber(-1);
console.log( divisionResult);
document.getElementById("fahr_3").innerHTML =divisionResult;



var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 
classification.shift();
console.log(classification);
classification.shift();
console.log(classification);
classification.shift();
console.log(classification);


document.getElementById("best_students").innerHTML = classification;


var course = {
   'title': "Learn to Code in Python 3",
   'categories': ['programming', 'technology', 'python'],
   '5_stars_reviews': 420,
   '4_stars_reviews': 80,
   '3_stars_reviews': 33,
   '2_stars_reviews': 20,
   '1_stars_reviews': 4
}
console.log(course[0]['title'][0]);
document.getElementById("course_title").innerHTML =course[0]['title'][0];



document.getElementById("color_button").onclick = function () {
   document.getElementById("color_button2").style.background = "yellow";
   document.getElementById("color_button2").style.display = "inline";
   document.getElementById("crossButton").style.display = "inline";
};
document.getElementById("crossButton").onclick = function () {
   document.getElementById("color_button2").style.display = "none";
   document.getElementById("crossButton").style.display = "none";
}




var clickButton = document.getElementById("color_button");
var showButton = document.getElementById("hide");

clickButton.onclick = function () {
   document.getElementById("box2").classList.add("show");


}

// showButton.onclick = function () {
//    document.getElementById("box2").classList.remove("show");
//    +
// }



