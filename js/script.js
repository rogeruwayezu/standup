// $(document).ready(function() {

//     var answer_loger = function(fn){
//         fn()
//     }
//     answer_loger(function(){$("ul#contacts").append("<li><span class='contact'>" + "wednesday" + "</span></li>");
//     answer_loger(function(){
//        console.log("I should appear in div#answer!");
//       })
// })
// });


// function Person (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function() {
//         console.log(2016 - this.yearOfBirth);
//     }
// }



function Person (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge  = function() {
    console.log(2016 - this.yearOfBirth);
};
var moringaStudent = new Person('Divine', 1930, 'teacher');