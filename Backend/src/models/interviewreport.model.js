import mongoose from "mongoose";


const technicalQuestionSchema= new mongoose.Schema({

    Question:{
        type:String,
        required:[true,"Technical question is required"]
    },
    intention:{
        type:String,
        required:[true,"the intention is required"]
    },
    answer:{
        type : String,
        required:[true,"the answer is required"]
    }

},{
    _id:false
})

const behaviourialQuestionSchema= new mongoose.Schema({

    
    Question:{
        type:String,
        required:[true,"Technical question is required"]
    },
    intention:{
        type:String,
        required:[true,"the intention is required"]
    },
    answer:{
        type : String,
        required:[true,"the answer is required"]
    }

},{
    _id:false
})


const skillgapsSchema= new mongoose.Schema({

    skills:{
        type:String,
        required:[true,"the skill is required"]
    },

    severity:{

        type:String,
        enum:["low", "medium", "high"],
        required:[true,"the severity is required"]
    }
},{
    _id:false
})


const preparationPLanSchema= new mongoose.Schema({

    day:{
        type:Number,
        required:[true, "day is requied"]
    },
    focus:{
        type:String,
        required:[true, "the focus is required"]
    },
    tasks:[{
        type:String,
        required:"the tasks is required"
    }]
})


const interviewreportSchema = new mongoose.Schema({

    jobDescirption:{
        type:String,
        required:[true, "job description is required"],


    },

    resume:{
        type:String
    },

    selfDescription:{
        type:String
    },
    matchScore:{
        type:Number,
        min:0,
        max:100
    }
    ,
    technicalQuestions:[technicalQuestionSchema],
    behaviourialQuestion:[behaviourialQuestionSchema],
    skillgaps:[skillgapsSchema],
    preparationPLan:[preparationPLanSchema]
},{
    timestamps:true
})

const intervewreportModel = mongoose.model("interviewreport",interviewreportSchema)