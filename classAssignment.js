class Job {
  constructor(
    name,
    industry,
    requiredDegree,
    field,
    enjoyable,
    workLifeBalance
  ) {
    this.name = name;
    this.industry = industry;
    this.requiredDegree = requiredDegree;
    this.field = field;
    this.enjoyable = enjoyable;
    this.workLifeBalance = workLifeBalance;
  }

  getName() {
    return `The name of this position is ${this.name}.`;
  }

  getFieldAndIndistry() {
    return `This job falls in the ${this.field} field and in the ${this.industry} industry.`;
  }
}

// You must also EXTEND the class into something of your choice.
//It must be relevant and make sense as the properties will have to be unique enough.

class Degree extends Job {
  constructor(name, industry, requiredDegree, field, prerequisites) {
    super(name, industry, requiredDegree, field);
    this.prerequisites = prerequisites;
  }

  getDegree() {
    return `You need a ${this.requiredDegree} to get your Doctorate's Degree.`
  }

  getPrerequs() {
    return `You need to have ${this.prerequisites}.`
  }

}

// Now that you have all that set up, you must accomplish the following:
// //create three different instances of the Job class
const teacher = new Job(
  "6th Grade ELA Teacher",
  "Educational Services",
  "Bachelor's Degree",
  "Education",
  true,
  false
);
const FNP = new Job(
  "Family Nurse Practitioner",
  "Health Services",
  "Master's Degree",
  "Medical",
  true,
  true
);
const socialWorker = new Job(
  "Social Worker",
  "Health Care",
  "Bachelor's Degree",
  "Social Work",
  true,
  false
);

// //console log any 2 methods for each instance of the class
//TEACHER
console.log(teacher.getName());
console.log(teacher.getFieldAndIndistry());
console.log(" ");
//FNP
console.log(FNP.getName());
console.log(FNP.getFieldAndIndistry());
console.log(" ");
//SOCIAL WORKER
console.log(socialWorker.getName());
console.log(socialWorker.getFieldAndIndistry());
console.log(" ");

// //create an instance of the extended class
const doctorateDegree = new Degree(
  "Doctorate's Degree",
  "Health Care",
  "Master's Degree",
  "Medical",
  "Hospital Medical Experiance"
);

// //console log 2 new methods from the extended class

console.log(doctorateDegree.getDegree());
console.log(doctorateDegree.getPrerequs());
