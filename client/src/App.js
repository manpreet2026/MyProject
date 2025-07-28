import './style/App.css'
import Form from'./Form';
import Find from './Find';
import FindAll from'./FindAll';
import Update from './Update';
import Delete from './Delete';
import { BrowserRouter,Routes,Route,NavLink } from 'react-router-dom';

function App(){
    return(
        <div>
            <h1>Employee Management</h1>
            <nav>
                     <NavLink  to={"/"}> Form </NavLink>
                     <NavLink  to={"/find"}> FindOne </NavLink>
                     <NavLink  to={"/findAll"}> FindAll </NavLink>
                     <NavLink  to={"/update"}> Update </NavLink>
                     <NavLink  to={"/delete"}> Delete </NavLink>


</nav>
                    <Routes>
                        <Route path="/" element={<Form/>}> </Route>
                        <Route path="/find" element={<Find/>}> </Route>
                        <Route path="/findAll" element={<FindAll/>}> </Route>
                        <Route path="/update" element={<Update/>}> </Route>
                        <Route path="/delete" element={<Delete/>}> </Route>
                    </Routes>

        </div>
    )
}

export default App