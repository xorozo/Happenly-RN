export default {
    syncCurrentPosition: function () {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                global.my_location = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                };
            },
            (error) => {
                global.my_location = {
                    latitude: null,
                    longitude: null,
                    error: error.message,
                };
            },
            {
                enableHighAccuracy: false,
                timeout: 200000,
                maximumAge: 1000
            }
        );
    }
}