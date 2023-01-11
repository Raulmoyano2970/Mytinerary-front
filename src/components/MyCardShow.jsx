import React from "react";
import "../card2.css";
import { useDispatch, useSelector } from "react-redux";
import showActions from "../redux/actions/showActions"
import Swal from "sweetalert2";

export default function MyCardShows(props) {
  let {datos} = props
const dispatch = useDispatch()
const {deleteShow, updateShow} = showActions
const {token} = useSelector(store=> store.userReducer)

async function deleteUser() {
    try {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                dispatch(deleteShow({id:datos._id, token}))
                window.location.reload();
            }
        })

    } catch (error) {
        console.log(error)
    }
}

async function updateUser() {
    try {
        const { value: formValues } = await Swal.fire({
            title: 'Update Show',
            showCancelButton: true,
            confirmButtonText: 'Update',
            html:
                '<input placeHolder="Name" id="name" class="swal2-input">' +
                '<input placeHolder="Photo Url"id="photo" class="swal2-input">' +
                '<input placeHolder="Price"id="price" class="swal2-input">'  ,
            
            focusConfirm: false,
            preConfirm: () => {
                let name = document.getElementById('name').value
                let photo = document.getElementById('photo').value
                let price = document.getElementById('price').value
           


                let data = {
                    id: datos._id,
                    showsUser: {

                    }
                }

                if(name !== ''){
                    data.showsUser.name = name
                }
                if(photo !== ''){
                    data.showsUser.photo = photo
                }

                if(price !== ''){
                    data.showsUser.price = price
                }
     

                dispatch(updateShow({data, token}))
                window.location.reload();
            }
        })

        if (formValues) {
            Swal.fire(JSON.stringify(formValues))
        }
        
    } catch (error) {
        console.log(error)
    }
}

  return (
    <>
      <div className="card">
        <div className="face front">
          <img src={datos.photo} alt={datos.name} />
          <h3>{datos.name}</h3>
        </div>
        <div className="face back">
          <h3>{datos.name}</h3>
            <button className="btn" onClick={deleteUser}>Delete</button>
            <button className="btn" onClick={updateUser}>Edit</button>
        </div>
      </div>
    </>
  );
}