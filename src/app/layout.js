import Link from "next/link";
import "./globals.css";
import MNavCompo from "./header/mNav_Compo";
import M_Toggle from "./header/mHeader_Toggle";
import Inquiry from "./inquiry/inquiry";
export const metadata = {
  title: "닭둥지",
  description: "닭요리 NO.1 닭둥지",
  icons: {
    icon: "/logo.jpg",
  },
  openGraph: {
    images: "https://www.xn--ck1bx1av28b.shop/logo.jpg", 
    imageAlt: "닭둥지 로고", 
    description: "닭요리 NO.1 닭둥지. 닭둥지에서 최고의 닭요리를 경험하세요! 맛과 품질에서 최상의 선택!",
    type: "website",
    url: "https://www.닭둥지.shop",
    url: "https://www.xn--ck1bx1av28b.shop",
    locale: "ko_KR",
  },
};
export default function RootLayout({ children }) {

  return (
    <html>
      <body>
        {/* 헤더 */}
        <div id="header" className="bg-gray-100 p-6 ">
          <div className="flex flex-row justify-between items-center">
            <Link href="/" className="flex items-center cursor-pointer">
              <div className="logo mb-0 md:mb-0">
                  {/* 로고 이미지나 텍스트 */}
                  <img src="/logo_bs.png" alt="Logo"/>
              </div>
              <div className="text-lg font-bold">Home</div>
            </Link>
            <div className="pc_Area text-lg flex md:space-y-0 text-base md:space-x-10">
              <div className="nav_Area md:space-x-10 text-lg hidden font-semibold md:block">
                <Link href="/intro" className="nav block md:inline">브랜드 소개</Link>
                <Link href="/media" className="nav block md:inline">둥지 미디어</Link>
                <Link href="/menu" className="nav block md:inline">메뉴</Link>
                <Link href="/admin" className="nav block md:inline">직원전용</Link>
              </div>
            </div>
            {/* 모바일 헤더 메뉴 */}
            <div className="m_nav_Area cursor-pointer md:hidden">
              <M_Toggle />
            </div>
          </div>
          {/* 모바일 헤더 nav */}
          <MNavCompo />
        </div>
          {children}
          {/* 가맹문의 신청  */}
          <Inquiry />
  
        {/* 푸터 */}
        <div className="footer">
            <div className="footer_wrap">
                <div className="footer_wrap_inner ">
                    <div className="footer_content">
                        <div className="dr_footer_content">
                            <div className="px-4">
                              <div className="bottom_logo">
                                  <img src="/logo.jpg" alt="bottom_logo"/>
                              </div>
                            </div>
                            <div className="bottom_txt">
                                <p className="text-base font-semibold">
                                    닭둥지(주) 
                                </p>
                                 <p className="text-base">
                                    대표: 김태영 ㅣ 부산광역시 부산광역시 명지국제8로 287 1층 닭둥지 ㅣ 사업자등록번호 : 728-11-01743 <br/>
                                </p>
                                 <p className="text-base">
                                    Copyright 2024. dakdungji All rights reserved.
                                </p>
                                {/* <p className="mono_line_color four-font">            
                                    <span className="term_popup" data-type="COMMON">개인정보처리방침</span>                               
                                    <span className="term_popup" data-type="TERM">이용약관</span>                              
                                    <span className="term_popup" data-type="INFO">닭둥지 스토리</span>                              
                                </p> */}
                            </div>
                        </div>
                        <div className="customer hidden lg:block">
                            <div className="customer_wrap">
                                <div className="customer_wrap_inner">
                                    <div className="customer_txt ">
                                        <span>직통전화</span>
                                    </div>
                                    <div className="tel">
                                        <div className="">
                                            <span className="tel_num font-semibold py-1 text-lg md:text-2xl">
                                              0507-1487-5025</span>
                                            <p className="">
                                                  매일 11:00  ~ 22:00 <br/>
                                                  브레이크 타임 15:00 ~ 17:00 <br/>
                                              </p>
                                        </div>
                                    </div>
                                    <div className="date">
                                        <div className="date_wrap">
                                            <div className="date_wrap_inner">
                                               {/* sns아이콘 */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </body>
    </html>
  );
}
