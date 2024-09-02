import React, {useEffect} from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllBooks from "./pages/AllBooks";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import ViewBookDetails from "./components/ViewBookDetails/ViewBookDetails.jsx";
import './index.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "./store/auth.js";
import AllOrders from "./pages/AllOrders.jsx";
import AddBooks from "./pages/AddBooks.jsx";
import Favourites from "./components/Profile/Favourites.jsx";
import UserOrderHistory from "./components/Profile/UserOrderHistory.jsx";
import Settings from "./components/Profile/Settings.jsx";
import UpdateBook from "./pages/UpdateBook.jsx";

const App = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);
  useEffect(() => {
  if(
    localStorage.getItem("id") && 
    localStorage.getItem("token") &&
    localStorage.getItem("role")
  ){
    dispatch(authActions.login());
    dispatch(authActions.changeRole(localStorage.getItem("role")));
  }
  }, []);

  return (
    <div>
      
      <Navbar />
    <Routes>
      <Route exact path ="/" element = {<Home /> }/>
      <Route  path = "/all-books" element = {<AllBooks /> }/>
      <Route path ="/Signup" element = {<SignUp/>}/>
      <Route  path = "/Login" element = {<Login/> }/>
      <Route  path = "/cart" element = {<Cart/> }/>
      <Route  path = "/profile" element = {<Profile/> }>
      
     {role === "user"?  <Route index element={<Favourites/>}/>:<Route index element={<AllOrders/>}/>}
     {role === "admin" &&(
      <Route path = "/profile/add-book" element = {<AddBooks/>}
      />
     )}
      <Route path="/profile/orderHistory" element={<UserOrderHistory/>}/>
      <Route path="/profile/settings" element={<Settings/>}/>
      </Route> {/*by default this profile pagfe will be here */}
      <Route path="view-book-details/:id" element={<ViewBookDetails/>}/>
      <Route  path = "/updateBook/:id" element = {<UpdateBook/> }/>
      </Routes>
      <Footer /> 
    </div>
  );
};

export default App;
