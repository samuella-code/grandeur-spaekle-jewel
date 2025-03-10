import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home";
import Collections from './Pages/Collections';
import CollectionDetails from './Pages/ClollectionDatail';
import Logins from "./layouts/Logins";
import Register from './layouts/Register';

const App = () => {
  return (
    <div classname="">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/collections/:id" element={<CollectionDetails />} />
      <Route path="/login" element={<Logins/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
     </div>

  )
}

export default App;
