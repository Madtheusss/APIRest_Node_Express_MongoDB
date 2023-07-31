import mongoose from "mongoose";

//const uri = "mongodb+srv://matheus:6pU4JHCVhniR9kXz@nodeexpress.tbduuo8.mongodb.net/nodeExpress";
// const uri = "mongodb+srv://matheus:<password>@nodeexpress.tbduuo8.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect("mongodb+srv://matheus:123@nodeexpress.tbduuo8.mongodb.net/myDataBase")

const db = mongoose.connection;

export default db;




