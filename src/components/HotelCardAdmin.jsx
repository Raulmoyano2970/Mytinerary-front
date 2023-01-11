import React from "react";
import "../card2.css";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import hotelsActions from "../redux/actions/hotelsActions";

export default function HotelCardAdmin(props) {
  let { datos, id } = props;
  const dispatch = useDispatch();
  const { deleteHotel, updateHotel } = hotelsActions;
  async function deleteAdmin() {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          dispatch(deleteHotel(datos._id));
          window.location.reload();
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function updateAdmin() {
    try {
      const { value: formValues } = await Swal.fire({
        title: `Update Hotel \n ${datos.name} `,
        showCancelButton: true,
        confirmButtonText: "Update",
        html:
          '<input placeHolder="Name" id="name" class="swal2-input">' +
          '<input placeHolder="Photo 1 Url" id="photo1" class="swal2-input">' +
          '<input placeHolder="Photo 2 Url" id="photo2" class="swal2-input">' +
          '<input placeHolder="Photo 3 Url" id="photo3" class="swal2-input">' +
          '<input placeHolder="Capacity" id="capacity" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
          let name = document.getElementById("name").value;
          let photo1 = document.getElementById("photo1").value;
          let photo2 = document.getElementById("photo2").value;
          let photo3 = document.getElementById("photo3").value;
          let photo = [];
          let capacity = document.getElementById("capacity").value;

          let data = {
            id: datos._id,
            hotels: {},
          };

          if (name !== "") {
            data.hotels.name = name;
          }
          if (photo1 !== "") {
            photo.push(photo1);
          } else {
            photo.push(datos.photo[0]);
          }
          if (photo2 !== "") {
            photo.push(photo2);
          } else {
            photo.push(datos.photo[1]);
          }
          if (photo3 !== "") {
            photo.push(photo3);
          } else {
            photo.push(datos.photo[2]);
          }
          if (capacity !== "") {
            data.hotels.capacity = capacity;
          }
          if (photo !== []) {
            data.hotels.photo = photo;
          } else {
            data.hotels.photo = datos.photo;
          }

          dispatch(updateHotel(data));
        },
      });

      if (formValues) {
        Swal.fire(JSON.stringify(formValues));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="card">
        <div className="face front">
          <img src={datos.photo[0]} alt={datos.name} />
          <h3>{datos.name}</h3>
        </div>
        <div className="face back">
          <h3>{datos.name}</h3>

          <button className="btn" onClick={deleteAdmin}>
            Delete
          </button>
          <button className="btn" onClick={updateAdmin}>
            Edit
          </button>
        </div>
      </div>
    </>
  );
}
