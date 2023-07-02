// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import ".components/VideoPage/VideoPage.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import RelatedVideos from "./components/RelatedVideos/RelatedVideos";


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <SearchPage/>
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/searchpage" element={<PrivateRoute><SearchPage /></PrivateRoute>} />
        <Route path="/videopage" element= {<PrivateRoute><VideoPage /></PrivateRoute>} />
        <Route path="/relatedvideospage" element= {<PrivateRoute><RelatedVideos /></PrivateRoute>} />
       
        </Routes>
        {/* <div className="borderbox"></div> */}
        <Footer />
      
    </div>
  );
}

export default App;
