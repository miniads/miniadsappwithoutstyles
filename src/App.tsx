import React, {useState} from 'react';
import {TgAdsContainer} from 'miniadstest';
import logo from './logo.svg';
import './App.css';
function App() {
    const [activeAdType, setActiveAdType] = useState<string | null>(null)
    const handleBtnClick = (type: string) => {
        setActiveAdType(type)
    }
  return (
    <div>
        {activeAdType !== 'full_screen' && (
            <div>
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
    </div>
  );
}

export default App;
