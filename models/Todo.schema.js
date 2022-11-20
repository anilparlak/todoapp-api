import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
    {
        title: {
        
            type: String,
            required: true,
            unique:false
          },
          description: {   
              
              type:String,
              required:false,
              unique:false
          },
          checked: {
            type: Boolean,
            required:false,
            unique:false
          }
    },
    {timestamps:true}
)

export default mongoose.model("Todo",TodoSchema);