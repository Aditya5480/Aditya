// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".hero input[type='text']");

    // Handle Enter key on search input
    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                // Simulate search redirect or alert
                alert(`Searching for: ${query}`);
                // window.location.href = `/search?query=${encodeURIComponent(query)}`;
            }
        }
    });

    // Check if background video fails to load
    const bgVideo = document.getElementById("bg-video");

    if (bgVideo) {
        bgVideo.onerror = () => {
            console.warn("Background video failed to load. Displaying fallback background.");
            document.body.style.background = "#111 url('../img/fallback.jpg') no-repeat center center fixed";
            document.body.style.backgroundSize = "cover";
        };
    }
});
