'use client';
import React, { useEffect,useRef } from 'react';
//gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css'; 
import 'swiper/css/pagination'; 
import 'swiper/css/navigation';
export default function Intro(){   
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const sectionTriggers = gsap.utils.toArray("section").map(section => {
            return ScrollTrigger.create({
                trigger: section,
                start: "top top",
                pin: true, //고정
                pinSpacing: false,
            });
        });
        gsap.utils.toArray(".section").forEach((section) => {
            // 각 섹션 내의 h2 및 p 태그에 대한 애니메이션 설정
            gsap.fromTo(section.querySelectorAll("h2, p"),
                { opacity: 0 }, 
                {
                    opacity: 1, 
                    duration: 1,
                    ease: "power1.out", // 부드러운 애니메이션 효과
                    scrollTrigger: {
                        trigger: section,
                        start: "top center", // 섹션 상단이 뷰포트 중앙에 도달하면 시작
                        toggleActions: "play none none reset", // 스크롤 동작에 따른 애니메이션 조절
                        // "play none none reset"은 섹션이 다시 들어올 때마다 애니메이션을 재생
                    }
                }
            );
        });
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // 정리
        };
    }, []);


    return(
        <div>
            <div className="sub_Block"></div>
            <section className="section section01">
                <div className="background"></div>
                <div className="intro_Txt_Wrap">												
                    <h2 className="custom_H2 opacity-0">나눔</h2>
                    <p className='p-3 text-center text-white text-xl opacity-0'>
                        닭 한마리 추가비용 500원을 기부둥지에 모아 <br/>
                        미래의 꿈과 희망이 자라도록 아동양육시설에 매달 기부합니다.
                    </p>
                </div>
            </section>
            <section className="section section02">
                <div className="background"></div>
                <div className="intro_Txt_Wrap">												
                    <h2 className="custom_H2 opacity-0">상생</h2>
                    <p className='p-3 text-center text-white text-xl opacity-0'>
                        나누고 더불어가는 사회를 위해<br/>
                        닭둥지는 늘 생각합니다.
                    </p>

                </div>
            </section>
            <section className="section section03">
                <div className="background"></div>
                <div className="intro_Txt_Wrap z-0">												
                    <h2 className="custom_H2 opacity-0">연구</h2>
                    <p className='p-3 text-center text-white text-xl opacity-0'>
                        더 맛있고 더 건강한 요리를 손님에게 내놓아야 한다.<br/>
                        닭둥지는 더 많은 고객님들이 만족할 수 있도록 늘 연구하고 노력합니다.
                    </p>

                </div>
            </section>
            <div className="test"></div>

            {/* Infomation */}
            <div className="info_Wrap">
                <div className="info_Box">
                    <div className="info_Title">Information</div>
                    <div className='info_Img_Area'>
                        <div>
                            <div className='info_Img2'>
                                <img src="/intro/info_1.jpg"/>
                            </div>
                            <div className='info_subTxt_Area'>
                                <div className='info_subTxt text-lg font-semibold'>
                                    닭둥지 배달<br/><span className="text-base font-medium">배달의 민족 닭둥지 검색</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='info_Img2'>
                                <img src="/intro/info_2.jpg"/>
                            </div>
                            <div className='info_subTxt_Area'>
                                <div className='info_subTxt text-lg font-semibold'>
                                    닭둥지 <br/><span className="text-base font-medium">동백전 카드 사용가능</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
    
            {/* 둘러보기 */}
            <div className="info_Wrap">
                <div className="info_Box">
                    <div className="info_Title">둘러보기</div>
                    <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper">
                        <SwiperSlide>
                            <img src="/intro/inside_1.jpg" className='object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/intro/inside_2.jpeg" className='object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/intro/inside_3.jpg" className='object-cover'/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            
        </div>
       
    );
}

