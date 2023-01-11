import React from "react";
import { useDispatch, useSelector } from "react-redux";
import tinerariesActions from "../redux/actions/tinerariesActions";
import NotElementFound from "../components/NotElementFound";
import { useEffect } from "react";
import MyCardTinerary from "../components/MyCardTinerary";

export default function MyTinerary() {
  const dispatch = useDispatch();
  const { tinerariesAdmin } = useSelector((state) => state.tineraryReducer);
  const { getTineraryUser } = tinerariesActions;
const {id} = useSelector(store=> store.userReducer)

  

  useEffect(() => {
    dispatch(getTineraryUser(id));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="cont-card">
        {tinerariesAdmin.length > 0 ? (
          tinerariesAdmin.map((cadaPerfil, id) => {
            return (
              <MyCardTinerary
                datos={cadaPerfil}
                key={id}
                id={cadaPerfil._id}
                idAdm={id}
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
