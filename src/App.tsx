import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import './App.css'
import CreateBlogPage from "./pages/CreateBlogPage";
import { Routes,Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    
    <div className="min-h-screen flex flex-col">
      <Toaster />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createblog" element={<CreateBlogPage />} />
        </Routes>
      </main>
    </div> 
  );
}

