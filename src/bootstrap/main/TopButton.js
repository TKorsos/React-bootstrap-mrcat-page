import React, { useState, useEffect } from "react";

export default function TopButton() {

    const [goToTop, setGoToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setGoToTop(true);
            }
            else {
                setGoToTop(false);
            }
        })
    }, [])

    return <section className="row">
        <article className="col-1">
            {
                goToTop && (
                    <a href="#root" className="btn btn-warning opacity-25 up-btn">
                        <i className="bi bi-arrow-up"></i>
                    </a>
                )
            }

        </article>
    </section>
}