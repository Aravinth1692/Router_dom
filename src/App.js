import './App.css';
import {  Routes, Route } from "react-router-dom";
import AllComponent from './Components/AllComponent/AllComponent';
import DataScience from './Components/data_science/data_science';
import Header from './Components/Header/Header';
import Carrier from './Components/carrier/carrier';
import CyberSecurity from './Components/cyber_security/cyber_security';
import Fullstack from './Components/full_stack_component/full_stack'


function App() {
  return (
    <div className="App">
      <h1>Courses</h1>
      <Header />
      {/* <BrowserRouter>   */}
      <Routes>
          <Route path="/" element={<AllComponent />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/carrier" element={<Carrier />} />
          <Route path="/cyber" element={<CyberSecurity />} />
          <Route path="/fullstack" element={<Fullstack />} />

      </Routes>
      {/* </BrowserRouter> */}
      {/* <AllComponent  />
      <Carrier  />
      <DataScience  />
      <CyberSecurity  /> */}
    </div>
  );
}

export default App;

