const asyncHandler = require("express-async-handler")
const Todo = require("../model/Todo")
const Employee = require("../model/Employee")

exports.createTodo = asyncHandler(async(req,res)=>{
    await Todo.create(req.body)
    res.json({message:"todo create success"})
})
exports.readTodo = asyncHandler(async(req,res)=>{
    const result = await Todo.find()
    res.json({message:"todo create success",result})
})
exports.updateTodo = asyncHandler(async(req,res)=>{
    await Todo.findByIdAndUpdate(req.params.tid,req.body)
    res.json({message:"todo update success"})
})
exports.deleteTodo = asyncHandler(async(req,res)=>{
    await Todo.findByIdAndDelete(req.params.tid)
    res.json({message:"todo delete success"})
})
exports.getAllemployee = asyncHandler(async(req,res)=>{
    const result = await Employee.find()
    res.json({message:"employee fetch success",result})
})