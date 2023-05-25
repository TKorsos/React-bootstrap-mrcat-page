import React from "react";
import portrait from "../img/cat-portrait.jpg";

export default function Prologue(props) {
  return <section className="row p-5" id="prologue">
    <article className="col-12 col-md-4 mb-5 mb-md-0">
      <div className="card">
        <img src={portrait} alt="cat-portrait" className="card-img-top" />
        <div className="container-fluid">
          <div className="row text-bg-dark rounded-bottom-2 text-center">
            <div className="col">
              <div className="card-footer p-3">
                <span className="fw-bold">Mr. Cat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
    <article className="col-12 col-md-8 d-flex flex-column justify-content-between gap-3 gap-md-5 ps-md-5">
      <section className="row">
        <article className="col">
          <h1>Heading 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio obcaecati odio odit praesentium ullam magnam nulla! Voluptatem mollitia officia doloribus. Magni quod porro placeat sit?
          </p>
        </article>
      </section>
      <section className="row">
        <article className="col">
          <h2>Heading 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis numquam, provident dolorem corrupti nisi itaque magnam quasi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nihil, consequatur impedit neque excepturi natus praesentium, eum omnis eaque ab temporibus. Odio commodi nisi facilis?
          </p>
        </article>
      </section>
      <section className="row">
        <article className="col">
          <h2>Heading 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim natus alias, id eligendi pariatur autem aliquam minus, veritatis hic, explicabo aspernatur ex. Tempora esse quibusdam sapiente id minima laudantium porro.
          </p>
        </article>
      </section>
    </article>
  </section>
}