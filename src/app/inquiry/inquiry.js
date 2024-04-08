'use client';
import React, { useEffect,useState } from 'react';
import Privacy from './privacy';
export default function Inquiry(){
    // 모달 표시 상태 관리, 기본적으로는 숨김 (false)
  const [showModal, setShowModal] = useState(false);
  const modalToggle = () => {
    setShowModal(!showModal);
  };
  const modalDataClear = () => {
    setIsAgreed(false);
    setName('');
    setPhone('');
    setWishLocation('');
    setOwnMoney('');
    modalToggle();
  }
  
  const [isAgreed, setIsAgreed] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [wishLocation, setWishLocation] = useState('');
  const [ownMoney, setOwnMoney] = useState('');
  const [isSending, setIsSending] = useState(false);//가맹신청 중복클릭 방지
  const sendData = () => {
    if (isSending) return; 
    if(!isAgreed){
        alert("개인정보수집 동의를 체크해주세요.");
        return;
    } 
    if (name.trim() && phone.trim() && wishLocation.trim() && ownMoney.trim()) {
        setIsSending(true);  // 요청 시작 상태로 설정
        //입력이 다 들어왔으면 insert
        const inquiryData = {
            name: name.trim(),
            phone: phone.trim(),
            wishLocation: wishLocation.trim(),
            ownMoney: ownMoney.trim(),
            registrationDate: new Date().toISOString().split('T')[0], // 오늘 날짜
            status: '미확인'
          };
          fetch('/api/insert', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(inquiryData)
          })
          .then(response => {
            if (!response.ok) {
              alert('서버 오류');
            }
            setTimeout(() => {
                setIsSending(false);  // 2초 후에 다시 클릭 가능하도록 설정
              }, 2000);
            return response.json();
          })
          .then(() => {
            alert('가맹문의가 성공적으로 접수되었습니다.');
            modalDataClear();//모달 데이터 클리어 및 모달닫기
          })
          .catch(error => {
            //console.error('Error:', error);
            alert('문제가 발생했습니다: ' + error.message);
          });
    }
     else {
        alert("이름, 연락처, 희망지역, 보유자금을 보유 입력 및 선택해주세요");
    }
  };
    return(
        <div>
            {/* 가맹문의 신청 아이콘 */}
            <div className="customer_img">
                <div className="customer_img_wrap" onClick={modalToggle}>
                    <img src="inquiryIcon.svg" className="fade" alt="customer_img"/>
                </div>
                <div className="customer_img_txt text-base font-medium" onClick={modalToggle}>
                    <span>가맹문의 신청</span>
                </div>
            </div>
            {/* 가맹신청 모달 */}
            {showModal && (
                <div className='inquiry_Modal_Area'>
                    <div className='inquiry_Modal'>
                        {/* 개인정보 동의 */}
                        <div className='pb-2'>
                            <div className='agreeCheck'> 
                                <div className='flex align-center gap-2'>
                                    <input type="checkbox" id="agree" name="agree" className='w-5'
                                    checked={isAgreed} onChange={(e) => setIsAgreed(e.target.checked)}/>
                                    <label>개인정보수집 동의 </label>
                                </div>
                                <div className='modal_Close' onClick={modalToggle}>x</div>
                            </div>
                        </div>
                        <div className='agreeAtrea'>
                            <Privacy/>
                            {/* <textarea readOnly>  </textarea> */}
                        </div>
                        {/* 입력영역 */}
                        <div className='inputArea'>
                            {/* 이름 */}
                            <div className='inputWrap'>
                                <div>
                                    <input type="text" name="name" id="name" autoComplete="off" placeholder='이름' className='input' maxLength='10' 
                                    value={name}  onChange={(e) => setName(e.target.value)}/> 
                                </div>
                            </div>
                            {/* 연락처 */}
                            <div className='inputWrap'>
                                <div>
                                    <input type="text" name="phone" id="phone" autoComplete="off" placeholder='연락처' className='input' maxLength='18'
                                     value={phone}  onChange={(e) => setPhone(e.target.value)}/> 
                                </div>
                            </div>
                            {/* 희망지역 */}
                            <div className='inputWrap'>
                                <div>
                                    <select name="wish_Location" id="wish_Location" className='w-full'
                                     value={wishLocation}  onChange={(e) => setWishLocation(e.target.value)} >
										<option value="">희망지역</option>
                                        <option value="부산">부산</option>
										<option value="서울">서울</option>
										<option value="경기">경기</option>	
										<option value="대구">대구</option>
										<option value="울산">울산</option>
										<option value="경북">경북</option>
										<option value="경남">경남</option>
										<option value="제주">제주</option>
                                        <option value="기타">기타</option>		
									</select>
                                </div>
                            </div>
                            {/* 보유자금 */}
                            <div className='inputWrap'>
                                <div>
                                    <select name="ownMoney" id="ownMoney" className='w-full'
                                     value={ownMoney} onChange={(e) => setOwnMoney(e.target.value)}>
										<option value="">보유자금</option>
										<option value="1억원 이상~1.5억원 이하">1억원 이상~1.5억원 이하</option>
										<option value="1.5억원 이상~2억원 이하">1.5억원 이상~2억원 이하</option>
										<option value="2억원 이상">2억원 이상</option>
                                        <option value="2억원 이상~2.5억원">2억원 이상~2.5억원</option>
									    <option value="2.5억원 이상~3억원">2.5억원 이상~3억원</option>
									    <option value="3억원 이상">3억원 이상</option>
									</select>
                                </div>
                            </div>
                        </div>
                        {/* 신청버튼 */}
                        <div className='py-2'>
                            <div className='sendBtn' onClick={sendData}>보내기</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        

        
    );
}

