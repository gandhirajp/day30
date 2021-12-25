import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import './sb-admin-2.min.css'
import Dashbord from './Dashbord';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Studentlist from './Studentlist';
import Attendancelist from './Attendancelist';
import Addatt from './Addatt';

function App() {
  return (
    <>
      <div id="wrapper">
        <BrowserRouter>
          <Sidebar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar />
              <div class="container-fluid">
                <Routes>
                  <Route path="/dash" element={<Dashbord />} />
                  <Route path="/student" element={<Studentlist />} />
                  <Route path="/student/:id" element={<Attendancelist />} />
                  <Route path="/addatt/:id" element={<Addatt />} />


                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>,
      </div>
    </>

  );
}

export default App;
