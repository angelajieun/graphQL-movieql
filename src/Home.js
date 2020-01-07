import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { HOME_PAGE } from "./queries";
import Movie from "./Movie";
import { useQuery } from "react-apollo-hooks";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`

const Home = () => {
  const { loading, data, error } = useQuery(HOME_PAGE);
  return (
    <Container>
      <Helmet>
        <title>Home | MovieQL</title>
      </Helmet>
      {loading && "loading"}
      {error && `something happend ${error.message}`}
      {!loading && data && data.movies && 
        data.movies.map(movie => (
            <Movie
          id={movie.id}
          key={movie.id}
          poster={movie.medium_cover_image}
          title={movie.title}
          rating={movie.rating}
        />
      ))};
    </Container>
  )
};

// import { Query } from "react-apollo"; 사용할때

// const Home = () => (
//   <Container>
//     <Query query={HOME_PAGE}>
//       {({ loading, data, error }) => {
//         if (loading) return "loading";
//         if (error) return `something happend ${error.message}`;
//         return data.movies.map(movie => (
//           <Movie
//             id={movie.id}
//             key={movie.id}
//             poster={movie.medium_cover_image}
//             title={movie.title}
//             rating={movie.rating}
//           />
//         ));
//       }}
//     </Query>
//   </Container>
// );

export default Home;