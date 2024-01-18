
const mongoose = require("mongoose")

const ComplaintData = new MongooseError.Schema({
    Full_Name:{
        type: String
    },
    Phone_Number:{
        type: String
    },
    Email:{
        type: String
    },
    Address:{
        type: String
    },
    Pincode:{
        type: String
    },
    State:{
        type: String
    },
    Country : {
        type: String
    },
    Date_of_Incident:{
        type: Date
    },
    Date_of_Complaint:{
        type: Date
    }

    
})

const Complaint = mongoose.model("Complaint", ComplaintData)
module.exports = Complaint