'use client';

import React, {useState} from 'react';
import {TgAdsContainer} from 'miniads';
import {useTelegram} from "@/app/hooks/useTelegram/useTelegram";

export default function Home() {
  const { webApp } = useTelegram()
  const [activeAdType, setActiveAdType] = useState<string | null>(null)
  const handleBtnClick = (type: string) => {
    setActiveAdType(type)
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
                accessToken={"25f3bf8b-cea4-484f-8701-6f64d162de79"}
                tgInitData={''}
                type={activeAdType}
            />
        )}

        {activeAdType === 'full_screen' && (
            <TgAdsContainer
                className={'TgAdsContainer'}
                accessToken={"25f3bf8b-cea4-484f-8701-6f64d162de79"}
                tgInitData={''}
                type={activeAdType}
            />
        )}
      </div>);
}
