let Fullname = ["Godwin", "Effiong", "Etim"];
let OfferedCourses = ["php", "html", "css", "javascript"];
console.log(`My name ${Fullname}, and courses are ${OfferedCourses}`)

noOfCoursesOffered = OfferedCourses.length
console.log("The number of courses am offering is ==> ", noOfCoursesOffered);

if (noOfCoursesOffered % 4 !== 0) {
    printOdd();
} else if (noOfCoursesOffered % 4 === 0) {
    printEven();
}

function printOdd(num) {
    for (let i = 1; i < 200; i++) {
        if (i % 4 !== 0) {
            console.log(i);
        }
    }
}

function printEven(num) {
    for (let i = 1; i < 200; i++) {
        if (i % 4 === 0) {
            console.log(i);
        }
    }
}