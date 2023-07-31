import React, {useState, useEffect} from 'react';
import './Cards.css';
import { Button } from './Button';
import CardItem from './CardItem';
import axios from 'axios'
import Config from '../config.json';

export function Cards() {

  const [classList,setClassList] = useState([]);

  useEffect(() => {
    axios
    .get(Config.API_URL + 'class')
    .then((res) => {
      const classList = res.data.Items
      //console.log(classList);
      setClassList(classList)
    })
    .catch((err) => console.log(err));
  },[]);


  const searchHandler = (e) => {
  e.preventDefault();

  axios
  .get(Config.API_URL + 'class')
  .then((res) => {
    const classList = res.data.Items
    setClassList(classList)
  })
  .catch((err) => console.log(err));
};

  return (
    <div className='cards'>
      <h1>강의목록</h1>
      <Button
          className='btns'
          buttonStyle='btn--primary btn--underline'
          buttonSize='btn--large'
          onClick={searchHandler}
        >
          조회
      </Button>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          {classList.map(data => (
            <CardItem key={data.id} title={data.title} contents={data.contents} maxAttendee={data.maxAttendee} minAttendee={data.minAttendee} maxClass={data.maxClass}/>
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
