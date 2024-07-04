// const food = [
//   {
//       name: "Pizza",
//       type: "dinner",
//   },
//   {
//       name: "Avocado toast",
//       type: "breakfast",
//   },
//   {
//       name: "Oats",
//       type: "breakfast",
//   },
//   {
//       name: "Toast with jam",
//       type: "breakfast",
//   },
//   {
//       name: "Roast chicken",
//       type: "dinner",
//   },
//   {
//       name: "Pasta",
//       type: "dinner",
//   },
// ];


// const btn = document.querySelector('.btn')
// const result = document.querySelector('#result')
// const h3=document.querySelector('h3')

// const randomFood = (arr) => {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           // generate a random index
//           const randomIndex = Math.floor(Math.random() * arr.length);
//           const selectedMeal = arr[randomIndex];
//           if (selectedMeal.type === "dinner") {
//               resolve(selectedMeal);
//           } else {
//               reject("No dinner tonight");
//           }
//       }, 2000);
    
//   });
// };



// // export const createTextEl = (elType, text, parent, className) => {
// //   const el = document.createElement(elType);
// //   const textNode = document.createTextNode(text);
// //   el.appendChild(textNode);
// //   if (className) {
// //       el.classList.add(className);
// //   }
// //   parent.appendChild(el);
// // };

// const DinnerText = (dinnerName,colorA,colorB,h3Content) => {
//   result.textContent = dinnerName
//   result.classList.remove(colorA)
//   result.classList.add(colorB)
//   h3.textContent=h3Content
// }

// btn.addEventListener('click', (e) => {
//   e.preventDefault()
//   h3.textContent = "Loading..."
//   result.textContent =''
//   randomFood(food)
//     .then((val) => {
//       DinnerText (val.name, 'red','green','')
//       // result.textContent = val.name
//       // result.classList.remove('red')
//       // result.classList.add('green')
//       // h3.textContent=''
// })
//     .catch((e) => {
//       console.warn(e) 
//       DinnerText (e, 'green','red','')
//       // result.textContent = e
//       // result.classList.remove('green')
//       // result.classList.add('red')
//       // h3.textContent=''
//     });
// })
  

console.log('hi1');


// how ot create a promise

const fulfilledPromise = Promise.resolve("This is some data inside a promise");

console.log(fulfilledPromise);

// a rejected promise is just an error - we need to handle it in a certain way
//const rejectedPromise = Promise.reject("Something went wrong");
//console.log(rejectedPromise);
console.log("after promise");

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("This is the value of my resolved promise");
        reject("This is a rejected promise");
    }, 2000);
});

console.log(myPromise);

// we asked for some data about a book - book title
// we want to console.log that title
// but after the promise is no longer pending
// while it's pending - we don't know the title yet

// .then

console.log("Before .then");
myPromise
    .then((value) => {
        // inside .then I am guaranteed that I have a resolved/fulfilled promise
        console.log(value);
    })
    .catch((e) => {
        // this line of code, just like inside .then, runs when the promise stop pending - but if it is a rejected promise, rejected promise is an error, we are catching the error
        console.log(e);
    })
    .finally(() => {
        console.log(
            "This will happen at the end, doesn't matter if the promise is fulfilled or rejected"
        );
    });
console.log("After .then");

const promiseFunction = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 0) {
                resolve(num);
            } else {
                reject("Invalid number");
            }
        }, 2000);
    });
};

promiseFunction(2)
    .then((val) => console.log(val))
    .catch((e) => console.log(e));