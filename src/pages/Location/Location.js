import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import MapComponent from "../../components/MapComponent";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CallBtn from "../../components/CallBtn";
import laurel from "../../assets/laurel.png"
import "./locationStyle.css";

export default function Location(props) {
    const { location } = useParams();
    const [locationData, setLocationData] = useState(null);

    const [name1, setName1] = useState("");
    const [email1, setEmail1] = useState("");
    const [phone1, setPhone1] = useState("");
    const [zip1, setZip1] = useState("");
    const [submitForm1, setSubmitForm1] = useState(false);

    const locations = [
        {
            id: "1",
            name: "Marble Falls",
            image: "https://austin.com/wp-content/uploads/2021/04/2B4A287C-D730-453F-B589-DC8DB5620D1F-e1619621651463.jpg",
            description: "Description for Location 1",
        },
        {
            id: "2",
            name: "Westlake",
            image: "https://res.cloudinary.com/luxuryp/images/w_960,c_limit,f_auto,q_auto/cpaduthsinukk6fuszue/lake-austen",
            description: "Description for Location 1",
        },
        {
            id: "3",
            name: "The Hills",
            image: "https://www.invitedclubs.com/globalassets/the-hills-country-club/_images/photoshelter-2023/the-hills_golf_hole_18_dji_0090_2023_1920_1200.jpg?format=webp",
            description: "Description for Location 1",
        },
        {
            id: "4",
            name: "Spicewood",
            image: "https://www.masterpoolsofaustin.com/wp-content/uploads/2018/04/home-hero-1312x633.jpg",
            description: "Description for Location 1",
        },
        {
            id: "5",
            name: "Dripping Springs",
            image: "https://www.southernliving.com/thmb/CVgMeth6fgwmi0KAgcjwFR-r2Ek=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-717173753-2000-e5b3c584049042e9b9fe44fce9deb0bd.jpg",
            description: "Description for Location 1",
        },
        {
            id: "6",
            name: "Lago Vista",
            image: "https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1194i215%2Ffgn15rtv6xn3mtt3efn8a3eb60i215&option=N&h=472&permitphotoenlargement=false",
            description: "Description for Location 1",
        },
        {
            id: "7",
            name: "Lakeway",
            image: "https://content.r9cdn.net/rimg/dimg/1b/4c/7e42c23a-lm-9415-1562274cd14.jpg?crop=true&width=1366&height=768&xhint=1040&yhint=1235",
            description: "Description for Location 1",
        },
        {
            id: "8",
            name: "Austin",
            image: "https://content.r9cdn.net/rimg/dimg/1b/4c/7e42c23a-lm-9415-1562274cd14.jpg?crop=true&width=1366&height=768&xhint=1040&yhint=1235",
            description: "Description for Location 1",
        },
        {
            id: "9",
            name: "Georgetown",
            image: "https://content.r9cdn.net/rimg/dimg/1b/4c/7e42c23a-lm-9415-1562274cd14.jpg?crop=true&width=1366&height=768&xhint=1040&yhint=1235",
            description: "Description for Location 1",
        },
        {
            id: "10",
            name: "Round Rock",
            image: "https://content.r9cdn.net/rimg/dimg/1b/4c/7e42c23a-lm-9415-1562274cd14.jpg?crop=true&width=1366&height=768&xhint=1040&yhint=1235",
            description: "Description for Location 1",
        },
        {
            id: "11",
            name: "Cedar Park",
            image: "https://content.r9cdn.net/rimg/dimg/1b/4c/7e42c23a-lm-9415-1562274cd14.jpg?crop=true&width=1366&height=768&xhint=1040&yhint=1235",
            description: "Description for Location 1",
        },
        {
            id: "12",
            name: "Leander",
            image: "https://content.r9cdn.net/rimg/dimg/1b/4c/7e42c23a-lm-9415-1562274cd14.jpg?crop=true&width=1366&height=768&xhint=1040&yhint=1235",
            description: "Description for Location 1",
        },
        {
            id: "13",
            name: "Pflugerville",
            image: "https://content.r9cdn.net/rimg/dimg/1b/4c/7e42c23a-lm-9415-1562274cd14.jpg?crop=true&width=1366&height=768&xhint=1040&yhint=1235",
            description: "Description for Location 1",
        },
        {
            id: "15",
            name: "Salado",
            image: "https://content.r9cdn.net/rimg/dimg/1b/4c/7e42c23a-lm-9415-1562274cd14.jpg?crop=true&width=1366&height=768&xhint=1040&yhint=1235",
            description: "Description for Location 1",
        },
        {
            id: "16",
            name: "Wimberly",
            image: "https://content.r9cdn.net/rimg/dimg/1b/4c/7e42c23a-lm-9415-1562274cd14.jpg?crop=true&width=1366&height=768&xhint=1040&yhint=1235",
            description: "Description for Location 1",
        },
        {
            id: "17",
            name: "Liberty Hill",
            image: "https://content.r9cdn.net/rimg/dimg/1b/4c/7e42c23a-lm-9415-1562274cd14.jpg?crop=true&width=1366&height=768&xhint=1040&yhint=1235",
            description: "Description for Location 1",
        },
        {
            id: "18",
            name: "Blanco",
            image: "https://content.r9cdn.net/rimg/dimg/1b/4c/7e42c23a-lm-9415-1562274cd14.jpg?crop=true&width=1366&height=768&xhint=1040&yhint=1235",
            description: "Description for Location 1",
        },
        {
            id: "19",
            name: "Buda",
            image: "https://content.r9cdn.net/rimg/dimg/1b/4c/7e42c23a-lm-9415-1562274cd14.jpg?crop=true&width=1366&height=768&xhint=1040&yhint=1235",
            description: "Description for Location 1",
        },
        {
            id: "20",
            name: "Kyle",
            image: "https://content.r9cdn.net/rimg/dimg/1b/4c/7e42c23a-lm-9415-1562274cd14.jpg?crop=true&width=1366&height=768&xhint=1040&yhint=1235",
            description: "Description for Location 1",
        },
        {
            id: "21",
            name: "New Braunfels",
            image: "https://content.r9cdn.net/rimg/dimg/1b/4c/7e42c23a-lm-9415-1562274cd14.jpg?crop=true&width=1366&height=768&xhint=1040&yhint=1235",
            description: "Description for Location 1",
        },
        {
            id: "22",
            name: "Bastrop",
            image: "https://content.r9cdn.net/rimg/dimg/1b/4c/7e42c23a-lm-9415-1562274cd14.jpg?crop=true&width=1366&height=768&xhint=1040&yhint=1235",
            description: "Description for Location 1",
        },
        {
            id: "23",
            name: "Elgin",
            image: "https://content.r9cdn.net/rimg/dimg/1b/4c/7e42c23a-lm-9415-1562274cd14.jpg?crop=true&width=1366&height=768&xhint=1040&yhint=1235",
            description: "Description for Location 1",
        },
        {
            id: "24",
            name: "Manor",
            image: "https://content.r9cdn.net/rimg/dimg/1b/4c/7e42c23a-lm-9415-1562274cd14.jpg?crop=true&width=1366&height=768&xhint=1040&yhint=1235",
            description: "Description for Location 1",
        },
    ];


    useEffect(() => {
        // Find the location object based on the location parameter
        const selectedLocation = locations.find(loc => loc.id === location);
        setLocationData(selectedLocation);
    }, [location]);


    return (
        <div>
            <Header />
            <CallBtn />

            <div id="locationHeroOuter">
                <div id="locationHero">
                    <img alt={locationData?.name + " pool"} src={locationData?.image} id="locationHeroImg"></img>
                    <div id="buildsHeroFlex">
                        <div id="buildsHeroLeft">
                            <div id="buildsHeroLeftInner">
                                <div id="buildsHeroTitle">
                                    {locationData?.name}
                                </div>
                                <div id="buildsHeroSub">
                                    Swimming Pool Builders in {locationData?.name}
                                </div>
                             
                            </div>
                        </div>
                    </div>
             
                </div>
            </div>


            <div id="locationArea">

                <div id="locationAreaInner">

                    <div id="LocationLeft">
                        <div id="locationTitle">
                            {locationData?.name} services
                        </div>
                        <div className="locationServiceItem">
                            <svg id="serviceIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
                            </svg>
                            <div className="locationItemText">
                                <div className="locationItemTitle">
                                    New Pool Construction
                                </div>
                                <div className="locationItemDescription">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                            </div>
                            <svg id="rightLocation" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                        <div className="locationServiceItem">
                            <svg id="serviceIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
                            </svg>
                            <div className="locationItemText">
                                <div className="locationItemTitle">
                                    Pool Renovation
                                </div>
                                <div className="locationItemDescription">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                            </div>
                            <svg id="rightLocation" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                        <div className="locationServiceItem">
                            <svg id="serviceIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
                            </svg>
                            <div className="locationItemText">
                                <div className="locationItemTitle">
                                    Pool Maintenance
                                </div>
                                <div className="locationItemDescription">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                            </div>
                            <svg id="rightLocation" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                    <div id="locationRight">
                        <div id="locationTitle2">
                            All Locations
                        </div>
                        <MapComponent />
                        {/* <div id="servicesForm2">
                            <div id="servicesFormTitle">
                                Request A Callback
                            </div>
                            <div className="serviceFormInputFlex">
                                <input placeholder="Name" className="serviceFormInput"></input>
                            </div>
                            <div className="serviceFormInputFlex">
                                <input placeholder="Email" className="serviceFormInput"></input>
                            </div>
                            <div className="serviceFormInputFlex">
                                <input placeholder="Phone" className="serviceFormInput"></input>
                            </div>
                            <div id="serviceFormSubmit">
                                submit
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div id="locationFlagOuter">
                <div id="locationFlag">
                    <svg id="flagIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                    <div id="flagTextArea">
                        <div id="flagTitle">
                            Request a Callback
                        </div>
                        <div id="flagDescription">
                            share your information and our team will get back to you ASAP
                        </div>
                    </div>
                    <div id="flagBtn">
                        BOOK NOW
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}