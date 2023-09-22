// Initialize Prism.js for syntax highlighting
Prism.highlightAll();

// JavaScript function to copy the code
function copyCode() {
    /* Get the code element */
    const codeElement = document.getElementById("api-code");

    /* Create a text area to hold the code */
    const textArea = document.createElement("textarea");
    textArea.value = codeElement.textContent;

    /* Append the text area to the document */
    document.body.appendChild(textArea);

    /* Select the code in the text area */
    textArea.select();
    document.execCommand("copy");

    /* Remove the temporary text area */
    document.body.removeChild(textArea);

    /* Change the button text to indicate success */
    const copyButton = document.querySelector(".btn-copy");
    copyButton.textContent = "Copied!";
}