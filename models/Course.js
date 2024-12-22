import { Model,Schema, model } from "mongoose";

const authorSchema=Schema({
    firstName:String,
    lastName:String,
    address:String
})

const courseSchema=Schema({
    name:String,
    subject:[String],
    price:Number,
    dateOpen: Date,
    author:authorSchema
})

export const courseModel=model("course",courseSchema);

