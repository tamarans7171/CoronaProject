const MemberModel = require("./memberModel");

const getMembers = () => {
    return new Promise((resolve, reject) => {
        MemberModel.find({}, (err, data) => {
            err && reject(err)
            data && resolve(data)
        })
    })
}
const getMember = (ID) => {
    return new Promise((resolve, reject) => {
        MemberModel.findById(ID, (err, data) => {
            err && reject(err)
            data && resolve(data)
        })
    })
}

const addMember = async (obj) => {
    let member = new MemberModel({
        name: obj.name,
        id: obj.id,

            city: obj.city,
            street: obj.street,
            houseNumber: obj.houseNumber,

        birthDay: obj.birthDay,
        phone: obj.phone,
        cellphone: obj.cellphone,

        imageUrl: obj.imageUrl,

            dateOfVaccines: obj.dateOfVaccines,
            makerOfVaccines: obj.makerOfVaccines,
            dateOfIllness: obj.dateOfIllness,
            dateOfRecovery: obj.dateOfRecovery




    })
    member.dateOfVaccines.length<4&&[...Array(4-member.dateOfVaccines.length)].map((m,i)=>{
    member.dateOfVaccines.push(null)
    console.log(member.dateOfVaccines.length);
    member.makerOfVaccines.push(null)
    })
    member.save(e => { if (e) console.log(e + " ???????????"); })
}
const updateMember = async (ID, obj) => {

    // let member = new MemberModel({
    //     name: obj.name,
    //     id: obj.id,

    //      city: obj.city,
    //      street: obj.street,
    //      houseNumber: obj.houseNumber,

    //     birthDay: obj.birthDay,
    //     phone: obj.phone,
    //     cellphone: obj.cellphone,

    //     imageUrl: obj.imageUrl,

    //         dateOfVaccines: obj.dateOfVaccines,
    //         makerOfVaccines: obj.makerOfVaccines,
    //         dateOfIllness: obj.dateOfIllness,
    //         dateOfRecovery: obj.dateOfRecovery




    // })
    MemberModel.findByIdAndUpdate(ID, obj, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else { console.log("Updated member : ", docs); }
    })
    return "Updated!!"
}
const deleteMember=async(ID)=>{
    try{
        let members=MemberModel.findByIdAndDelete(ID,function (err,docs){
            if(err){
                console.log(err);
            }
            else{
                console.log("Deleted : ");
            }
        })
        return "deleted"

    }catch(error){
        return error;
    }
}



module.exports = { getMembers, getMember, addMember, updateMember ,deleteMember }