import React from "react";
import HotelCard from "../components/HotelCard";
import { useRef, useState } from "react";
import "../card.css";
import { useEffect } from "react";
import NotElementFound from "../components/NotElementFound";
import { useSelector, useDispatch } from "react-redux";
import hotelsActions from "../redux/actions/hotelsActions";

export default function Hotel() {
  const dispatch = useDispatch();
  const { hotels, search, order } = useSelector((state) => state.hotelReducer);
  const { getHotels, filterHotels } = hotelsActions;

  const searchId = useRef();
  const selectId = useRef();

  useEffect(() => {
    if (search || order) {
      let data = {
        search,
        order,
      };
      dispatch(filterHotels(data));
      searchId.current.value = search;
      selectId.current.value = order;
    } else {
      dispatch(getHotels());
    }
  }, []);
// reload
  let filter = () => {
    if (selectId.current.value !== "asc" && selectId.current.value !== "desc") {
      selectId.current.value = "asc";
    }
    let data = {
      search: searchId.current.value,
      order: selectId.current.value,
    };
    dispatch(filterHotels(data));

    // axios
    //   .get(
    //     `${baseURL}api/hotels?order=${selectId.current.value}&name=${searchId.current.value}`
    //   )
    //   .then((res) => setHotels(res.data.data));
  };

  return (
    <>
      <div className="filter">
        <div className="select">
          <select
            name="format"
            id="format"
            onChange={filter}
            ref={selectId}
            className="input"
          >
            <option value="asc">Greater capacity</option>
            <option value="desc">Lower capacity</option>
          </select>
        </div>
        <div className="search">
          <input className="buscador1"
            name="search"
            type="search"
            id="search"
            placeholder="Search"
            ref={searchId}
            onChange={filter}
          />
        </div>
      </div>
      <div className="cont-card">
        {hotels.length > 0 ? (
          hotels.map((cadaPerfil, id) => {
            return (
              <HotelCard datos={cadaPerfil} key={id} id={cadaPerfil._id} />
            );
          })
        ) : (
          <NotElementFound />
        )}
      </div>
    </>
  );
}
