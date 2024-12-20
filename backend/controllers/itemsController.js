const TodoItem = require("../models/TodoItem");
exports.postTodoItems = async (req,res,next) => {
    try {
        console.log(req);
        const todoItem = new TodoItem(req.body);
        const item = await todoItem.save();
        res.json(item);
    }
    catch(err)
    {
        res.status(500).json({message : err});
    }
}

exports.getTodoItems = async (req,res,next) => {
    try
    {
        const items = await TodoItem.find();
         res.json(items);
    }
    catch(err)
    {
         res.status(500).json({message : err});
    }

}