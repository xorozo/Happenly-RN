export default {
    syncCurrentPosition: function (props) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                global.my_location = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                };
                props.spinner = false;
                console.log('=====>>>>>', global.my_location);
            },
            (error) => {
                global.my_location = {
                    latitude: null,
                    longitude: null,
                    error: error.message,
                };
                props.spinner = false;
                console.log('=====>>>>>', global.my_location);
            },
            {
                enableHighAccuracy: false,
                timeout: 200000,
                maximumAge: 1000
            }
        );
    }
}