import React from 'react'
import { useRef, useEffect, useState } from 'react'
import InputSignUp from '../components/InputSignUp'
import ButtonSubmit from '../components/ButtonSubmit';
import axios from 'axios';
import "../details.css";
import Swal from 'sweetalert2';
import { baseURL } from "../url";
import { useSelector } from "react-redux";


export default function NewTinerary() {

    const form = useRef()
    const name = useRef()
    const photo1 = useRef()
    const photo2 = useRef()
    const photo3 = useRef()
    const description = useRef()
    const price = useRef()
    const duration = useRef()
    const citiId = useRef();
    const [cities, setCities] = useState([]);
    const { id, token } = useSelector(store => store.userReducer)

    useEffect(() => {
        axios.get(`${baseURL}api/cities`)
            .then((res) => setCities(res.data.data));
        // eslint-disable-next-line
    }, []);

    async function createTinerary(event) {
        event.preventDefault()
        let newtinerary = {
            citiId: citiId.current.value,
            name: name.current.value,
            photo:[photo1.current.value, photo2.current.value, photo3.current.value],
            description: description.current.value,
            price: price.current.value,
            duration: duration.current.value,
            userId: id,
        }
        console.log()
        let header = { headers: { Authorization: `Bearer ${token}` } };
        try {
            let response = await axios.post(`${baseURL}api/itineraries/`, newtinerary, header)
            console.log(response);
            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Tinerary created!',
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
console.log(id)
    return (
        <form className="form" action="" method="get" ref={form}>
        <div className="form-body">
        <h3 className="title">New Itinerary</h3>

                                <InputSignUp className="form__input" type="text" placeholder="Name" refId={name} />
                                <select className="form__input" ref={citiId} id="cityId">
                                    <option>Select the city</option>
                                    {cities.map((city) => (<option key={city._id} value={city._id}> {city.name}</option>))}
                                </select>
                                <InputSignUp className="form__input" type="text" placeholder=" Photo 1" refId={photo1} />
                                <InputSignUp className="form__input" type="text" placeholder=" Photo 2" refId={photo2} />
                                <InputSignUp className="form__input" type="text" placeholder=" Photo 3" refId={photo3} />
                                <InputSignUp className="form__input" type="text" placeholder=" Description" refId={description} />
                                <InputSignUp className="form__input" type="text" placeholder=" Price" refId={price} />
                                <InputSignUp className="form__input" type="text" placeholder=" Duration" refId={duration} />
                                <ButtonSubmit type='submit' text='Create' fx={createTinerary} />
                        </div>
                        </form>
    )
}