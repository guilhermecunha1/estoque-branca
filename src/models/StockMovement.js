import mongoose from "mongoose";

const StockMovementSchema = new mongoose.Schema({

    fabric:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Fabric',
        required: true,
    },

    type:{
        type: String, enum: ['entry', 'exit'],
        required: true,
    },

    quantity:{
        type: Number,
        required: true,
        min: 1
    }
})

const StockMovement = mongoose.model('StockMovement', StockMovementSchema)

export default StockMovement