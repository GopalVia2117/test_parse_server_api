// models/Book.js
const Parse = require('parse/node');

const Job = Parse.Object.extend('Job', {
  // Define prototype properties (instance-specific properties and methods)
  initialize: function () {
    console.log('A new instance of Job has been created.');
  },
  setName: function(firstName, secondName){
    this.set('name', firstName + " " + secondName);
  },
  setEmail: function (email) {
    this.set('email', email);
  },
  setPhone: function (code, phoneNumber) {
    this.set('phone', "+" + code + phoneNumber);
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
  setDegree: function(degree){
    this.set("degree", degree);
  },
  setSpecialization: function(specialization){
    this.set("specialization", specialization);
  },
  setCollegeOrUniversity: function(collegeOrUniversity){
    this.set("collegeOrUniversity", collegeOrUniversity);
  },
  setStartDate: function(startDate){
    this.set("startDate", startDate);
  },
  setEndDate: function(endDate){
    this.set("endDate", endDate);
  },
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
  // Additional class-specific properties or methods can be defined here
  findAllJobs: async function () {
    const query = new Parse.Query(Job);
    return query.find();
  },
});

Job.schema = {
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    linkedIn: { type: String },
    portfolio: {type: String},
    resume: {type: String },
  };
  

module.exports = Job;
