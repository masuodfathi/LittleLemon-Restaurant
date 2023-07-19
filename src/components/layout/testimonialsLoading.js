import React from "react";

const testimonialsLoading = () => {
  return (
    <>
    <div className="testimonial-loading">
      <div>
        <div className="flex flex-col align-center">
          <img alt="" width="125" className="skeleton"/>
          <h4 className="center">
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
          </h4>
        </div>
        <div className="rating">
          <div className="skeleton skeleton-text"> </div>
          <div className="skeleton skeleton-text skeleton-text__body"></div>
        </div>
        <p className="comment">
            <div className="skeleton skeleton-text"></div>
        </p>
        <div>
            <div className="skeleton skeleton-text skeleton-footer"></div>
        </div>
      </div>
    </div>
    <div className="testimonial-loading">
      <div>
        <div className="flex flex-col align-center">
          <img alt="" width="125" className="skeleton"/>
          <h4 className="center">
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
          </h4>
        </div>
        <div className="rating">
          <div className="skeleton skeleton-text"> </div>
          <div className="skeleton skeleton-text skeleton-text__body"></div>
        </div>
        <p className="comment">
            <div className="skeleton skeleton-text"></div>
        </p>
        <div>
            <div className="skeleton skeleton-text skeleton-footer"></div>
        </div>
      </div>
    </div>
    <div className="testimonial-loading">
      <div>
        <div className="flex flex-col align-center">
          <img alt="" width="125" className="skeleton"/>
          <h4 className="center">
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
          </h4>
        </div>
        <div className="rating">
          <div className="skeleton skeleton-text"> </div>
          <div className="skeleton skeleton-text skeleton-text__body"></div>
        </div>
        <p className="comment">
            <div className="skeleton skeleton-text"></div>
        </p>
        <div>
            <div className="skeleton skeleton-text skeleton-footer"></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default testimonialsLoading;
