
const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const sachSchema = new Schema({
    tensach: String,
    dongia: Number,
    soquyen: String,
    namxuatban: Number,
    manxb: String,
    tacgia: String,
    image: String,
});
    

const Contact = mongoose.model('sach',sachSchema);

module.exports = Contact