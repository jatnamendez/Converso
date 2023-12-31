import mongoose from "mongoose";
const Schema = mongoose.Schema

const productoSchema = new Schema(
    {
        id:{type:Number},
        image:{type:String},
        title:{type:String},
        price: {type:Number},
        category:{type:String},
        style:{type:String},
        quanty:{type:Number}
    },
    {collection: 'productos'}
)

export default mongoose.model('productoModel', productoSchema)