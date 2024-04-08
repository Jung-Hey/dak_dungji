import Image from "next/image";
import Link from "next/link";
import KakaoMap from './map/map';
import Video from './video/video';//대표 유튜브 미디어
import AnotherVideo from './video/anotherVideo';
import MainVideo from "./mainvideo/mainVideo";

export default function Home() {
  return (
    <div>
      <div>
        {/* 메인 */}
        <div className="main_Area relative">
          <div className="main">
            {/* <img src="/main/main.webp" className="object-cover"/> */}
            <MainVideo/>
          </div>
          <div className="main_Txt_Area">
            <p className="text-2xl lg:text-5xl font-bold">사람을 남기는 따뜻한 식당</p>
            <br/>
            <p className="text-2xl lg:text-5xl font-bold">닭요리 NO.1 닭둥지 입니다</p>  
            <div className="py-6">
              <Link href="/intro" className="special_Btn goto_Intro font-semibold text-lg md:text-2xl">닭 한마리 500원?<br/>
                <div className="flex item-center justify-between">
                  <div>알아보기</div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 inline">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  
                </div>
                
                </Link>
            </div>
          </div>
        </div>
        <div>
    </div>
        {/* 메뉴 */}
        <div className="box menu_Box">
          {/* 박스 타이틀 */}
          <div className="box_Title">메뉴</div>
          <div className="box_Sub_Title text-center text-base md:text-lg">닭둥지의 대표메뉴를 소개합니다</div>
          <div className="more_btn_Area">
            <Link href="/menu" className="more_btn flex items-cener gap-x-2 p-2 w-full border border-gray-400">
              <div className="text-base md:text-lg md:font-semibold">전체 보기</div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </Link>
          </div>
          {/* 대표 메뉴 이미지 바 */}
          <div className="menu_Bar_Area">
            <div className="menu_Bar lg:flex justify-center gap-12 mx-auto">
              {/* 개별 메뉴 */}
              <div className="menu">
                <div className="menu_Img_Wrap overflow-hidden">
                  <div className="menu_Flag main_bg">대표</div>
                  <img className="menu_Img rounded-md" src="/menu/menu_1_sp.jpg"/></div>
                <div className="menu_Txt_Wrap p-2">
                  <div className="menu_Txt1 text-base py-1 font-semibold md:text-xl">닭둥지탕</div>
                  <div className="menu_Txt2 text-base text-slate-600 ">낙지,새우,꽃게,조개 등 각종 해산물과 닭 한마리가 들어간 닭해물탕입니다!</div>  
                </div>
              </div>
              <div className="menu">
                <div className="menu_Img_Wrap overflow-hidden">
                  <div className="menu_Flag main_bg">대표</div>
                  <img className="menu_Img rounded-md" src="/menu/menu_2.jpeg"/></div>
                <div className="menu_Txt_Wrap p-2">
                  <div className="menu_Txt1 text-base py-1 font-semibold md:text-xl">누른 닭 구이</div>
                  <div className="menu_Txt2 text-base text-slate-600 ">닭 한마리를 통째로 눌러 튀기듯 구운 닭전! 어디가서 이런 맛 못 드셔보셨을꺼에요!</div>  
                </div>
              </div>
              <div className="menu">
                <div className="menu_Img_Wrap overflow-hidden">
                  <div className="menu_Flag main_bg ">대표</div>
                  <img className="menu_Img rounded-md" src="/menu/menu_3.jpeg"/></div>
                <div className="menu_Txt_Wrap p-2">
                  <div className="menu_Txt1 text-base py-1 font-semibold md:text-xl">특수부위 튀김</div>
                  <div className="menu_Txt2 text-base text-slate-600 ">옹골찬 닭 특수부위튀김 한판! 목살,연골,껍질까지! 특수부위들을 모아 맛나게 튀겼어요!</div>  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 미디어 */}
        <div className="box media_Box">
          <div className="media_Wrap lg:flex">
            <div className="media_1 p-3 lg:w-1/4">
              <div className="text-base py-1 text-gray-200 font-medium">Featured Media</div>
              <div className="text-lg py-3 text-white font-semibold md:text-4xl"> 미디어</div>
              <div className="text-lg pt-1 text-gray-200 font-medium">미디어에 소개된 닭둥지를 확인하세요!</div>
              <div className="text-lg pb-5 text-gray-200 font-medium">닭둥지의 색깔과 맛을 담았습니다.</div>
              <Link href="/media" className="goMedia_Btn">바로가기</Link>
            </div>
            <div className="media_2 lg:w-1/2">
              {/* 유튜브 대표 IFRAME */}
              <Video />
            </div>
            <div className="media_3 lg:w-1/4 ">
              {/* 기타 유뷰트  */}
              <AnotherVideo/>
            </div>
          </div>
        </div>
        {/* 오시는길 */}
        <div className="box map_Box bg-white">
          {/* 박스 타이틀 */}
          <div className="box_Title">오시는 길</div>
          <div className="box_Sub_Title p-2 text-center text-base md:text-lg">닭둥지 명지 본점</div>
          <div className="map_Wrap sm:m_map">
            <KakaoMap/>
          </div>
          <div className="map_Info_Area">
            <div className="map_Info_Wrap">
              <div className="map_Container md:grid_tem2">
                <div className="map_Info">
                  {/* 아이콘 */}
                  <div className="map_Info_1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                    </svg>
                  </div>
                  <div className="map_Info_2">
                    <div className="text-lg font-semibold">주소</div>
                    <div className="text-base text-slate-500">부산광역시 명지국제8로 287 1층</div>
                  </div>
                </div>
                <div className="map_Info">
                  {/* 아이콘 */}
                  <div className="map_Info_1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div className="map_Info_2">
                    <div className="text-lg font-semibold">전화</div>
                    <div className="text-base text-slate-500">0507-1487-5025</div>
                  </div>
                </div>
                <div className="map_Info">
                  {/* 아이콘 */}
                  <div className="map_Info_1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div className="map_Info_2">
                    <div className="text-lg font-semibold">영업시간</div>
                    <div className="text-base text-slate-500">매일 11:00 - 22:00 <br/> (15:00 - 17:00 브레이크 타임)</div>
                  </div>
                </div>
                <div className="map_Info">
                  {/* 아이콘 */}
                  <div className="map_Info_1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                  </div>
                  <div className="map_Info_2">
                    <div className="text-lg font-semibold">추가정보</div>
                    <div className="text-base text-slate-500">단체이용가능,포장,배달,남/녀 화장실 구분,무선 인터넷,예약,주차가능</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
