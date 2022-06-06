import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../../services/getMovieCast";
import { CastCard, CastContainer } from "../../assets/styles/MovieInfo/CastInfo";
import { IMG_API } from "../../constants/urls";
import GlobalStateContext from "../../global/GlobalStateContext";

const MovieCast = () => {

    const {cast, setCast} = useContext(GlobalStateContext);
    
    let params = useParams();

    useEffect(() => {
        const getApiDetail = async () => {
          setCast(await getCast(params.id));
        };
    
        getApiDetail();
      }, [params.id]);

      const castFilm = cast.slice(0, 8).map((c, i) => {
        return (
          <CastCard key={i}>
            <img src={IMG_API + c.profile_path} alt={c.name} />
            <h1>{c.name}</h1>
            <h2>{c.character}</h2>
          </CastCard>
        )
      });
    
    return (
        <CastContainer>
            {castFilm}
        </CastContainer>
    )
};

export default MovieCast;