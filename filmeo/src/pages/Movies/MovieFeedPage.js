import React, { useContext, useEffect } from "react";
import { Page, Footer } from "../../assets/styles/Movies/MovieFeedStyle";
import MoviePageHeader from "../../components/MoviePageHeader/MoviePageHeader";
import GlobalStateContext from "../../global/GlobalStateContext";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Feed from "../../components/Feed/Feed";



const MovieFeedPage = () => {
  const { page, setPage, getGenres, getPopularMovies, getTrending, getTopRatedMovies, getTvSeries } =
    useContext(GlobalStateContext);

  useEffect(() => {
    getGenres();
    getPopularMovies(page);
    getTrending();
    getTopRatedMovies();
    getTvSeries(page);
  }, [page]);

  return (
    <Page>
      <MoviePageHeader />
      <Feed/>
      <Footer>
        <CustomPagination setPage={setPage} />
      </Footer>
    </Page>
  );
};

export default MovieFeedPage;
