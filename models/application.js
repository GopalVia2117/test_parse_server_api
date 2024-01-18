// models/Application.js
const Parse = require('parse/node');
const Job = require("./job");

const Application = Parse.Object.extend('Application', {
  initialize: function () {
    console.log('A new instance of Application has been created.');
  },
  setName: function(name){
    this.set('name', name);
  },
  setEmail: function (email) {
    this.set('email', email);
  },
  setPhone: function (phone) {
    this.set('phone', phone);
  },
  setLinkedIn: function (linkedIn) {
    this.set('linkedin', linkedIn);
  },
  setPortfolio: function (portfolioLink) {
    this.set("portfolio", portfolioLink)
  },
  setResume: function(resumeLink){
    this.set("resume", resumeLink);
  },
//   setDegree: function(degree){
//     this.set("degree", degree);
//   },
//   setSpecialization: function(specialization){
//     this.set("specialization", specialization);
//   },
//   setCollegeOrUniversity: function(collegeOrUniversity){
//     this.set("collegeOrUniversity", collegeOrUniversity);
//   },
//   setStartDate: function(startDate){
//     this.set("startDate", startDate);
//   },
//   setEndDate: function(endDate){
//     this.set("endDate", endDate);
//   },
  setEducation: function(education){
    this.set("education", education);
  },
  setExperience: function(experience){
    this.set("experience", experience);
  }
}, {
  // Define class properties (static properties and methods)
  classMethod: function () {
    console.log('This is a class method for Book.');
  },
  findAllApplications: async function () {
    const query = new Parse.Query(Application);
    return query.find();
  },
  findApplicationsByJobId: async function (jobId) {
    const query = new Parse.Query(Application);
    query.equalTo("job", jobId);
    return query.find();
  }
});

Application.schema = {
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    linkedIn: { type: String },
    portfolio: {type: String},
    resume: {type: String },
    education: {type: Array},
    experience: {type: Array},
    // job: {type: Job}
  };

  
module.exports = Application;
