import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {gql, useMutation} from '@apollo/client';

const LIKE_MOVIE = gql`
    mutation toggleLikeMovie($id: Int!) {
        toggleLikeMovie(id: $id) @client
    }
`;

const Container = styled.div`
  height: 400px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  //overflow: hidden;
  border-radius: 7px;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;

const Movies = ({ id, bg, isLiked }) => {
    const [toggleLikeMovie] = useMutation(LIKE_MOVIE, {
        variables: {id: parseInt(id), isLiked}
    });
    console.log(isLiked);
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
      <button onClick={toggleLikeMovie}>{isLiked ? "Unlike" : "Like"}</button>
    </Container>
  );
};

export default Movies;
