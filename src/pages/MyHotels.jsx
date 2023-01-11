import React from "react";
import { useDispatch, useSelector } from "react-redux";
import hotelsActions from "../redux/actions/hotelsActions";
import NotElementFound from "../components/NotElementFound";
import { useEffect } from "react";
import HotelCardAdmin from "../components/HotelCardAdmin";

export default function MyHotels() {
  const dispatch = useDispatch();
  const { hotelsAdmin } = useSelector((state) => state.hotelReducer);
  const { getHotelAdmin } = hotelsActions;

  let adminId = "636e67886d5bdab4b6f1716d";

  useEffect(() => {
    dispatch(getHotelAdmin(adminId));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="cont-card">
        {hotelsAdmin.length > 0 ? (
          hotelsAdmin.map((cadaPerfil, id) => {
            return (
              <HotelCardAdmin
                datos={cadaPerfil}
                key={id}
                id={cadaPerfil._id}
                idAdm={adminId}
              />
            );
          })
        ) : (
          <NotElementFound />
        )}
      </div>
    </>
  );
}
