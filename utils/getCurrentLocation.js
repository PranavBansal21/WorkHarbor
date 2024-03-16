export async function getCurrentLocation(){
    const position = navigator.geolocation.getCurrentPosition(success,failed)
}
async function success(position){
    const reverseGeocodingUrl = `https://api.geoapify.com/v1/geocode/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&apiKey=${process.env.NEXT_PUBLIC_MAP_API_KEY}`;
    fetch(reverseGeocodingUrl).then(result => result.json())
      .then(featureCollection => {
        console.log(featureCollection.features[0].properties);
      });
}
function failed(){
    console.log("Failed to get Location");
}