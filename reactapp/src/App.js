// import logo from './logo.svg';
import "./App.css";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
  
   <>
 <AuthProvider>

   <AppRoutes />
 </AuthProvider>
   
   </> 
   

  );
}
export default App;