'use client';
import { gsap } from 'gsap';
import React, { useEffect, useState } from 'react';
import AdminCompo from '../component/list';
import Router from 'next/router';
const Page = () => {
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, password })
      });

      if (response.ok) {
        setIsLoggedIn(true);
        const dataResponse = await fetch('/api/notion', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // 필요한 데이터 전송
          body: JSON.stringify({ /**/ })
        });
        const fetchedData = await dataResponse.json();
        setData(fetchedData);
      } 
      else {
        //throw new Error('로그인 실패');
        alert('로그인 정보가 정확하지 않습니다');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const checkLoginStatus = async () => {
    try {
      const response = await fetch('/api/checkSession', { credentials: 'include' });
      if (response.ok) {
        setIsLoggedIn(true);
        fetch('/api/notion', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ /**/ })
        })
        .then(response => response.json())
        .then(data => {
          setData(data);
        })
        .catch(error => {
          //console.error('Error:', error);// 요청 중 오류가 발생
          console.log('요청 중 에러발생')
        });
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    checkLoginStatus();//로그인세션 체크
    gsap.to(".menu_Label_Txt", {
      duration: 2, // 애니메이션 지속 시간은 1초
      opacity: 1, // 투명도를 0(완전 투명)에서 시작
      //y: 5, 
      ease: "linear" // 부드러운 전환을 위한 이징 효과
    });
    gsap.to(".menu_title", {
        duration: 2,
        scale: 1.0,  
        ease: "power1.out", 
    });
  }, []);
  return (
    <div>
      <div className="sub_Block"></div>
      {/* 메뉴 타이틀 라벨 */}
      <div className="menu_LabelWrap">
            <div className="menu_Label">
                <div className="menu_title_Wrap mx-auto">
                    <img src="/admin/adminBanner.jpg" className="menu_title object-cover" />
                    <div className="menu_Label_Txt font-bold  text-2xl md:text-4xl lg:text-5xl">관리자 페이지 가맹문의<br/><br/>가맹문의 내역</div>
                </div>
            </div>
        </div>
      {!isLoggedIn && (
        <div className='py-8'>
          <div className='adminLogin'>
            {/* 관리자 로그인 창 로고 */}
            <div className='adminLogin_Img'>
              <img src="/logo_bs.png" />
            </div>
            <div className='py-2'>
              <div className='inputWrap mx-auto'>
                <input
                  className='input'
                  type="text"
                  placeholder="ID"
                  value={userId}
                  maxLength='15'
                  onChange={(e) => setUserId(e.target.value)}/>
              </div>
            </div>
            <div className='py-2'>
              <div className='inputWrap mx-auto'>
                <input
                  className='input'
                  type="password"
                  placeholder="비밀번호"
                  value={password}
                  maxLength='30'
                  onChange={(e) => setPassword(e.target.value)}/>
              </div>
            </div>
            <div className='py-2'>
              <div onClick={handleLogin} className='sendBtn mx-auto'>로그인</div>
            </div>
          </div>
        </div>
      )}

       {isLoggedIn && (
        <>
          <AdminCompo data={data}/>
        </>
      )}
    </div>
  );
};

export default Page;