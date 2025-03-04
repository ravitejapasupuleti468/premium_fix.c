document.getElementById("saveLocationBtn").addEventListener("click", function() {
    const location = document.getElementById("locationInput").value;
    if (location) {
        document.getElementById("locationText").innerText = location;
        alert("Location saved: " + location);
    } else {
        alert("Please enter a location.");
    }
});
