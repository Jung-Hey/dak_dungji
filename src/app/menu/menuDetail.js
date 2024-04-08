'use client';
import React, { useState,useEffect } from 'react';
export default function MenuDetail(props) {
    const { imageSrc, visible, setVisible } = props; // props에서 필요한 값 추출
    const detailClose = () => {
        setVisible(false); // .Detail_Wrap 숨김
    };
  return (
    <div className={`Detail_Wrap ${!visible ? 'hidden' : 'block'}`}>
        <div className="Detail_Area">
            <div className="Detail">
                <img src={imageSrc} className='Detail_Src' />
            </div>
            <div className="DetailClose" onClick={detailClose} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
        </div>
        
    </div>
  );
}