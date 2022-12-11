const mongoose = require("mongoose")


const connection = mongoose.connect("mongodb+srv://yadavji:yadavji@cluster0.pzqahii.mongodb.net/myseconddb?retryWrites=true&w=majority")


module.exports = {
    connection
}