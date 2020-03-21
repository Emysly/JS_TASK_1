const name = "Ibeh Chukwuebuka Emmanuel";
const courses = ["html", "css", "js"];

for (let i = 1; i <= 200; i++) {
  if (courses.length % 2 === 0) {
    if (i % 2 === 0) {
      console.log(i);
    }
  } else {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
