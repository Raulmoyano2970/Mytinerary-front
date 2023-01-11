import "./App.css";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Hotel from "./pages/Hotel";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import "./index.css";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NewCity from "./pages/NewCity";
import NewHotel from "./pages/NewHotel";
import AutoToTop from "./components/AutoToTop";
import DetailCity from "./pages/DetailCity";
import DetailHotel from "./pages/DetailHotel";
import MyCities from "./pages/MyCities";
import MyHotels from "./pages/MyHotels";
import MyShows from "./pages/MyShows";
import NewTinerary from "./pages/NewTinerary"
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import userAction from "./redux/actions/userAction";
import { useEffect } from "react";
import MyTinerary from "./pages/MyTinerary"
import NewShow from "./pages/NewShow"
import NewReaction from "./pages/NewReaction"
import MyReactions from "./pages/MyReactions"
import MyComments from "./pages/MyComments";


function App() {

  let { logged, role } = useSelector(store => store.userReducer)
  let dispatch = useDispatch()
  let { reEntry } = userAction

  let token = JSON.parse(localStorage.getItem('token'))
  useEffect(() => {
    console.log(token?.token.user)
    if (token) {
      dispatch(reEntry(token.token.user))
    }
  }, [logged])
  return (
    <BrowserRouter>
      <AutoToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/hotels" element={<Hotel />}></Route>
          <Route path="/cities" element={<Cities />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
          <Route path="/sign-up" element={logged ? <Home /> : <SignUp />}></Route>
          <Route path="/sign-in" element={logged ? <Home /> : <SignIn />}></Route>
          <Route path="/detailcity/:id" element={<DetailCity />}></Route>
          <Route path="/detailhotel/:id" element={<DetailHotel />}></Route>

          <Route element={<ProtectedRoute isAllowed={logged} reDirect="/" />}>
          <Route path="/myprofile" element={<Profile />} />
          <Route path="/myreactions" element={<MyReactions />} />
          <Route path="/mycomments" element={<MyComments />} />
          </Route>

          <Route element={<ProtectedRoute isAllowed={role === "admin"} />}>
            <Route path="/newcity" element={<NewCity />}></Route>
            <Route path="/newhotel" element={<NewHotel />}></Route>
            <Route path="/mycities" element={<MyCities />}></Route>
            <Route path="/myhotels" element={<MyHotels />}></Route>
            <Route path="/myprofile" element={<Profile />}></Route>
            <Route path="/newreaction" element={<NewReaction />}></Route>
          </Route>


          {/* <Route element={<ProtectedRoute isAllowed={role === "user"}/>}/> */}
          <Route element={<ProtectedRoute isAllowed={role === "user"} reDirect="/" />}>
            <Route path="/mytinerary" element={<MyTinerary />}></Route>
            <Route path="/myshow" element={<MyShows />}></Route>
            <Route path="/newtinerary" element={<NewTinerary />}></Route>
            <Route path="/newshow" element={<NewShow />} />
          </Route>
        </Routes>
      </Layout>
      {/* useState(false) reemplazar window por set !reload */}
    </BrowserRouter>
  );
}

export default App;