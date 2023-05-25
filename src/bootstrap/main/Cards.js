import React from "react";
import siraly from "../img/siraly.jpg";
import pinty from "../img/pinty.jpg";
import szajko from "../img/szajko.jpg";

export default function Cards(props) {
    return <section className="row row-cols-1 row-cols-md-2 row-cols-xl-3 p-5" id="cards">
        <article className="col mb-5 mb-xl-0">
            <div className="card h-100">
                <img src={siraly} className="card-img-top" alt="siraly" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nostrum earum harum necessitatibus labore dicta minus eligendi.</p>
                    <h6 className="card-subtitle">
                        Card Subtitle
                    </h6>
                    <strong>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolor libero fugiat molestiae voluptates fuga optio totam velit animi.
                    </strong>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quidem explicabo eum hic modi quam, placeat architecto incidunt qui officiis libero et quibusdam velit est debitis dolores nesciunt cum. Nesciunt!
                    </p>
                </div>
                <div className="card-footer text-sm-center d-grid d-sm-flex justify-content-around gap-2">
                    <a href="#" className="card-link mx-auto mx-sm-0">Link example 1</a>
                    <a href="#" className="card-link mx-auto mx-sm-0">Link example 2</a>
                </div>
            </div>
        </article>
        <article className="col mb-5 mb-xl-0">
            <div className="card h-100">
                <img src={pinty} className="card-img-top" alt="siraly" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque beatae rerum officiis aspernatur animi laborum, ipsam a officia distinctio hic tempore reiciendis magni ipsum aperiam neque nisi eos ad quisquam?</p>
                    <hr className="divider" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et rerum voluptates adipisci, culpa hic dolorem voluptate consectetur qui quis nulla possimus animi earum numquam dolores ipsum at? Atque voluptate quasi exercitationem tempora culpa veritatis animi mollitia molestias. Blanditiis, illo dolorum.
                    </p>
                </div>
                <div className="card-footer text-sm-center d-grid d-sm-flex justify-content-around gap-2">
                    <a href="#" className="card-link mx-auto mx-sm-0">Link example 1</a>
                    <a href="#" className="card-link mx-auto mx-sm-0">Link example 2</a>
                </div>
            </div>
        </article>
        <article className="col">
            <div className="card h-100">
                <img src={szajko} className="card-img-top" alt="siraly" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis assumenda ipsum at aliquid exercitationem officiis adipisci consequuntur iusto, officia laudantium.</p>
                </div>
                <div className="card-footer text-sm-center d-grid d-sm-flex justify-content-around gap-2">
                    <a href="#" className="card-link mx-auto mx-sm-0">Link example 1</a>
                    <a href="#" className="card-link mx-auto mx-sm-0">Link example 2</a>
                </div>
            </div>
        </article>
    </section>
}