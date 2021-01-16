const mongoose = require("mongoose");



async function getConnect() {
    await mongoose.connect("mongodb://localhost/bestapi", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify:false
    });
}

getConnect()
    .then( () => {
        console.log("Databases is running");
    })
    .catch( (err) => {
        console.error("Error " + err);
    });