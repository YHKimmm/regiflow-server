// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// Database information goes here

const userSchema = new Schema({
    user_id: {
        type: UUID,
        required: true
    },
    skype_id: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    local_name: {
        type: String,
        required: true
    },
    english_name: {
        type: String,
        required: true
    },
    age_group: {
        type: String,
        required: true
    },
    last_modified_date: {
        type: TIMESTAMP,
        required: true
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;