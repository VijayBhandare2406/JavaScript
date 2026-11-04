const myObject = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programing = ["js", "ruby", "py", "java", "cpp"]

for (const key in programing) {
    console.log(programing[key]);
}