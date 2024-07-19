import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieList from './MovieList';

const MovieListCon = () => {






    const {name}=useParams()
    const [movieArrList,setMovieArrList]=useState([])

fetchMovieList=async()=>{
    const url = `https://advance-movie-api.p.rapidapi.com/api/v1/streamitfree/search?query=${name}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e728662d59msh5dfd46e8369670cp1789b4jsnc0e684d756df',
		'x-rapidapi-host': 'advance-movie-api.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    const tempData= result?.result?.data
    setMovieArrList(tempData)
	console.log(result);
} catch (error) {
	console.error(error);
}
}







    console.log(name)
   useEffect(()=>{
    fetchMovieList();
   },[])

    
    return (
        <div>
{movieArrList && movieArrList.map(data=>{
    return <MovieList data={data}/>
})}
            
        </div>
    );
}

export default MovieListCon;
