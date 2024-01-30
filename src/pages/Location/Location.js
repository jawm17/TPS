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
            image: "https://media.cntraveler.com/photos/5e5435f71fac0d0008a05a44/16:9/w_2560,c_limit/LadyBirdRiver-Austin-2020-GettyImages-470050710.jpg",
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
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288" />
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
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
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