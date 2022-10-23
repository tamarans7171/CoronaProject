import './App.css';
import AllMembers from './components/allMembers';
import {Route,Routes} from 'react-router-dom'
import Member from './components/member';
import UpdateMember from './components/updateMember';
import AddMember from './components/addMember';
function App() {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<AllMembers/>}/>
        <Route path='member/:id' element={<Member />}/>
        <Route path='updateMember/:id' element={<UpdateMember />}/>
        <Route path='addMember' element={<AddMember/>} />
      </Routes>
     {/* <AllMembers /> */}
    </div>
  );
}

export default App;
