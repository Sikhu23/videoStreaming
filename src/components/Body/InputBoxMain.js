import { MagnifyingGlass } from '@phosphor-icons/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InputBoxMain = () => {

    const [movieName,setMovieName]=useState('')
    return (
        <div className='inputCon'>
            <input onChange={e=>setMovieName(e.target.value)} value={movieName} type='text' placeholder='Enter Movie Name' required/>
            <Link to={`/${movieName}`}><MagnifyingGlass size={30} style={{marginLeft:"1%"}}/></Link>
        </div> 
    );
}

export default InputBoxMain;
