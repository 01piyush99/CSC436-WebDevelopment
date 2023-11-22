const mongoose=require("mongoose");
const uri="mongodb+srv://piyushyadav:AgTAOlnSKGr6XUts@cluster0.5la0am1.mongodb.net/?retryWrites=true&w=majority";
function connect(){
const options={useNewUrlParser:true};
mongoose.connect(uri,options).then(
()=>{console.log("Database connection established!");},
err=>{console.log("Error connecting Database instance due to: ",err);}
)
}
module.exports = connect;