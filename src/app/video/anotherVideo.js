'use client';
import React, { useState } from 'react';
export default function AnotherVideo() {
    const [rem, setRem] = useState("2xsthR_9tBU");
    const handleClick = (e) => {
        const value = e.currentTarget.getAttribute('data-src');
        setRem(value);
        //detail : 이벤트 객체에 포함할 세부 정보를 나타내는 값
        const customEvent = new CustomEvent('customClick', { detail: value });
        window.dispatchEvent(customEvent);
    };
    return (
      <>
        <div className="another_Media_Wrap flex lg:block">
        <div className=" p-1"data-src="2xsthR_9tBU"onClick={handleClick}>
            <div className="another_Media">
              <img src="https://img.youtube.com/vi/2xsthR_9tBU/mqdefault.jpg" className="object-fill"></img>
              {rem === '2xsthR_9tBU' && 
                  <div className='play_Small'>
                      <img src="/media/play.png"/>     
                  </div>
              }
            </div>
            <div className="text-white text-center">[SBS 생방송 투데이]</div>
        </div>
        <div className=" p-1"data-src="3mf1aXXru1g"onClick={handleClick}>
           <div className="another_Media">
              <img src="https://img.youtube.com/vi/3mf1aXXru1g/mqdefault.jpg" className="object-fill"></img>
              {rem === '3mf1aXXru1g' && 
                  <div className='play_Small'>
                      <img src="/media/play.png"/>     
                  </div>
              }
            </div>
            <div className="text-white text-center">[인기 유튜버 잡솨]</div>
        </div>
        </div>
      </>
    );
  }