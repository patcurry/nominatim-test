const osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: `&copy; <a href="http://www.openstreetmap.org/copyright">
  OpenStreetMap</a>`,
  minZoom: 2,
  maxZoom: 19
})

const myMap = L.map('mapid', {
  center: {lat: 0, lng: 8.8460},
  zoom: 2,
  layers: osm,
  scrollWheelZoom: false
})

L.Mapzen.apiKey = 'PUT KEY HERE'

var geocoder = L.Mapzen.geocoder({
  position: 'topright'
})
geocoder.addTo(myMap)

/*

const placeInput = document.getElementById('place_input')
const placeButton = document.getElementById('place_button')
const placeSelect = document.getElementById('place_select')
const possiblePlaces = []

const nominatim = 'http://nominatim.openstreetmap.org/search/'

////////////////////////////////////////////////////////////
// Basically, i'm going to have to separate input text by
// spaces, then join it by plus marks, then append it to
// the nominatim string and request it with XMLHttpRequest.
// After that I will have to parse the JSON and get the
// coordinates that form the polygon or line or point or
// whatever and make a geojson object from the points. I
// will probably do that with the Turfjs libary.
////////////////////////////////////////////////////////////

// make geojson
// the nomitim seems to bring in almost geojson. the geojson
// is missing a few parts, so it cannot be added to the map
// in it's delivered form.

// make selector buttons
const makeSelectorButtons = (array, container) => {
  container.innerHTML = ''
  array.forEach(p => {
    const btn = document.createElement('button')
    const text = document.createTextNode(p['display_name'])

    console.log(p['geojson']['type'])
    //L.GeoJSON(p['geojson']).addTo(myMap)

    btn.style.fontWeight = 'bold'

    btn.appendChild(text)
    container.appendChild(btn)

    return btn
  })
}


const dataToDiv = (data, div) => {
  div.innerHTML = data
}

const getPlace = url => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onload = () => {
      xhr.readyState === 4 && xhr.status === 200
      ? makeSelectorButtons(JSON.parse(xhr.responseText), placeSelect)
      : console.log(xhr.statusText)
    }
console.log('error')
    xhr.send()
  })
} 

placeButton.addEventListener('click', () => {
  const searchString = `${nominatim}${placeInput.value}?format=json&polygon_geojson=1`
  getPlace(searchString)
})
*/
