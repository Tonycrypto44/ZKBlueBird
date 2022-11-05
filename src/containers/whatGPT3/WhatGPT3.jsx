import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is ZKBlueBird" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Let the world know who you are</h1>
      
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Anon" text="Avoid big tech intrusion." />
      <Feature title="Instant" text="As soon as your identity is verified, you get a blue check next to your twitter name" />
      <Feature title="Trusted" text="" />
    </div>
  </div>
);

export default WhatGPT3;
