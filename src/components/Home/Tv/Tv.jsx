import React, {useState, useEffect} from 'react';
import {useGetAllMoviesQuery} from '../../../features/movie/movieSlice';
import {Link} from 'react-router-dom';
import Loading from '../../../common/Loading/Loading';
import styles from '../movies.module.css';


function Tv() {
  const [tvs, setTvs] = useState([]);
  const { data, error, isLoading } = useGetAllMoviesQuery("trending/tv/day");
  let baseImageUrl = "https://image.tmdb.org/t/p/original/";
  useEffect(()=>{if(data!=null){setTvs(data.results)}},[data]);
  return (
    <React.Fragment>
      <div className="container pb-5">
        <div className='row gy-4'>
        {isLoading&& 
        <>
        <Loading/>
        <Loading/>
        <Loading/>
        <Loading/></>}
        {tvs&& tvs.map((tv)=><div key={tv.id} className='col-md-3'>
          <div className={`${styles.movieStyle} h-100`}>
          <Link to={`/movieDetails/${tv.id}`} state={{ movieType: tv.media_type }}>
            <img className='w-100 h-100' src={baseImageUrl+ tv.poster_path} alt='poster_Image'/>
          </Link>
          </div>
        </div>)}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Tv