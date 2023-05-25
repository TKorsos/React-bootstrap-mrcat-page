import React from "react";

export default function FormMessage(props) {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return <section className="row p-5" id="form">
        <article className="col-12 col-lg-6 col-md-7 mb-5 mb-md-0">
            <fieldset>
                <legend>Message</legend>
                <form className="text-black d-flex flex-column gap-3" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="bi bi-person"></i>
                        </span>
                        <div className="form-floating">
                            <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                            <label htmlFor="name">Name</label>
                        </div>
                    </div>
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="bi bi-envelope-at"></i>
                        </span>
                        <div className="form-floating">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                        <label htmlFor="subject">Subject</label>
                    </div>
                    <div className="mb-4">
                        <textarea className="form-control" name="message" id="message" rows="10" placeholder="Message"></textarea>
                    </div>
                    <div className="d-flex flex-column gap-3">
                        <input type="reset" className="btn btn-secondary" value="Reset" />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </fieldset>
        </article>
        <article className="col-12 col-lg-6 col-md-5 d-flex flex-column justify-content-between ps-md-5">
            <div className="mb-3">
                <h3>Heading 3</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, pariatur doloremque voluptate animi repudiandae magni dolorum quas totam ipsam omnis reprehenderit earum corrupti, iste ut cum itaque explicabo quisquam architecto.
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, ratione doloremque consequatur nemo vero perspiciatis. Ipsum perferendis enim rem iusto consequuntur nobis nisi et magnam eveniet odio beatae sapiente culpa dolore temporibus voluptatum amet praesentium asperiores ipsam distinctio, provident doloribus. Earum, facere.
                </p>
            </div>
            <div className="mb-3 d-flex justify-content-center">
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#subscribe">
                    Subscribe
                </button>
            </div>
            <div className="modal fade" tabIndex="-1" id="subscribe">
                <div className="modal-dialog">
                    <div className="modal-content text-bg-primary">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Subscribe?
                            </h5>
                            <button type="button" className="btn-close text-bg-danger" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cum quam magnam repellendus impedit inventore deserunt, esse culpa veritatis nulla dicta pariatur ratione, omnis veniam dolore similique incidunt quisquam quasi?
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-success">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </section>
}