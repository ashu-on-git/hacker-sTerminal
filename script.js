console.log("it's working");

function getRandomTime() {
  let val1 = Math.ceil(1000 + 6000 * Math.random());
  return `${val1}`;
}

// using callbacks    ------------------------------->>>>>>>>>>>>>>>>>

// function hack4(process) {
//   setTimeout(() => {
//     let box = document.createElement("div");
//     box.setAttribute("class", "hacking");
//     document.querySelector(".item").append(box);
//     box.innerHTML = `<p>${process}</p>`;
//   }, getRandomTime());
// }
// function hack3(process, nexthack4) {
//   setTimeout(() => {
//     let box = document.createElement("div");
//     box.setAttribute("class", "hacking");
//     document.querySelector(".item").append(box);
//     box.innerHTML = `<p>${process}</p>`;
//     nexthack4("Cleaning up...");
//   }, getRandomTime());
// }
// function hack2(process, nexthack3, nexthack4) {
//   setTimeout(() => {
//     let box = document.createElement("div");
//     box.setAttribute("class", "hacking");
//     document.querySelector(".item").append(box);
//     box.innerHTML = `<p>${process}</p>`;
//     nexthack3(
//       "Sending all passwords and personal files to server...",
//       nexthack4
//     );
//   }, getRandomTime());
// }
// function hack1(process, nexthack2, nexthack3, nexthack4) {
//   setTimeout(() => {
//     let box = document.createElement("div");
//     box.setAttribute("class", "hacking");
//     document.querySelector(".item").append(box);
//     box.innerHTML = `<p>${process}</p>`;
//     nexthack2("Password files detected...", nexthack3, nexthack4);
//   }, getRandomTime());
// }
// function hack(process, nexthack1, nexthack2, nexthack3, nexthack4) {
//   setTimeout(() => {
//     let box = document.createElement("div");
//     box.setAttribute("class", "hacking");
//     document.querySelector(".item").append(box);
//     box.innerHTML = `<p>${process}</p>`;
//     nexthack1("Reading your files...", nexthack2, nexthack3, nexthack4);
//   }, getRandomTime());
// }

// hack("Initializing Hacking...", hack1, hack2, hack3, hack4);






// using only setTimeout    -------------------------->>>>>>>>>>>>>>>>>>>>

// function hack(process) {
//       let box = document.createElement("div");
//       box.setAttribute("class", "hacking");
//       document.querySelector(".item").append(box);
//       box.innerHTML = `<p>${process}</p>`;
//     };
// setTimeout(() => {
//     hack("Initializing Hacking...")
//     setTimeout(() => {
//       hack("Reading your files...")
//       setTimeout(() => {
//         hack("Password files detected...")
//         setTimeout(() => {
//           hack("Sending all passwords and personal files to server...")
//           setTimeout(() => {
//             hack("Cleaning up...")
//         }, getRandomTime());
//       }, getRandomTime());
//     }, getRandomTime());
//   }, getRandomTime());
// }, getRandomTime());




// using Promise chaining or async-await     ----------------------->>>>>>>>>
function hack(process) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let box = document.createElement("div");
      box.setAttribute("class", "hacking");
      document.querySelector(".item").append(box);
      box.innerHTML = `<p> ${process} </p>`;
      setTimeout(()=>{
        box.innerText += ".";
        setTimeout(()=>{
          box.innerText += "."
          setTimeout(()=>{
            box.innerText += "."
            resolve("success");
          }, 1000)
        }, 1000)
      }, 1000)
    }, getRandomTime());
  });
}




// using promise chaining   -------------------------->>>>>>>>>>>>>>>>>>

// hack("Initializing Hacking...")
//   .then(() => {
//     return hack("Reading your files...");
//   })
//   .then(() => {
//     return hack("Password files detected...");
//   })
//   .then(() => {
//     return hack("Sending all passwords and personal files to server...");
//   })
//   .then(() => {
//     return hack("Cleaning up...");
//   });








// using async-await   ----------------------------->>>>>>>>>>>>>>>>>>>>>
async function hacking(){
  await hack("Initializing Hacking")
  await hack("Reading your files")
  await hack("Password files detected")
  await hack("Sending all passwords and personal files to server")
  await hack("Cleaning up")
}
hacking()

