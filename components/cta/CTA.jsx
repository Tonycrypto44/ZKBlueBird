import React from 'react';
import './cta.css';
import { WorldIDWidget } from "@worldcoin/id";

const CTA = () => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
    
      <h3>Verify Today. Get Your Blue Check </h3>
    </div>
    <div className="gpt3__cta-btn">
    <WorldIDWidget
  actionId="wid_staging_16ea7f1c69412c9df2f2b0c23a7b0184wid_staging_16ea7f1c69412c9df2f2b0c23a7b0184" // obtain this from developer.worldcoin.org
  signal="my_signal"
  enableTelemetry
  onSuccess={(verificationResponse) => console.log(verificationResponse)} // you'll actually want to pass the proof to the API or your smart contract
  onError={(error) => console.error(error)}
/>
    </div>
  </div>
);

export default CTA;
