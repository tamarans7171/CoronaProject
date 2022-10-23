const mongoose = require("mongoose")

let MemberSchema = new mongoose.Schema({
    name: String,
    id: {
        type: String,
        unique: true
    },

    city: String,
    street: String,
    houseNumber: String,

    birthDay: Date,
    phone: String,
    cellphone: String,
    imageUrl: String,

    dateOfVaccines:
        [{
            type: Date

            ,
            validate: {
                validator: function (v, x, z) {
                    return !(this.dateOfVaccines.length > 4);
                },
                message: props => `${props.value} exceeds maximum array size (4)!`
            },
        }],
    makerOfVaccines:
        [{
            type: String
            ,
            validate: {
                validator: function (v, x, z) {
                    return !(this.makerOfVaccines.length > 4);
                },
                message: props => `${props.value} exceeds maximum array size (4)!`
            },
        }],
    dateOfIllness: Date,
    dateOfRecovery: Date






})

let model = mongoose.model("members", MemberSchema)

module.exports = model