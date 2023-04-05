// Create an object that models the data of your favorite email application.

// Open the email application and take a look at the application.
// What items do you notice? Make a list of those items (ex. emails, my name, etc.)
// Make a detailed outline of the data hierarchy.

let appData = {
  name: "Gmail",
  mailboxes: [
    {inbox: [
        {primary: [
            { name: "Colorlib", email: "noreply@colorlib.com", lastMessage: "You're almost there! Please confirm your subscrition." },
            { name: "Figma", email: "no-reply@figma.com", lastMessage: "You have been invited to edit a file." },
            { name: "Atlassian", email: "noreply@am.atlassian.com", lastMessage: "Verify your email address." }
          ],},

        { promotion: [
            {name: "Career Foundary", email: "ad@careerfoundry.com", lastMessage: "Start your UX Design career with our Women in Teach Scholarship."}, 
            {name: "Cisco Systems, Inc", email: "ad@cisco.com", lastMessage: "Take customer experience to the next level with Full Stack Observability."}
        ],},

        { social: [
            {name: "Salesforce", email: "ad@salesforce.com", lastMessage:"Build apps. Save money. Become more efficient."}, 
            {name: "Flatiron School", email: "ad@flatironschool.com", lastMessage:"Top ranked coding bootcamp."}
        ],},

      ],},
    "starred",
    {draft: [
        {name: "123", email: "123@email.com", message: "numbers", status: "draft"},
        {name: "abc", email: "abc@email.com", message: "alphabet", status: "draft"}
    ]},
    "sent"],
  contacts: [
    { name: "Stephen", lastMessage: "I have a dentist appointment at 1:30" },
    { name: "Chitra", lastMessage: "Thanks for letting us know" },
    { name: "Mikal", lastMessage: "Good morning everyone!" },
    { name: "Shatt", lastMessage: "Good morning!" },
  ],

};

// Get a list of mailbox names and emails

for (let email of appData.mailboxes[0].inbox[0].primary) {
    console.log(email);
}

console.log(appData.contacts);

// console.log(appData.mailboxes[0].inbox[0].primary); ---- ALTERNATE


// Get the text of the second email in the visible list

console.log(appData.mailboxes[0].inbox[0].primary[2].lastMessage);

// Mark an email as sent

appData.mailboxes[2].draft[0].status = 'sent';

console.log(appData.mailboxes[2].draft[0].status);

// Add a draft email to the drafts mailbox

appData.mailboxes[2].draft[2] = {name: "zyx", email: "zyx@email.com", message: "backwards-alphabet", status: "draft"};

console.log(appData.mailboxes[2].draft);




