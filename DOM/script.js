// write a function to create Student objects, one of the properties should be points with a default value of 0, the rest of properties are up to you :D
// the object should have a method addPoints() that takes in a number and adds the points to a student (the points property should change the value)
// it should also have a removePoints() method to subtract points form the Student
// Function to create Student objects
// const createStudent=(name, age, hobby) =>{
//   return {
//     name: name,
//     age: age,
//     hobby: hobby,
//     points: 0,
//     addPoints: function(points) {
//       points += points;
//     },
//     removePoints: function(points) {
//       points -= points;
//       if (points < 0) points = 0; // Ensure points do not go below 0
//     }
//   };
// }

// // Example usage:
// const student1 = createStudent("John", 15, "soccer");
// const student2 = createStudent("Jane", 14, "chess");

// console.log(student1); // {name: "John", age: 15, hobby: "soccer", points: 0, addPoints: ƒ, removePoints: ƒ}
// student1.addPoints(10);
// console.log(student1.points); // 10
// student1.removePoints(5);
// console.log(student1.points); // 5

// const addBtn = document.querySelector('.add');
// const subtractBtn = document.querySelector('.subtract');
// const scoreDisplay = document.querySelector('.score');

// // Creating a new student object
// const student = createStudent("StudentName", 12, "football");

// scoreDisplay.textContent = student.points; // Initialize the score display

// addBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   student.addPoints(1);
//   scoreDisplay.textContent = student.points;
//   subtractBtn.disabled = false; // Enable the subtract button
// });

// subtractBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   student.removePoints(1);
//   scoreDisplay.textContent = student.points;
//   if (student.points === 0) {
//     subtractBtn.disabled = true; // Disable the subtract button if score reaches 0
//   }
// });

// // Initialize the subtract button state
// subtractBtn.disabled = student.points === 0;



// // a function that takes in an object and a property(key) and returns the value of that property


// const Student = {
//   name: 'Anna',
//   age: 33,
//   city: 'Melbourne'
// }

// const value = (obj,key) => {
//   return obj[key]
// }

// console.log(value(Student, 'name'))
// console.log(Student['name']);
// console.log(Student.name);




// const userProfile = {
//   name: "Jane Doe",
//   age: 30,
//   contact: {
//     email: "janedoe@example.com",
//     phone: "123-456-7890",
//   },
//   address: {
//     street: "123 Main St",
//     city: "Somewhere",
//     state: "CA",
//     country: "USA",
//   },
//   preferences: {
//     theme: "dark",
//     notifications: true,
//   },
// };

// // 1. Destructure and Extract:
// // Destructure the userProfile object to extract the name, email, and city properties into individual variables.


// const { name, contact:{email}, address:{city}} = userProfile

// const userProfile1 = { name, email, city }
// console.log(userProfile1);

// // 2. Update the Object:
// // Using the spread operator, create a new object updatedProfile that contains all the properties of userProfile but with the following changes:
// // The email should be updated to “newemail@example.com”.
// // Add a new property status with the value “active”.

// const updatedUserProfile = { ...userProfile }
// updatedUserProfile.contact.email = 'newemail@example.com'
// updatedUserProfile.status = 'active'


// const updatedUserProfile = {
//   ...userProfile,
//   contact: {
//     ...userProfile.contact,
//     email: "newemail@example.com"
//   },
//   status: "active"
// };

// console.log(updatedUserProfile);





// // 3. Destructure Nested Objects:
// // Destructure the contact and address objects from updatedProfile into separate variables.


// const { contact, address, ...rest } = updatedUserProfile
// console.log(rest);
// console.log(contact);
// console.log(address);



// // const { contact, address } = updatedUserProfile

// const userProfile2 = { contact}
// console.log(userProfile2);


// const userProfile3 = { address}
// console.log(userProfile3);



// const dictionary = {
//   hello: "czesc",
//   cheese: "ser",
//   apple: "jablko",
// };


