import React, { useState } from 'react';

export const Home = () => {
  return (
    <>
      <main>
        <section className='section-hero'>
        <div className='container grid grid-two-cols'>
          <div className="hero-content">
            <h1>Welcome Students</h1>

            <p></p>
          </div>

          {/* hero-images  */}
          <div className="hero-image">
            <img src="/images/home.png" 
            alt="a image" 
            width="500"
            height="500"/>
          </div>
          </div>
        </section>
      </main>
    </>
  );
};

