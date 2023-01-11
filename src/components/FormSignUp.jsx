import { useRef } from "react";
import axios from "axios"
import Swal from "sweetalert2"
import "../sign.css"
import baseURL from "../url"
import InputSignUp from "./InputSignUp";
import ButtonSubmit from "./ButtonSubmit";



export default function FormSignUp() {
  const form = useRef()
  const name = useRef()
  const lastName = useRef()
  const photo = useRef()
  const age = useRef()
  const email = useRef()
  const password = useRef()

  async function enviarFormulario(event) {
      event.preventDefault()
      let newUser =
      {
          name: name.current.value,
          lastName: lastName.current.value,
          photo: photo.current.value,
          age: age.current.value,
          email: email.current.value,
          password: password.current.value,
      }

      try {
          let response = await axios.post(`${baseURL}api/auth/sign-up`, newUser)
          console.log(response);
          if (response.data.success) {
              Swal.fire({
                  icon: 'success',
                  title: 'User created!',
                  showConfirmButton: true,
              })
                  .then(make => {
                      if (make.isConfirmed) {
                          form.current.reset();
                      }
                  })
          } else {
              Swal.fire({
                  icon: 'error',
                  title: 'Registration error',
                  text: response.data.message
              })
          }

      } catch (error) {
          console.log(error);
      }
  }
  return (
    <>
    
      <form className="form" action="" method="get" ref={form}>
      <div className="form-body">
      <h3 className="title">Sing-Up</h3>
                                <InputSignUp className="form__input" type='text' placeholder='Name' refId={name} />
                                <InputSignUp className="form__input" type='text' placeholder='Lastname' refId={lastName} />
                                <InputSignUp className="form__input" type='text' placeholder='Photo' refId={photo} />
                                <InputSignUp className="form__input" type='text' placeholder='Age' refId={age} />
                                <InputSignUp className="form__input" type='email' placeholder='Email' refId={email} />
                                <InputSignUp className="form__input" type='password' placeholder='Password' refId={password} />
                                <ButtonSubmit className="submit2"text="Login with Google" ></ButtonSubmit>
                                <ButtonSubmit className="submit2" type='submit' text='Sign Up' fx={enviarFormulario} />
                                </div>
                            </form>
                           
    </>
  );
}

