import React from 'react'
import ButtonPrimary from '../button/ButtonPrimary'
import ButtonLight from '../button/ButtonLight'
import { FaStar } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { BsWifi } from "react-icons/bs";

const Card = () => {


    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="room-item shadow rounded overflow-hidden">
                <div className="position-relative">
                    <img className="img-fluid" src="src/assets/img/room-1.jpg" alt="" />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                </div>
                <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                        <h5 className="mb-0">Junior Suite</h5>
                        <div className="ps-2">
                            <small className="text-primary"> <FaStar /> </small>
                            <small className="text-primary"> <FaStar /> </small>
                            <small className="text-primary"> <FaStar /> </small>
                            <small className="text-primary"> <FaStar /> </small>
                            <small className="text-primary"> <FaStar /> </small>
                        </div>
                    </div>
                    <div className="d-flex mb-3">
                        <small className="border-end me-3 pe-3"><i className="text-primary me-2"><FaBed /></i>3 Bed</small>
                        <small className="border-end me-3 pe-3"><i className="text-primary me-2"><FaBath /></i>2 Bath</small>
                        <small><i className=" text-primary me-2"><BsWifi /></i>Wifi</small>
                    </div>
                    <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                    <div className="d-flex justify-content-between">
                        <ButtonPrimary BtnTitle="Booking" btnLink="/booking" btnStyle={{fontSize: "13px", padding:"7px 15px"}}/>
                        <ButtonLight BtnLightTitle="View Detail"  btnLightStyle={{fontSize: "13px", padding:"7px 15px", backgrountColor:"red"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
