// class Person {
//     const people = [];
//
//     constructor(name, lastName, age, email) {
//         this.name = name;
//         this.lastName = lastName;
//         this.age = age;
//         this.email = email;
//     }
//
// }
// class Generator{
//
//     function generateRandomString() {
//         var minLength = parseInt(document.getElementById("minLength").value);
//         var maxLength = parseInt(document.getElementById("maxLength").value);
//
//         if (minLength > maxLength) {
//             alert("Minimum length should be less than or equal to the maximum length.");
//             return;
//         }
//
//         let randomLength = randomNumber(minLength, maxLength);
//         document.getElementById("randomString").textContent = randomStringGenerator(randomLength);
//     }
//
//     function randomStringGenerator(length) {
//         let result = '';
//         for (let i = 0; i < length; i++) {
//             result += String.fromCharCode(97 + Math.floor(Math.random() * 26));
//         }
//         return result;
//     }
//
//     function randomNumber(start, end) {
//         return Math.floor(Math.random() * (end - start)) + start;
//     }
//
//     function randomRecordGenerator() {
//         let randomLength = randomNumber(500, 10000);
//         // console.log(randomLength);
//         for (let i = 0; i < randomLength; i++) {
//             const person = new Person(randomStringGenerator(randomNumber(3, 10)),
//                 randomStringGenerator(randomNumber(3, 10)),
//                 randomNumber(1, 120),
//                 randomStringGenerator(randomNumber(3, 10)) + "@gmail.com");
//             people.push(person);
//
//         }
//
//
//     }
//
//     function updateOutput(records) {
//         const outputElement = document.getElementById('output');
//         outputElement.innerHTML = '';
//
//         records.forEach(person => {
//             const personInfo = document.createElementById('demo1');
//             personInfo.textContent = `Name: ${person.firstName} ${person.lastName}, Age: ${person.age}, Email: ${person.email}`;
//             outputElement.appendChild(personInfo);
//         });
//     }
//
// // Attach click event listener to the button
//     document.getElementById('generateButton').addEventListener('click', function () {
//         const randomRecords = randomRecordGenerator();
//         updateOutput(randomRecords);
//     });
//
//
// }

// console.log(people);
// for (let i = 0; i < 100; i++) {
//     console.log(randomNumber(3, 10));
//
// }
function updateDateTime() {
    const currentDate = new Date();
    // Get the HTML element by its ID and set its content-->
    document.getElementById("timeAndDate").innerHTML = +currentDate.getDate() + "/"
        + (currentDate.getMonth() + 1) + "/"
        + currentDate.getFullYear() + "<br>"
        + currentDate.getHours() + ":"
        + currentDate.getMinutes() + ":"
        + currentDate.getSeconds();
}

updateDateTime();
setInterval(updateDateTime, 1000);