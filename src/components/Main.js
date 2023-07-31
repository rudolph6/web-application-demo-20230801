import React, {useState} from 'react';
import '../App.css';
import { Button } from './Button';
import './Main.css';
import axios from 'axios'
import Config from '../config.json';

import * as cards from './Cards.js';

function Main() {

  let [inputCount, setInputCount] = useState(0);
  let [alias, setAlias] = useState("");
  let [title, setTitle] = useState("");
  let [minAttendee, setMinAttendee] = useState("");
  let [maxAttendee, setMaxAttendee] = useState("");
  let [maxClass, setMaxClass] = useState("");
  let [contents, setContents] = useState("");

  const publicPath = process.env.PUBLIC_URL;

  const aliasHandler = (e) => {
    e.preventDefault();
    setAlias(e.target.value);
  };

  const titleHandler = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const minAttendeeHandler = (e) => {
    e.preventDefault();
    setMinAttendee(e.target.value);
  };

  const maxAttendeeHandler = (e) => {
    e.preventDefault();
    setMaxAttendee(e.target.value);
  };

  const maxClassHandler = (e) => {
    e.preventDefault();
    setMaxClass(e.target.value);
  };


  const onTextareaHandler = (e) => {
    e.preventDefault();
    setInputCount(e.target.value.length);
    setContents(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if(!alias){
      alert("ID를 입력해주세요")
      return
    } 
    if(!title){
      alert("강의제목을 입력해주세요")
      return
    }
    if(!minAttendee){
      alert("최소인원을 입력해주세요")
      return
    }
    if(minAttendee < 2){
      alert("최소인원은 2명 이상부터 지정 가능합니다.")
      return
    }
    if(minAttendee > 8){
      alert("최소인원은 8명을 초과 할 수 없습니다.")
      return
    }
    
    if(!maxAttendee){
      alert("최대인원을 입력해주세요")
      return
    }
    if(maxAttendee < 2){
      alert("최대인원은 2명 이상부터 지정 가능합니다.")
      return

    }else if(maxAttendee > 8){
      alert("최대인원은 8명을 초과 할 수 없습니다.")
      return
    }
    
    if(!maxClass){
      alert("강의회차를 입력해주세요")
      return
    }
    if(maxClass < 2){
      alert("강의회차는 최소 2회 이상 지정해주시기 바랍니다.")
      return

    }else if(maxClass > 3){
      alert("강의회차는 최대 3회를 초과 할 수 없습니다.")
      return
    }

    if(!contents){
      alert("강의내용을 입력해주세요")
      return
    }

    let body = {
      alias: alias,
      title: title,
      minAttendee: minAttendee,
      maxAttendee: maxAttendee,
      maxClass: maxClass,
      contents: contents
    };

    axios
    .post(Config.API_URL + 'class',body)
    .then((res) => {
      inputCount = 0;
      alias = "";
      title ="";
      minAttendee = "";
      maxAttendee ="";
      maxClass ="";
      contents="";

      setInputCount(0);
      setAlias("");
      setTitle("");
      setMinAttendee("");
      setMaxAttendee("");
      setMaxClass("");
      setContents("");
      alert("교수님, Class 등록이 완료되었습니다.\n 스크롤을 내려 조회 버튼을 누르시면 등록한 강의 제목을 확인하실 수 있습니다. ");
      return

      cards()

    })
    .catch((err) => {
      console.log(err)
      alert("교수님, Class 등록에 실패했습니다. 조교(@mrnlee)에게 연락주시기 바랍니다.");
      return
    });
    
  };

  return (
    <div className='hero-container'>
      <video src={publicPath+'/videos/video-1.mp4'} autoPlay loop muted />
      <h2>2023년 교실에서 만나는</h2>
      <h1>인공지능 디지털교육 교원워크숍</h1>
      <h2>새로운 강의 계획을 등록하시겠습니까?</h2>
      <p>등록하기 전 스크롤을 내려 현재까지 등록된 강의 목록을 확인하세요!</p>
      <div className='input-areas'>
          <form id="hero-input-form">
            <p><span className='hero-input-tit'>계정정보</span><input
              className='hero-input'
              name='alias'
              placeholder='ID'
              onChange={aliasHandler}
              value={alias}
            /></p>
            <p><span className='hero-input-tit'>강의제목</span><input
              className='hero-input-long'
              name='title'
              maxLength={30}
              placeholder=''
              onChange={titleHandler}
              value={title}
            /></p>
            <p><span className='hero-input-tit'>최소인원</span><input
              className='hero-input-long'
              name='minAttendee'
              type='number' min='2' max='8'
              placeholder='숫자만 기입(최소 2명부터)'
              onChange={minAttendeeHandler}
              value={minAttendee}
            /></p>
            <p><span className='hero-input-tit'>최대인원</span><input
              className='hero-input-long'
              name='maxAttendee'
              type='number' min='2' max='8'
              placeholder='숫자만 기입(최대 8명까지)'
              onChange={maxAttendeeHandler}
              value={maxAttendee}
            /></p>
            <p><span className='hero-input-tit'>강의회차</span><input
              className='hero-input-long'
              name='maxClass'
              type='number' min='2' max='3'
              placeholder='숫자만 기입 (3개월 내 2회 또는 3회)'
              onChange={maxClassHandler}
              value={maxClass}
            /></p>
            <p className='hero-textarea-tit'>강의내용( 간략한 설명/ 회차별 내용 )</p>
            <p><textarea
              className='hero-textarea'
              name='contents'
              maxLength={100}
              placeholder='(예시)&#13;&#10;
              2023 교실에서 만나는 인공지능 디지털교육 교원 워크숍 &#13;&#10;
              1차시 : 아마존웹서비시즈, 20여년간의 클라우드 여정 &#13;&#10;
              2차시 : 교육현장을 위한 인공지능 &#13;&#10;
              3차시 : IT업계에서 찾는 학생들의 적성과 직업 &#13;&#10;
              4차시 : 클로벌하게 일하기-AWS TAM의 하루 &#13;&#10;'
              onChange={onTextareaHandler}
              value={contents}
            /></p>
            <p style={{color:'white',textAlignLast:'right'}}>
              <span value={inputCount}>{inputCount}</span>
              <span>/100 자</span>
            </p>
            </form>
      </div>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--medium'
          onClick={submitHandler}
        >
          등록하기
        </Button>
      </div>
    </div>
  );
}

export default Main;
