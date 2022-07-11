import React from 'react';
import { useParams, useLocation  } from "react-router-dom";
import { useState, useEffect } from 'react';
import {useGetAllMoviesQuery} from '../../../features/movie/movieSlice';
import Loading from './../../../common/Loading/Loading';
export default function MovieDetails() {
    let {id} = useParams();
    const location = useLocation();
    const { movieType } = location.state;
    let baseImageUrl = "https://image.tmdb.org/t/p/original/";
    const [movieDetail, setMovieDetail] = useState(null);
    const { data, error, isLoading } = useGetAllMoviesQuery(`${movieType}/${id}`);
    useEffect(()=>{if(data!=null){setMovieDetail(data); console.log(data);}},[data])

   
  return (
    <React.Fragment>
        <div className="container-fluid">
            <div className="row">
            {isLoading&& 
            <>
            <Loading/>
            <Loading/>
            <Loading/>
            <Loading/></>}
            {movieDetail &&
                <div className="col-md-12">
                    <div className='w-100 vh-100'>
                        <img className='w-100 h-100' src={baseImageUrl+ movieDetail.poster_path} alt='poster_Image'/>
                        <div>
                            <h2 className='text-center pt-2'>{movieDetail.title}</h2>
                            <p className='lead fs-4'>{movieDetail.overview}</p>
                            <span className='fs-2'>Popularity: </span><span className='fs-3'>{movieDetail.popularity}</span>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    </React.Fragment>
  )
}
