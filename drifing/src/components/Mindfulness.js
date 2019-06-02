import React, { Component } from 'react';
/* import logo from './logo.svg';*/
import './Mindfulness.css';



export default class Mindfulness extends Component {
  render() {
    return (
      <div className="mindfulness">

        <div className="stop-box">
          <div className="stop-text">
            <h2>Reflect</h2>

            Take a moment to obeserve your body reaction and check in with what you are thinking and how you are feeling. 
            This mindfulness activty should help you understand you body better at this moment. 
            </div>
        </div>

        <div className="breathe-box">
          <div className="breathe-text">
            <h2>Breathe</h2>
            Breath in and breath out with a focus mind, without Judging your thoughts. You should do this for about 30-45 seconds. 
            Practicing mindful breathing will help you to create space between your thoughts, emotions and reactions.
            </div>
        </div>

        <div className="think-box">
          <div className="think-text">
            <h2>Image</h2>

            Image a moment of happiness that makes you feel gratful, proud or just happy. 
            This can be anythings that makes you happy it can be from your past or from you future.
            </div>
        </div>

      </div>

    );
  }
}
