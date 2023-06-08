import LandingPage from "../Layouts/Main/LandingPage";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from 'react'

export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/luke-davies" element={<LandingPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}
