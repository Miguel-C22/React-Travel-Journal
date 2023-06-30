import React from 'react'




function Places(props){
    console.log(props.data)
    return(
    <div className='placeContainer'>
            <img className='placeImg' src={props.data.imageUrl}/>
        <div className='placeInfo'>
            <div className='location'>
                <div>
                <img className='locationPing' src='./images/location.png'/>
                <p>{props.data.location}</p>
                </div>
                <a href={props.data.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1>{props.data.title}</h1>
            <div className='startDataEndData'>
                <h3>{props.data.startDate}</h3>
                <p>-</p>
                <h3>{props.data.endDate}</h3>
            </div>
            <p className='description'>{props.data.description}</p>
        </div>
    </div>
    )
}

export default Places