import React from 'react'
import { useRef, useEffect, useState } from 'react'
import InputSignUp from '../components/InputSignUp'
import axios from 'axios';
import Swal from 'sweetalert2';
import { baseURL } from "../url";
import { useSelector } from "react-redux";


export default function NewReaction() {

    const form = useRef()
    const itineraryId = useRef()
    const name = useRef()
    const icon = useRef()
    const iconBack = useRef()
    
    const [itineraries, setItineraries] = useState([]);
    const { id } = useSelector(state => state.userReducer)

    useEffect(() => {
        axios.get(`${baseURL}api/itineraries`)
            .then((res) => setItineraries(res.data.data));
        // eslint-disable-next-line
    }, []);

    async function createReaction(event) {
        event.preventDefault()
        let newtinerary = {
            itineraryId: itineraryId.current.value,
            name: name.current.value,
            icon: icon.current.value,
            iconBack: iconBack.current.value,
            userId: [],
        }
        try {

            let response = await axios.post(`${baseURL}api/reactions/`, newtinerary)
            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Reaction created!',
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
        <form className="form" ref={form}>
            <div className="form-body">
                <h2 className="title">New Reaction</h2>
            
            
                <InputSignUp className="form__input" type="text" placeholder=" Name" refId={name} />
                <select ref={itineraryId} className="" id="itineraryId">
                    <option>Select the itinerary</option>
                    {itineraries.map((itinerary) => ( <option key={itinerary._id} value={itinerary._id}> {itinerary.name}</option>))}
                </select>
                <InputSignUp className="form__input" type="text" placeholder=" Icon" refId={icon} />
                <InputSignUp className="form__input" type="text" placeholder=" IconBack" refId={iconBack} />
                <button type='submit' onClick={(a)=>createReaction(a)} className="submit2">Create</button>
                </div>
            </form>
    )
}
  
