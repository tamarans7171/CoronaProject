import { useEffect, useState } from 'react';
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
const imageMimeType = /image\/(png|jpg|jpeg)/i;
function AddMember() {
    const navigate=useNavigate()
    const [file, setFile] = useState(null);
    const [newMember, setNewMember] = useState({id:"",name:"",city:"",houseNumber:"",street:"",birthDay:"01-01-2000",phone:"",cellphone:"",imageUrl:"",dateOfVaccines:["","","",""],makerOfVaccines:[...Array(4)],dateOfIllness:"",dateOfRecovery:""})
    const [fileDataURL, setFileDataURL] = useState(null);
async function add() {
    const formatphone= new RegExp (/^0\d([\d]{0,1})([-]{0,1})\d{7}$/)
   const formatCellphone= new RegExp(/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/ )
   if(newMember.cellphone&& !formatCellphone.test(newMember.cellphone)){
    console.log("hii");
    alert("the format of the cell phone is not good...")
    return;
   }
   if(newMember.phone&& !formatphone.test(newMember.phone)){
    console.log("hii");
    alert("the format of the phone is not good...")
    return;
   }
   const {data} =axios.post("http://localhost:5000/api/members",newMember); 

   console.log(data+" oooooooooooooooooooooo");
   navigate("/")
}
    // const changeHandler = (e) => {
    //     const file = e.target.files[0];
    //     if (!file.type.match(imageMimeType)) {
    //         alert("Image mime type is not valid");
    //         return;
    //     }
       
    //         setNewMember({...newMember,imageUrl:URL.createObjectURL(file)})
    //     // setFile(file);
        
    // }
    function cancel() {
 navigate("/")
    
    }

    return (
        <div>
            <h1>Add member</h1>
      <label htmlFor='name'>Full name</label>    <input id='name' type={"text"} onChange={(e)=>{setNewMember({...newMember,name:e.target.value})}} required/> <br/>
      <label htmlFor='id'>Id</label>    <input id='id' type={"text"} onChange={(e)=>{setNewMember({...newMember,id:e.target.value})}} required/> <br/>
      <label htmlFor='city'>City</label>    <input id='city' type={"text"} onChange={(e)=>{setNewMember({...newMember,city:e.target.value})}} required/> <br/>
      <label htmlFor='street'>Street</label>    <input id='street' type={"text"} onChange={(e)=>{setNewMember({...newMember,street:e.target.value})}} required/> <br/>
      <label htmlFor='houseNumber'>House Number</label>    <input id='houseNumber' type={"text"} onChange={(e)=>{setNewMember({...newMember,houseNumber:e.target.value})}} required/> <br/>
      <label htmlFor='birthDay'>BirthDay</label>    <input id='birthDay' type={"date"} onChange={(e)=>{setNewMember({...newMember,birthDay:e.target.value})}} required/> <br/>
      <label htmlFor='phone'>Phone</label>    <input id='phone' type={"text"} onChange={(e)=>{setNewMember({...newMember,phone:e.target.value})}} required/> <br/>
      <label htmlFor='cellphone'>Cell Phone</label>    <input id='cellphone' type={"string"} onChange={(e)=>{setNewMember({...newMember,cellphone:e.target.value})}} required/> <br/>
      <label htmlFor='dateOfVaccines'>Date Of 1 Vaccine</label>    <input id='dateOfVaccines' type={"date"} onChange={(e)=>{newMember.dateOfVaccines[1]=e.target.value}} />  <span></span>
      <label htmlFor='makerOfVaccines'>Maker Of 1 Vaccine</label>    <input id='makerOfVaccines' type={"text"} onChange={(e)=>{newMember.makerOfVaccines[1]=e.target.value}} /> <br/>
      <label htmlFor='dateOfVaccines'>Date Of 2 Vaccine</label>    <input id='dateOfVaccines' type={"date"} onChange={(e)=>{newMember.dateOfVaccines[2]=e.target.value}} />  <span></span>
      <label htmlFor='makerOfVaccines'>Maker Of 2 Vaccine</label>    <input id='makerOfVaccines' type={"text"} onChange={(e)=>{newMember.makerOfVaccines[2]=e.target.value}} /> <br/>
      <label htmlFor='dateOfVaccines'>Date Of 3 Vaccine</label>    <input id='dateOfVaccines' type={"date"} onChange={(e)=>{newMember.dateOfVaccines[3]=e.target.value}} />  <span></span>
      <label htmlFor='makerOfVaccines'>Maker Of 3 Vaccine</label>    <input id='makerOfVaccines' type={"text"} onChange={(e)=>{newMember.makerOfVaccines[3]=e.target.value}} /> <br/>
      <label htmlFor='dateOfVaccines'>Date Of 4 Vaccine</label>    <input id='dateOfVaccines' type={"date"} onChange={(e)=>{newMember.dateOfVaccines[4]=e.target.value}} />  <span></span>
      <label htmlFor='makerOfVaccines'>Maker Of 4 Vaccine</label>    <input id='makerOfVaccines' type={"text"} onChange={(e)=>{newMember.makerOfVaccines[4]=e.target.value}} /> <br/>
     
      <label htmlFor='dateOfIllness'>date Of Illness</label>    <input id='dateOfIllness' type={"string"} onChange={(e)=>{setNewMember({...newMember,dateOfIllness:e.target.value})}} /> <br/>
      <label htmlFor='dateOfRecovery'>date Of Recovery</label>    <input id='dateOfRecovery' type={"string"} onChange={(e)=>{setNewMember({...newMember,dateOfRecovery:e.target.value})}} /> <br/>
             
      {/* <label htmlFor='image'> Browse images  </label>
       <input
                        type="file"
                        id='image'
                        accept='.png, .jpg, .jpeg'
                        onChange={changeHandler}
                    /> */}
                <br/>
          <button onClick={add}>Add</button>
          <button onClick={cancel}>Cancel</button>
      
        </div>
    );
}
export default AddMember