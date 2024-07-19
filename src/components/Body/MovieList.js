import { Calendar, FilmReel, Star, Timer } from '@phosphor-icons/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoModal from './VideoModal';

const MovieList = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const [link,setLink]=useState('');
    const{data}=props
    console.log(data)
    return (
        <div className="card-title" >
        <div className="card-image-title">
          <img src={`${props.data.Thumbnail}`} alt={props.data.title} />
        </div>
        <div className="card-content-title" >
        <h3 className="card-title2">{props.data.Title}</h3>
          <p className="card-synopsis-title">{props.data.Description}</p>
          <div className='details-strip'>
          <div className='details-strip-data'><p className="card-synopsis-title"><Calendar className='icon-space' size={16} weight="light" />{props.data.Release}</p></div>
          <div className='details-strip-data'><p className="card-synopsis-title"><Star className='icon-space' size={16} weight="light" />{props.data.Rating}</p></div>
          <div className='details-strip-data'><p className="card-synopsis-title"><Timer className='icon-space' size={16} weight="light" />{props.data.Duration} mins</p></div>
          <div className='details-strip-data'><p className="card-synopsis-title"><FilmReel className='icon-space' size={16} weight="light" />{props.data.Director}</p></div>
          
          
          
          </div>
          <div className='wth-btn'>
            
          {data.Watch && <button className='wth-mov' onClick={() => {
            console.log("hehe",data)
            setLink(data.Watch)
            setModalShow(true)
            }}>Watch Movie</button>}
          {data.Trailer && <button className='wth-tlr' onClick={() => {
            console.log("hehe",data)
            setLink(data.Trailer)
            setModalShow(true)
            }}>Watch Trailer</button>}
          </div>
         <div>
         <VideoModal
        show={modalShow}
        data={link}
        onHide={() => setModalShow(false)}
      />
         </div>
          
        </div>
      </div>
    );
}

export default MovieList;
