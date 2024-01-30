import React, { useEffect, useState } from "react";
import "./styles/contactFormStyle.css";

export default function ContactForm(props) {
    const [submitForm2, setSubmitForm2] = useState(false);
    const [name2, setName2] = useState("");
    const [email2, setEmail2] = useState("");
    const [phone2, setPhone2] = useState("");
    const [message2, setMessage2] = useState("");
    const [formModal, setFormModal] = useState(false);

    useEffect(() => {
        if (submitForm2) {
            setName2("");
            setEmail2("");
            setPhone2("");
            setMessage2("");
            setFormModal(true)
            setTimeout(() => {
                setSubmitForm2(false);
            }, 8000);
        }
    }, [submitForm2]);
    return (
        <>
                <div id="formInner">
                    <div id="bookNowTitle">
                        Contact us
                    </div>
                    <div className="homeFormFlex">
                        <input className="homeFormInput" placeholder="Name" value={name2} onChange={(e) => setName2(e.target.value)}></input>
                    </div>
                    <div id="homeFormDoubleInput">
                        <div className="homeFormFlex">
                            <input className="homeFormInput" placeholder="Email" value={email2} onChange={(e) => setEmail2(e.target.value)}></input>
                        </div>
                        <div className="homeFormFlex">
                            <input className="homeFormInput" placeholder="Phone" value={phone2} onChange={(e) => setPhone2(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="homeFormFlex" id="bottomInput">
                        <input className="homeFormInput" placeholder="Message" value={message2} onChange={(e) => setMessage2(e.target.value)}></input>
                    </div>
                    <div id="submitFormHome" onClick={name2 && email2 && phone2 && message2 ? () => setSubmitForm2(true) : null}>
                        Submit
                        <svg id="bookNowIcon" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
        </>
    );
}