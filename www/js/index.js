document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    document.addEventListener("pause", onPause, false);
    document.addEventListener("resume", onResume, false);
    document.addEventListener("menubutton", onMenuKeyDown, false);
    document.addEventListener("backbutton", onbackbutton, false);
    document.addEventListener("volumedownbutton", onvolumedownbutton, false);
    document.addEventListener("volumeupbutton", onvolumeupbutton, false);
    document.addEventListener("searchbutton", onsearchbutton, false);
    // Add similar listeners for other events
}

function onPause() {
    // Handle the pause event
}

function onResume() {
    // Handle the resume event
}

function onMenuKeyDown() {
    // Handle the menubutton event
}

function onbackbutton() {
    // Handle the backbutton event
}

function onvolumedownbutton() {
    // Handle the volumedownbutton event
}

function onvolumeupbutton() {
    // Handle the volumeupbutton event
}

function onsearchbutton() {
    // Handle the searchbutton event
}

// listen for uncaught cordova callback errors
window.addEventListener("cordovacallbackerror", function (event) {
    // event.error contains the original error object
});




