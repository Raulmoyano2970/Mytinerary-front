import React from "react";
import "../card2.css";
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../redux/actions/citiesActions"
import Swal from "sweetalert2";

export default function MyCard(props) {
    let { datos } = props
    const dispatch = useDispatch()
    const { deleteCity, updateCity } = citiesActions
    const { token } = useSelector(store => store.userReducer)

    async function deleteAdmin() {
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
                    dispatch(deleteCity({ id: datos._id, token }))
                    window.location.reload()
                }
            })

        } catch (error) {
            console.log(error)
        }
    }

    async function updateAdmin() {
        try {
            const { value: formValues } = await Swal.fire({
                title: 'Update City',
                showCancelButton: true,
                confirmButtonText: 'Update',
                html:
                    '<input placeHolder="Name" id="name" class="swal2-input">' +
                    '<input placeHolder="Continent"id="continent" class="swal2-input">' +
                    '<input placeHolder="Photo Url"id="photo" class="swal2-input">' +
                    '<input placeHolder="Population"id="population" class="swal2-input">',
                focusConfirm: false,
                preConfirm: () => {
                    let name = document.getElementById('name').value
                    let continent = document.getElementById('continent').value
                    let photo = document.getElementById('photo').value
                    let population = document.getElementById('population').value

                    let data = {
                        id: datos._id,
                        citie: {

                        }
                    }

                    if (name !== '') {
                        data.citie.name = name
                    }
                    if (continent !== '') {
                        data.citie.continent = continent
                    }

                    if (photo !== '') {
                        data.citie.photo = photo
                    }

                    if (population !== '') {
                        data.citie.population = population
                    }

                    dispatch(updateCity({ data, token }))
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
                    <button className="btn" onClick={deleteAdmin}>Delete</button>
                    <button className="btn" onClick={updateAdmin}>Edit</button>
                </div>
            </div>
        </>
    );
}

