'use client';
import { gsap } from 'gsap';
import React, { useEffect,useState } from 'react';
export default function AdminCompo({data}) {
    //확인처리 함수 업데이트
    const updateStatus = async (pageId) => {
        // 프롬프트 처리
        const isConfirmed = window.confirm('확인처리 하시겠습니까?');
        if (isConfirmed) {
          const response = await fetch('/api/update', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              pageId: pageId,
              newStatus: '확인', // 새로운 상태 값
            })
          });
          if (!response.ok) {
            alert('시스템 에러발생');
          } else {
            window.location.reload();
            alert('성공적으로 처리되었습니다.');
          }
        } 
      };

  return (
    <div>
        
        {/* 가맹문의 리스트 */}
        <h2 className='text-center font-semibold text-lg py-4'>* 가맹문의 내역은 미확인 가맹신청, 최신날짜순으로 표시됩니다.</h2>
        <div className="admin_List_Area">
            <div className="admin_List_Wrap">
                {data.map((item, index) => (
                    <div key={index} className="admin_List py-2">
                        <div className="admin-item-field">
                            <strong>{index+1}. </strong> 
                        </div>
                        <div className="admin-item-field">
                            <strong>이름:</strong> {item.properties.이름.title[0]?.plain_text}
                        </div>
                        <div className="admin-item-field">
                            <strong>연락처:</strong> {item.properties.연락처.rich_text[0]?.plain_text}
                        </div>
                        <div className="admin-item-field">
                            <strong>보유자금:</strong> {item.properties.보유자금.rich_text[0]?.plain_text}
                        </div>
                        <div className="admin-item-field">
                            <strong>희망지역:</strong> {item.properties.희망지역.rich_text[0]?.plain_text}
                        </div>
                        <div className="admin-item-field">
                            <strong>신청일:</strong> {item.properties.등록일.date?.start}
                        </div>
                        <div className="admin-item-field">
                            <strong>상태:</strong> {item.properties.상태.rich_text[0]?.plain_text}
                        </div>
                        {item.properties.상태.rich_text[0]?.plain_text === '미확인' && (
                            <div className="admin_CheckBtn" onClick={() => updateStatus(item.id)}>
                                확인처리
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}
