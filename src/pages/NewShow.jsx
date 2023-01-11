import React from 'react'
import { useRef, useEffect, useState } from 'react'
import InputSignUp from '../components/InputSignUp'
import axios from 'axios';
import Swal from 'sweetalert2';
import { baseURL } from "../url";
import { useSelector } from "react-redux";


export default function NewShow() {

    const form = useRef()
    const name = useRef()
    const photo = useRef()
    const description = useRef()
    const price = useRef()
    const date = useRef()
    const hotelId = useRef();
    const [hotels, setHotels] = useState([]);
    const { id, token } = useSelector(store => store.userReducer)

    useEffect(() => {
        console.log(id)
        axios.get(`${baseURL}api/hotels`)
            .then((res) => setHotels(res.data.data));
        // eslint-disable-next-line
    }, []);

    async function createShow(event) {
        event.preventDefault()
        let newtinerary = {
            hotelId: hotelId.current.value,
            name: name.current.value,
            photo: photo.current.value,
            description: description.current.value,
            price: price.current.value,
            date: date.current.value,
            userId: id,
        }
        let header = { headers: { Authorization: `Bearer ${token}` } };
        try {
            let response = await axios.post(`${baseURL}api/shows/`, newtinerary, header)
            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Show created!',
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
                    title: 'Oops...',
                    text: response.data.message,
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form className="form" action="" method="get" ref={form}>
        <div className="form-body">
        <h3 className="title">New Show</h3>
                            <InputSignUp className="form__input" type="text" placeholder="Name" refId={name} />
                            <select className="form__input" ref={hotelId} id="hotelId">
                                <option>Select the hotel</option>
                                {hotels.map((hotel) => (<option key={hotel._id} value={hotel._id}> {hotel.name}</option>))}
                            </select>
                            <InputSignUp className="form__input" type="text" placeholder=" Photo" refId={photo} />
                            <InputSignUp className="form__input" type="text" placeholder=" Description" refId={description} />
                            <InputSignUp className="form__input" type="text" placeholder=" Price" refId={price} />
                            <InputSignUp className="form__input" type="date" placeholder=" date" refId={date} />
                            <button type='submit' onClick={createShow} className="submit2">Sign Up</button>
                            </div>
                        </form>
            )
        }
    