import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import Home from "../pages/Home";
import Job from "../pages/Job.jsx";
import Company from "../pages/Company.jsx";
import Create from "./create/Create.jsx";

// import '../assets/css/global.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <></>
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="job/:jobId" element={<Job />} />
    //     <Route path="company" element={<Company />} />
    //     <Route path="create" element={<Create />}>
    //       <Route path="company-details" element={<Create />} />
    //       <Route path="plans" element={<Create />} />
    //       <Route path="preview" element={<Create />}>
    //         <Route path="company" element={<Create />} />
    //       </Route>
    //     </Route>
    //     <Route path="*" element={<Home />} />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
  );
}
