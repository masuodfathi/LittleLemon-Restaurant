import React, { useEffect, useState } from "react";
import { Stars } from "../layout/Stars";
import Loading from "../layout/testimonialsLoading";

export const Testimonials = ({ title = "Testimonial" }) => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${3}`)
      .then((response) => response.json())
      .then((json) => json)
      .then((j) => {
        console.log(j);
        setUsers(j.results);
      })
      .catch((err) => {
        console.log("Fetch is failed");
        console.log(err);
      });
  }, []);

  return (
    <>
      <section className="testimonial">
        <h2>{title}</h2>
        <section className="testimonial-section">
          {users ? (
            users.map((person) => {
              return (
                <>
                
                  <article key={person.name.first}>
                    <div className="flex flex-col align-center testimonial-title">
                      <img src={person.picture.large} alt="" width="125" />
                      <h4 className="center">
                        {person.name.first} {person.name.last}
                      </h4>
                    </div>
                    <div className="rating">
                      <span>Rating: </span>
                      <div className="stars">
                        <Stars count={Math.floor(Math.random() * 5) + 1} />
                      </div>
                    </div>
                    <p className="comment">
                      lobortis eros sit amet, feugiat eros. Aliquam et sem at
                      ante sollicitudin varius aliquam ut nunc. Nam tincidunt,
                      tellus ut vehicula iaculis, elit nunc sagittis nulla, ut
                      volutpat eros nisi ut mi
                    </p>
                  </article>
                </>
              );
            })
          ) : (
            <Loading />
          )}
          {/* <article>
            <div className="flex flex-col align-center testimonial-title">
              <img src={P1} alt="" width="125" />
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
              <img src={P2} alt="" width="125" />
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
              <img src={P3} alt="" width="125" />
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
          </article> */}
        </section>
      </section>
    </>
  );
};
