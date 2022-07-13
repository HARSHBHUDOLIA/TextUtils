import "./App.css"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import About from "./components/About"
import { useState } from "react"
import Alert from "./components/Alert"
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom"

function App() {
   const [mode, setMode] = useState("light")
   const togglemode = () => {
      if (mode === "light") {
         setMode("dark")
         showAlert("Dark Mode Enabled", "success")
         document.title = "Textutile-dark-mode"
      } else {
         setMode("light")
         showAlert("Light Mode Enabled", "success")
         document.title = "Textutile-light-mode"
      }
   }
   const [alert, setAlert] = useState(null)
   const showAlert = (message, type) => {
      setAlert({
         msg: message,
         type: type,
      })
      setTimeout(() => {
         setAlert(null)
      }, 1500)
   }
   return (
      <Router>
         <div className="App ">
            <Navbar title="TextUtils" mode={mode} toggle={togglemode} />
            <Alert alert={alert} />
            <div className="container my-3">
               <Routes>
                  <Route path="/about"  element={<About />} />
                    

                  <Route path="/"  element={ <TextForm
                        showAlert={showAlert}
                        heading="Enter the Text for conversion"
                     />} />
                    
                
               </Routes>
            </div>
            
         </div>
      </Router>
   )
}

export default App
