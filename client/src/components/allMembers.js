import axios from 'axios'
import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
function AllMembers() {
  const navigate=useNavigate();

    const [members, setMembers] = useState([])
  async function getMembers(){
    const {data} =await axios.get("http://localhost:5000/api/members")
  setMembers(data);
  }
  useEffect(() => {
    getMembers()
  }, [])
  function navMember(_id) {
    navigate("/member/"+_id)
  }
  function addMember() {
    navigate('/addMember')
  }
  return (
    <div>
      <h1>All Members</h1>
        <ul>
        {
        members&&members.map((m,i)=>{
return  <li key={i} onClick={()=>{navMember(m._id)}}>{m.name}</li>
        })}
        </ul>

        <button onClick={addMember}>Add member</button>
        </div>
  )
}

export default AllMembers