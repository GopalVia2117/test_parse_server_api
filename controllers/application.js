const Application = require("../models/application");

const getAllApplications = async (req, res, next) => {
    try{
        const applications = await Application.findAllApplications();
        res.status(200).json(applications);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

const getApplicationsByJobId = async (req, res, next) => {
    const jobId = req.params.jobId;

    try{
        const applications = await Application.getApplicationsByJobId(jobId);
        res.status(200).json(applications);

    }catch(err){
        res.status(500).json({message: err.message});
    }
}

const postApplication = async (req, res) => {
    const {body} = req;
    Application.validateFields(body);

    const {name, email, phone, linkedIn, portfolio, resume, education, experience} = body;

    const application = new Application();
    application.setName(name);
    application.setEmail(email);
    application.setPhone(phone);
    application.setLinkedIn(linkedIn);
    application.setPortfolio(portfolio);
    application.setResume(resume);
    application.setEducation(education);
    application.setExperience(experience);

    try{
        await application.save();
        res.status(201).json(application);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

module.exports = {
    getAllApplications,
    getApplicationsByJobId,
    postApplication
}