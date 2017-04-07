// nominatim string
const nominatim = 'http://nominatim.openstreetmap.org/search/'

// make geojson
// this is lifted from http://nominatim.openstreetmap.org/js/nominatim-ui.js
// normalize places the geometry into a featurecollection, similar to
// https://github.com/mapbox/geojson-normalize
const normalizeGeojson = obj => {
return {
           type: "FeatureCollection",
           features: [
               {
                   type: "Feature",
                   geometry: obj,
                   properties: {}
               }
           ]
      }

}

// make a couple buttons and an input in the 'enom' div
/*
var appendToDiv = function(text, div) {
  // append text to text node
  var t = document.createTextNode(text)

  // append child to div
  div.appendChild(t)
}
*/

// there's probably a fancier way to do this.
const makeButtonsAndInput = (divId) => {
  // get div to put things in
  const div = document.getElementById(divId)

  const placeInput = document.createElement('input')
  const placeButton = document.createElement('input')
  const p = document.createElement('p')
  const selector = document.createElement('select')
  const selectButton = document.createElement('input')

  placeInput.type = 'text'
  placeInput.id = 'place_input'

  placeButton.type = 'submit'
  placeButton.id = 'place_button'

  selector.id = 'selector'

  selectButton.type = 'submit'
  selectButton.id = 'select_button'

  p.appendChild(selector)
  p.appendChild(selectButton)

  const arr = [placeInput, placeButton, p]

  arr.forEach(i => div.appendChild(i))
}

// makeButtonsAndInput('enom')
// this export thing breaks the browser support (which is what i want)
// export {normalizeGeojson, nominatim, makeButtonsAndInput}

// if this is here, I shouldn't need browserify.
if(typeof exports !== 'undefined') {
//  exports.appendToDiv = appendToDiv;
  exports.normalizeGeojson = normalizeGeojson;
  exports.nominatim = nominatim;
  exports.makeButtonsAndInput = makeButtonsAndInput;
}
