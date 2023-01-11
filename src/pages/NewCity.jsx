import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import Swal from "sweetalert2";

export default function NewCity() {
  const dispatch = useDispatch();
  const { createNewCity } = citiesActions;

  const form = useRef();
  const name = useRef();
  const continent = useRef();
  const photo = useRef();
  const population = useRef();

  async function sendForm(e) {
    e.preventDefault();
    let data = {
      name: name.current.value,
      continent: continent.current.value,
      photo: photo.current.value,
      population: population.current.value,
      userId: "636e67886d5bdab4b6f1716d",
    };
    try {
      let res = await dispatch(createNewCity(data));
      if (res.payload.success) {
        Swal.fire({
          icon: "success",
          title: "City created",
          showConfirmButton: "true",
        }).then((create) => {
          if (create.isConfirmed) {
            window.location.href = `/detailcity/${res.payload.id}`;
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "ups",
          text: res.payload.messages,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <form ref={form} className="form" id="newCity">
        <div className="form-body">
          <h3 className="title">New City</h3>
          <input
            id="name"
            name="name"
            type="text"
            ref={name}
            placeholder="Name"
            className="form__input"
            required
          />
          <input
            id="continent"
            name="continent"
            type="text"
            ref={continent}
            placeholder="Continent"
            className="form__input"
            required
          />
          <input
            id="photo"
            type="text"
            ref={photo}
            placeholder="URL Img"
            className="form__input"
            required
          />
          <input
            id="population"
            type="number"
            ref={population}
            placeholder="Population"
            className="form__input"
            required
          />
          <div className="submit">
            <button type="submit" className="submit2" onClick={sendForm}>
              Register
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
