import React from 'react'
import Nav from './components/Nav'
import Places from './components/Places'
import data from './data'
console.log(data)



function App() {
  const placesTraveled = data.map(data => {
    return (
    <Places
    Key = {data.id}
    data = {data}
    // description = {data.description}
    // endData = {data.endDate}
    // googleMaps = {data.googleMapsUrl}
    // img = {data.imageUrl}
    // location = {data.location}
    // startData = {data.startDate}
    // title = {data.title}
    /> 
    )
  })
  return (
    <div>
      <Nav />
      {placesTraveled}
    </div>
  );
}

export default App;
