import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../redux/actions/userAction';
import Swal from 'sweetalert2'
import "../shows.css"

export default function Details() {
    const dispatch = useDispatch()
    const { updateMyProfile } = userActions;
    let { myUser } = useSelector( store => store.userReducer);


    async function updateUser() {
        try {
            const { value: formValues } = await Swal.fire({
                title: 'Update User',
                showCancelButton: true,
                confirmButtonText: 'Update',
                html:
                    '<input placeHolder="Name" id="name" class="swal2-input">' +
                    '<input placeHolder="LastName"id="lastName" class="swal2-input">' +
                    '<input placeHolder="Photo Url"id="photo" class="swal2-input">' +
                    '<input placeHolder="Age"id="age" class="swal2-input">',
                focusConfirm: false,
                preConfirm: () => {
                    let name = document.getElementById('name').value
                    let lastName = document.getElementById('lastName').value
                    let photo = document.getElementById('photo').value
                    let age = document.getElementById('age').value

                    let data = {
                        id: myUser._id,
                        user: {
                        }
                    }
                    if (name !== '') {
                        data.user.name = name
                    }
                    if (lastName !== '') {
                        data.user.lastName = lastName
                    }
                    if (photo !== '') {
                        data.user.photo = photo
                    }
                    if (age !== '') {
                        data.user.age = age
                    }
                    dispatch(updateMyProfile(data))
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
        <div className='divShow'>
            <div className="mainShow">
                <div className="imgshow">
                    <img src={myUser.photo} alt="photo_user" />
                </div>
                <div className="divInfo">
                    <h2 className="">{myUser.name}</h2>
                    <h2 className="">{myUser.lastName}</h2>
                    <h2 className="">{myUser.age} años</h2>
                    <div>
                        <button className='btn' onClick={updateUser} >Update Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
}