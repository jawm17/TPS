import React, { useEffect, useState, useRef } from "react";
import SubmitFormModal from "./SubmitFormModal";
import axios from "axios";
import emailjs from '@emailjs/browser';
import "./styles/contactFormStyle.css";

export default function ContactForm(props) {
    const form = useRef();
    const [formModal, setFormModal] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        // Validate form inputs
        const inputs = form.current.getElementsByTagName("input");
        for (const input of inputs) {
            if (!input.value) {
                console.log("Please fill out all fields");
                return;
            }
        }

        setFormModal(true);
        emailjs.sendForm('service_9xwmw24', 'template_wyyv3b4', form.current, 'ZDDvovxuOQXk34MJ0')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            {formModal ? <SubmitFormModal close={() => setFormModal(false)} /> : null}
            <form id="formInner" ref={form}>
                <div id="bookNowTitle">
                    Contact us
                </div>
                <div className="homeFormFlex">
                    <input className="homeFormInput" placeholder="Name" name="from_name"></input>
                </div>
                <div id="homeFormDoubleInput">
                    <div className="homeFormFlex">
                        <input className="homeFormInput" placeholder="Email" name="from_email"></input>
                    </div>
                    <div className="homeFormFlex">
                        <input className="homeFormInput" placeholder="Phone" name="from_phone"></input>
                    </div>
                </div>
                <div className="homeFormFlex" id="bottomInput">
                    <textarea className="homeFormInput" id="homeFormInputLarge" placeholder="Message" name="message"></textarea>
                </div>
                <div id="submitFormHome" onClick={(e) => sendEmail(e)}>
                    Submit
                    <svg id="bookNowIcon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                    </svg>
                </div>
            </form>
        </>
    );
}