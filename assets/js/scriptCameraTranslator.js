const camera = document.getElementById('camera'); // Variable of the camera's video
const canvas = document.getElementById('canvas'); // Vaiable of the canvas that we create to show the stream

const constraints = { // Parameters of the stream
    audio: false, // No audio
    video: { // Video 100% of the media screen
        width: window.innerWidth, height: window.innerHeight 
    }
};

// initialization of the camera zone on screen
async function init() {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleStream(stream);
    let ctx = canvas.getContext('2d');
    ctx.drawImage(camera, 0, 0, window.innerHeight, window.innerWidth);
}

// Function to stream camera
function handleStream(stream) {
    window.stream = stream;
    camera.srcObject = stream;
}

// Initialization at the launch of the page
init();
