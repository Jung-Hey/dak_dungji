'use client';
import React, { useEffect, useState } from 'react';

export default function Video() {
    const [videoId, setVideoId] = useState("2xsthR_9tBU");
    const handleCustomClick = (e) => {
        setVideoId(e.detail);
    };
    useEffect(() => {
        window.addEventListener('customClick', handleCustomClick);
        // 클린업
        return () => {
            window.removeEventListener('customClick', handleCustomClick);
        };
    }, []);

  return (
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
  );
}