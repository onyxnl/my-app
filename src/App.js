import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import Homepage from './Homepage';
import Hello from './Hello';
import About from './About';
import Contactus from './Contactus';
import Profile from './Profile';
import Tutorial from './tutorial';
import Selectoption from './Selectoption';
import Listing from './Listing';
import Formpage from './Form';
import Todo from './todo/layout';
import DataTable from './dataTable/layout';

function App() {
  const basePath = process.env.REACT_APP_HOMEPAGE || '/';
  return (
    <Router basename={basePath}>
    <div className="App">
         <Routes >
          <Route path="/" element={<Homepage />}>
            <Route index element={<Hello />} /> {/* Home Page Route */}
            <Route path="about" element={<About />} /> {/* About Page Route */}
            <Route path="contact" element={<Contactus />} /> {/* Contact Page Route */}
            <Route path="profile/:id" element={<Profile />} /> {/* Profile Page Route */}

            <Route path="tutorial" element={<Tutorial />} />
            <Route path="listing" element={<Listing />} />
            <Route path="form" element={<Formpage />} />
            <Route path="todo" element={<Todo />} />
            <Route path="datatable" element={<DataTable />} />
            
          </Route>
        </Routes>
    </div> </Router>
  );
}

export default App;
