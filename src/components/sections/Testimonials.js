import React from "react";
import P1 from "../../assets/p1.jpg";
import P2 from "../../assets/p2.jpg";
import P3 from "../../assets/p3.jpg";

export const Testimonials = ({ title = "Testimonial" }) => {
  return (
    <>
      <section className="testimonial">
        <h2>{title}</h2>
        <section className="testimonial-section">
          <article>
            <div className="flex flex-col align-center testimonial-title">
              <img src={P1} alt="" width="125"/>
              <h4 className="center">Name</h4>
            </div>
            <div className="rating">
              <span>Rating: </span>
              <div className="stars">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#f4ce14"
                  classNames="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#f4ce14"
                  classNames="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#f4ce14"
                  classNames="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#f4ce14"
                  classNames="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#f4ce14"
                  classNames="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                </svg>
              </span>
              </div>
              
            </div>
            <p className="comment">
              lobortis eros sit amet, feugiat eros. Aliquam et sem at ante
              sollicitudin varius aliquam ut nunc. Nam tincidunt, tellus ut
              vehicula iaculis, elit nunc sagittis nulla, ut volutpat eros nisi
              ut mi
            </p>
          </article>
          <article>
            <div className="flex flex-col align-center testimonial-title">
              <img src={P2} alt="" width="125"/>
              <h4 className="center">Name</h4>
            </div>
            <div className="rating">
              <span>Rating: </span>
              <div className="stars">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#f4ce14"
                  classNames="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#f4ce14"
                  classNames="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#f4ce14"
                  classNames="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#f4ce14"
                  classNames="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#f4ce14"
                  classNames="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                </svg>
              </span>
              </div>
              
            </div>
            <p className="comment">
              lobortis eros sit amet, feugiat eros. Aliquam et sem at ante
              sollicitudin varius aliquam ut nunc. Nam tincidunt, tellus ut
              vehicula iaculis, elit nunc sagittis nulla, ut volutpat eros nisi
              ut mi
            </p>
          </article>
          <article>
            <div className="flex flex-col align-center testimonial-title">
              <img src={P3} alt="" width="125"/>
              <h4 className="center">Name</h4>
            </div>
            <div className="rating">
              <span>Rating: </span>
              <div className="stars">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#f4ce14"
                  classNames="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#f4ce14"
                  classNames="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#f4ce14"
                  classNames="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#f4ce14"
                  classNames="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#f4ce14"
                  classNames="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                </svg>
              </span>
              </div>
              
            </div>
            <p className="comment">
              lobortis eros sit amet, feugiat eros. Aliquam et sem at ante
              sollicitudin varius aliquam ut nunc. Nam tincidunt, tellus ut
              vehicula iaculis, elit nunc sagittis nulla, ut volutpat eros nisi
              ut mi
            </p>
          </article>
          
        </section>
      </section>
    </>
  );
};
