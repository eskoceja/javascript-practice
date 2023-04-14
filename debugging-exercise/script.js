const storeOwners = [
  { charles: 1 },
  { sally: 1 },
  { cassandra: 1 },
  { "Danny Shavez": 1, location: "in NM" },
];

const listNumberOfStores = function () {
 
  for (let i = 0; i < storeOwners.length; i++) {
    totalLocations = totalLocations + i;
  }
};

let locations = listNumberOfStores; //Needs to go after it has been defined

function tellMeMyStores() {
  console.log("Hey, can you tell me who owns stores?"); //This question appears so this is the one that should be changed to desired outcome
  if (locations > 0) {
    console.log("Of course, we have " + totalLocations + " stores");
  }
}

function hasStore() {
  for (let i = 0; i < 3; i++) {
    let people = Object.keys(storeOwners[i]);
    let person = people.toString();
    console.log("Yes, " + person + " has one");
  }
}

tellMeMyStores();
hasStore();

let man = Object.keys(storeOwners[3]); // index 3, not 0
let mister = man[0];

let whereHeLives = storeOwners[3].location; //reference the original array and index where Danny is-- .location lets it know what value is being sought

console.log(
  "Yes, " + mister + " that lives " + whereHeLives + " owns one too."
);

