
// Required Libraries
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import jsPDF from "jspdf";

// Supabase Config
const supabaseUrl = "https://your-supabase-url.supabase.co";
const supabaseKey = "your-anon-or-service-role-key";
const supabase = createClient(supabaseUrl, supabaseKey);

// Auth Context
const AuthContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user));
    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<CaseList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={user ? <CaseForm /> : <Navigate to="/login" />} />
          <Route path="/case/:id" element={<CaseDetails />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

// ... (rest of the App.js code from earlier)
