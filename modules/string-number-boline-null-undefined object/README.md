📘 string-object-quotes — JavaScript Data Types (My Learning Journey)
Welcome to Day 5 of my JavaScript learning journey.
This session focused on understanding data types, how JavaScript stores information, and how each type behaves. This is one of the most important foundations in JS because the entire language depends on how data is created, stored, and managed.
📌 Topics Covered
String
Number
Boolean
Undefined
Null
Object
Each type represents a different kind of data we use while writing programs.
🧩 1. String
A string stores text inside quotes " " or ' '.
✔ What I learned:
Strings are used for text values
Quotes are mandatory
Variables store the value, not the other way around
✔ Example I wrote:
let address = "Pakistan";
🧩 2. Number
A number stores numeric values — whole numbers and decimals.
✔ What I learned:
Numbers are written without quotes
Commas are not allowed
JS uses a single type for integers & decimals
✔ Corrected examples:
let age = 23;
let salary = 10000.54;
let price = 5.50;
🧩 3. Boolean
A boolean stores only two values:
true
false
✔ What I learned:
Used for yes/no decisions
Cannot store anything other than true/false
✔ My examples:
let areYouLearningJs = true;
let isTodayDay5 = true;
let isTheSkyBlue = true;
🧩 4. Undefined
A variable becomes undefined when it is declared but not given any value.
✔ What I learned:
JS automatically assigns undefined
It means “value not assigned yet”
✔ My examples:
let pastActivity;
let futurePlans;
let hamza;
let dateTime;
🧩 5. Null
null represents intentional emptiness.
✔ What I learned:
undefined = not assigned
null = assigned empty value on purpose
A placeholder for future data
✔ My examples:
let marriedStatus = null;
let owenHouse = null;
let iAmSuccessful = null;
🧩 6. Object
An object can store multiple values together in key–value pairs.
This is where JS becomes powerful.
✔ What I learned:
Objects are non-primitive
They store many values at once
They behave like a container
Inside an object, we use : (not =)
✔ My corrected object:
let userPhone = {
  existingFacebook: true,
  existingInstagram: true,
  existingPaidVpn: false,
  existingPubgMobile: null,
  existingXxxVideos: false
};
🎯 Checkpoint — Difference Between null and undefined
✔ My understanding:
undefined: variable declared but no value assigned
null: empty value assigned intentionally
Both represent emptiness, but for different reasons
This clarity helps avoid logical mistakes and improves debugging skills.
🏆 topic's Summary
Today’s learning strengthened my understanding of how JavaScript stores and processes all types of data.
I corrected syntax mistakes, clarified confusion between null & undefined, and wrote my first custom object.
This foundation will help me understand:
variables
functions
conditions
APIs
real-world project logic
A valuable milestone in my JavaScript journey.