// Using JavaScript, how would you do the following:
// Get the header element
const header = document.getElementsByTagName("header");

// Get all the section elements
const sections = document.getElementsByTagName("section");

// Get the section element with class="current"
const currentSection = document.querySelector(".current");

// Get the section that comes after the current section
const nextSection = currentSection.nextElementSibling;

// Get the h2 node from the section before the 'current' section
const prevSectionChild = currentSection.previousElementSibling.children;

// Get the div that contains the section that has an h2 with a class of 'highlight'
const classhighlight = document.querySelector("h2.highlight");
const divider = classhighlight.parentElement.parentElement;

// Get all the sections that contain an H2 (using a single statement);
const allH2Sections = document.querySelectorAll("section:has(h2)");

// Please console log each of these on a separate line when submitting your code.
//Hint: It might shorten your code if those were all in variables.
console.log(header);
console.log(sections);
console.log(currentSection);
console.log(nextSection);
console.log(prevSectionChild);
// console.log(classhighlight)
console.log(divider);
console.log(allH2Sections);
