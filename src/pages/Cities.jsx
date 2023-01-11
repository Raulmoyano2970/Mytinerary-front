import React from "react";
import CityCard from "../components/CityCard";
import { useRef, useState } from "react";
import FormCity from "../components/FormCity";
import { useEffect } from "react";
import NotElementFound from "../components/NotElementFound";
import {useSelector, useDispatch} from 'react-redux';
import citiesActions from '../redux/actions/citiesActions'


export default function Cities() {
  
  const {cities, continent, search, checked, checkBox} = useSelector(store => store.cityReducer)
  const dispatch = useDispatch()
  const { getCities, filterCities } = citiesActions

  let [checkboxes, setCheckBoxes] = useState([])
  const searchId= useRef()
  const input = useRef()
  
  useEffect(() => {
    if(search || checkBox){
        let info ={ 
            search: search, 
            continents: checkBox, 
            continentChecked: checked
        }
        dispatch(filterCities(info))
        searchId.current.value = search
        if(checked){
            checked.forEach(check => {
                let checkContinent = Array.from(input.current).find(inp=>inp.value === check)
                checkContinent.checked = true
            })
        }
    }else{
        dispatch(getCities())
    }
    

}, []) 

  function filterCheck(check) {
    let checks = [];
    if (check.target.checked) {
      checks = [...checkboxes, check.target.value]
      
    } else{
      checks = checkboxes.filter((checkbox) => checkbox !== check.target.value)
    }
    setCheckBoxes(checks)
    return checks;
  }

  function filterSearch(cityFil) {
    let check = filterCheck(cityFil)
    let url = check.map( (continent) => `continent=${continent}`).join('&')
    let data = { 
          continents: url,
          search: searchId.current.value,
          continentsChecked: check
        }
    dispatch(filterCities(data))
  }

  return (
    <>
      <div className="filter">
        <form ref={input} className="check">  
          {continent.map((continent, index) => {
            return (
              <FormCity
                id={index}
                continent={continent}
                valor={continent}
                key={continent._id}
                // refId={continentes[index]}
                fx={filterSearch}
              />
            );
          })}
        </form>
        <div className="search">
          <input className="buscador1"
            type="text"
            placeholder="Search"
            ref={searchId}
            onChange={filterSearch}
          />
        </div>
      </div>
      <div className="cont-card">
        {cities.length > 0 ? (cities.map((cadaCity, id) => {
          return <CityCard datos={cadaCity} key={cadaCity._id} id={cadaCity._id}/>
          })):(<NotElementFound/>)
          }
      </div>
    </>
  );
}