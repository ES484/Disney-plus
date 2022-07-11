import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loading = () =>{
    return (<div className="col-md-3">
    <Skeleton count={8} height={20} baseColor={"#c0c0c0"} borderRadius={0}/>
</div>)
  }

  export default Loading;