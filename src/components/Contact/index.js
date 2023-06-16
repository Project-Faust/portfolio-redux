import React, { useState } from "react";

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState("");

    function validateEmail(email) {
        const emailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(String(email).toLowerCase());
    };

    function handleChange(event) {
        console.log('click')
        if (!event.target.value.length) {
            setErrorMessage(`${event.target.name} is required.`);
        } else {
            setErrorMessage("");
        }
        if (!errorMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value });
        }
    };

    function handleSubmit(event) {
        event.preventDefault();

        const isValidEmail = validateEmail(email);

        if (!isValidEmail) {
            setErrorMessage("Invalid email.");
        } else {
            setFormState({
                name: "",
                email: "",
                message: ""
            });
            setErrorMessage("");
        }
    };

    return (
        <section
            className="row m-3">
            <div id="contactContainer" className="col-md-6 mx-auto">
                <h1 className="d-flex justify-content-center"
                >Contact Me</h1>
                <form
                    className="container-fluid card m-3">
                    <div className="m-3">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="Name"
                            defaultValue={name}
                            onBlur={handleChange}
                            placeholder="Enter Your Name"
                            className="form-control"
                        />
                    </div>
                    <div className="m-3">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="Email"
                            defaultValue={email}
                            onBlur={handleChange}
                            placeholder="Enter Your Email"
                            className="form-control"
                        />
                    </div>
                    <div className="m-3">
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="Message"
                            rows="5"
                            defaultValue={message}
                            onBlur={handleChange}
                            placeholder="Enter Your Message"
                            className="form-control"
                        />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="btn btn-dark m-3"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}