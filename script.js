function randomStringGeneratorForName(minLength, maxLength) {
    let length = randomNumber(minLength, maxLength);
    let includedForName = document.getElementById("checkBoxForName");
    let includedForLastName = document.getElementById("checkBoxForLastName");
    let lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    let allInclusive = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&?';
    let charSet = lowercaseLetters;
    if (includedForName.checked) {
        charSet += allInclusive;
    }
    if (includedForLastName.checked) {
        charSet += allInclusive;
    }
    let randomString = " ";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charSet.length);
        randomString += charSet.charAt(randomIndex);
    }
    return randomString;
}

function randomStringGeneratorForLastName(minLength, maxLength) {
    let length = randomNumber(minLength, maxLength);
    let includedForLastName = document.getElementById("checkBoxForLastName");
    let lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    let allInclusive = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|;:,.<>?';
    let charSet = lowercaseLetters;
    if (includedForLastName.checked) {
        charSet += allInclusive;
    }
    let randomString = " ";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charSet.length);
        randomString += charSet.charAt(randomIndex);
    }
    return randomString;
}

function randomStringGeneratorForEmail(minLength, maxLength) {
    let length = randomNumber(minLength, maxLength);
    let includedForEmail = document.getElementById("checkBoxForEmail");
    let lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    let allInclusive = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|;:,.<>?';
    let charSet = lowercaseLetters;
    if (includedForEmail.checked) {
        charSet += allInclusive;
    }
    let randomString = " ";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charSet.length);
        randomString += charSet.charAt(randomIndex);
    }
    return randomString;
}

function randomAgeGenerator(minLength, maxLength) {
    let length = randomNumber(minLength, maxLength);
    let result = '';
    for (let i = 0; i < length; i++) {
        result += randomNumber(minLength, length);
    }
    return result;
}

function randomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

function generateRandomRecord(nameMin, nameMax, lastnameMin, lastnameMax, emailMin, emailMax, ageMin, ageMax) {

    const randomName = randomStringGeneratorForName(nameMin, nameMax);
    const randomLastname = randomStringGeneratorForLastName(lastnameMin, lastnameMax);
    const randomEmail = randomStringGeneratorForEmail(emailMin, emailMax) + '@gmail.com';
    const randomAge = randomAgeGenerator(ageMin, ageMax);

    return {
        name: randomName,
        lastname: randomLastname,
        email: randomEmail,
        age: randomAge
    };
}

function generateRandomRecords(numRecords, nameMin, nameMax, lastnameMin, lastnameMax, emailMin, emailMax, ageMin, ageMax) {
    const records = [];

    for (let i = 0; i < numRecords; i++) {
        records.push(generateRandomRecord(nameMin, nameMax, lastnameMin, lastnameMax, emailMin, emailMax, ageMin, ageMax));
    }

    return records;
}


function generateAndDisplayRecords() {
    const numRecords = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    let currentTime = new Date();
    let minName = parseInt(document.getElementById("minLengthName").value, 10);
    let maxName = parseInt(document.getElementById("maxLengthName").value, 10);
    let minLastName = parseInt(document.getElementById("minLengthLastName").value, 10);
    let maxLastName = parseInt(document.getElementById("maxLengthLastName").value, 10);
    let minEmail = parseInt(document.getElementById("minLengthEmail").value, 10);
    let maxEmail = parseInt(document.getElementById("maxLengthEmail").value, 10);
    let minAge = parseInt(document.getElementById("minLengthAge").value, 10);
    let maxAge = parseInt(document.getElementById("maxLengthAge").value, 10);

    const records = generateRandomRecords(numRecords, minName, maxName, minLastName, maxLastName, minEmail, maxEmail, minAge, maxAge);

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = '';
    records.forEach((record) => {
        resultElement.innerHTML += `<strong>Name:</strong> ${record.name} <br>
                                 <strong>Lastname:</strong> ${record.lastname} <br>
                                 <strong>Email:</strong> ${record.email} <br>
                                 <strong>Age:</strong> ${record.age} <br><br>`;
    });
    console.log(records);
    descriptionDisplay(numRecords, currentTime);
    addRecordToHistory(numRecords, currentTime)
}

function descriptionDisplay(numRecords, currentTime) {
    let description = document.getElementById("descriptionContent");
    description.innerHTML = " ";
    let newDescription = document.createElement('div');
    newDescription.textContent = 'Description: Generated ' + "[" + numRecords + "]" + ' at ' + "[" + currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds() + "]";
    description.appendChild(newDescription);

}

function addRecordToHistory(numRecords, currentTime) {
    let record = document.getElementById("historyPanelContent");
    let newRecord = document.createElement('div');
    newRecord.textContent = numRecords + " Records " + " at " + currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();

    record.appendChild(newRecord);

}


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
