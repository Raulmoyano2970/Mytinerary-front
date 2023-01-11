import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import hotelsActions from "../redux/actions/hotelsActions";

export default function NewHotel() {
  const form = useRef();
  const name = useRef();
  const capacity = useRef();
  const photo = useRef();
  const photo1 = useRef();
  const photo2 = useRef();
  const dispatch = useDispatch();
  const { createNewHotel } = hotelsActions;

  async function handleSubmit(e) {
    e.preventDefault();
    let data = {
      name: name.current.value,
      capacity: capacity.current.value,
      photo: [photo.current.value, photo1.current.value, photo2.current.value],
      cityId: "636e9b452367c51ce27eb19e",
      userId: "636e67886d5bdab4b6f1716d",
    };
    try {
      let res = await dispatch(createNewHotel(data));
      if (res.payload.success) {
        Swal.fire({
          icon: "success",
          title: "Hotel created",
          showConfirmButton: "true",
        }).then((create) => {
          if (create.isConfirmed) {
            window.location.href = `/detailhotel/${res.payload.id}`;
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
      <form ref={form} onSubmit={handleSubmit} className="form" id="newHotel">
        <div className="form-body">
          <h3 className="title">New Hotel</h3>
          <input
            id="name"
            name="name"
            ref={name}
            type="text"
            placeholder="Name"
            className="form__input"
            required
          />
          <input
            id="capacity"
            name="capacity"
            ref={capacity}
            type="number"
            placeholder="Capacity"
            className="form__input"
            required
          />
          <input
            id="photo"
            type="text"
            ref={photo}
            placeholder="URL Img 1"
            className="form__input"
            required
          />
          <input
            id="photo1"
            type="text"
            ref={photo1}
            placeholder="URL Img 2"
            className="form__input"
            required
          />
          <input
            id="photo2"
            type="text"
            ref={photo2}
            placeholder="URL Img 3"
            className="form__input"
            required
          />

          <div className="submit">
            <button className="submit2">Register</button>
          </div>
        </div>
      </form>
    </>
  );
}
