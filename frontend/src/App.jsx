import { Route, Routes } from "react-router-dom"
import Home from "./pages/student/Home"
import CourseList from "./pages/student/CourseList"
import CourseDetails from "./pages/student/CourseDetails"
import MyEnrollment from "./pages/student/MyEnrollment"
import Player from "./pages/student/Player"
import Loading from "./components/student/Loading"
import Educator from "./pages/educator/Educator"
import Dasborad from "./pages/educator/Dasborad"
import AddCourse from "./pages/educator/AddCourse"
import MyCourses from "./pages/educator/MyCourses"
import StudentEnrolled from "./pages/educator/StudentEnrolled"

function App() {
 return(
  <div>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course-list" element={<CourseList/>}/>
    <Route path="/course-list/:input" element={<CourseList/>}/>
    <Route path="/course/:id" element={<CourseDetails/>}/>
    <Route path="/my-enrollment" element={<MyEnrollment/>}/>
    <Route path="/player/:courseId" element={<Player/>}/>
    <Route path="/loading/:path" element={<Loading/>}/>
    <Route path="/educator" element={<Educator/>}/>
         <Route path="/educator" element={<Dasborad/>}/>
         <Route path="/add-course" element={<AddCourse/>}/>
         <Route path="/my-course" element= {<MyCourses/>}/>
         <Route path="/student-enrolled" element={<StudentEnrolled/>}/>
    </Routes>
  </div>
 )
}

export default App
