$(document).ready(function() {
    let path = window.location.pathname;
    let pageFilename = path.substring(path.lastIndexOf('/') + 1);

    if (pageFilename === "" || pageFilename === "index.html") {
        pageFilename = "index.html";
    }

    // Construct the content file path
    // For index.html, content file is content/content_index.html
    // For OtherPage.html, content file is content/content_OtherPage.html
    let contentFilePath;
    if (pageFilename === "index.html") {
        contentFilePath = "content/content_index.html";
    } else {
        contentFilePath = "content/content_" + pageFilename;
    }

    // Load the content into the #page-content div
    $("#page-content").load(contentFilePath, function(response, status, xhr) {
        if (status === "error") {
            // Display a "Page not found" message if the content file fails to load
            $("#page-content").html("<p>Page not found. The requested content could not be loaded.</p>");
            console.error("Error loading content from: " + contentFilePath + " - " + xhr.status + " " + xhr.statusText);
        }
    });
});
