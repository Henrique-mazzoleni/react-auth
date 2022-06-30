import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import styles from "./App.module.css";
import Navbar from "./components/Navbar";

const LandingPage = React.lazy(() => import("./pages/LandingPage"));
const Login = React.lazy(() => import("./pages/Login"));
const NewUser = React.lazy(() => import("./pages/NewUser"));
const Profile = React.lazy(() => import("./pages/Profile"));

function App() {
  return (
    <div className={styles.app}>
      <Suspense
        fallback={<h2>Loading</h2>}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
