import React from 'react';

import ai from '../../assets/ai.png';
import './header.css';
import { WorldIDWidget } from "@worldcoin/id";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Blue Check the world</h1>
      <p>Prove your identity while retaining anonimity. Add a blue check to your twitter account with the click of a button</p>

      <div className="gpt3__header-content__input">
        
        <WorldIDWidget
  actionId="wid_staging_16ea7f1c69412c9df2f2b0c23a7b0184wid_staging_16ea7f1c69412c9df2f2b0c23a7b0184" // obtain this from developer.worldcoin.org
  signal="my_signal"
  enableTelemetry
  onSuccess={(verificationResponse) => console.log(verificationResponse)} // you'll actually want to pass the proof to the API or your smart contract
  onError={(error) => console.error(error)}
/>
      </div>

      
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
