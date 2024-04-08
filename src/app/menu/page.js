'use client';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MenuDetail from './menuDetail';
export default function Menu() {
    useEffect(() => {
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
    //자세히 보기 시 디테일 사진의 이미지 src 전달
    const [imageSrc, setImageSrc] = useState('/menu/menu_2.jpeg'); // 기본 이미지 경로 설정
    const [visible, setVisible] = useState(false); // .Detail_Wrap의 표시 상태
    const showDetail = (e) => {
        const newImageSrc = e.currentTarget.getAttribute('data-src');
        setImageSrc(newImageSrc);
        setVisible(true); // .Detail_Wrap을 표시하도록 상태 업데이트
    };

  return (
    <div>
      <div className="sub_Block"></div>
      {/* 메뉴 타이틀 라벨 */}
        <div className="menu_LabelWrap">
            <div className="menu_Label">
                <div className="menu_title_Wrap mx-auto">
                    <img src="/menu/menu_title.jpg" className="menu_title object-cover" />
                    <div className="menu_Label_Txt font-bold  text-2xl md:text-4xl lg:text-5xl">닭요리 NO.1 닭둥지의<br/><br/>다양한 메뉴를 만나보세요</div>
                </div>
            </div>
        </div>
      {/* 메뉴 리스트 */}
        <div className="menu_Area py-10">
            <div className="menu_Wrap grid gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {/* 개별 메뉴 */}
                <div className="s_menu_Box">
                    <div className="menu_Img">
                        <img src="/menu/menu_1_sp.jpg" className='s_Menu_Img'/>
                    </div>
                    <div className="text-center py-3 font-semibold text-2xl">닭둥지탕</div>
                    <div></div>
                    <div className="text-center p-1 text-lg main_col font-semibold">29,900원</div>
                    <div className="text-center p-4 text-lg">
                        낙지,새우,꽃게,조개 등 각종 해산물과 닭 한마리가 들어간 닭해물탕입니다!
                    </div>
                    <div className="pb-4">
                        <div className="menu_Detail_Btn font-medium" data-src="/menu/menu_1_sp.jpg" onClick={showDetail}>자세히 보기</div>
                    </div>
                </div>
                <div className="s_menu_Box">
                    <div className="menu_Img">
                        <img src="/menu/menu_2.jpeg" className='s_Menu_Img'/>
                    </div>
                    <div className="text-center py-3 font-semibold text-2xl">누른 닭 구이</div>
                    <div></div>
                    <div className="text-center p-1 text-lg main_col font-semibold">14,900원</div>
                    <div className="text-center p-4 text-lg">
                        닭 한마리를 통째로 눌러 튀기듯 구운 닭전! 어디가서 이런 맛 못 드셔보셨을꺼에요!
                    </div>
                    <div className="pb-4">
                        <div className="menu_Detail_Btn font-medium" data-src="/menu/menu_2.jpeg" onClick={showDetail}>자세히 보기</div>
                    </div>
                </div>
                <div className="s_menu_Box">
                    <div className="menu_Img">
                        <img src="/menu/menu_3.jpeg" className='s_Menu_Img'/>
                    </div>
                    <div className="text-center py-3 font-semibold text-2xl">특수부위 튀김</div>
                    <div></div>
                    <div className="text-center p-1 text-lg main_col font-semibold">12,900원</div>
                    <div className="text-center p-4 text-lg">
                        옹골찬 닭 특수부위튀김 한판! 목살,연골,껍질까지! 특수부위들을 모아 맛나게 튀겼어요!
                    </div>
                    <div className="pb-4">
                        <div className="menu_Detail_Btn font-medium" data-src="/menu/menu_3.jpeg" onClick={showDetail}>자세히 보기</div>
                    </div>
                </div>
                <div className="s_menu_Box">
                    <div className="menu_Img">
                        <img src="/menu/menu_4_sp.jpg" className='s_Menu_Img'/>
                    </div>
                    <div className="text-center py-3 font-semibold text-2xl">둥지 무침</div>
                    <div></div>
                    <div className="text-center p-1 text-lg main_col font-semibold">9,000원</div>
                    <div className="text-center p-4 text-lg">
                        닭 살을 발라 내, 새콤한 소스와 아삭한 채소를 버무립니다. 코 찡~한 겨자 맛이 계속 손이 가게 하는 최고의 서브안주!
                    </div>
                    <div className="pb-4">
                        <div className="menu_Detail_Btn font-medium" data-src="/menu/menu_4_sp.jpg" onClick={showDetail}>자세히 보기</div>
                    </div>
                </div>
                <div className="s_menu_Box">
                    <div className="menu_Img">
                        <img src="/menu/menu_5_sp.jpeg" className='s_Menu_Img'/>
                    </div>
                    <div className="text-center py-3 font-semibold text-2xl">미나리 닭반마리 곰탕</div>
                    <div></div>
                    <div className="text-center p-1 text-lg main_col font-semibold">7,000원</div>
                    <div className="text-center p-4 text-lg">
                        깔끔한 닭 육수에 맛을 더욱 풍부하게 해주는 미나리까지. 든든한 한끼 식사는 닭곰탕이죠
                    </div>
                    <div className="pb-4">
                        <div className="menu_Detail_Btn font-medium" data-src="/menu/menu_5_sp.jpeg" onClick={showDetail}>자세히 보기</div>
                    </div>
                </div>
                <div className="s_menu_Box">
                    <div className="menu_Img">
                        <img src="/menu/menu_6_sp.jpeg" className='s_Menu_Img'/>
                    </div>
                    <div className="text-center py-3 font-semibold text-2xl">둥지 비빔밥</div>
                    <div></div>
                    <div className="text-center p-1 text-lg main_col font-semibold">7,000원</div>
                    <div className="text-center p-4 text-lg">
                        수제 비법소스와 각종 채소를 듬~뿍 올립니다. 마구마구 비벼서 사정없이 먹어주세요.
                    </div>
                    <div className="pb-4">
                        <div className="menu_Detail_Btn font-medium" data-src="/menu/menu_6_sp.jpeg" onClick={showDetail}>자세히 보기</div>
                    </div>
                </div>
                <div className="s_menu_Box">
                    <div className="menu_Img">
                        <img src="/menu/menu_7.jpeg" className='s_Menu_Img'/>
                    </div>
                    <div className="text-center py-3 font-semibold text-2xl">▶평일 점심특선◀ 닭 두루치기!</div>
                    <div></div>
                    <div className="text-center p-1 text-lg main_col font-semibold">8,500원</div>
                    <div className="text-center p-4 text-lg">
                        닭갈비가 아닌, 닭 두루치기에요.
                    </div>
                    <div className="pb-4">
                        <div className="menu_Detail_Btn font-medium"  data-src="/menu/menu_7.jpeg" onClick={showDetail}>자세히 보기</div>
                    </div>
                </div>
                <div className="s_menu_Box">
                    <div className="menu_Img">
                        <img src="/menu/menu_8.jpeg" className='s_Menu_Img'/>
                    </div>
                    <div className="text-center py-3 font-semibold text-2xl">닭 한마리 추가</div>
                    <div></div>
                    <div className="text-center p-1 text-lg main_col font-semibold">500원</div>
                    <div className="text-center p-4 text-lg">
                        닭 한마리 추가 비용은 단돈 "500원"입니다. 이 500원은 매달 기부금에 사용됩니다.
                    </div>
                    <div className="pb-4">
                        <div className="menu_Detail_Btn font-medium" data-src="/menu/menu_8.jpeg" onClick={showDetail}>자세히 보기</div>
                    </div>
                </div>
            </div>
        </div>
        <MenuDetail imageSrc={imageSrc} visible={visible} setVisible={setVisible} />
    </div>
  );
}
