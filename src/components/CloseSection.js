import React, {useState} from 'react';
import '../App.css';
import { Button } from './Button';
import './Main.css';
import axios from 'axios'
import Config from '../config.json';

import * as cards from './Cards.js';

const publicPath = process.env.PUBLIC_URL;

function CloseSection() {

  return (
    <div className='hero-container'>
      <video src={publicPath+'/videos/video-1.mp4'} autoPlay loop muted />
      <h1>ESU</h1>
      <h2>강의모집이 마감되었습니다.</h2>
      <p>수강신청은 2월7일(화) 오전 10시 Quip을 통해 진행됩니다. 많!관!부!</p>
      <p>스크롤을 내리시면 등록된 강의 목록을 확인하실 수 있습니다.</p>
    </div>
  );
}

export default CloseSection;
