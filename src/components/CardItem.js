import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {

  return (
    <>
      <li className='cards__item'>
      <Link to='/' className='cards__item__link'>
          <div className='cards__item__info'>
            <h5 className='cards__item__text_title'>{props.title}</h5>
            <p className='cards__item__text'><span>최소/최대인원 : </span>{props.minAttendee} / {props.maxAttendee}</p>          
            <p className='cards__item__text'><span>강의회차 : </span>{props.maxClass}</p>
            <p className='cards__item__text'><span>강의내용 :</span></p>
            <p className='cards__item__text'>{props.contents}</p>
          </div>
      </Link>
      </li>
    </>
  );
}

export default CardItem;