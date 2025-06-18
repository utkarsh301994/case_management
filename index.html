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

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = React.useContext(AuthContext);

  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (data.user) setUser(data.user);
    else alert("Login failed");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <input className="block mb-2" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input className="block mb-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={login} className="bg-blue-500 px-4 py-2 text-white rounded">Login</button>
    </div>
  );
}

function CaseForm() {
  const [formData, setFormData] = useState({});
  const fields = ["case_no", "section", "petitioner", "respondent", "ps", "filing_date", "next_date", "mouza", "jl_no", "dag_no", "khatian", "area", "advocate"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("cases").insert([formData]);
    if (error) alert("Insert failed");
    else alert("Case added");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 grid grid-cols-1 gap-2 max-w-xl mx-auto">
      {fields.map((field) => (
        <input key={field} name={field} placeholder={field} onChange={handleChange} className="border p-2" />
      ))}
      <button type="submit" className="bg-green-600 text-white py-2 rounded">Submit</button>
    </form>
  );
}

function CaseList() {
  const [cases, setCases] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCases();
  }, [search]);

  const fetchCases = async () => {
    let query = supabase.from("cases").select("*");
    if (search) {
      query = query.or(`case_no.ilike.%${search}%,petitioner.ilike.%${search}%,respondent.ilike.%${search}%,advocate.ilike.%${search}%`);
    }
    const { data } = await query;
    setCases(data);
  };

  return (
    <div className="p-4">
      <input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="p-2 border w-full mb-4" />
      <table className="w-full border">
        <thead>
          <tr>
            <th>Case No</th><th>Section</th><th>Petitioner</th><th>Respondent</th><th>PS</th><th>Filing Date</th><th>Next Date</th><th>Advocate</th><th>Details</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((c) => (
            <tr key={c.id} className="border-t">
              <td>{c.case_no}</td><td>{c.section}</td><td>{c.petitioner}</td><td>{c.respondent}</td><td>{c.ps}</td><td>{c.filing_date}</td><td>{c.next_date}</td><td>{c.advocate}</td>
              <td><a href={`/case/${c.id}`} className="text-blue-600">View</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CaseDetails() {
  const { id } = useParams();
  const [caseData, setCaseData] = useState(null);

  useEffect(() => {
    supabase.from("cases").select("*").eq("id", id).single().then(({ data }) => setCaseData(data));
  }, [id]);

  const generateNotice = () => {
    const doc = new jsPDF();
    doc.text("SDM COURT NOTICE", 20, 20);
    doc.text(`To: ${caseData.respondent}`, 20, 40);
    doc.text(`Regarding Case No: ${caseData.case_no}`, 20, 50);
    doc.text(`Filing Date: ${caseData.filing_date}`, 20, 60);
    doc.text("You are hereby directed to appear before the SDM Court.", 20, 80);
    doc.save("notice.pdf");
  };

  const generateOrderSheet = () => {
    const doc = new jsPDF();
    doc.text("ORDER SHEET", 20, 20);
    doc.text(`Case No: ${caseData.case_no}`, 20, 40);
    doc.text(`Petitioner: ${caseData.petitioner}`, 20, 50);
    doc.text(`Respondent: ${caseData.respondent}`, 20, 60);
    doc.text("Order: [Insert standard order here]", 20, 80);
    doc.save("ordersheet.pdf");
  };

  if (!caseData) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Case Details</h2>
      <div className="mb-2">Case No: {caseData.case_no}</div>
      <div className="mb-2">Section: {caseData.section}</div>
      <div className="mb-2">Petitioner: {caseData.petitioner}</div>
      <div className="mb-2">Respondent: {caseData.respondent}</div>
      <div className="mb-2">Filing Date: {caseData.filing_date}</div>
      <div className="mb-2">Next Date: {caseData.next_date}</div>
      <div className="mb-2">PS: {caseData.ps}</div>
      <div className="mb-2">Mouza: {caseData.mouza}</div>
      <div className="mb-2">JL No: {caseData.jl_no}</div>
      <div className="mb-2">Dag No: {caseData.dag_no}</div>
      <div className="mb-2">Khatian: {caseData.khatian}</div>
      <div className="mb-2">Area: {caseData.area}</div>
      <div className="mb-2">Advocate: {caseData.advocate}</div>
      <div className="flex gap-4 mt-4">
        <button onClick={generateNotice} className="bg-blue-500 text-white px-4 py-2 rounded">Generate Notice PDF</button>
        <button onClick={generateOrderSheet} className="bg-green-600 text-white px-4 py-2 rounded">Generate Order Sheet</button>
      </div>
    </div>
  );
}

export default App;
