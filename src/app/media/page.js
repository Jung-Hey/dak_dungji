'use client';
import React, { useEffect,useState } from 'react'; 
import { gsap } from 'gsap';

export default function Media(){
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

  //미디어 클릭 시 변경 및 css변경 클래스 적용
  const [videoId, setVideoId] = useState('2xsthR_9tBU');
  const changeVideo = (e) => {
      const newVideoId = e.currentTarget.getAttribute('data-src'); 
      setVideoId(newVideoId);
      setTimeout(scrollToTop, 180); //지연
      //scrollToTop();
  };
    const scrollToTop = () => {
        // '.menu_LabelWrap' 요소를 찾기
        const menuLabelWrap = document.querySelector('.menu_LabelWrap');
        // '#header' 요소를 찾기
        const header = document.getElementById('header');
        if (menuLabelWrap && header) {
            // '.menu_LabelWrap' 요소의 높이를 구하기
            const menuLabelWrapHeight = menuLabelWrap.offsetHeight;
            // 계산된 위치로 부드럽게 스크롤
            window.scrollTo({
                top: 0+menuLabelWrapHeight,
                left: 0,
                behavior: 'smooth'
            });
        }
    };

    return(
        <div>
            <div className="sub_Block"></div>
            {/* 메뉴 타이틀 라벨 */}
            <div className="menu_LabelWrap">
                <div className="menu_Label">
                    <div className="menu_title_Wrap mx-auto">
                        <img src="https://cdn.pixabay.com/photo/2014/09/28/11/25/imac-464739_1280.jpg" className="menu_title object-cover" />
                        <div className="menu_Label_Txt font-bold  text-2xl md:text-4xl lg:text-5xl">닭요리 NO.1 닭둥지의<br/><br/>다양한 미디어를 만나보세요</div>
                    </div>
                </div>
            </div>
            {/* 미디어 */}
            <div className="sub_mediaBox">
                <div className="">
                    {/* 메인 유튜브 iframe */}
                    <div className="">
                        <div className="player_Wrap">
                            <div className="player sm:m_player">
                                <iframe className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${videoId}`}
                                    title="생방송투데이 리얼맛집 닭둥지" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen>
                                </iframe>     
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            {/* 기타영상 */}
            <div className="s_media_Area">
                <div className="s_media">
                    <div className='p-4'>
                        <div className='text-2xl font-semibold'>More Contents</div>
                    </div>
                    <div className='flex flex-wrap gap-6 justify-center'>
                        {/* 개별 동영상 요소 */}
                        <div className="another"data-src="2xsthR_9tBU"onClick={changeVideo}>
                            <div className="s_another_Media">
                                <img src="https://img.youtube.com/vi/2xsthR_9tBU/mqdefault.jpg" className="object-fill"></img>
                                {videoId === '2xsthR_9tBU' && 
                                    <div className='play'>
                                        <img src="/media/play.png"/>     
                                    </div>
                                }
                            </div>
                            <div className="text-center p-1">[SBS 생방송 투데이]</div>
                        </div>
                        {/* 개별 동영상 요소 */}
                        <div className="another"data-src="3mf1aXXru1g"onClick={changeVideo}>
                            <div className="s_another_Media">
                                <img src="https://img.youtube.com/vi/3mf1aXXru1g/mqdefault.jpg" className="object-fill"></img>
                                {videoId === '3mf1aXXru1g' && 
                                    <div className='play'>
                                        <img src="/media/play.png"/>     
                                    </div>
                                }
                            </div>
                            <div className="text-center p-1">[유튜버 잡솨]</div>
                        </div>
                        <div className="another"data-src="p7p7knf3-TU"onClick={changeVideo}>
                            <div className="s_another_Media">
                                <img src="https://img.youtube.com/vi/p7p7knf3-TU/mqdefault.jpg" className="object-fill"></img>
                                {videoId === 'p7p7knf3-TU' && 
                                    <div className='play'>
                                        <img src="/media/play.png"/>     
                                    </div>
                                }
                            </div>
                            <div className="text-center p-1">[유튜버 한식푸우]</div>
                        </div>
                        <div className="another"data-src="Sc1b6h7jv1g"onClick={changeVideo}>
                            <div className="s_another_Media">
                                <img src="https://img.youtube.com/vi/Sc1b6h7jv1g/mqdefault.jpg" className="object-fill"></img>
                                {videoId === 'Sc1b6h7jv1g' && 
                                    <div className='play'>
                                        <img src="/media/play.png"/>     
                                    </div>
                                }
                            </div>
                            <div className="text-center p-1">[유튜버 맛찾꾼]</div>
                        </div>
                        <div className="another"data-src="-alDuE18dhc"onClick={changeVideo}>
                            <div className="s_another_Media">
                                <img src="https://img.youtube.com/vi/-alDuE18dhc/mqdefault.jpg" className="object-fill"></img>
                                {videoId === '-alDuE18dhc' && 
                                    <div className='play'>
                                        <img src="/media/play.png"/>     
                                    </div>
                                }
                            </div>
                            <div className="text-center p-1">[유튜버 택제이]</div>
                        </div>
                        
                        <div className="another"data-src="aODhG_2tTY0"onClick={changeVideo}>
                            <div className="s_another_Media">
                                <img src="https://img.youtube.com/vi/aODhG_2tTY0/mqdefault.jpg" className="object-fill"></img>
                                {videoId === 'aODhG_2tTY0' && 
                                    <div className='play'>
                                        <img src="/media/play.png"/>     
                                    </div>
                                }
                            </div>
                            <div className="text-center p-1">[유튜버 미식도우미 샹키]</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

