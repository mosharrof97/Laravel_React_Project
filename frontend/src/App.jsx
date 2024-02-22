import { Routes, Route } from "react-router-dom";
import Layout from "./frontend/Index";
import Admin from "./backend/index";
import StudentList from "./backend/admin/page/student/list";
import StudentView from "./backend/admin/page/student/view";
import EventList from "./backend/admin/page/event/list";
import EventView from "./backend/admin/page/event/view";
import CreateEvent from "./backend/admin/page/event/createEvent";
import EventBookingList from "./backend/admin/page/eventBooking/list";

import AdminSignup from "./backend/admin/auth/signup";
import AdminLogin from "./backend/admin/auth/signup";

import StudentSignUp from "./backend/student/auth/signup";
import StudentLogin from "./backend/student/auth/Login";

import Home from "./frontend/pages/HomePage/HomeIndex";
import BookingPage from "./frontend/pages/BookingPage/BookingPage";

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />}>
        <Route path="list" element={<StudentList />} />
        <Route path="view" element={<StudentView />} />

        {/********* Event *********/}
        <Route path="event/list" element={<EventList />} />
        <Route path="event/view" element={<EventView />} />
        <Route path="event/create" element={<CreateEvent />} />
        {/********* Event *********/}
        {/********* Event Booking*********/}
        <Route path="event/booking/list" element={<EventBookingList />} />
        {/********* Event Booking*********/}

        <Route path="signup" element={<AdminSignup />} />
        <Route path="login" element={<AdminLogin />} />

        {/* <Route path="*" element={<Missing />} /> */}
      </Route>

      <Route path="/student" element={<Admin />}>
        <Route path="signup" element={<StudentSignUp />} />
        <Route path="login" element={<StudentLogin />} />

        {/* <Route path="*" element={<Missing />} /> */}
      </Route>

      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="event/booking" element={<BookingPage />} />
        <Route path="signup" element={<StudentSignUp />} />
        <Route path="login" element={<StudentLogin />} />

        {/* <Route path="*" element={<Missing />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
