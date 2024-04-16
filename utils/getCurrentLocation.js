export async function getCurrentLocation(){
  const options = {
    enableHighAccuracy: true, // Request high accuracy using GPS
    timeout: 5000, // Timeout for getting the location (milliseconds)
    maximumAge: 0 // Maximum age of cached position (milliseconds)
};
    const position = navigator.geolocation.getCurrentPosition(success,failed,options)
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