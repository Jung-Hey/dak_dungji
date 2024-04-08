'use client';
import { useEffect } from "react";
export default function KakaoMap() {
    useEffect(() => {
        //Next.js의 Script 컴포넌트를 대체하는 방법으로 직접 DOM에 script 태그를 추가
        const kakaoMapScript = document.createElement('script')
        kakaoMapScript.async = false
        kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`
        document.head.appendChild(kakaoMapScript)//직접 헤드에 추가

        const onLoadKakaoAPI = () => {
            //load() 메소드는 카카오맵 관련 SDK가 제대로 로드된 후에 사용하라고 제공된것.
            window.kakao.maps.load(() => {
                const container = document.getElementById('map')
                const options = {
                    center: new window.kakao.maps.LatLng(35.0978392, 128.9242178),
                    level: 1,
                }
                // 1. 지도 띄우기
                const map = new kakao.maps.Map(container, options);
                // 2. 중앙에 핀 꽂기
                let marker = new kakao.maps.Marker({ 
                    map: map,
                    position: map.getCenter() 
                }); 
                var content = '<div class="customoverlay">' +
                '  <a href="https://kko.to/nhT3F2SaUD" target="_blank">' +
                '    <span class="title">닭둥지</span>' +
                '  </a>' +
                '</div>';
                // 커스텀 오버레이가 표시될 위치
                var position = new kakao.maps.LatLng(35.0978392, 128.9242178);  
                // 커스텀 오버레이를 생성
                var customOverlay = new kakao.maps.CustomOverlay({
                    map: map,
                    position: position,
                    content: content,
                    yAnchor: 1 
                });
            })
        }
        kakaoMapScript.addEventListener('load', onLoadKakaoAPI);
    }, [])

    return (
        <>
            <div id="map" style={{ width: "100%", height: "100%" }}></div>
        </>
    )
}

