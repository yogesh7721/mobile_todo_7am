const asyncHandler = require("express-async-handler")
const Todo = require("../model/Todo")

exports.readEmployeeTodo = asyncHandler(async (req, res) => {
    const result = await Todo.find({ Employee: req.employee })
    res.json({ message: "todo fetch success", result })
})
exports.completeEmployeeTodo = asyncHandler(async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.tid, { isComplete: true })
    res.json({ message: "todo complete success" })
})