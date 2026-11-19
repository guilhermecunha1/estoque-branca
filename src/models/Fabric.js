import mongoose from "mongoose";


const fabricSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    color: {
        type: String,
        required: true,
        trim: true
    },

    supplier:{
        type: String,
        required: true,
        trim: true
    },

    quantity:{
        type: Number,
        required: true,
        trim: true,
        default: 0
    },

    minimumStock:{
        type: Number,
        default: 25,
        min: 0
    }
},{timestamps: true})

const Fabric = mongoose.model('Fabric', fabricSchema)
export default Fabric