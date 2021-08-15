import React from 'react';
import { useParams } from 'react-router';
import {gql, useQuery} from '@apollo/client';

const GET_MOIVE = gql`
    query getMovie($id: Int!) {
        movie(id: $id) {
            id
            title
            medium_cover_image
            description_intro
        }
    }
`;

const Detail = () => {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_MOIVE, {
        variables: {id: +id}
    });
    if (loading) return "loading";
    if (data && data.moive) return data.moive.title;
    return (
        <div>
            {data && data.moive && data.moive.title}
        </div>
    );
};

export default Detail;

// export default () => {
//     const { id } = useParams();
//     const { loading, data } = useQuery(GET_MOIVE, {
//       variables: { id: +id}
//     });
//     if (loading) {
//       return "loading";
//     }
//     if (data && data.movie) {
//       return data.movie.title;
//     }
//   };