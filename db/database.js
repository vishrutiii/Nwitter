// .............importing modules.............
const mongoose = require("mongoose");

//.............Database Connection.............
const connectDatabase = () =>{
    mongoose.connect("mongodb+srv://Vishrutiii:vishruti1102@cluster0.kky45.mongodb.net/?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology : true,
    }).then((data) =>{
        console.log(`mongodb is connected with server: ${data.connection.host}`)
    }).catch(function (err) {
        console.log(`Error setting up connection to database: ${err}`);
    });
}

module.exports = connectDatabase