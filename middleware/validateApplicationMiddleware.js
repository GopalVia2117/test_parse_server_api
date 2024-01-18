const validateApplicationMiddleware = function (req, res, next){
    const object = req.body;

    const requiredFields = [
        "name", "email", "phone", "linkedIn", "portfolio", "resume", "education", 
    ];
    try{
        for (const field of requiredFields) {
            if(!object.hasOwnProperty(field) || object[field].length === 0){
                throw new CustomError("Invalid field: " + field, 400);
            }
        }
        next();
    }
    catch(err){
        next(err);
    }
  }