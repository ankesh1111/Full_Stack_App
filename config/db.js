const mongoose = require("mongoose")


const connection = mongoose.connect("mongodb+srv://yadavji:yadavji@cluster0.pzqahii.mongodb.net/myfirstdb?retryWrites=true&w=majority")


module.exports = {
    connection
}