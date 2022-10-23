import React,{useState,useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
function Member() {

  const [member, setMember] = useState({})
  const [render, setRender] = useState(false)

  const [fileDataURL, setFileDataURL] = useState("")
  const navigate=useNavigate();
  const params=useParams();
  

  async function getMember(){
    const {data} =await axios.get("http://localhost:5000/api/members/"+params.id)
    let b=new Date(data.birthDay);
  setMember({birthDay:b,...data});
  // let fileReader, isCancel = false;
  //       if (data.imageUrl) {
  //           fileReader = new FileReader();
  //           fileReader.onload = (e) => {
  //               const { result } = e.target;
  //               if (result && !isCancel) {
  //                   setFileDataURL(result)
                    
  //               }
  //           }
  //           fileReader.readAsDataURL(data.imageUrl);
  //       }
  //           isCancel = true;
  //           if (fileReader && fileReader.readyState === 1) {
  //               fileReader.abort();
            
  //       }
  // setFileDataURL(URL.createObjectURL(data.imageUrl)) 
  }
function convertDate(date) {
  return new Date(date).getDate()+"/"+(new Date(date).getMonth()+1)+"/"+new Date(date).getFullYear()
  
}
  useEffect(() => {
    getMember()
    console.log(member.dateOfVaccines);
  }, [render])
    function update() {
      navigate("/updateMember/"+params.id);

    }
   async function deleteMe() {
     axios.delete("http://localhost:5000/api/members/"+params.id);
     navigate("/");
    }
  return (
  
    <div>{
      member&&<span>
      <h2>Personal Details</h2>
           {/* {fileDataURL ?
                <p className="img-preview-wrapper">
                    {
                        <img src={fileDataURL} alt="preview" />
                    }
                </p> : null} */}
      {/* <img src={member.imageUrl}/> */}
<p>Name : {member.name}</p>
<p>Id : {member.id}</p>
<p>address : {member.city}, {member.street} {member.houseNumber} street</p>
<p>Birth-Day : {convertDate(member.birthDay)}</p>
{member.phone&&<p>Phone : {member.phone}</p>}
{member.cellphone&&<p>Cellphone : {member.cellphone}</p>}
<div><h2>Corona Details</h2>
{(member.dateOfVaccines&&member.makerOfVaccines[0]!=null)?<p>Date Of Vaccines :<br/> {member.dateOfVaccines.map((m,i)=>{
  if(member.makerOfVaccines[i]!=null)
  return <span style={{marginLeft:"10px"}} key={i}>{convertDate(m)} by {member.makerOfVaccines[i]} maker.<br/> </span>
})}</p>:<></>}
{member.dateOfIllness&&<p>Date Of Illness : {convertDate(member.dateOfIllness)}</p>}
{member.dateOfRecovery&&<p>Date Of Recovery : {convertDate(member.dateOfRecovery)}</p>}

</div>
<button onClick={deleteMe}>Delete</button>
<button onClick={update}>Update</button>
  </span>
         
    }
   </div>
  )
}

export default Member