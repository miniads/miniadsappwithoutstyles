'use client';

import React, {useState} from 'react';
import {TgAdsContainer} from 'miniadstest';
import {useTelegram} from "@/app/hooks/useTelegram/useTelegram";

export default function Home() {
  const { webApp } = useTelegram()
  const [activeAdType, setActiveAdType] = useState<string | null>(null)
  const handleBtnClick = (type: string) => {
    setActiveAdType(type)
  }

  const onLoadStart = () => {
    console.log('Load Started')
  }
  const handleAdError = (e: any) => {
    console.log('Error code', e.target.error.code)
  }
  const onLoadEnd = () => {
    console.log('Load Ended')
  }
  const onClose = () => {
    console.log("Closed");
  }
  const onClick = () => {
    console.log("Clicked")
  }
  const onPlayStart = () => {
    console.log("Video started")
  }
  const onPlayEnd = () => {
    console.log("Video ended")
    setActiveAdType(null)
  }

    return (
      <div>
        {activeAdType !== 'full_screen' && (
            <div className={'buttonwraper'}>
              <button onClick={() => handleBtnClick('banner')}>Banner</button>
              <button onClick={() => handleBtnClick('full_screen')}>
                Full Screen Size
              </button>
            </div>
        )}
        {activeAdType === 'banner' && (
            <TgAdsContainer
                className={'TgAdsContainer'}
                accessToken={"8703441f-3369-4798-9bc4-a6e837d1611b"}
                tgInitData={''}
                type={activeAdType}
            />
        )}

        {activeAdType === 'full_screen' && (
            <TgAdsContainer
                className={'TgAdsContainer'}
                accessToken={"8703441f-3369-4798-9bc4-a6e837d1611b"}
                tgInitData={''}
                onClick={onClick}
                onClose={onClose}
                onError={handleAdError}
                onLoadEnd={onLoadEnd}
                onLoadStart={onLoadStart}
                onPlayEnd={onPlayEnd}
                onPlayStart={onPlayStart}
                type={activeAdType}
            />
        )}
      </div>);
}
