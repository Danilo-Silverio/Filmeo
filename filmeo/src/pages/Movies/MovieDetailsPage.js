import React from "react";
import { CastContent, CastTitle } from "../../assets/styles/MovieInfo/CastInfo";
import MovieInformation from "../../components/MovieInformation/MovieInformation";
import MovieCast from "../../components/MovieInformation/MovieCast";
import RecommendedMovie from "../../components/MovieInformation/RecommendedMovie";
import { SimilarContent, SimilarTitle } from "../../assets/styles/MovieInfo/SimilarContent";
import { Page } from "../../assets/styles/MovieInfo/DetailsPage";
import HeaderDetailsPage from "../../components/HeaderDetailsPage.js/HeaderDetailsPage";

const MoviesDetailsPage = () => {

  return (
    <Page>
      <HeaderDetailsPage/>
        <main>
          <MovieInformation/>
          {/* <CastContent>
            <CastTitle>
              <h1>Elenco original</h1>
            </CastTitle>
            <MovieCast/>
          </CastContent>
          <SimilarContent>
            <SimilarTitle>
              <h1>Recomendações</h1>
            </SimilarTitle>
            <RecommendedMovie/>
          </SimilarContent> */}
        </main>
    </Page>
  );
};

export default MoviesDetailsPage;
