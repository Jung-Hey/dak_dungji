'use client';
export default function M_Toggle() {
  const toggle = () => {
    // HTML 요소에서 커스텀 이벤트를 사용하기 위해 생성한 이벤트 전달
    //일단 전역으로 설정해서 window사용 
    window.dispatchEvent(new Event('headerToggle'));
  };
  return (
    <button onClick={toggle}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    </button>
  );
}