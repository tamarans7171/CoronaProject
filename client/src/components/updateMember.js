import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
let cntVaccine=0;
function UpdateMember() {

  const [render, setRender] = useState(false)
  const [isAddVaccine, setIsAddVaccine] = useState(false)
  const [member, setMember] = useState()
  const [name, setName] = useState({})
  const [vaccineTemp, setVaccineTemp] = useState({date:"2000-01-01",maker:""})
  const navigate = useNavigate();
  const params = useParams();


  useEffect(() => {
    getMember()
  }, [render])
  
  async function getMember() {
    const { data } = await axios.get("http://localhost:5000/api/members/" + params.id)
    setMember(data);
    
    setName(data.name)
    cntVaccine=(data.makerOfVaccines).filter(x => x!=null).length;
    console.log(cntVaccine);
  }

  function update() {
    axios.put("http://localhost:5000/api/members/" + params.id, member);
    navigate("/member/"+params.id)
  }
  function cancel() {
    navigate("/member/" + params.id)
  }
  function cancelVaccine() {
    setIsAddVaccine(false)
  }
  function convertDate(date) {
    return new Date(date).getFullYear() + "-" + ('0' + (new Date(date).getMonth() + 1)).slice(-2) + "-" + ('0' + new Date(date).getDate()).slice(-2)

  }
  function addVaccine() {
    setIsAddVaccine(true)
  }
  

  return (
    <div>{member && <span>
      <div className="containerInputs">

        <h2 className='h2Inputs' >Edit Details of {name}
        </h2>

        <form>

          <div className="groupInputs">
            <input value={member.name} className='inputInputs' onChange={(e) => { setMember({ ...member, name: e.target.value }) }} type="text" required />
            <span className="highlightInputs"></span>
            <span className="barInputs"></span>
            <label className="labelInputs">Name</label>
          </div>
          <div className="groupInputs">
            <input value={member.id} className='inputInputs' onChange={(e) => { setMember({ ...member, id: e.target.value }) }} type="text" required />
            <span className="highlightInputs"></span>
            <span className="barInputs"></span>
            <label className="labelInputs">Id</label>
          </div>
          <div className="groupInputs">
            <input value={member.city} className='inputInputs' onChange={(e) => { setMember({ ...member, city: e.target.value }) }} type="text" required />
            <span className="highlightInputs"></span>
            <span className="barInputs"></span>
            <label className="labelInputs">City</label>
          </div>
          <div className="groupInputs">
            <input value={member.street} className='inputInputs' onChange={(e) => { setMember({ ...member, street: e.target.value }) }} type="text" required />
            <span className="highlightInputs"></span>
            <span className="barInputs"></span>
            <label className="labelInputs">Street</label>
          </div>
          <div className="groupInputs">
            <input value={member.houseNumber} className='inputInputs' onChange={(e) => { setMember({ ...member, houseNumber: e.target.value }) }} type="text" required />
            <span className="highlightInputs"></span>
            <span className="barInputs"></span>
            <label className="labelInputs">HouseNumber</label>
          </div>
          <div className="groupInputs">
            <input defaultValue={convertDate(member.birthDay)} className='inputInputs' onBlur={(e) => { setMember({ ...member, birthDay: e.target.value }) }} type="date" required />
            <span className="highlightInputs"></span>
            <span className="barInputs"></span>
            <label className="labelInputs">Birth-Day</label>
          </div>
          <div className="groupInputs">
            <input value={member.phone} className='inputInputs' onChange={(e) => { setMember({ ...member, phone: e.target.value }) }} type="text" required />
            <span className="highlightInputs"></span>
            <span className="barInputs"></span>
            <label className="labelInputs">Phone</label>
          </div>
          <div className="groupInputs">
            <input value={member.cellphone} className='inputInputs' onChange={(e) => { setMember({ ...member, cellphone: e.target.value }) }} type="text" required />
            <span className="highlightInputs"></span>
            <span className="barInputs"></span>
            <label className="labelInputs">cellphone</label>
          </div>
          {member.dateOfVaccines.map((v, i) => {
            if(member.makerOfVaccines[i]!=null)
            return <span key={i} ><div className="groupInputsHalf">
              <input defaultValue={convertDate(v)} className='inputInputsHalf' onBlur={(e) => { member.dateOfVaccines[i] = e.target.value }} type="date" required />
              <span className="highlightInputs"></span>
              <span className="barInputs"></span>
              <label className="labelInputs">Date of {i + 1} Vaccine </label>
            </div>
              <div key={i} className="groupInputsHalf">
                <input defaultValue={member.makerOfVaccines[i]} className='inputInputsHalf' onBlur={(e) => { member.makerOfVaccines[i] = e.target.value; }} type="text" required />
                <span className="highlightInputs"></span>
                <span className="barInputs"></span>
                <label className="labelInputs">made by </label>
              </div>
              {/* <button onClick={() => { deleteVaccine(i) }}>X</button> */}
            </span>
          })}
          {member.makerOfVaccines[3]==null&& !isAddVaccine && <button style={{display:'block'}} onClick={addVaccine}>Add A vaccine
          </button>}
          {isAddVaccine && <span>
            <div className="groupInputsHalf">
              <input className='inputInputsHalf' onBlur={(e) => { member.dateOfVaccines[cntVaccine] = e.target.value }} type="date" required />
              <span className="highlightInputs"></span>
              <span className="barInputs"></span>
              <label className="labelInputs">Date of {1 + cntVaccine} Vaccine </label>
            </div>
            <div className="groupInputsHalf">
              <input className='inputInputsHalf' onBlur={(e) => { member.makerOfVaccines[cntVaccine] = e.target.value }} type="text" required />
              <span className="highlightInputs"></span>
              <span className="barInputs"></span>
              <label className="labelInputs">made by </label>
            </div>
            <button onClick={cancelVaccine}>Cancel</button>
          </span>}

          <div className="groupInputs">
            <input defaultValue={convertDate(member.dateOfIllness)} className='inputInputs' onBlur={(e) => { setMember({ ...member, dateOfIllness: e.target.value }) }} type="Date" required />
            <span className="highlightInputs"></span>
            <span className="barInputs"></span>
            <label className="labelInputs">Date Of Illness</label>
          </div>
          <div className="groupInputs">
            <input defaultValue={convertDate(member.dateOfRecovery)} className='inputInputs' onBlur={(e) => { setMember({ ...member, dateOfRecovery: e.target.value }) }} type="Date" required />
            <span className="highlightInputs"></span>
            <span className="barInputs"></span>
            <label className="labelInputs">Date Of Recovery</label>
          </div>

          <div className='row'>
            <button className='editBtn col-6' onClick={update}>update</button>
            <button className='editBtn col-6' onClick={cancel}>cancal</button>
          </div> </form>


      </div>
    </span>}</div>
  )
}

export default UpdateMember