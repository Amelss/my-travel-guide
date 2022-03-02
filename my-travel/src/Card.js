import React from "react";

export default function Card({img, location, googleMapsUrl, title, startDate, endDate, description}) {
    return (
        <>
            <div className="card-tile">
                <img src={img} alt="destination" className="loc-pic" />

                <div className="desc">

                    <div className="top-desc">
                    <img src="./placeholder.png" alt="pin" className="pin" />
                    <h4 className="location">{location}</h4>
                    <a href={googleMapsUrl}>View on Google Maps</a>
                    </div>

                    <div className="bottom-desc">
                    <h1 className="title">{title}</h1>
                    <p className="dates">{startDate} - {endDate}</p>
                    <p className="info">{description }</p>
                    </div>

                </div>

            </div>
            <hr />


        </>
    )
}