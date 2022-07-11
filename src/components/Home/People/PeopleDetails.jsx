import React from 'react';
import { useParams  } from "react-router-dom";
import { useState, useEffect } from 'react';
import {useGetAllMoviesQuery} from '../../../features/movie/movieSlice';
import Loading from '../../../common/Loading/Loading';
export default function PeopleDetails() {
    let {id} = useParams();
    let baseImageUrl = "https://image.tmdb.org/t/p/original/";
    const [personDetail, setPersonDetail] = useState(null);
    const { data, error, isLoading } = useGetAllMoviesQuery(`person/${id}`);
    useEffect(()=>{if(data!=null){setPersonDetail(data)}},[data])

   
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
            {personDetail &&
                <div className="col-md-12">
                    <div className='w-100 vh-100'>
                        <img className='w-100 h-100' src={baseImageUrl+ personDetail.poster_path} alt='poster_Image'/>
                        <div>
                            <h2 className='text-center pt-2'>{personDetail.title}</h2>
                            <p className='lead fs-4'>{personDetail.overview}</p>
                            <span className='fs-2'>Popularity: </span><span className='fs-3'>{personDetail.popularity}</span>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    </React.Fragment>
  )
}