// // const reverseValues = Object.values(dictionary)


// // const reverseKeys = Object.keys(dictionary) 

// // console.log(reverseValues);
// // console.log(reverseKeys);

// // const newDictionary = {}

// // reverseKeys.forEach((key, index) => {
// //   const value = reverseValues[index]
// //   newDictionary[value] = key
// // })


// // console.log(newDictionary);




// const newDictionary = {}

// for (const [key, value] of Object.entries(dictionary)) {
//   console.log(`${key}: ${value}`)
//   newDictionary[value] = key
// }

// console.log(newDictionary);



// const coaches = [
//   {
//     id: 1,
//     firstName: "Martyna",
//     lastName: "Krol",
//     age: 28,
//     title: "Junior Coach",
//     location: "Melbourne",
//   },
//   {
//     id: 2,
//     firstName: "Alex",
//     lastName: "B",
//     age: 36,
//     title: "Senior Coach",
//     location: "Melbourne",
//   },
//   {
//     id: 3,
//     firstName: "Cal",
//     lastName: "Hill",
//     age: 27,
//     title: "Head of Education",
//     location: "Sydney",
//   },
//   {
//     id: 4,
//     firstName: "Sandra",
//     lastName: "Myrda",
//     age: 27,
//     title: "Junior Coach",
//     location: "Sydney",
//   },
// ];


// // return an array of full names
// const names = coaches.map((item) => 
//   item.firstName + " "+ item.lastName
// )
 
// console.log(names);

// // function to find a coach by the id
// const coach = (id) => {
//   const coachA=coaches.find(coach =>coach.id===id)
//   return coachA
// } 

// console.log(coach(1));

// // use a reduce to return an array of full name

// const fullNames= coaches.reduce((acc, crr) => {
// const fullName=  crr.firstName + ' ' + crr.lastName
//   acc.push(fullName)
//   return acc
// }, [])

// console.log(fullNames);





const a = (arr) => {
  return arr.reduce((acc,value)=> {
  return value? ++acc:acc
  },0)
}


const myFunction = (arr) => {
  let count=0
  arr.map((el, index) => {
  return  el === arr[index + 1]? ++count:count
  })
}


console.log(a([-2, -1, 0, 2, 5, 5, 6, 5, 8, 8]));


const input = {
  
  cat: 'fish ',
  dog: 'beef ',
   mouse:'cheese'
}

// const output = {
//   fish: 'cat',
//   beef: 'dog',
//   cheese: 'mouse' ,
// }


const output = Object.fromEntries(
  Object.entries(input).reduce((acc, [key, value]) => {
    // Trim whitespace from value
    const trimmedValue = value.trim();
    // Add the reversed key-value pair to the accumulator
    acc.push([trimmedValue, key]);
    return acc;
  }, [])
);

console.log(output);

// const output2 = Object.keys(input)



// console.log(Object.keys(input).map(output=>output.toUpperCase()));

// console.log(Object.values(input));

// It uses a for loop that iterates three times.Each iteration returns a promise,
//   and the next promise won’t be executed until the previous one is fulfilled 
//   which is too slow for website loading 

const getBreeds = async () => {
 
  const arr = [1, 2, 3]
  
  const promises = arr.map((num) =>
      fetch(`https://catfact.ninja/breeds?limit=10&page=${num}`)
  );

  const responses = await Promise.all(promises);

  const dataPromises = responses.map(response => response.json())
  
  const data = await Promise.all(dataPromises)
  return data

};

const suits=['black','heart','diamond','flower']

const drawCards = (n = 10, random=Math.random) => {


  const cards = [];

  if (n > 52) {
    throw new Error("can't draw more than 52 cards")
  }
  while (cards.length < 0) {
    let card = Math.floor(random() * 13) + 1
    card += suits[Math.floor(random() * 4)]
    if (cards.includes(card)) continue
    cards.push(card)
  }
  return cards
}

let num = 30 
// num++
console.log(num++);







