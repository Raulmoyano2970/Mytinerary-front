import React from "react";
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import {useEffect} from "react";
import MyCard from "../components/MyCard";
import NotElementFound from "../components/NotElementFound";

export default function MyCities() {
  const dispatch = useDispatch();
  const { citiesAdmin } = useSelector((state) => state.cityReducer);
  const { getCitiesAdmin } = citiesActions;

  let adminId = "636e67886d5bdab4b6f1716d";

  useEffect(() => {
    dispatch(getCitiesAdmin(adminId));
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="cont-card">
        {citiesAdmin.length > 0 ? (
          citiesAdmin.map((cadaCity, id) => {
            return <MyCard datos={cadaCity} key={id} id={cadaCity._id} />;
          })
        ) : (
          <NotElementFound />
        )}
      </div>
    </>
  );
}
