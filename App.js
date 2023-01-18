import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Register from "./register";
import Profile from "./profile";


function App() {
  return (
 <div className="App">
      <BrowserRouter>
       
          <Routes>
          <Route exact path="/" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile" element={<Profile />} />

          </Routes>
           </BrowserRouter>
    </div>
  );
}

export default App;