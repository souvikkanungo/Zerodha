import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3 pt-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-3 m-5 mt-0">
        <div className="col-6 p-5 pt-0">
          <h1 className="fs-4 mb-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" className="mb-3" />
          <br />
          <a href="" className="me-4">Track account opening</a>
          <a href="" className="me-4">Track segment activation</a>
          <a href="" className="me-4">Intraday margins</a>
          <a href="" className="me-4">Kite user manual</a>
          <div className="pb-5"></div> {/* Add padding below the <a> tags */}
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-3 mb-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <br />
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
