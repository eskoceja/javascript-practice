const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];

// Find a user named 'Jose' // .find()
const jose = users.find(item => item.id === 3998);
console.log(jose);

// Get an array of all the premium members // .filter()
const premiumMembers = users.filter(member => member.isPremiumMember === true);
console.log(premiumMembers);

// Get an array of all the user last names // .map
const lastNames = users.map(lnames => lnames.lastName);
console.log(lastNames);

// Get an array of the full names who have logged in more than 10 times // .filter
const constantUser = users.filter(user => user.logins > 10);
const fullNames = constantUser.map(fullNames => fullNames.firstName + " " + fullNames.lastName + " has logged in " + fullNames.logins + " times.");
console.log(fullNames);

// Get the total number of logins for the list of users // .reduce
const totalLogins = users.reduce((login, user) => login + user.logins, 0);
console.log(totalLogins);