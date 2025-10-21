"use strict";

const downloadCvButton = document.getElementById("download-cv-button");

downloadCvButton.addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "assets/NGUYEN NGOC DUONG - Full-Stack Web Developer.pdf";
    link.download = "NGUYEN NGOC DUONG - Full-Stack Web Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});