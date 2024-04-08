'use client';
import React, { useState,useEffect } from 'react';
import Link from "next/link";
export default function MNavCompo() {
  const [visible, setVisible] = useState(false);
  //토글함수
  const toggleVisibility = () => {
    setVisible((v) => !v);
  };
  // useEffect는 해당 컴포넌트가 렌더링 된 다음 실행됨
  useEffect( () => {
    // 'headerToggle'라는 이름의 커스텀 이벤트가 발생할 때마다 toggleVisibility 함수가 호출
    window.addEventListener('headerToggle', toggleVisibility);
    // 컴포넌트가 언마운트될 때, 이벤트 리스너를 제거하여 메모리 누수를 방지.
    return () => {
      window.removeEventListener('headerToggle', toggleVisibility);
    };
  }, []); // 마지막 ,[]에 변수를 넣으면 해당 변수에 변화가 일어났을때만 useEffect실행됨
  return (
    <div className="m_nav_Wrap p-1"style={{ display: visible ? 'block' : 'none' }}>
      <Link href="/intro" className="m_nav block md:inline" onClick={toggleVisibility}>브랜드 소개</Link>
      <Link href="/media" className="m_nav block md:inline"onClick={toggleVisibility}>둥지 미디어</Link>
      <Link href="/menu" className="m_nav block md:inline"onClick={toggleVisibility}>메뉴</Link>
      <Link href="/admin" className="m_nav block md:inline"onClick={toggleVisibility}>직원전용</Link>
    </div>
  );
}