import React, { useState } from "react";
import "../sign.css"
import { useDispatch } from "react-redux"
import userActions from "../redux/actions/userAction";
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"


export default function FormSign() {

  // let form = useRef()
  const navigate = useNavigate()
  let dispatch = useDispatch()
  let { login } = userActions
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  async function submit(e) {
    e.preventDefault()
    let user = {
      email,
      password
    
    }
    try {
      let res = await dispatch(login(user))
      console.log(res);
      if(res.payload.success){
        Swal.fire({
          icon: "success",
          title: res.payload.res.message,
          showConfirmButton: true,
        })
        .then(result=>{
          if(result.isConfirmed){
              navigate("/")
          }
        })
      }else {
        Swal.fire({
          icon: "error",
          title: "email or password incorrect",
          text: res.payload.messages,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="form">
        <div className="form-body">
          <h3 className="title">Log-In</h3>
          <input
            type="email"
            autoComplete="current-email"
            placeholder="Email"
            className="form__input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            autoComplete="on"
            placeholder="Password"
            className="form__input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="submit">
            <button className="submit2" onClick={submit}>
              Login with Google
            </button>
            <button className="submit2" onClick={submit}>
              Login
            </button>
          </div>
        </div>
      </form>
    </>
  );
}