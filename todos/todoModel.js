import mongoose from "mongoose"


const todoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        complete: {
            type: Boolean,
            default: false
        },
        createBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"    // Reference to the User who created the Todo
        },
        subTodo: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTodo"    // Reference to Sub-Todos associated with this Todo
            }
        ] //Array of Sub-Todos
    }, 
    {timestamps: true}
)

export const Todo = mongoose.model("Todo", todoSchema)