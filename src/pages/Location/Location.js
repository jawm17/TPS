import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import MapComponent from "../../components/MapComponent";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CallBtn from "../../components/CallBtn";
import laurel from "../../assets/laurel.png"
import CallBtnModal from "../../components/CallBtnModal";
import { Wave } from "../../components/WavesComp";
import "./locationStyle.css";

export default function Location(props) {
    const navigate = useNavigate();
    const { location } = useParams();
    const [locationData, setLocationData] = useState(null);

    const [name1, setName1] = useState("");
    const [email1, setEmail1] = useState("");
    const [phone1, setPhone1] = useState("");
    const [zip1, setZip1] = useState("");
    const [submitForm1, setSubmitForm1] = useState(false);
    const [mobile, setMobile] = useState(true);
    const [callModal, setCallModal] = useState(false);

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
            image: "https://austinactivekids.com/wp-content/uploads/2014/08/Krause-Springs-1-scaled.jpg",
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
            image: "https://tesseraonlaketravis.com/wp-content/uploads/2021/05/dale-honeycutt-Vqco2uwrXq8-unsplash-scaled.jpg",
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
            image: "https://aquilacommercial.com/wp-content/uploads/2017/10/Austin-Avenue-Sunset.jpg",
            description: "Description for Location 1",
        },
        {
            id: "10",
            name: "Round Rock",
            image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/526000/526376-round-rock.jpg",
            description: "Description for Location 1",
        },
        {
            id: "11",
            name: "Cedar Park",
            image: "https://aquilacommercial.com/wp-content/uploads/2021/03/Town-Center-scaled.jpg",
            description: "Description for Location 1",
        },
        {
            id: "12",
            name: "Leander",
            image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/526000/526193-leander.jpg",
            description: "Description for Location 1",
        },
        {
            id: "13",
            name: "Pflugerville",
            image: "https://austin.culturemap.com/media-library/pflugerville-texas.jpg?id=34204666&width=2000&height=1500&quality=85&coordinates=240%2C0%2C240%2C0",
            description: "Description for Location 1",
        },
        {
            id: "15",
            name: "Salado",
            image: "https://www.saladotx.gov/sites/default/files/imageattachments/discover-salado/page/2311/salado_20220418-02.jpg",
            description: "Description for Location 1",
        },
        {
            id: "16",
            name: "Wimberly",
            image: "https://traveladdicts.net/wp-content/uploads/2022/11/Blue-Hole-Regional-Park-cypress-trees.jpg.webp",
            description: "Description for Location 1",
        },
        {
            id: "17",
            name: "Liberty Hill",
            image: "https://mallachandcompany.com/wp-content/uploads/2021/09/Blog-1-of-1-Whats-It-Like-to-Live-in-Liberty-Hill-Texas-Liberty-Hill-Relocation-Guide-Tina-Mallach-AdobeStock_88330253-1.jpeg",
            description: "Description for Location 1",
        },
        {
            id: "18",
            name: "Blanco",
            image: "https://texashighways.com/wp-content/uploads/2021/06/blanco-river-from-above.jpg",
            description: "Description for Location 1",
        },
        {
            id: "19",
            name: "Buda",
            image: "https://aquilacommercial.com/wp-content/uploads/2021/02/Buda-Water-Tower-featured-2000x850.jpg",
            description: "Description for Location 1",
        },
        {
            id: "20",
            name: "Kyle",
            image: "https://austin.com/wp-content/uploads/2021/05/IMG_0036-e1620839747774.jpg",
            description: "Description for Location 1",
        },
        {
            id: "21",
            name: "New Braunfels",
            image: "https://www.newbraunfelsescapes.com/wp-content/uploads/2018/12/04_NewBraunfelsEscape_004_mls-1.jpg",
            description: "Description for Location 1",
        },
        {
            id: "22",
            name: "Bastrop",
            image: "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/bastroptx/Downtown_Bastrop_028e4da0-2541-43c1-9d4f-490baa75136f.jpg",
            description: "Description for Location 1",
        },
        {
            id: "23",
            name: "Elgin",
            image: "https://www.elgintexas.gov/ImageRepository/Document?documentID=4157",
            description: "Description for Location 1",
        },
        {
            id: "24",
            name: "Manor",
            image: "https://images.austinmonthly.com/wp-content/uploads/2020/06/20200509-DSC01374.jpg",
            description: "Description for Location 1",
        },
    ];


    useEffect(() => {
        // Find the location object based on the location parameter
        const selectedLocation = locations.find(loc => loc.id === location);
        setLocationData(selectedLocation);
    }, [location]);

    useEffect(() => {

        if ((/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)))) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }, []);

    return (
        <div>
            {callModal ? <CallBtnModal close={() => setCallModal(false)} /> : null}
            <Header page={"location"}/>
            <CallBtn />

            <div id="locationHeroOuter">
                <div id="locationHero">
                    <img alt={locationData?.name + " pool"} src={locationData?.image} id="locationHeroImg"></img>
                    <div id="buildsHeroFlex">
                        <div id="buildsHeroLeft">
                            <div id="buildsHeroLeftInner">
                                <div id="locationHeroTitle">
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
            <Wave fill="#0693e3" />
                <Wave idName="bottomWave" fill="var(--blueMain)" />
                <div id="locationAreaInner">
                    <div id="LocationLeft">
                        <div id="locationTitle">
                            {locationData?.name} services
                        </div>
                        <div className="locationServiceItem" onClick={() => navigate("/builds")}>
                            <svg id="serviceIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
                            </svg>
                            <div className="locationItemText">
                                <div className="locationItemTitle">
                                    New Pool Construction
                                </div>
                                <div className="locationItemDescription">
                                    Dive into luxury with our custom new pool construction services, creating a backyard oasis that combines innovation and style.
                                </div>
                            </div>
                            <svg id="rightLocation" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                        <div className="locationServiceItem" onClick={() => navigate("/renovation")}>

                            <svg id="serviceIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288" />
                            </svg>

                            <div className="locationItemText">
                                <div className="locationItemTitle">
                                    Pool Renovation
                                </div>
                                <div className="locationItemDescription">
                                    Give your pool a facelift! Our renovation services breathe new life into existing pools, enhancing both functionality and aesthetics.
                                </div>
                            </div>
                            <svg id="rightLocation" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                        <div className="locationServiceItem" onClick={() => navigate("/services")}>

                            <svg id="serviceIcon" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>

                            <div className="locationItemText">
                                <div className="locationItemTitle">
                                    Pool Maintenance
                                </div>
                                <div className="locationItemDescription">
                                    Relax and enjoy your pool while we handle the upkeep. Our maintenance services ensure a crystal-clear and hassle-free swimming experience.
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
                <div id="locationFlag" onClick={mobile ? () => window.location.href = `tel:${5128207434}` : () => setCallModal(true)}>
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